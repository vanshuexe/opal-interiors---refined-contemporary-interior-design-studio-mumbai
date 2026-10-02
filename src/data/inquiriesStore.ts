export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  status: 'New' | 'In Discussion' | 'Site Visit' | 'Proposal Sent' | 'Converted' | 'Archived';
  createdAt: string;
  location?: string;
  notes?: string[];
}

const STORAGE_KEY = 'opal_interiors_inquiries';

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-101',
    name: 'Vikram & Radhika Singhal',
    email: 'vikram.singhal@rediffmail.com',
    phone: '+91 98201 44521',
    service: 'Interior Architecture & Design',
    budget: '₹ 50 Lakhs - 1 Crore',
    location: 'Worli Sea Face, Mumbai',
    message: 'Looking for complete turnkey interior design for our newly acquired 4BHK duplex penthouse. We loved your Mumbai Duplex moodboard and Italian marble finishes.',
    status: 'New',
    createdAt: '2026-09-30T08:15:00.000Z',
    notes: ['Initial inquiry received via website. High priority client.'],
  },
  {
    id: 'inq-102',
    name: 'Ananya Deshmukh',
    email: 'ananya.deshmukh@gmail.com',
    phone: '+91 98192 33409',
    service: 'Complete Home Transformation',
    budget: '₹ 25 Lakhs - 50 Lakhs',
    location: 'Hiranandani Estate, Thane',
    message: 'We want to remodel our 3BHK flat into a calm, minimalist sanctuary with natural sage green accents and custom Mandir woodwork as shown in your portfolio.',
    status: 'Site Visit',
    createdAt: '2026-09-29T14:40:00.000Z',
    notes: ['Mansi Sharma scheduled initial on-site measurement for Saturday 11 AM.'],
  },
  {
    id: 'inq-103',
    name: 'Karanvir Oberoi',
    email: 'karan.oberoi@creativestudios.in',
    phone: '+91 99308 12890',
    service: 'Bespoke Furniture & Styling',
    budget: '₹ 15 Lakhs - 25 Lakhs',
    location: 'Bandra West, Mumbai',
    message: 'Inquiring for custom modular sofa, solid wood dining table, and acoustic veneer panelling for our duplex studio lounge.',
    status: 'In Discussion',
    createdAt: '2026-09-28T18:20:00.000Z',
    notes: ['Pushapraj Sharma discussed material samples & veneer options over call.'],
  },
  {
    id: 'inq-104',
    name: 'Dr. Sameer & Neha Kulkarni',
    email: 'dr.kulkarni@apollohealth.org',
    phone: '+91 97690 88210',
    service: 'Modular Kitchen & Sacred Sanctums',
    budget: '₹ 25 Lakhs - 50 Lakhs',
    location: 'Seawoods Palm Beach, Navi Mumbai',
    message: 'Require full modular kitchen with island and a traditional carved pooja room sanctum for our upcoming flat.',
    status: 'Proposal Sent',
    createdAt: '2026-09-26T11:00:00.000Z',
    notes: ['3D moodboard specification sent via email. Client reviewing quote.'],
  },
  {
    id: 'inq-105',
    name: 'Siddharth & Priya Merchant',
    email: 'priya.merchant@luxurycorp.com',
    phone: '+91 98210 99843',
    service: 'Interior Architecture & Design',
    budget: 'Above ₹ 1 Crore',
    location: 'Juhu Tara Road, Mumbai',
    message: 'Luxury seaside villa refurbishment. Want bespoke finishes, imported lighting fixtures, and end-to-end design management.',
    status: 'Converted',
    createdAt: '2026-09-22T09:30:00.000Z',
    notes: ['Contract finalized. Site execution commences first week of next month.'],
  },
];

export const getInquiries = (): Inquiry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_INQUIRIES;
  }
};

export const saveNewInquiry = (inquiry: Omit<Inquiry, 'id' | 'createdAt' | 'status'>): Inquiry => {
  const current = getInquiries();
  const newEntry: Inquiry = {
    ...inquiry,
    id: `inq-${Date.now().toString().slice(-5)}`,
    status: 'New',
    createdAt: new Date().toISOString(),
    notes: ['Received through website contact form.'],
  };

  const updated = [newEntry, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save inquiry to localStorage', err);
  }
  return newEntry;
};

export const updateInquiryStatus = (id: string, status: Inquiry['status']): Inquiry[] => {
  const current = getInquiries();
  const updated = current.map((item) => (item.id === id ? { ...item, status } : item));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update inquiry status', err);
  }
  return updated;
};

export const addInquiryNote = (id: string, noteText: string): Inquiry[] => {
  const current = getInquiries();
  const updated = current.map((item) => {
    if (item.id === id) {
      const notes = item.notes ? [...item.notes, noteText] : [noteText];
      return { ...item, notes };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to add inquiry note', err);
  }
  return updated;
};

export const deleteInquiry = (id: string): Inquiry[] => {
  const current = getInquiries();
  const updated = current.filter((item) => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete inquiry', err);
  }
  return updated;
};

export const exportInquiriesToCSV = () => {
  const inquiries = getInquiries();
  const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'Service', 'Budget', 'Location', 'Status', 'Message'];
  const rows = inquiries.map((i) => [
    i.id,
    new Date(i.createdAt).toLocaleDateString(),
    `"${i.name.replace(/"/g, '""')}"`,
    `"${i.phone}"`,
    `"${i.email}"`,
    `"${i.service}"`,
    `"${i.budget}"`,
    `"${(i.location || '').replace(/"/g, '""')}"`,
    i.status,
    `"${i.message.replace(/"/g, '""')}"`,
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `opal_interiors_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
