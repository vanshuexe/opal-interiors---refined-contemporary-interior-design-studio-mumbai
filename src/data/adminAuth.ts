export interface AdminSession {
  user: string;
  role: 'Principal Designer' | 'Partner' | 'Administrator';
  loginTime: number;
  expiresAt: number;
  token: string;
}

const AUTH_KEY = 'opal_admin_session';
const CREDS_KEY = 'opal_admin_credentials';
const ATTEMPTS_KEY = 'opal_admin_failed_attempts';

interface StoredCredentials {
  allowedUsers: { username: string; name: string; role: 'Principal Designer' | 'Partner' | 'Administrator' }[];
  passcodeHash: string; // Stored passkey
  quickPin: string; // 4-digit quick pin
}

const DEFAULT_CREDS: StoredCredentials = {
  allowedUsers: [
    { username: 'mansi@opalinteriors.in', name: 'Mansi Sharma', role: 'Principal Designer' },
    { username: 'pushapraj@opalinteriors.in', name: 'Pushapraj Sharma', role: 'Partner' },
    { username: 'admin@opalinteriors.in', name: 'Studio Administrator', role: 'Administrator' },
  ],
  passcodeHash: 'OpalStudio2019#',
  quickPin: '2019',
};

export const getAdminCredentials = (): StoredCredentials => {
  try {
    const raw = localStorage.getItem(CREDS_KEY);
    if (!raw) {
      localStorage.setItem(CREDS_KEY, JSON.stringify(DEFAULT_CREDS));
      return DEFAULT_CREDS;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_CREDS;
  }
};

export const updateAdminCredentials = (newPasscode?: string, newPin?: string) => {
  const current = getAdminCredentials();
  if (newPasscode) current.passcodeHash = newPasscode;
  if (newPin) current.quickPin = newPin;
  localStorage.setItem(CREDS_KEY, JSON.stringify(current));
};

export const getFailedAttemptsInfo = (): { count: number; lockUntil: number } => {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (!raw) return { count: 0, lockUntil: 0 };
    return JSON.parse(raw);
  } catch {
    return { count: 0, lockUntil: 0 };
  }
};

export const recordFailedAttempt = (): { count: number; lockUntil: number } => {
  const current = getFailedAttemptsInfo();
  const count = current.count + 1;
  let lockUntil = 0;
  if (count >= 5) {
    lockUntil = Date.now() + 60 * 1000; // 60 seconds lock
  }
  const updated = { count, lockUntil };
  localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(updated));
  return updated;
};

export const resetFailedAttempts = () => {
  localStorage.removeItem(ATTEMPTS_KEY);
};

export const getAdminSession = (): AdminSession | null => {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return null;
    const session: AdminSession = JSON.parse(raw);
    if (Date.now() > session.expiresAt) {
      localStorage.removeItem(AUTH_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
};

export const loginWithCredentials = (
  identifier: string,
  secret: string,
  rememberMe: boolean = true
): { success: boolean; error?: string; session?: AdminSession } => {
  const attempts = getFailedAttemptsInfo();
  if (attempts.lockUntil > Date.now()) {
    const remainingSec = Math.ceil((attempts.lockUntil - Date.now()) / 1000);
    return { success: false, error: `Account locked due to too many failed attempts. Try again in ${remainingSec}s.` };
  }

  const creds = getAdminCredentials();
  const trimmedId = identifier.trim().toLowerCase();
  const trimmedSecret = secret.trim();

  // Match username
  const matchedUser = creds.allowedUsers.find(
    (u) => u.username.toLowerCase() === trimmedId || u.name.toLowerCase().includes(trimmedId) || trimmedId === 'admin'
  );

  const isPinMatch = trimmedSecret === creds.quickPin;
  const isPasscodeMatch = trimmedSecret === creds.passcodeHash;

  if (matchedUser && (isPinMatch || isPasscodeMatch)) {
    resetFailedAttempts();
    const durationHours = rememberMe ? 24 : 4;
    const session: AdminSession = {
      user: matchedUser.name,
      role: matchedUser.role,
      loginTime: Date.now(),
      expiresAt: Date.now() + durationHours * 60 * 60 * 1000,
      token: `opal_tok_${Math.random().toString(36).slice(2)}_${Date.now()}`,
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { success: true, session };
  }

  const newAttempts = recordFailedAttempt();
  if (newAttempts.count >= 5) {
    return { success: false, error: 'Too many failed attempts. Console locked for 60 seconds.' };
  }
  return { success: false, error: `Invalid credentials. (${5 - newAttempts.count} attempts remaining)` };
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_KEY);
};
