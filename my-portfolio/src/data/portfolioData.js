import {
  Code2,
  Building2,
  Briefcase,
  Truck,
  Bike,
  Brain,
  Mail,
  Award,
  Layers,
  Smartphone,
  GitBranch,
  Database,
  TestTube,
  FileCode,
  Globe,
  Server,
  ShieldCheck,
  Monitor,
} from 'lucide-react';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPhp,
  SiReact,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiFastapi,
  SiTypescript,
  SiVercel,
  SiPwa,
  SiDotnet,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiRedis,
  SiPython,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiDocker,
  SiSupabase,
  SiGraphql,
  SiVite,
  SiBootstrap,
  SiPrisma,
  SiAndroid,
} from 'react-icons/si';
import { FaAws, FaDatabase, FaFileExcel, FaJava, FaWindows } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';

export const profile = {
  brand: 'CJ',
  name: 'Christian John G. Jimenez',
  role: 'Full-Stack Web & Mobile Developer',
  educationBadge: 'BS Information Technology — Quezon City University',
  badge: 'Available for Full-Time & Freelance • 2026',
  summary:
    'Full-stack web and mobile developer experienced in shipping production POS ecosystems, offline-first PWAs, Flutter apps, and AI-powered web platforms.',
  email: 'jimenezchristianjohngran07@gmail.com',
  phone: '09944966180',
  location: 'Quezon City, Philippines',
  githubUrl: 'https://github.com/cjjimenez-dev',
  linkedinUrl: 'https://www.linkedin.com/in/jimenez-christian-john-b38b1b3a7',
  resumeUrl: '/resume.pdf',
};

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

export const heroStats = [
  { label: 'Years of Study', value: '4+', sub: 'BSIT at QCU' },
  { label: 'Shipped Systems', value: '5', sub: 'POS, Mobile & SaaS' },
  { label: 'Tech & Gov Roles', value: '3', sub: 'Private & Public' },
  { label: 'Availability', value: 'Open', sub: 'Full-Time & Remote' },
];

export const techStack = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20 hover:shadow-cyan-500/20' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20 hover:shadow-blue-500/20' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20 hover:shadow-sky-500/20' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20 hover:shadow-yellow-500/20' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20 hover:shadow-red-500/20' },
  { name: 'PHP', icon: SiPhp, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20 hover:shadow-indigo-500/20' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20 hover:shadow-emerald-500/20' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20 hover:shadow-teal-500/20' },
  { name: 'Flutter', icon: SiFlutter, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20 hover:shadow-sky-500/20' },
  { name: 'Dart', icon: SiDart, color: 'text-teal-300', bg: 'bg-teal-500/10 border-teal-500/20 hover:shadow-teal-500/20' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20 hover:shadow-amber-500/20' },
  { name: 'C#', icon: TbBrandCSharp, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20 hover:shadow-violet-500/20' },
  { name: '.NET Framework', icon: SiDotnet, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20 hover:shadow-purple-500/20' },
  { name: 'Java', icon: FaJava, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20 hover:shadow-orange-500/20' },
  { name: 'HTML5', icon: SiHtml5, color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20 hover:shadow-orange-500/20' },
  { name: 'CSS3', icon: SiCss, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20 hover:shadow-blue-500/20' },
  { name: 'Git', icon: SiGit, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20 hover:shadow-rose-500/20' },
  { name: 'GitHub', icon: SiGithub, color: 'text-slate-300', bg: 'bg-slate-500/10 border-slate-500/20 hover:shadow-slate-500/20' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20 hover:shadow-green-500/20' },
];

export const capabilityPillars = [
  {
    title: 'Full-Stack Web Engineering',
    description: 'Building responsive SPAs and multi-role dashboards with modern React, TypeScript, and Tailwind CSS.',
    items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    icon: Globe,
    accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    title: 'Backend, APIs & Databases',
    description: 'Designing secure REST APIs, role-based access control, caching, and relational data models.',
    items: ['Laravel 12', 'PHP 8.3+', 'FastAPI', 'Node.js', 'MySQL / PostgreSQL', 'Redis'],
    icon: Server,
    accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  },
  {
    title: 'Mobile & Offline-First PWAs',
    description: 'Shipping cross-platform mobile apps and installable PWAs with offline queues and real-time sync.',
    items: ['Flutter', 'Dart', 'Firebase Auth', 'Workbox PWA', 'Push Notifications'],
    icon: Smartphone,
    accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
  {
    title: 'Desktop Applications',
    description: 'Developing enterprise Windows desktop systems for financial reporting, data processing, and Excel automation.',
    items: ['C#', '.NET Framework 4.8', 'Windows Forms', 'SQL Server', 'ADO.NET', 'DevExpress', 'ClosedXML'],
    icon: Monitor,
    accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    title: 'Quality Assurance & DevOps',
    description: 'Ensuring production reliability through structured manual, alpha/beta testing, and Git workflows.',
    items: ['Manual QA', 'Alpha & Beta Testing', 'Git & GitHub', 'Vercel Serverless'],
    icon: ShieldCheck,
    accent: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
];

export const softSkills = [
  'Critical Thinking',
  'Problem Solving',
  'Leadership',
  'Teamwork',
  'Active Listening',
  'Task Delegation',
  'Time Management',
  'Adaptability',
];

export const languages = [
  { name: 'Filipino', level: 'Native' },
  { name: 'English', level: 'Professional Working' },
];

export const affiliations = [
  { title: 'Philippine Army Reserve (RESCOM) — 1302nd Battalion', type: 'Leadership & Service' },
  { title: 'Basic ROTC Completer — Quezon City University', type: 'A.Y. 2022–2023' },
];

export const toolGroups = [
  { label: 'Frontend', items: 'React, TypeScript, Tailwind CSS, HTML5, CSS3', Icon: FileCode, color: 'text-blue-400' },
  { label: 'Backend', items: 'PHP, Laravel 12, FastAPI, Node.js, Java', Icon: Database, color: 'text-green-400' },
  { label: 'Mobile', items: 'Flutter, Dart, Android Studio, Firebase', Icon: Smartphone, color: 'text-cyan-400' },
  { label: 'Desktop', items: 'C#, .NET Framework 4.8, Windows Forms, SQL Server, ADO.NET, DevExpress, ClosedXML', Icon: Monitor, color: 'text-amber-400' },
  { label: 'DevOps & IDEs', items: 'Git, GitHub, Vercel, VS Code, NetBeans', Icon: GitBranch, color: 'text-orange-400' },
  { label: 'QA & Testing', items: 'Manual Testing, Alpha & Beta Testing', Icon: TestTube, color: 'text-pink-400' },
];

const TAG_ICON_RULES = [
  { match: (t) => t === 'c#' || t.includes('csharp'), icon: TbBrandCSharp },
  { match: (t) => t.includes('.net') && !t.includes('ado.net'), icon: SiDotnet },
  { match: (t) => t.includes('windows') || t.includes('winforms'), icon: FaWindows },
  { match: (t) => t.includes('closedxml') || t.includes('excel'), icon: FaFileExcel },
  { match: (t) => t.includes('devexpress'), icon: SiDotnet },
  { match: (t) => t.includes('sql server') || t.includes('mssql') || t.includes('ado.net'), icon: FaDatabase },
  { match: (t) => t.includes('mysql'), icon: SiMysql },
  { match: (t) => t.includes('postgres'), icon: SiPostgresql },
  { match: (t) => t.includes('sqlite'), icon: SiSqlite },
  { match: (t) => t.includes('mongo'), icon: SiMongodb },
  { match: (t) => t.includes('redis'), icon: SiRedis },
  { match: (t) => t.includes('next'), icon: SiNextdotjs },
  { match: (t) => t.includes('react'), icon: SiReact },
  { match: (t) => t.includes('vue'), icon: SiVuedotjs },
  { match: (t) => t.includes('angular'), icon: SiAngular },
  { match: (t) => t.includes('tailwind'), icon: SiTailwindcss },
  { match: (t) => t.includes('bootstrap'), icon: SiBootstrap },
  { match: (t) => t.includes('typescript'), icon: SiTypescript },
  { match: (t) => t.includes('javascript') || t === 'js', icon: SiJavascript },
  { match: (t) => t.includes('html'), icon: SiHtml5 },
  { match: (t) => t.includes('css'), icon: SiCss },
  { match: (t) => t.includes('node'), icon: SiNodedotjs },
  { match: (t) => t.includes('express'), icon: SiExpress },
  { match: (t) => t.includes('laravel'), icon: SiLaravel },
  { match: (t) => t.includes('php'), icon: SiPhp },
  { match: (t) => t.includes('python'), icon: SiPython },
  { match: (t) => t.includes('fastapi'), icon: SiFastapi },
  { match: (t) => t.includes('java'), icon: FaJava },
  { match: (t) => t.includes('flutter'), icon: SiFlutter },
  { match: (t) => t.includes('dart'), icon: SiDart },
  { match: (t) => t.includes('android'), icon: SiAndroid },
  { match: (t) => t.includes('firebase'), icon: SiFirebase },
  { match: (t) => t.includes('supabase'), icon: SiSupabase },
  { match: (t) => t.includes('prisma'), icon: SiPrisma },
  { match: (t) => t.includes('graphql'), icon: SiGraphql },
  { match: (t) => t.includes('docker'), icon: SiDocker },
  { match: (t) => t.includes('vite'), icon: SiVite },
  { match: (t) => t.includes('pwa'), icon: SiPwa },
  { match: (t) => t.includes('serverless') || t.includes('vercel'), icon: SiVercel },
  { match: (t) => t.includes('aws'), icon: FaAws },
  { match: (t) => t.includes('github'), icon: SiGithub },
  { match: (t) => t === 'git', icon: SiGit },
];

export const getTagIcon = (tag) => {
  const t = tag.trim().toLowerCase();
  const found = TAG_ICON_RULES.find((rule) => rule.match(t));
  return found ? found.icon : null;
};

export const companyProjects = [
  {
    id: 'cebuana-refind',
    category: 'company',
    categoryLabel: 'Company Production System • Desktop Software',
    company: 'BCS Systems and Technologies Inc.',
    title: 'Cebuana ReFind Program',
    subHeader: 'Enterprise POS Financial Reconciliation, General Ledger & SAP Journal Engine',
    role: 'MIS Programmer / Desktop Developer',
    description:
      'Enterprise Windows desktop software reconciling nationwide multi-branch AutoCount POS retail sales, BIR tax compliance, and automated General Ledger accounting for Cebuana Lhuillier.',
    details:
      'Cebuana ReFind is an enterprise desktop financial reconciliation and audit system developed in C# and .NET Framework 4.8 with DevExpress and Microsoft SQL Server for BCS Systems and Technologies Inc. It processes high-volume retail transactions across hundreds of nationwide pawnshop and jewelry branches, reconciling front-of-house AutoCount POS sales invoices, sales orders, customer deposits, and return exchanges with enterprise General Ledger (GL) accounts for automated SAP ERP posting.',
    features: [
      'Multi-CTE SQL Reconciliation Engine: 2,700+ line optimized T-SQL query architecture reconciling Sales Invoices (SI), Sales Orders (SO), customer deposits, cancellations, and return exchanges.',
      'Centavo Decimal Variance & Rounding Resolution: Algorithmic anchor-and-plug solution eliminating 3-decimal to 2-decimal rounding drift between VAT-exclusive line totals and payments down to ₱0.00 variance.',
      'Philippine BIR Tax Compliance: Dynamic calculation for 12% Output VAT, Senior Citizen / PWD 20% discounts, Zero-Rated transactions (OX), and jewelry attribute classifications (Karat, Weight, Color).',
      'High-Performance Reporting & Excel Generation: ClosedXML multi-sheet Excel and CSV export engine with reflection-based DataGridView double-buffering for lag-free 60fps data browsing.',
      'Asynchronous Debounced Search: 250ms debounced live filtering with SQL LIKE wildcard escaping (EscapeLikeValue) across tens of thousands of transaction records.',
      'Secure Connection & Chart of Accounts Manager: Encrypted database profile storage in LocalApplicationData, dual Windows/SQL authentication testing, and flexible GL account mapping.',
    ],
    tags: ['C#', '.NET Framework 4.8', 'Windows Forms', 'SQL Server', 'DevExpress', 'ClosedXML'],
    architecture: {
      'Desktop & UI': [
        'C# / .NET Framework 4.8',
        'Windows Forms (WinForms)',
        'DevExpress WinForms v24.1 (XtraBars, XtraEditors)',
        'Emil Kowalski Minimalist Custom GDI+ Styling',
        'System Tray Background Service (NotifyIcon)',
      ],
      'Database & Processing': [
        'Microsoft SQL Server (T-SQL Multi-CTE)',
        'ADO.NET (SqlDataAdapter, SqlCommand)',
        'ClosedXML v0.105 / DocumentFormat.OpenXml',
        'AutoCount Retail POS Schema Integration',
        'SAP General Ledger Journal Formatting',
      ],
    },
    accent: 'from-blue-600/20 to-indigo-600/20',
    border: 'border-blue-500/30',
    image: '/images/refind-dashboard.png',
    gallery: [
      { src: '/images/refind-dashboard.png', label: 'Emil Kowalski Modern Dashboard' },
      { src: '/images/refind-reports.png', label: 'Financial Sales & Sold Items Reports' },
      { src: '/images/refind-accounts.png', label: 'Chart of Accounts & GL Mapping' },
      { src: '/images/refind-config.png', label: 'SQL Server & Database Configuration' },
    ],
  },
  {
    id: 'wbox-autocount',
    category: 'company',
    categoryLabel: 'Company Production System • Desktop Middleware',
    company: 'BCS Systems and Technologies Inc.',
    title: 'WBox–AutoCount Bridge Middleware',
    subHeader: 'Automated POS Inventory Deduction, Cash Sale Audit Gate & AutoCount 2.2 Integration',
    role: 'MIS Programmer / Desktop Developer',
    description:
      'High-reliability .NET 8 WinForms middleware synchronizing multi-branch retail POS registers with AutoCount Accounting 2.2, featuring real-time ingredient deduction, FEFO batch allocation, and sales auditing.',
    details:
      'Engineered for BCS Systems and Technologies Inc. to modernize high-throughput beverage retail operations (deployed across CoCo Fresh Tea & Juice branches). The system monitors front-of-house WBOX POS XML registers in real time, projecting transactions into a local SQLite state store, exploding beverage bill of materials (BOM), and automatically deducting stock through an isolated AutoCount Accounting 2.2 SDK process connector. Includes a comprehensive Sales Auditing Gate inquiry workbench for reviewing real line prices, discounts, payment tenders, and BIR 12% VAT before posting cash sales.',
    features: [
      'Idempotent POS File Ingestion: Real-time file system watcher parsing WBOX XML transactions with deterministic SHA hashing and RefDocNo tracking to strictly prevent duplicate inventory deductions.',
      'Beverage Modifier & BOM Deduction Engine: Translates parent beverage sales into underlying ingredient deductions (milk, tea base, sugar levels, pearls, and condiments) while tracking customer modifier trends.',
      'Official AutoCount SDK Connector: Executes Stock Issue and Cash Sale postings through an out-of-process 32-bit/64-bit bridge (AutoCount.Connector.exe) using isolated COM/SDK runtime bindings.',
      'FEFO Batch Allocation: Automated First-Expired, First-Out lot selection with BatchNo tie-breaking to maintain strict perishable stock freshness in multi-branch retail stores.',
      'Sales Auditing Gate & 12% VAT Breakdown: Full-featured pre-posting inquiry workbench allowing finance teams to inspect gross revenue, discounts, payment tenders (Cash, GCash, GrabPay, Credit Card), and Philippine 12% VAT before committing to General Ledger.',
      'Intelligent Fuzzy Mapping: Hybrid Jaccard token-set and Levenshtein distance matcher automatically proposing AutoCount item mappings for newly introduced POS menu items.',
      '24/7 Tray Background Service: Minimizes to system tray with desktop balloon alerts, automatic Windows startup, and non-blocking asynchronous sync loops.',
    ],
    tags: ['C#', '.NET 8', 'Windows Forms', 'SQLite', 'AutoCount SDK', 'SQL Server'],
    architecture: {
      'Desktop & Architecture': [
        'C# / .NET 8.0 Windows Forms (WinForms)',
        'Emil Kowalski Slate UI Palette & FontAwesome.Sharp',
        'System Tray Daemon (NotifyIcon 24/7 Service)',
        'Isolated Process Bridge (AutoCount.Connector.exe)',
      ],
      'Integration & Storage': [
        'AutoCount Accounting 2.2 SDK (CashSale, StockIssue)',
        'SQLite WAL Mode (Microsoft.Data.Sqlite)',
        'Microsoft SQL Server (Read-only Snapshot Source)',
        'ClosedXML / OpenXml Reporting & Auditing',
      ],
    },
    accent: 'from-sky-600/20 to-blue-600/20',
    border: 'border-sky-500/30',
    image: '/images/wbox-dashboard.png',
    gallery: [
      { src: '/images/wbox-dashboard.png', label: 'Real-Time Sync Dashboard' },
      { src: '/images/wbox-inventory.png', label: 'Bridge Inventory & EOD Adjustments' },
      { src: '/images/wbox-pos-posting.png', label: 'Sales Auditing Gate & 12% VAT Breakdown' },
      { src: '/images/wbox-transactions.png', label: 'Transaction Audit Trail & XML Logs' },
      { src: '/images/wbox-modifiers.png', label: 'Beverage Modifiers & Add-ons Inquiry' },
      { src: '/images/wbox-unmapped.png', label: 'Intelligent Fuzzy Item Mapping' },
      { src: '/images/wbox-settings.png', label: 'AutoCount SDK & Store Configuration' },
    ],
  },
  {
    id: 'discount-converter',
    category: 'company',
    categoryLabel: 'Company Production System • Desktop POS Utility',
    company: 'VCSI / Retail POS Operations',
    title: 'POS Discount & VAT Converter',
    subHeader: 'Floating Cashier Touchscreen Widget, Net Base Tax Resolver & ESC/POS Thermal Printing',
    role: 'MIS Programmer / Desktop Developer',
    description:
      'Production Windows desktop utility designed for retail checkout lanes to accurately convert fixed peso discount amounts into exact percentage rates, backing out Philippine 12% VAT and service charge for POS entry.',
    details:
      'Developed in C# and .NET Framework 4.8 with Guna.UI2 for front-of-house cashier terminals and retail POS registers. In retail environments where older or strict POS systems only accept discount percentage rates, cashiers frequently need to apply specific peso promo amounts, vouchers, or manual coupons. This lightweight utility floats on top of the POS touchscreen, calculates the true net base amount by backing out 12% Philippine VAT and 10% Service Charge, derives the exact 2-decimal discount percentage, and immediately outputs thermal audit receipts via ESC/POS direct COM serial port or Windows print controller.',
    features: [
      'Touchscreen-Optimized NumberPad: Custom on-screen numeric keypad with Philippine currency denomination shortcuts (₱20, ₱50, ₱100, ₱200, ₱500, ₱1,000) for fast cashier touch entry.',
      'Accurate Tax & Service Charge Back-Out: Dynamically computes divisor (1 + VAT% + SC%) to derive the true pre-tax Net Base Amount from gross subtotal before computing percentage discounts.',
      'AwayFromZero Half-Up Rounding: Implements financial midpoint rounding (AwayFromZero) ensuring 2-decimal percentage output matches POS accounting registers down to ₱0.00 drift.',
      'ESC/POS Thermal Printing Engine: Direct COM serial port hardware communication (9600 baud, 8-N-1) sending raw ESC/POS commands and paper-cut sequences (1B69) alongside standard Windows PrintDocument support.',
      'Floating Always-On-Top Mini Widget: Compact 200x50 desktop bar that docks unobtrusively over full-screen POS register applications, persisting screen coordinates across cashier shifts.',
      'Quick Keyboard Hotkey Configuration: Pressing F1 launches an administrative settings panel to configure COM ports, default printer routing, and store-specific VAT/service charge defaults.',
    ],
    tags: ['C#', '.NET Framework 4.8', 'Windows Forms', 'Guna.UI2', 'ESC/POS', 'Hardware Serial Port'],
    architecture: {
      'Desktop & UI': [
        'C# / .NET Framework 4.8',
        'Windows Forms (WinForms)',
        'Guna.UI2 WinForms Component Suite',
        'Always-On-Top Floating Form (RestoreBounds persistence)',
        'Touchscreen On-Screen Keypad (NumberPad)',
      ],
      'Hardware & Printing': [
        'System.IO.Ports (SerialPort COM Communication)',
        'ESC/POS Hex Command Sequences (Paper Cut 1B69)',
        'System.Drawing.Printing (Standard PrintController)',
        '80mm POS Thermal Slip Layout Formatting',
      ],
    },
    accent: 'from-blue-600/20 to-sky-600/20',
    border: 'border-blue-500/30',
    image: '/images/discount-converter-main.png',
    gallery: [
      { src: '/images/discount-converter-main.png', label: 'POS Discount & Subtotal Converter' },
      { src: '/images/discount-converter-numpad.png', label: 'Touchscreen NumberPad & Denomination Shortcuts' },
      { src: '/images/discount-converter-config.png', label: 'ESC/POS Thermal Print Setup & Tax Defaults' },
      { src: '/images/discount-converter-widget.png', label: 'Floating Desktop Cashier Action Widget' },
    ],
  },
  {
    id: 'lucky-boba-pos',
    category: 'company',
    categoryLabel: 'Company Production System',
    company: 'Lucky Boba Food & Beverage Trading Corp',
    title: 'Lucky Boba POS & Ecosystem',
    subHeader: 'Multi-Branch Point of Sale, Self-Order Kiosk & Queue Display',
    role: 'IT Programmer / Full-Stack Web Developer',
    description:
      'Offline-first PWA Point of Sale, multi-branch admin panel, customer self-order kiosk, and live order queue display built for daily store operations.',
    details:
      'Architected and maintained for Lucky Boba Food and Beverage Trading Corp to unify store operations across multiple branches. The ecosystem spans an 8-role Admin & Cashier POS Progressive Web App with offline transaction queueing, a touch-friendly Self-Order Kiosk, and a real-time Queue Display board—backed by Laravel 12 Octane and Redis.',
    features: [
      'Multi-Role RBAC: 8 distinct user roles (Super Admin, System Admin, Area Manager, Branch Manager, Supervisor, Team Leader, IT Admin, Cashier).',
      'Offline-First POS PWA: Installable app with Workbox service workers and automatic sync queue when connectivity returns.',
      'Self-Order Kiosk & Queue Display: Dedicated customer ordering interface and real-time kitchen/pickup queue screen.',
      'Inventory & Transfers: Stock tracking, raw materials, recipes, and inter-branch inventory transfers.',
      'Analytics & Audit Logs: Sales reports, Excel exports, loyalty card rewards, and full system activity auditing.',
      'Device & Bundle Management: POS terminal authorization, flexible discount rules, and online order sync.',
    ],
    tags: ['React 19', 'TypeScript', 'Laravel 12', 'PWA'],
    architecture: {
      Frontend: ['React 19 + TypeScript', 'Vite 7', 'Tailwind CSS v4', 'Zustand', 'Recharts', 'Workbox PWA'],
      Backend: ['Laravel 12 (PHP 8.3+)', 'Laravel Octane', 'Laravel Sanctum', 'MySQL / SQLite', 'Redis (Predis)', 'Laravel Queue'],
    },
    accent: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
    image: '/images/luckyboba-adminpanel.png',
    gallery: [
      { src: '/images/luckyboba-adminpanel.png', label: 'Admin Panel & POS' },
      { src: '/images/luckyboba-kiosk.png', label: 'Self-Order Kiosk' },
      { src: '/images/luckyboba-queue-display.png', label: 'Live Queue Display' },
    ],
  },
  {
    id: 'lucky-boba-app',
    category: 'company',
    categoryLabel: 'Company Mobile App',
    company: 'Lucky Boba Food & Beverage Trading Corp',
    title: 'Lucky Boba Customer App',
    subHeader: 'Cross-Platform Mobile Ordering & Loyalty Application',
    role: 'Mobile Developer',
    description:
      'Customer-facing Flutter application synced directly with the Lucky Boba POS for menu browsing, drink customization, and digital loyalty rewards.',
    details:
      'Built as the customer-facing mobile companion to the Lucky Boba POS ecosystem. Customers can browse menus, customize boba drinks, place pickup or delivery orders, and earn digital loyalty points—with orders synced in real time to store POS terminals.',
    features: [
      'Mobile Ordering: Intuitive menu browsing, drink add-on customization, and pickup/delivery checkout.',
      'Digital Loyalty Card: Integrated rewards system replacing physical stamp cards.',
      'Real-Time Order Tracking: Live status updates pushed directly from the store POS.',
      'Secure Authentication: Firebase Auth login paired with PHP/MySQL POS API synchronization.',
      'Push Notifications: Instant alerts for order readiness and seasonal promotions.',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'PHP'],
    architecture: {
      Mobile: ['Flutter', 'Dart', 'Provider / Riverpod'],
      Backend: ['Firebase Auth', 'PHP REST APIs', 'MySQL (POS Sync)'],
    },
    accent: 'from-red-500/20 to-amber-500/20',
    border: 'border-red-500/30',
    image: '/images/luckyboba-app.jpg',
    gallery: [{ src: '/images/luckyboba-app.jpg', label: 'Customer Mobile App' }],
  },
];

export const selfProjects = [
  {
    id: 'wrap-up',
    category: 'self',
    categoryLabel: 'Self Project • Cryptographic Web App',
    title: 'Wrap Up — Secret Gift Exchange',
    subHeader: 'Verifiable Secret Santa / Kris Kringle with Organizer Blindness & Anonymous Chat',
    role: 'Full-Stack Developer',
    description:
      'Cryptographic Secret Gift Exchange web app featuring single-cycle CSPRNG draws (zero self-draws), SHA-256 commitment audit logs, wishlists, two-way anonymous chat, Organizer Studio, and Superadmin moderation.',
    details:
      'Wrap Up is a full-stack Secret Gift Exchange platform built with React, Vite, Tailwind CSS, and Supabase PostgreSQL with Row-Level Security (RLS). It guarantees fair, verifiable draws via single-cycle CSPRNG permutation and SHA-256 audit commitments—even keeping organizers blind to match assignments—while supporting 6-character guest access keys, wishlists, anonymous giver–giftee messaging, PDF/ICS exports, and a Superadmin team & template console.',
    features: [
      'Verifiable CSPRNG Draw & SHA-256 Audit: Single-cycle permutation with zero self-draws, organizer blindness, PDF receipt, and .ics calendar export.',
      'Guest Access Keys & Auth: 6-character room invite codes for instant guest entry alongside email/password accounts.',
      'Wishlists & Anonymous Chat: Saved gift wishes with priorities, match wish previews, and two-way anonymous giver–giftee messaging.',
      'Organizer Studio: Manage group keys, approve join requests, splice late joiners into sealed cycles, configure exclusion matrices, and use event templates.',
      'Superadmin Console: Moderate pending team requests, manage reusable event templates, and administer registered users and guest accounts.',
    ],
    tags: ['React', 'Tailwind CSS', 'Supabase', 'PWA'],
    architecture: {
      Frontend: ['React', 'Vite', 'Tailwind CSS v4', 'Web Crypto (SHA-256)'],
      Backend: ['Supabase Auth', 'PostgreSQL + RLS & RPCs', 'Vercel Hosting'],
    },
    accent: 'from-rose-500/20 to-amber-500/20',
    border: 'border-rose-500/30',
    image: '/images/wrapup-draw.png',
    gallery: [
      { src: '/images/wrapup-draw.png', label: 'Draw & SHA-256 Audit' },
      { src: '/images/wrapup-landing.png', label: 'Landing & Access Key' },
      { src: '/images/wrapup-groups.png', label: 'My Groups' },
      { src: '/images/wrapup-rules.png', label: 'Rules & Live Pool' },
      { src: '/images/wrapup-wishlist.png', label: 'Wishlist & Anon Chat' },
      { src: '/images/wrapup-organizer.png', label: 'Organizer Studio' },
      { src: '/images/wrapup-superadmin-teams.png', label: 'Superadmin Teams' },
      { src: '/images/wrapup-superadmin-templates.png', label: 'Superadmin Templates' },
    ],
    liveUrl: 'https://wrap-up-draw.vercel.app/',
  },
  {
    id: 'findiary',
    category: 'self',
    categoryLabel: 'Self Project • FinTech PWA & Mobile',
    title: 'FinDiary — Personal Finance Tracker',
    subHeader: 'Philippine Peso Finance, Quincena Budgets, Utang Tracker & Mobile Companion',
    role: 'Full-Stack & Mobile Developer',
    description:
      'Personal finance tracker built for Philippine Peso (₱) workflows—featuring Quincena (15th/30th) budgets, GCash/Maya/bank wallet tracking, Utang & Pautang debt management, savings goals, and an Expo + PWA mobile companion.',
    details:
      'FinDiary is a full-stack personal finance web and mobile platform tailored for Philippine financial workflows. Built with React 19, Tailwind CSS v4, Supabase (PostgreSQL with Row Level Security), and an Expo native companion app, it supports multi-wallet tracking (GCash, Maya, GoTyme, SeaBank, BDO, BPI, Cash), 15th/30th Quincena payday budgeting, Utang & Pautang settlement tracking, recurring bills (SSS, PhilHealth, Pag-IBIG, utilities), savings sinking funds, CSV/JSON data portability, and installable PWA + QR mobile handoff.',
    features: [
      'Multi-Wallet & PH Bank Presets: Track Cash, GCash, Maya, GoTyme, SeaBank, BDO, BPI, UnionBank, and Metrobank balances.',
      'Quincena & Monthly Budgets: Aligned to Philippine 15th/30th salary schedules with safe daily spend calculation.',
      'Utang & Pautang Tracker: Manage receivables and liabilities with partial/full settlement logging and net debt balance.',
      'Bills & Recurring Obligations: Track Meralco, internet, rent, SSS, PhilHealth, and Pag-IBIG by monthly or quincena frequency.',
      'Savings Goals & Cashflow Reports: Sinking funds, 6-month income vs. expense bar charts, category breakdown, and CSV/RA 10173 JSON export.',
      'PWA & Expo Mobile Companion: Installable web app plus Expo Go native companion with biometric unlock and QR mobile handoff.',
    ],
    tags: ['React 19', 'Tailwind CSS', 'Supabase', 'PWA'],
    architecture: {
      Frontend: ['React 19', 'Vite', 'Tailwind CSS v4', 'Workbox PWA', 'Expo / React Native'],
      Backend: ['Supabase Auth', 'PostgreSQL + Row Level Security (RLS)', 'CSV & RA 10173 JSON Export'],
    },
    accent: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
    image: '/images/findiary-dashboard.png',
    gallery: [
      { src: '/images/findiary-dashboard.png', label: 'Dashboard & Cashflow' },
      { src: '/images/findiary-transactions.png', label: 'Transactions Ledger' },
      { src: '/images/findiary-debts.png', label: 'Utang & Pautang Tracker' },
      { src: '/images/findiary-recurring.png', label: 'Bills & Recurring' },
      { src: '/images/findiary-goals.png', label: 'Savings Goals' },
      { src: '/images/findiary-budgets.png', label: 'Quincena Budgets' },
      { src: '/images/findiary-reports.png', label: 'Financial Reports' },
      { src: '/images/findiary-accounts.png', label: 'PH Wallets & Banks' },
      { src: '/images/findiary-mobile.png', label: 'Mobile App & PWA' },
      { src: '/images/findiary-settings.png', label: 'Payday & RLS Settings' },
    ],
    liveUrl: 'https://findiary-six.vercel.app/',
  },
  {
    id: 'atelier-photobooth',
    category: 'self',
    categoryLabel: 'Self Project • Optical Kiosk & Web App',
    title: 'Atelier 01 — Photobooth System',
    subHeader: '4-Stage Optical Portrait Kiosk, Darkroom Compositor & QR Handoff',
    role: 'Full-Stack Developer',
    description:
      'Interactive 4-stage photobooth kiosk featuring 18 archival themes, WebRTC optical capture with AR props & AI sets, 300 DPI darkroom compositing, QR mobile handoff, and PIN-locked admin console.',
    details:
      'Atelier 01 is a full-stack optical portrait kiosk system built with Next.js, Tailwind CSS, and Supabase. Users progress through four streamlined stages: choosing from 18 curated archival themes, capturing shots via WebRTC (or the built-in optical test pattern) with film presets, AI backdrops, and AR reticles, fine-tuning exposure/marks/paper stock in a 300 DPI darkroom compositor, and exporting via scannable QR mobile archive links, email dispatch, or a thermal print bridge.',
    features: [
      '18 Archival Themes & Formats: Vintage, Minimalist, Nature, and Cinematic/AI strips, diptychs, and 2×2 grids.',
      'WebRTC Optical Viewfinder: Live camera & synthetic test pattern with 14 film presets, 14 AI persona sets, and 13 AR reticles.',
      '300 DPI Darkroom Compositor: Interactive crop/swap controls, EV & glamour glow sliders, 38 stamps/marks, and archival paper stock.',
      'QR Mobile Archive & Print Bridge: Instant /p/<id> lossless PNG handoff, motion sequence view, email dispatch, and thermal print queue.',
      'Admin Operator Vault (/admin): PIN-protected studio manager for events, templates, sessions, and print jobs synced via Supabase.',
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
    architecture: {
      Frontend: ['Next.js (App Router)', 'React', 'Tailwind CSS', 'WebRTC Media Stream', '300 DPI Canvas Compositor'],
      Backend: ['Supabase (Postgres & REST)', 'QR Mobile Archive Routes', 'Thermal Print Bridge'],
    },
    accent: 'from-emerald-500/20 to-zinc-500/20',
    border: 'border-emerald-500/30',
    image: '/images/atelier-landing.png',
    gallery: [
      { src: '/images/atelier-landing.png', label: 'Kiosk Landing' },
      { src: '/images/atelier-themes.png', label: '18 Themes & Formats' },
      { src: '/images/atelier-capture.png', label: 'Optical Capture & Props' },
      { src: '/images/atelier-darkroom.png', label: 'Darkroom Compositor' },
      { src: '/images/atelier-handoff.png', label: 'QR & Print Handoff' },
      { src: '/images/atelier-mobile.png', label: 'Mobile Archive (/p/)' },
      { src: '/images/atelier-admin.png', label: 'Admin Vault (/admin)' },
    ],
    liveUrl: 'https://atelier-photobooth-system.vercel.app/',
  },
  {
    id: 'viderevision',
    category: 'self',
    categoryLabel: 'Self Project • Creative Platform & Marketplace',
    title: 'VidereVision (VIDERE)',
    subHeader: 'Visual Arts Community, Collaborative Artspace & Commission Hub',
    role: 'Full-Stack Developer',
    description:
      'Creative platform for visual artists to showcase portfolios, collaborate on live Artspace canvases, manage client commissions, and sell creative goods in a unified marketplace.',
    details:
      'VIDERE (VidereVision) is a web-based community, collaboration, and marketplace platform built for visual media artists. Built with React, Vite, Tailwind CSS, and Google Identity Services paired with a Node.js/Express REST backend, it features dark/light theming, a social community feed, collaborative Artspace canvases with synced layers, a Commission Hub with earnings & milestone tracking, and a creative marketplace.',
    features: [
      'Collaborative Artspace: Live shared creative canvas with synced layers, real-time presence, and client view-only access.',
      'Commission Hub: Track active commissions, pending requests, completed orders, and total artist earnings.',
      'Social Feed & Marketplace: Showcase visual artwork, connect with peers, and list creative goods.',
      'Auth, Theming & Support: Split-screen Login/Sign-Up with Google OAuth, Dark/Light theme switcher, and Help Center.',
    ],
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Vite'],
    architecture: {
      Frontend: ['React', 'Vite', 'Tailwind CSS', 'Dark/Light Theme', 'Axios'],
      Backend: ['Node.js', 'Express', 'Google Identity Services (OAuth)', 'REST API'],
    },
    accent: 'from-blue-500/20 to-purple-500/20',
    border: 'border-blue-500/30',
    image: '/images/viderevision-hero.png',
    gallery: [
      { src: '/images/viderevision-hero.png', label: 'Hero (Dark Mode)' },
      { src: '/images/viderevision-light.png', label: 'Hero (Light Mode)' },
      { src: '/images/viderevision-artspace.png', label: 'Collaborative Artspace' },
      { src: '/images/viderevision-commission.png', label: 'Commission Hub' },
      { src: '/images/viderevision-about.png', label: 'Platform Overview' },
      { src: '/images/viderevision-login.png', label: 'Auth & Google Sign-In' },
      { src: '/images/viderevision-help.png', label: 'Help Center' },
    ],
    liveUrl: 'https://viderevision.vercel.app',
  },
  {
    id: 'resumeforge',
    category: 'self',
    categoryLabel: 'Self Project • AI SaaS',
    title: 'ResumeForge',
    subHeader: 'ATS-Friendly Resume Builder & Parser',
    role: 'Full-Stack Web Developer',
    description:
      'Resume builder with PDF/DOCX drag-and-drop parsing, live-preview templates, guest mode, and instant Word/PDF export.',
    details:
      'ResumeForge helps job seekers create clean, ATS-compatible resumes from scratch or by importing an existing PDF or DOCX file. Powered by a React + Framer Motion frontend and a Python FastAPI backend that parses uploaded documents and persists user data via SQLAlchemy.',
    features: [
      'Resume Import & Parsing: Drag-and-drop PDF (PyPDF2) and DOCX (python-docx) extraction.',
      'Live-Preview Templates: Instant switching between Classic, Modern, and Creative layouts.',
      'Guest & Account Modes: JWT authentication with frictionless guest editing support.',
      'Multi-Format Export: Download polished resumes directly as PDF or DOCX.',
    ],
    tags: ['React', 'Tailwind CSS', 'FastAPI'],
    architecture: {
      Frontend: ['React 18', 'Vite', 'Tailwind CSS v3', 'Framer Motion', 'Lucide React'],
      Backend: ['FastAPI (Python)', 'Uvicorn', 'JWT Auth', 'PyPDF2 & python-docx', 'SQLite + SQLAlchemy'],
    },
    accent: 'from-teal-500/20 to-emerald-500/20',
    border: 'border-teal-500/30',
    image: '/images/resumeforge.png',
    gallery: [{ src: '/images/resumeforge.png', label: 'ResumeForge Editor' }],
    liveUrl: 'https://resumeforge-builder.vercel.app',
  },
  {
    id: 'shiftdox',
    category: 'self',
    categoryLabel: 'Self Project • Serverless Tool',
    title: 'ShiftDox',
    subHeader: 'Serverless Document Conversion Suite',
    role: 'Full-Stack Developer',
    description:
      'Serverless document converter supporting 8 format workflows (PDF, Word, Excel, PPT, JPG) with Google OAuth and Vercel Functions.',
    details:
      'ShiftDox is a serverless document conversion web app requiring no traditional backend server. All file-processing routes run on Vercel Serverless Functions integrated with the CloudConvert SDK, paired with Google OAuth 2.0 and a dark glassmorphic UI.',
    features: [
      '8 Conversion Tools: PDF ↔ Word, PDF ↔ Excel, PDF ↔ PowerPoint, and PDF ↔ JPG.',
      'Serverless Backend: Zero-server architecture powered by Vercel Serverless Functions & Formidable.',
      'Google OAuth 2.0: One-click secure sign-in via @react-oauth/google.',
      'Sandboxed Processing: Secure file handling through the CloudConvert Node.js SDK.',
    ],
    tags: ['React 19', 'TypeScript', 'Serverless'],
    architecture: {
      Frontend: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'React Router v7'],
      Backend: ['Vercel Serverless Functions', 'Node.js', 'CloudConvert SDK', 'Google OAuth 2.0'],
    },
    accent: 'from-indigo-500/20 to-blue-500/20',
    border: 'border-indigo-500/30',
    image: '/images/shiftdox.png',
    gallery: [{ src: '/images/shiftdox.png', label: 'ShiftDox Workspace' }],
    liveUrl: 'https://shift-dox.vercel.app/#',
  },
];

export const primaryExperiences = [
  {
    role: 'MIS Programmer / Desktop Developer',
    date: 'Jul 2026 – Present',
    company: 'BCS Systems and Technologies Inc.',
    Icon: Code2,
    color: 'text-indigo-400',
    bullets: [
      'Developed and optimized Cebuana ReFind, an enterprise C#/.NET Windows Forms desktop system reconciling nationwide AutoCount retail POS transactions with SAP General Ledger accounts.',
      'Architected WBox–AutoCount Bridge Middleware, an automated .NET 8 WinForms integration service synchronizing multi-branch retail POS registers (CoCo Fresh Tea & Juice) with AutoCount Accounting 2.2.',
      'Designed multi-CTE T-SQL reconciliation queries resolving centavo decimal rounding variances, BIR 12% VAT, and SC/PWD discounts across hundreds of branch stores.',
      'Engineered high-throughput Excel report generation using ClosedXML, SQLite projection caching, and isolated process bridges.',
    ],
    linkedProjects: [
      'Cebuana ReFind Program',
      'WBox–AutoCount Bridge Middleware',
      'POS Discount & VAT Converter',
    ],
  },
  {
    role: 'IT Programmer',
    date: 'Feb – Jun 2026',
    company: 'Lucky Boba Food and Beverage Trading Corp',
    Icon: Code2,
    color: 'text-blue-400',
    bullets: [
      'Built and maintained the multi-branch POS PWA (8 user roles, offline sync queue), Self-Order Kiosk, and Queue Display using React 19, TypeScript, and Laravel 12.',
      'Integrated the customer-facing Flutter mobile app with store POS APIs for real-time order synchronization and digital loyalty tracking.',
      'Managed store technical infrastructure, POS device authorization, and frontline staff troubleshooting across daily operations.',
    ],
    linkedProjects: ['Lucky Boba POS & Ecosystem', 'Lucky Boba Customer App'],
  },
  {
    role: 'OJT Intern — Curriculum & Learning Management Division',
    date: 'Sep – Dec 2025',
    company: 'Department of Education (DepEd NCR)',
    Icon: Building2,
    color: 'text-teal-400',
    bullets: [
      'Managed and audited division-level databases to maintain record accuracy and data integrity across regional curriculum files.',
      'Executed systematic data encoding and digitized curriculum-related documentation.',
      'Coordinated inter-departmental file routing and document tracking workflows.',
    ],
  },
  {
    role: 'Investments Accounting Intern (Government Internship Program)',
    date: 'Jun – Aug 2023',
    company: 'Social Security System (SSS)',
    Icon: Briefcase,
    color: 'text-purple-400',
    bullets: [
      'Supported financial record management, systematic document filing, and high-accuracy data encoding.',
      'Applied government accounting procedures and regulatory compliance standards in daily administrative workflows.',
    ],
  },
];

export const additionalExperiences = [
  {
    role: 'Motorcycle Delivery Rider',
    date: 'Feb 2025 – Present',
    company: 'LALAMOVE Philippines',
    Icon: Truck,
    color: 'text-amber-400',
    bullets: ['Managed time-critical logistics, route optimization, and client handoffs across Metro Manila while completing university studies.'],
  },
  {
    role: 'Motorcycle Rider Partner',
    date: 'Jul 2025 – Jan 2026',
    company: 'ANGKAS Philippines',
    Icon: Bike,
    color: 'text-orange-400',
    bullets: ['Maintained high safety and punctuality standards for daily commuter transport alongside academic and internship commitments.'],
  },
];

export const educationList = [
  {
    school: 'Quezon City University',
    degree: 'Bachelor of Science in Information Technology',
    date: '2022 – Present',
    active: true,
  },
  {
    school: 'Metro Manila College',
    degree: 'Humanities & Social Sciences — Graduated with Honors',
    date: '2020 – 2022',
    active: false,
  },
];

export const certificationsList = [
  {
    title: 'AI for Business Professionals',
    org: 'HP LIFE | HP Foundation — April 2026',
    Icon: Brain,
    color: 'text-purple-400 bg-purple-500/10',
  },
  {
    title: 'AI in Education Webinar',
    org: 'NCBA Fairview — February 2026',
    Icon: Brain,
    color: 'text-rose-400 bg-rose-500/10',
  },
  {
    title: 'Business Email',
    org: 'HP LIFE | HP Foundation — April 2026',
    Icon: Mail,
    color: 'text-teal-400 bg-teal-500/10',
  },
  {
    title: 'Resume Writing and Job Interviewing',
    org: 'HP LIFE | HP Foundation — April 2026',
    Icon: Briefcase,
    color: 'text-indigo-400 bg-indigo-500/10',
  },
  {
    title: 'Basic ROTC Completer',
    org: 'Quezon City University — A.Y. 2022–2023',
    Icon: Award,
    color: 'text-yellow-400 bg-yellow-500/10',
  },
];

export const characterReferences = [
  {
    name: 'Ara Niña D. Legaspi',
    role: 'Marketing & Client Relations Specialist',
    company: 'FDM Training Center',
  },
  {
    name: 'Marlon Palces',
    role: 'IT Manager',
    company: 'IHG Hotels & Resorts',
  },
  {
    name: 'Mary Margiery Capistrano',
    role: 'Restaurant Supervisor',
    company: 'CF Sharp Crew Management Inc.',
  },
];
