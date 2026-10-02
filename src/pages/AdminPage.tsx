import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Shield,
  Key,
  Eye,
  EyeOff,
  LogOut,
  CheckCircle,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  Plus,
  Trash2,
  Phone,
  Mail,
  ExternalLink,
  Download,
  User,
  Calendar,
  FileText,
  Check,
  X,
  Settings,
  LayoutDashboard,
  Briefcase,
  Sparkles,
  MapPin,
  RefreshCw,
  MessageCircle,
} from 'lucide-react';
import {
  AdminSession,
  getAdminSession,
  loginWithCredentials,
  logoutAdmin,
  getFailedAttemptsInfo,
  updateAdminCredentials,
} from '../data/adminAuth';
import {
  Inquiry,
  getInquiries,
  updateInquiryStatus,
  addInquiryNote,
  deleteInquiry,
  saveNewInquiry,
  exportInquiriesToCSV,
} from '../data/inquiriesStore';
import { PROJECTS_DATA } from '../data/projectsData';
import { MOODBOARDS_DATA } from '../data/moodboardsData';
import { LOGO_URL } from '../components/Navbar';
import { AdminReferrals } from '../components/AdminReferrals';

export const AdminPage: React.FC = () => {
  // Session State
  const [session, setSession] = useState<AdminSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Login Form State
  const [username, setUsername] = useState('Mansi@opalinterior.in');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [lockoutRemaining, setLockoutRemaining] = useState(0);

  // Admin Dashboard State
  const [activeTab, setActiveTab] = useState<'overview' | 'inquiries' | 'referrals' | 'projects' | 'moodboards' | 'settings'>('overview');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [newNoteText, setNewNoteText] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Client Form
  const [newClient, setNewClient] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Interior Architecture & Design',
    budget: '₹ 25 Lakhs - 50 Lakhs',
    location: '',
    message: '',
  });

  // Settings State
  const [newPasscode, setNewPasscode] = useState('');
  const [settingsSuccess, setSettingsSuccess] = useState('');

  // Initial Load
  useEffect(() => {
    const currentSession = getAdminSession();
    setSession(currentSession);
    if (currentSession) {
      setInquiries(getInquiries());
    }
    setLoading(false);

    // Check lockout timer
    const attempts = getFailedAttemptsInfo();
    if (attempts.lockUntil > Date.now()) {
      setLockoutRemaining(Math.ceil((attempts.lockUntil - Date.now()) / 1000));
    }
  }, []);

  // Lockout countdown timer
  useEffect(() => {
    if (lockoutRemaining <= 0) return;
    const interval = setInterval(() => {
      setLockoutRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setLoginError('');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutRemaining]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const res = await loginWithCredentials(username, password, rememberMe);
    if (res.success && res.session) {
      setSession(res.session);
      setInquiries(getInquiries());
      setPassword('');
    } else {
      setLoginError(res.error || 'Authentication failed');
      const attempts = getFailedAttemptsInfo();
      if (attempts.lockUntil > Date.now()) {
        setLockoutRemaining(Math.ceil((attempts.lockUntil - Date.now()) / 1000));
      }
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setSession(null);
    setSelectedInquiry(null);
  };

  const handleStatusChange = (id: string, newStatus: Inquiry['status']) => {
    const updated = updateInquiryStatus(id, newStatus);
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
  };

  const handleAddNote = (id: string) => {
    if (!newNoteText.trim()) return;
    const updated = addInquiryNote(id, newNoteText.trim());
    setInquiries(updated);
    if (selectedInquiry && selectedInquiry.id === id) {
      const currentNotes = selectedInquiry.notes || [];
      setSelectedInquiry({ ...selectedInquiry, notes: [...currentNotes, newNoteText.trim()] });
    }
    setNewNoteText('');
  };

  const handleDeleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to remove this client inquiry?')) {
      const updated = deleteInquiry(id);
      setInquiries(updated);
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name || !newClient.phone) return;
    const created = saveNewInquiry(newClient);
    setInquiries([created, ...inquiries]);
    setShowAddModal(false);
    setNewClient({
      name: '',
      email: '',
      phone: '',
      service: 'Interior Architecture & Design',
      budget: '₹ 25 Lakhs - 50 Lakhs',
      location: '',
      message: '',
    });
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPasscode) {
      await updateAdminCredentials(newPasscode);
      setSettingsSuccess('Security passkeys updated successfully.');
      setNewPasscode('');
      setTimeout(() => setSettingsSuccess(''), 4000);
    }
  };

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = statusFilter === 'All' || inq.status === statusFilter;
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      (inq.location && inq.location.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const newLeadsCount = inquiries.filter((i) => i.status === 'New').length;
  const activeProjectsCount = PROJECTS_DATA.length;
  const moodboardsCount = MOODBOARDS_DATA.length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#10131A] flex items-center justify-center text-white">
        <RefreshCw className="animate-spin text-[#C99933]" size={36} />
      </div>
    );
  }

  // ==========================================
  // 1. UNAUTHENTICATED: SECURE LOGIN SCREEN
  // ==========================================
  if (!session) {
    return (
      <div className="min-h-screen bg-[#0E1118] text-slate-100 flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C99933]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-md">
          {/* Studio Crest */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-[#1A1612] border-2 border-[#C99933] shadow-2xl p-1 mb-4 flex items-center justify-center">
              <img src={LOGO_URL} alt="Opal Interior" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#C99933] font-semibold block">
              Administrative Control Console
            </span>
            <h1 className="text-3xl font-serif font-bold text-white mt-1">
              OPAL <span className="text-[#C99933]">INTERIOR</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Mansi Sharma (Principal Designer) &amp; Pushapraj Sharma (Partner)
            </p>
          </div>

          {/* Secure Login Card */}
          <div className="bg-[#151922] border border-[#C99933]/30 rounded-2xl p-8 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-sm text-[#C99933] font-semibold">
                <Shield size={18} />
                <span>Restricted Access Portal</span>
              </div>
              <span className="text-[10px] bg-[#C99933]/15 text-[#FFEFA2] border border-[#C99933]/30 px-2 py-0.5 rounded-full font-mono">
                AES-256 Auth
              </span>
            </div>

            {loginError && (
              <div className="mb-6 p-3 bg-red-950/60 border border-red-500/50 rounded-lg text-red-200 text-xs flex items-center gap-2">
                <AlertTriangle size={16} className="text-red-400 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            {lockoutRemaining > 0 ? (
              <div className="p-6 bg-red-950/30 border border-red-500/40 rounded-xl text-center">
                <Lock size={32} className="text-red-400 mx-auto mb-2 animate-bounce" />
                <h3 className="text-sm font-semibold text-white">Console Temporarily Locked</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Too many incorrect authentication attempts.
                </p>
                <div className="text-2xl font-mono font-bold text-[#FFEFA2] mt-3">
                  00:{lockoutRemaining < 10 ? `0${lockoutRemaining}` : lockoutRemaining}
                </div>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Studio Username / Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Mansi@opalinterior.in"
                      className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors"
                    />
                    <User size={16} className="absolute right-3.5 top-3.5 text-slate-500" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-medium">
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white text-sm rounded-lg px-4 py-3 outline-none transition-colors font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-slate-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded border-white/20 bg-slate-800 text-[#C99933] focus:ring-[#C99933]"
                    />
                    <span>Keep session active</span>
                  </label>
                  <span className="text-[11px] text-[#C99933]">Mumbai HQ</span>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-[#C99933] hover:bg-[#b08328] text-white font-sans font-semibold py-3.5 rounded-lg text-sm tracking-wider uppercase shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Key size={16} />
                  <span>Unlock Admin Console</span>
                </button>
              </form>
            )}

          </div>

          {/* Back to Public Site */}
          <div className="text-center mt-6">
            <Link to="/" className="text-xs text-slate-400 hover:text-[#C99933] transition-colors inline-flex items-center gap-1.5">
              <span>&larr; Return to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. AUTHENTICATED: ADMIN CONSOLE INTERFACE
  // ==========================================
  return (
    <div className="min-h-screen bg-[#0E1118] text-slate-100 flex flex-col font-sans">
      {/* Top Admin Navigation Header */}
      <header className="bg-[#151922] border-b border-[#C99933]/30 sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1350px] mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Studio Brand Crest */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1A1612] border border-[#C99933] p-0.5 flex items-center justify-center shrink-0">
              <img src={LOGO_URL} alt="Opal Interior" className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg text-white tracking-wide">
                  OPAL <span className="text-[#C99933]">INTERIOR</span>
                </span>
                <span className="bg-[#C99933]/20 text-[#FFEFA2] text-[10px] font-mono px-2 py-0.5 rounded border border-[#C99933]/40">
                  ADMIN
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                Executive Control System • Mumbai, India
              </p>
            </div>
          </div>

          {/* User Profile & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs bg-black/30 border border-white/10 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-slate-300 font-medium">{session.user}</span>
              <span className="text-[10px] text-[#C99933] border-l border-white/20 pl-2">
                {session.role}
              </span>
            </div>

            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-300 hover:text-[#C99933] flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>Live Site</span>
              <ExternalLink size={14} />
            </Link>

            <button
              onClick={handleLogout}
              className="text-xs bg-red-950/60 hover:bg-red-900 border border-red-500/40 text-red-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-[1350px] mx-auto px-4 flex items-center gap-1 overflow-x-auto no-scrollbar border-t border-white/5 pt-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#C99933] text-[#FFEFA2] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <LayoutDashboard size={15} />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap relative ${
              activeTab === 'inquiries'
                ? 'border-[#C99933] text-[#FFEFA2] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Mail size={15} />
            <span>Client Inquiries</span>
            {newLeadsCount > 0 && (
              <span className="bg-[#C99933] text-[#1A1612] text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {newLeadsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('referrals')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b-2 whitespace-nowrap ${activeTab === 'referrals' ? 'border-[#C99933] text-[#FFEFA2] bg-white/5' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <User size={15} /><span>Referrals</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-[#C99933] text-[#FFEFA2] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase size={15} />
            <span>Portfolio ({activeProjectsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('moodboards')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'moodboards'
                ? 'border-[#C99933] text-[#FFEFA2] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles size={15} />
            <span>3D Moodboards ({moodboardsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'settings'
                ? 'border-[#C99933] text-[#FFEFA2] bg-white/5'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Settings size={15} />
            <span>Security &amp; Studio</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1350px] mx-auto w-full px-4 py-8 flex-grow">
        {activeTab === 'referrals' && <AdminReferrals />}
        {/* ===================================== */}
        {/* TAB 1: OVERVIEW DASHBOARD */}
        {/* ===================================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Top Welcome Banner */}
            <div className="bg-gradient-to-r from-[#171C26] via-[#1A202C] to-[#121620] border border-[#C99933]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#C99933] font-semibold block mb-1">
                  Executive Studio Overview
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  Welcome back, <span className="text-[#C99933]">{session.user}</span>
                </h2>
                <p className="text-xs md:text-sm text-slate-300 mt-1 max-w-xl">
                  Monitoring client consultations, turnkey residential inquiries, and active 3D architectural specifications for OPAL INTERIOR.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-[#C99933] hover:bg-[#b08328] text-white px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all"
                >
                  <Plus size={16} />
                  <span>New Client Entry</span>
                </button>
                <button
                  onClick={exportInquiriesToCSV}
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-all"
                >
                  <Download size={16} />
                  <span>Export Leads</span>
                </button>
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Card 1: Total Leads */}
              <div className="bg-[#151922] border border-white/10 rounded-xl p-5 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Total Inquiries</span>
                  <div className="w-8 h-8 rounded-lg bg-[#C99933]/20 text-[#C99933] flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                </div>
                <div className="text-3xl font-serif font-bold text-white">{inquiries.length}</div>
                <div className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
                  <CheckCircle size={12} />
                  <span>{newLeadsCount} awaiting first response</span>
                </div>
              </div>

              {/* Card 2: Active Pipeline */}
              <div className="bg-[#151922] border border-white/10 rounded-xl p-5 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Site Visits / Proposals</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Clock size={16} />
                  </div>
                </div>
                <div className="text-3xl font-serif font-bold text-white">
                  {inquiries.filter((i) => i.status === 'Site Visit' || i.status === 'Proposal Sent').length}
                </div>
                <div className="text-[11px] text-slate-400 mt-2">Active conversion pipeline</div>
              </div>

              {/* Card 3: Showcase Projects */}
              <div className="bg-[#151922] border border-white/10 rounded-xl p-5 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Portfolio Projects</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Briefcase size={16} />
                  </div>
                </div>
                <div className="text-3xl font-serif font-bold text-white">{activeProjectsCount}</div>
                <div className="text-[11px] text-slate-400 mt-2">Worli, Bandra, Juhu, Thane, Navi Mumbai</div>
              </div>

              {/* Card 4: Moodboard Boards */}
              <div className="bg-[#151922] border border-white/10 rounded-xl p-5 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">3D Moodboards</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center">
                    <Sparkles size={16} />
                  </div>
                </div>
                <div className="text-3xl font-serif font-bold text-white">{moodboardsCount}</div>
                <div className="text-[11px] text-[#FFEFA2] mt-2">Interactive Material Boards</div>
              </div>
            </div>

            {/* Quick Recent Inquiries Preview */}
            <div className="bg-[#151922] border border-white/10 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-white">Recent Client Inquiries</h3>
                  <p className="text-xs text-slate-400">Direct inquiries received via website contact form</p>
                </div>
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className="text-xs text-[#C99933] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>View All Inquiries</span>
                  <span>&rarr;</span>
                </button>
              </div>

              <div className="divide-y divide-white/5">
                {inquiries.slice(0, 4).map((inq) => (
                  <div key={inq.id} className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1A1612] border border-[#C99933]/50 text-[#C99933] flex items-center justify-center font-bold text-xs shrink-0">
                        {inq.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm text-white">{inq.name}</h4>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                              inq.status === 'New'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : inq.status === 'Site Visit'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : inq.status === 'Converted'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-700/50 text-slate-300'
                            }`}
                          >
                            {inq.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {inq.service} • <span className="text-[#C99933] font-medium">{inq.budget}</span>
                          {inq.location ? ` • ${inq.location}` : ''}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://api.whatsapp.com/send?phone=${inq.phone.replace(/[^0-9]/g, '')}&text=Hello%20${encodeURIComponent(
                          inq.name
                        )}%2C%20greetings%20from%20Opal%20Interior%20(Mansi%20Sharma%20%26%20Pushapraj%20Sharma).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={14} />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                      <a
                        href={`tel:${inq.phone}`}
                        className="p-2 bg-blue-950/60 hover:bg-blue-900 border border-blue-500/40 text-blue-300 rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                        title="Call Client"
                      >
                        <Phone size={14} />
                        <span className="hidden sm:inline">Call</span>
                      </a>
                      <button
                        onClick={() => {
                          setSelectedInquiry(inq);
                          setActiveTab('inquiries');
                        }}
                        className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs text-white rounded-lg transition-colors"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================================== */}
        {/* TAB 2: INQUIRIES & LEAD MANAGEMENT */}
        {/* ===================================== */}
        {activeTab === 'inquiries' && (
          <div className="space-y-6">
            {/* Header with Search & Filter controls */}
            <div className="bg-[#151922] border border-white/10 rounded-2xl p-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-grow sm:w-80">
                  <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by client name, email, phone, location..."
                    className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white text-xs rounded-lg pl-10 pr-4 py-2.5 outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-slate-400 hover:text-white"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-[#C99933] shrink-0" />
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white text-xs rounded-lg px-3 py-2.5 outline-none"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="In Discussion">In Discussion</option>
                    <option value="Site Visit">Site Visit</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Converted">Converted</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="bg-[#C99933] hover:bg-[#b08328] text-white px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-md transition-all"
                >
                  <Plus size={16} />
                  <span>Add Lead</span>
                </button>
                <button
                  onClick={exportInquiriesToCSV}
                  className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all border border-white/10"
                >
                  <Download size={16} />
                  <span>CSV Export</span>
                </button>
              </div>
            </div>

            {/* Inquiries Table Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left: Table List */}
              <div className={`${selectedInquiry ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                <div className="bg-[#151922] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#0D1017] text-slate-400 uppercase tracking-wider font-medium border-b border-white/10">
                        <tr>
                          <th className="p-4">Client Name</th>
                          <th className="p-4">Service &amp; Budget</th>
                          <th className="p-4">Status</th>
                          <th className="p-4">Date</th>
                          <th className="p-4 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {filteredInquiries.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="p-8 text-center text-slate-500">
                              No inquiries found matching your filter criteria.
                            </td>
                          </tr>
                        ) : (
                          filteredInquiries.map((inq) => (
                            <tr
                              key={inq.id}
                              onClick={() => setSelectedInquiry(inq)}
                              className={`cursor-pointer transition-colors ${
                                selectedInquiry?.id === inq.id ? 'bg-[#C99933]/15' : 'hover:bg-white/5'
                              }`}
                            >
                              <td className="p-4">
                                <div className="font-semibold text-white text-sm">{inq.name}</div>
                                <div className="text-[11px] text-slate-400 mt-0.5">{inq.phone}</div>
                                <div className="text-[10px] text-slate-500 truncate max-w-[180px]">{inq.email}</div>
                              </td>

                              <td className="p-4">
                                <div className="text-slate-200">{inq.service}</div>
                                <div className="text-[#C99933] font-medium text-[11px] mt-0.5">{inq.budget}</div>
                                {inq.location && (
                                  <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                                    <MapPin size={10} />
                                    <span>{inq.location}</span>
                                  </div>
                                )}
                              </td>

                              <td className="p-4" onClick={(e) => e.stopPropagation()}>
                                <select
                                  value={inq.status}
                                  onChange={(e) => handleStatusChange(inq.id, e.target.value as Inquiry['status'])}
                                  className={`text-xs px-2.5 py-1 rounded-full font-medium border outline-none cursor-pointer ${
                                    inq.status === 'New'
                                      ? 'bg-amber-950/60 text-amber-300 border-amber-500/40'
                                      : inq.status === 'Site Visit'
                                      ? 'bg-blue-950/60 text-blue-300 border-blue-500/40'
                                      : inq.status === 'Converted'
                                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40'
                                      : 'bg-slate-800 text-slate-300 border-slate-700'
                                  }`}
                                >
                                  <option value="New">New</option>
                                  <option value="In Discussion">In Discussion</option>
                                  <option value="Site Visit">Site Visit</option>
                                  <option value="Proposal Sent">Proposal Sent</option>
                                  <option value="Converted">Converted</option>
                                  <option value="Archived">Archived</option>
                                </select>
                              </td>

                              <td className="p-4 text-slate-400 text-[11px] whitespace-nowrap">
                                {new Date(inq.createdAt).toLocaleDateString('en-IN', {
                                  day: '2-digit',
                                  month: 'short',
                                })}
                              </td>

                              <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center justify-end gap-1.5">
                                  <a
                                    href={`https://api.whatsapp.com/send?phone=${inq.phone.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 text-emerald-400 hover:bg-emerald-950/40 rounded transition-colors"
                                    title="WhatsApp Client"
                                  >
                                    <MessageCircle size={15} />
                                  </a>
                                  <a
                                    href={`tel:${inq.phone}`}
                                    className="p-1.5 text-blue-400 hover:bg-blue-950/40 rounded transition-colors"
                                    title="Call Client"
                                  >
                                    <Phone size={15} />
                                  </a>
                                  <button
                                    onClick={() => handleDeleteInquiry(inq.id)}
                                    className="p-1.5 text-red-400 hover:bg-red-950/40 rounded transition-colors"
                                    title="Delete"
                                  >
                                    <Trash2 size={15} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right: Selected Inquiry Detail Panel */}
              {selectedInquiry && (
                <div className="lg:col-span-5 bg-[#151922] border border-[#C99933]/40 rounded-2xl p-6 shadow-2xl space-y-6 sticky top-24">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#C99933]">Lead Dossier #{selectedInquiry.id}</span>
                      <h3 className="text-xl font-serif font-bold text-white mt-0.5">{selectedInquiry.name}</h3>
                    </div>
                    <button
                      onClick={() => setSelectedInquiry(null)}
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${selectedInquiry.phone}`}
                      className="p-3 bg-blue-950/60 border border-blue-500/40 hover:bg-blue-900 text-blue-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
                    >
                      <Phone size={16} />
                      <span>{selectedInquiry.phone}</span>
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?phone=${selectedInquiry.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900 text-emerald-200 rounded-xl flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp Lead</span>
                    </a>
                  </div>

                  {/* Detailed Specs */}
                  <div className="space-y-3 bg-[#0D1017] p-4 rounded-xl border border-white/5 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Email Address</span>
                      <a href={`mailto:${selectedInquiry.email}`} className="text-[#C99933] hover:underline font-medium">
                        {selectedInquiry.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Service Scope</span>
                      <span className="text-white">{selectedInquiry.service}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Estimated Budget</span>
                      <span className="text-[#FFEFA2] font-semibold">{selectedInquiry.budget}</span>
                    </div>
                    {selectedInquiry.location && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Property Location</span>
                        <span className="text-slate-200">{selectedInquiry.location}</span>
                      </div>
                    )}
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-semibold">Client Brief / Message</span>
                      <p className="text-slate-300 mt-1 leading-relaxed bg-black/40 p-3 rounded-lg border border-white/5 italic">
                        "{selectedInquiry.message}"
                      </p>
                    </div>
                  </div>

                  {/* Internal Studio Notes */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Internal Studio Notes ({selectedInquiry.notes?.length || 0})
                    </h4>
                    <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                      {selectedInquiry.notes?.map((note, idx) => (
                        <div key={idx} className="text-xs bg-white/5 p-2.5 rounded-lg border border-white/10 text-slate-300">
                          {note}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <input
                        type="text"
                        value={newNoteText}
                        onChange={(e) => setNewNoteText(e.target.value)}
                        placeholder="Add note (e.g. site visit schedule)..."
                        className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white text-xs rounded-lg px-3 py-2 outline-none"
                      />
                      <button
                        onClick={() => handleAddNote(selectedInquiry.id)}
                        className="bg-[#C99933] text-white px-3 py-2 rounded-lg text-xs font-semibold shrink-0 hover:bg-[#b08328]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ===================================== */}
        {/* TAB 3: PROJECTS PORTFOLIO */}
        {/* ===================================== */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="bg-[#151922] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">OPAL INTERIOR Portfolio</h3>
                <p className="text-xs text-slate-400">Total {PROJECTS_DATA.length} private residences &amp; corporate spaces documented</p>
              </div>
              <Link to="/work" target="_blank" className="btnGoldOutline text-xs py-2 px-4">
                View Public Work &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="bg-[#151922] border border-white/10 rounded-xl overflow-hidden shadow-lg group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A1612]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-[#FFEFA2] border border-[#C99933]/40">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] text-[#C99933] uppercase tracking-widest font-semibold block mb-1">
                      {proj.location}
                    </span>
                    <h4 className="text-base font-serif font-bold text-white mb-2">{proj.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{proj.description}</p>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                      <span>Area: {proj.area}</span>
                      <Link to={`/work/${proj.slug}`} target="_blank" className="text-[#C99933] hover:underline flex items-center gap-1">
                        <span>Details</span>
                        <ExternalLink size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================== */}
        {/* TAB 4: MOODBOARDS & SPECIFICATION SHEETS */}
        {/* ===================================== */}
        {activeTab === 'moodboards' && (
          <div className="space-y-6">
            <div className="bg-[#151922] border border-white/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">Interactive 3D Moodboards</h3>
                <p className="text-xs text-slate-400">
                  {MOODBOARDS_DATA.length} architectural specification sheets active on Home &amp; Services pages
                </p>
              </div>
              <Link to="/services" target="_blank" className="btnGoldOutline text-xs py-2 px-4">
                View on Website &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOODBOARDS_DATA.map((board) => (
                <div key={board.id} className="bg-[#151922] border border-white/10 rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-[#C99933]">{board.subtitle}</span>
                      <h4 className="text-lg font-serif font-bold text-white mt-1">{board.roomTitle}</h4>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono">
                      LIVE
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed italic">{board.styleDesc}</p>

                  {/* Palette Preview */}
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block mb-1.5">
                      Colour Palette
                    </span>
                    <div className="flex items-center gap-2">
                      {board.colorPalette.map((col, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1">
                          <div
                            className="w-7 h-7 rounded-md border border-white/20 shadow-sm"
                            style={{ backgroundColor: col.hex }}
                            title={`${col.name} (${col.hex})`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Materials & Key Furniture summary */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>{board.materials.length} Materials Spec</span>
                    <span>{board.keyElements.length} Furniture Elements</span>
                    <span className="text-[#C99933] font-medium">{board.completedProjectTag || 'Mumbai Project'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================================== */}
        {/* TAB 5: SECURITY & STUDIO SETTINGS */}
        {/* ===================================== */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="bg-[#151922] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-white/10">
                <Shield size={24} className="text-[#C99933]" />
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">Security &amp; Passkey Control</h3>
                  <p className="text-xs text-slate-400">Configure administrative access credentials for Mansi &amp; Pushapraj</p>
                </div>
              </div>

              {settingsSuccess && (
                <div className="mb-6 p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-lg text-emerald-200 text-xs flex items-center gap-2">
                  <Check size={16} />
                  <span>{settingsSuccess}</span>
                </div>
              )}

              <form onSubmit={handleSaveSettings} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-medium">
                    New Master Passcode
                  </label>
                  <input
                    type="password"
                    value={newPasscode}
                    onChange={(e) => setNewPasscode(e.target.value)}
                    placeholder="Enter new master passkey (e.g. OpalStudio2026#)"
                    className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white text-xs rounded-lg px-4 py-3 outline-none"
                  />
                </div>


                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#C99933] hover:bg-[#b08328] text-white px-5 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Update Security Passkeys
                  </button>
                </div>
              </form>
            </div>

            {/* Studio Identity Information Card */}
            <div className="bg-[#151922] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
              <h4 className="text-base font-serif font-bold text-white mb-4">Official Studio Credentials</h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Principal Designer:</span>
                  <span className="font-semibold text-white">Mansi Sharma</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Partner:</span>
                  <span className="font-semibold text-white">Pushapraj Sharma</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Direct Phone:</span>
                  <span className="font-mono text-[#C99933]">+91 7400260508</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-400">Official Email:</span>
                  <span className="text-white">Opalinterior05@gmail.com</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Headquarters:</span>
                  <span className="text-right max-w-xs text-slate-300">
                    Bhayandar East, Thane- 401105, Mumbai Metropolitan Region
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===================================== */}
      {/* MODAL: ADD MANUAL CLIENT LEAD */}
      {/* ===================================== */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#151922] border border-[#C99933]/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-lg font-serif font-bold text-white">New Client Inquiry Record</h3>
              <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateClient} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Client Full Name *</label>
                <input
                  type="text"
                  required
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  placeholder="e.g. Ritesh &amp; Sunita Shah"
                  className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Phone Number *</label>
                  <input
                    type="text"
                    required
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    placeholder="+91 98200 XXXXX"
                    className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={newClient.email}
                    onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    placeholder="client@gmail.com"
                    className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">Service Type</label>
                  <select
                    value={newClient.service}
                    onChange={(e) => setNewClient({ ...newClient, service: e.target.value })}
                    className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none"
                  >
                    <option value="Interior Architecture & Design">Interior Architecture &amp; Design</option>
                    <option value="Complete Home Transformation">Complete Home Transformation</option>
                    <option value="Modular Kitchen & Sacred Sanctums">Modular Kitchen &amp; Sacred Sanctums</option>
                    <option value="Bespoke Furniture & Styling">Bespoke Furniture &amp; Styling</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Estimated Budget</label>
                  <select
                    value={newClient.budget}
                    onChange={(e) => setNewClient({ ...newClient, budget: e.target.value })}
                    className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none"
                  >
                    <option value="₹ 15 Lakhs - 25 Lakhs">₹ 15 Lakhs - 25 Lakhs</option>
                    <option value="₹ 25 Lakhs - 50 Lakhs">₹ 25 Lakhs - 50 Lakhs</option>
                    <option value="₹ 50 Lakhs - 1 Crore">₹ 50 Lakhs - 1 Crore</option>
                    <option value="Above ₹ 1 Crore">Above ₹ 1 Crore</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Property Location / City</label>
                <input
                  type="text"
                  value={newClient.location}
                  onChange={(e) => setNewClient({ ...newClient, location: e.target.value })}
                  placeholder="e.g. Palm Beach Road, Navi Mumbai"
                  className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Initial Project Requirements</label>
                <textarea
                  rows={3}
                  value={newClient.message}
                  onChange={(e) => setNewClient({ ...newClient, message: e.target.value })}
                  placeholder="Project scope, client preferences, timeline..."
                  className="w-full bg-[#0D1017] border border-white/15 focus:border-[#C99933] text-white p-2.5 rounded-lg outline-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-lg text-slate-300 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#C99933] hover:bg-[#b08328] text-white font-semibold rounded-lg shadow-md"
                >
                  Save Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
