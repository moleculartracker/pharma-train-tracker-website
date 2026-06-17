export const translations = {
  en: {
    meta: {
      lang: "en",
      dir: "ltr",
      languageName: "English",
      toggleLabel: "العربية",
      appName: "Pharmacy Training Tracker",
      appShortName: "PT Tracker",
      navLabel: "Primary navigation",
    },
    nav: [
      { id: "home", label: "Home" },
      { id: "features", label: "Features" },
      { id: "download", label: "Download APK" },
      { id: "activation", label: "Request Activation" },
      { id: "payment", label: "Payment Instructions" },
      { id: "contact", label: "Contact" },
      { id: "privacy", label: "Privacy Policy" },
      { id: "terms", label: "Terms of Use" },
    ],
    actions: {
      requestActivation: "Request activation",
      downloadApk: "Download APK",
      viewFeatures: "View features",
      payment: "Payment instructions",
      submit: "Submit activation request",
      upload: "Upload receipt screenshot",
      backHome: "Back to home",
    },
    hero: {
      eyebrow: "University pharmacy training management",
      title: "Track pharmacy training with clarity.",
      body: "A professional Android app for attendance, prescription collection, student progress, supervisor review, and admin monitoring across pharmacy training programs.",
      trust: "Built for colleges, pharmacies, supervisors, and training administrators.",
      previewTitle: "Training dashboard",
      previewItems: [
        ["Attendance", "92%"],
        ["Prescriptions", "184"],
        ["Supervisor reviews", "31"],
      ],
      stats: [
        { value: "RTL + LTR", label: "Arabic and English" },
        { value: "5", label: "training workflows" },
        { value: "Cloudflare", label: "hosting ready" },
      ],
      consoleTitle: "College training operations",
      status: "Live cohort view",
      reviewQueue: "Supervisor review queue",
      queueItems: ["Pending", "Reviewed", "Flagged"],
    },
    home: {
      platform: [
        {
          title: "Built for academic governance",
          body: "Support college-level oversight with clear role access, traceable training activity, and structured review flows.",
        },
        {
          title: "Designed for field verification",
          body: "Keep attendance, prescription activity, and supervisor feedback organized around real pharmacy rotations.",
        },
        {
          title: "Ready for institutional reporting",
          body: "Give program coordinators a dependable view of student progress without turning the site into a storefront.",
        },
      ],
      sections: [
        {
          title: "One workspace for practical pharmacy training.",
          body: "Students record attendance and prescriptions, supervisors review progress, and university admins monitor training quality from a clear role-based experience.",
        },
        {
          title: "Professional controls for real training programs.",
          body: "Designed for field training where verification, visibility, and accountable review matter every day.",
        },
      ],
      workflowTitle: "How the training flow works",
      workflowSubtitle:
        "A focused operating model for pharmacy colleges managing students, supervisors, pharmacies, and university administrators.",
      workflow: [
        {
          title: "Student attendance",
          body: "Students check in at pharmacy training locations and keep their progress organized.",
        },
        {
          title: "Prescription collection",
          body: "Training activity can include logged prescription counts and learning evidence.",
        },
        {
          title: "Supervisor review",
          body: "Supervisors review submitted activity and help students improve during rotations.",
        },
        {
          title: "University monitoring",
          body: "Admins follow attendance, training status, and program-level activity.",
        },
      ],
    },
    features: {
      eyebrow: "Platform modules",
      title: "Features built for pharmacy training teams",
      subtitle:
        "Clean role-based tools for students, supervisors, admins, and university training offices.",
      cards: [
        {
          title: "Attendance tracking",
          body: "Monitor student attendance during practical pharmacy training with clear status visibility.",
        },
        {
          title: "Prescription collection",
          body: "Track prescription-related learning activity without exposing patient identities.",
        },
        {
          title: "Progress overview",
          body: "Follow student completion, activity totals, and training readiness in one place.",
        },
        {
          title: "Supervisor review",
          body: "Give supervisors a focused path to review student activity and training notes.",
        },
        {
          title: "Admin monitoring",
          body: "Support university and college teams with organized monitoring across cohorts.",
        },
        {
          title: "Bilingual interface",
          body: "Arabic RTL and English LTR presentation for mixed-language academic environments.",
        },
      ],
    },
    screenshots: {
      eyebrow: "App interface placeholders",
      title: "Screens for the workflows your team will manage",
      subtitle:
        "Lightweight UI placeholders show where app screenshots can be inserted later without adding heavy assets or patient imagery.",
      items: [
        {
          title: "Admin monitoring",
          caption: "Cohort and university overview",
          lines: ["Attendance compliance", "Cohort completion", "Supervisor exceptions"],
        },
        {
          title: "Student mobile app",
          caption: "Training activity capture",
          lines: ["Check-in status", "Prescription collection", "Progress summary"],
        },
        {
          title: "Supervisor review",
          caption: "Structured approval workflow",
          lines: ["Submitted activity", "Review decision", "Follow-up notes"],
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle:
        "Straight answers for colleges, supervisors, and students before activation.",
      items: [
        {
          question: "Who is the platform for?",
          answer:
            "It is built for pharmacy students, field supervisors, college administrators, and university training offices managing practical pharmacy rotations.",
        },
        {
          question: "Does the website store patient photos?",
          answer:
            "No. The website and visual placeholders avoid patient or human faces, and the product copy is written around training records rather than patient-identifying media.",
        },
        {
          question: "When are activation codes issued?",
          answer:
            "Activation codes are issued only after payment and program details are confirmed by the app owner.",
        },
        {
          question: "Can the site run on Cloudflare Pages?",
          answer:
            "Yes. It is a lightweight static Vite build with Cloudflare headers and redirects copied into the final dist folder.",
        },
      ],
    },
    cta: {
      eyebrow: "Start a controlled rollout",
      title: "Prepare your pharmacy training cohort with verified activation and clear supervisor review.",
      subtitle:
        "Use the activation form for approved students, supervisors, or admin users, then install the Android APK when your code is issued.",
    },
    download: {
      title: "Download APK",
      subtitle:
        "Install the Android app after receiving an activation code from the training team.",
      cardTitle: "Android package",
      status: "APK link placeholder",
      body: "Add the final APK file URL here when the release is approved for distribution.",
      release: {
        versionLabel: "Version",
        version: "v1.0.0",
        dateLabel: "Release date",
        date: "June 17, 2026",
        sizeLabel: "File size",
        size: "38.6 MB",
        linkLabel: "Placeholder APK link",
        href: "/downloads/pharmacy-training-tracker-v1.0.0.apk",
        button: "Download placeholder APK",
        note: "This link is a placeholder until the signed production APK is uploaded.",
      },
      installTitle: "Installation instructions",
      installSteps: [
        "Download the APK from the official link shown on this page.",
        "Open the downloaded file on your Android device.",
        "If prompted, allow installation from this trusted source.",
        "Launch the app and enter your activation code when requested.",
      ],
      requirementsTitle: "Before installing",
      requirements: [
        "Use the official APK link provided by the app owner.",
        "Keep your activation code ready before first login.",
        "Install only on the device used for pharmacy training.",
      ],
    },
    activation: {
      title: "Request Activation",
      subtitle:
        "Submit payment and program details so the team can verify your request and issue an activation code.",
      formTitle: "Activation form",
      fields: {
        fullName: "Full name",
        email: "Email",
        phone: "Phone number",
        university: "University / college",
        role: "Role",
        paymentDate: "Payment date",
        paymentAmount: "Payment amount",
        qiSender: "Qi transfer sender name / phone",
        receipt: "Receipt screenshot",
        notes: "Notes / questions",
      },
      roleOptions: ["Student", "Supervisor", "Admin"],
      placeholders: {
        fullName: "Your full name",
        email: "name@example.com",
        phone: "+964...",
        university: "College of Pharmacy",
        paymentAmount: "Amount paid",
        qiSender: "Sender name and Qi phone number",
        receipt: "Upload receipt screenshot",
        notes: "Any details the activation team should know",
      },
      notice:
        "Submitting this form does not activate the app automatically. Activation is completed after payment confirmation.",
    },
    payment: {
      title: "Payment Instructions",
      subtitle:
        "Use the official payment details provided by the app owner, then request activation with your transfer information.",
      warning:
        "Activation codes are issued only after payment confirmation in our account. Receipt screenshots alone are not final proof of payment.",
      stepsTitle: "Payment process",
      steps: [
        "Send the payment using the approved Qi transfer details.",
        "Keep the sender name, phone number, payment date, and amount.",
        "Submit the activation form with a receipt screenshot placeholder.",
        "Wait for account confirmation before receiving the activation code.",
      ],
    },
    contact: {
      title: "Contact",
      subtitle:
        "For university activation, supervisor onboarding, or admin monitoring requests, contact the Pharmacy Training Tracker team.",
      cards: [
        { title: "Email", body: "activation@example.com" },
        { title: "Phone", body: "+964 000 000 0000" },
        { title: "Hours", body: "Sunday to Thursday, 9:00 AM - 5:00 PM" },
      ],
      formTitle: "Send a message",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "name@example.com",
        message: "How can we help?",
      },
      send: "Send message",
    },
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: June 17, 2026",
      sections: [
        {
          title: "Purpose",
          body: "Pharmacy Training Tracker supports pharmacy training management for students, supervisors, and university administrators.",
        },
        {
          title: "Information collected",
          body: "The app may collect account details, role information, attendance records, prescription collection counts, training notes, and activation/payment verification details.",
        },
        {
          title: "Patient privacy",
          body: "The service is intended for training progress tracking and should not store patient faces or patient-identifying images.",
        },
        {
          title: "Use of information",
          body: "Information is used to manage activation, track training progress, support supervisor review, and provide university monitoring.",
        },
        {
          title: "Contact",
          body: "Privacy questions can be sent to the official contact email listed on this website.",
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      updated: "Last updated: June 17, 2026",
      sections: [
        {
          title: "Authorized use",
          body: "The app is for approved pharmacy training participants, supervisors, and administration teams.",
        },
        {
          title: "Activation",
          body: "Activation codes may be issued after payment and program details are confirmed by the app owner.",
        },
        {
          title: "User responsibility",
          body: "Users must provide accurate training and payment information and must not share activation codes without permission.",
        },
        {
          title: "Training records",
          body: "Attendance, prescription counts, notes, and review data should reflect real training activity.",
        },
        {
          title: "Changes",
          body: "The app owner may update these terms, payment instructions, and activation requirements when needed.",
        },
      ],
    },
    footer: {
      product: "Pharmacy Training Tracker",
      note: "Professional Android training management for pharmacy colleges and supervised practical rotations.",
      cloudflare: "Cloudflare Pages ready",
    },
  },
  ar: {
    meta: {
      lang: "ar",
      dir: "rtl",
      languageName: "العربية",
      toggleLabel: "English",
      appName: "Pharmacy Training Tracker",
      appShortName: "متتبع التدريب الصيدلاني",
      navLabel: "التنقل الرئيسي",
    },
    nav: [
      { id: "home", label: "الرئيسية" },
      { id: "features", label: "المميزات" },
      { id: "download", label: "تحميل APK" },
      { id: "activation", label: "طلب التفعيل" },
      { id: "payment", label: "تعليمات الدفع" },
      { id: "contact", label: "اتصل بنا" },
      { id: "privacy", label: "سياسة الخصوصية" },
      { id: "terms", label: "شروط الاستخدام" },
    ],
    actions: {
      requestActivation: "طلب التفعيل",
      downloadApk: "تحميل APK",
      viewFeatures: "عرض المميزات",
      payment: "تعليمات الدفع",
      submit: "إرسال طلب التفعيل",
      upload: "رفع صورة الوصل",
      backHome: "العودة للرئيسية",
    },
    hero: {
      eyebrow: "إدارة التدريب الصيدلاني الجامعي",
      title: "تابع التدريب الصيدلاني بوضوح.",
      body: "تطبيق أندرويد احترافي لإدارة الحضور في الصيدليات، جمع الوصفات، تقدم الطالب، مراجعة المشرف، ومتابعة الإدارة والجامعة.",
      trust: "مصمم للكليات والصيدليات والمشرفين وإدارات التدريب.",
      previewTitle: "لوحة التدريب",
      previewItems: [
        ["الحضور", "92%"],
        ["الوصفات", "184"],
        ["مراجعات المشرف", "31"],
      ],
      stats: [
        { value: "RTL + LTR", label: "العربية والإنجليزية" },
        { value: "5", label: "مسارات تدريب" },
        { value: "Cloudflare", label: "جاهز للاستضافة" },
      ],
    },
    home: {
      sections: [
        {
          title: "مساحة واحدة للتدريب الصيدلاني العملي.",
          body: "يسجل الطلاب الحضور والوصفات، ويراجع المشرفون التقدم، وتتابع إدارات الجامعات جودة التدريب من تجربة واضحة حسب الدور.",
        },
        {
          title: "ضوابط احترافية لبرامج التدريب الواقعية.",
          body: "مصمم للتدريب الميداني حيث تكون الموثوقية والوضوح والمراجعة المسؤولة مهمة كل يوم.",
        },
      ],
      workflowTitle: "كيف يعمل مسار التدريب",
      workflow: [
        {
          title: "حضور الطالب",
          body: "يسجل الطلاب حضورهم في مواقع التدريب الصيدلاني ويحافظون على تنظيم تقدمهم.",
        },
        {
          title: "جمع الوصفات",
          body: "يمكن أن يتضمن النشاط التدريبي أعداد الوصفات وأدلة التعلم بدون كشف هوية المرضى.",
        },
        {
          title: "مراجعة المشرف",
          body: "يراجع المشرفون نشاط الطلاب وملاحظات التدريب لدعم التحسن أثناء الدورات.",
        },
        {
          title: "متابعة الجامعة",
          body: "تتابع الإدارة الحضور وحالة التدريب والنشاط العام للبرنامج.",
        },
      ],
    },
    features: {
      title: "مميزات مبنية لفرق التدريب الصيدلاني",
      subtitle:
        "أدوات واضحة حسب الدور للطلاب والمشرفين والإدارة ومكاتب التدريب الجامعي.",
      cards: [
        {
          title: "تتبع الحضور",
          body: "متابعة حضور الطلاب أثناء التدريب الصيدلاني العملي مع وضوح حالة كل طالب.",
        },
        {
          title: "جمع الوصفات",
          body: "تتبع نشاط التعلم المرتبط بالوصفات بدون إظهار هويات المرضى.",
        },
        {
          title: "نظرة على التقدم",
          body: "متابعة الإنجاز وإجمالي الأنشطة وجاهزية التدريب من مكان واحد.",
        },
        {
          title: "مراجعة المشرف",
          body: "مسار مركز للمشرفين لمراجعة نشاط الطالب وملاحظات التدريب.",
        },
        {
          title: "متابعة الإدارة",
          body: "دعم فرق الجامعة والكلية في متابعة منظمة للدفعات التدريبية.",
        },
        {
          title: "واجهة ثنائية اللغة",
          body: "عرض عربي من اليمين إلى اليسار وإنجليزي من اليسار إلى اليمين للبيئات الأكاديمية متعددة اللغة.",
        },
      ],
    },
    download: {
      title: "تحميل APK",
      subtitle:
        "ثبت تطبيق أندرويد بعد استلام رمز التفعيل من فريق التدريب.",
      cardTitle: "حزمة أندرويد",
      status: "رابط APK مؤقت",
      body: "أضف رابط ملف APK النهائي هنا بعد اعتماد الإصدار للتوزيع.",
      requirementsTitle: "قبل التثبيت",
      requirements: [
        "استخدم رابط APK الرسمي المقدم من مالك التطبيق.",
        "احتفظ برمز التفعيل قبل تسجيل الدخول لأول مرة.",
        "ثبت التطبيق فقط على الجهاز المستخدم للتدريب الصيدلاني.",
      ],
    },
    activation: {
      title: "طلب التفعيل",
      subtitle:
        "أرسل تفاصيل الدفع والبرنامج ليتمكن الفريق من التحقق وإصدار رمز التفعيل.",
      formTitle: "نموذج التفعيل",
      fields: {
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        university: "الجامعة / الكلية",
        role: "الدور",
        paymentDate: "تاريخ الدفع",
        paymentAmount: "مبلغ الدفع",
        qiSender: "اسم / هاتف مرسل تحويل Qi",
        receipt: "صورة الوصل",
        notes: "ملاحظات / أسئلة",
      },
      roleOptions: ["طالب", "مشرف", "إدارة"],
      placeholders: {
        fullName: "اكتب اسمك الكامل",
        email: "name@example.com",
        phone: "+964...",
        university: "كلية الصيدلة",
        paymentAmount: "المبلغ المدفوع",
        qiSender: "اسم المرسل ورقم هاتف Qi",
        receipt: "ارفع صورة الوصل",
        notes: "أي تفاصيل يحتاج فريق التفعيل لمعرفتها",
      },
      notice:
        "إرسال هذا النموذج لا يفعل التطبيق تلقائيا. يتم التفعيل بعد تأكيد وصول الدفع.",
    },
    payment: {
      title: "تعليمات الدفع",
      subtitle:
        "استخدم تفاصيل الدفع الرسمية المقدمة من مالك التطبيق، ثم اطلب التفعيل مع معلومات التحويل.",
      warning:
        "تصدر رموز التفعيل فقط بعد تأكيد وصول الدفع إلى حسابنا. صور الوصولات وحدها ليست دليلا نهائيا على الدفع.",
      stepsTitle: "خطوات الدفع",
      steps: [
        "أرسل الدفع باستخدام تفاصيل تحويل Qi المعتمدة.",
        "احتفظ باسم المرسل ورقم الهاتف وتاريخ الدفع والمبلغ.",
        "أرسل نموذج التفعيل مع مكان رفع صورة الوصل.",
        "انتظر تأكيد وصول المبلغ قبل استلام رمز التفعيل.",
      ],
    },
    contact: {
      title: "اتصل بنا",
      subtitle:
        "لتفعيل الجامعات أو انضمام المشرفين أو طلبات متابعة الإدارة، تواصل مع فريق Pharmacy Training Tracker.",
      cards: [
        { title: "البريد الإلكتروني", body: "activation@example.com" },
        { title: "الهاتف", body: "+964 000 000 0000" },
        { title: "أوقات العمل", body: "الأحد إلى الخميس، 9:00 صباحا - 5:00 مساء" },
      ],
      formTitle: "أرسل رسالة",
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
      },
      placeholders: {
        name: "اسمك",
        email: "name@example.com",
        message: "كيف يمكننا المساعدة؟",
      },
      send: "إرسال الرسالة",
    },
    privacy: {
      title: "سياسة الخصوصية",
      updated: "آخر تحديث: 17 حزيران 2026",
      sections: [
        {
          title: "الغرض",
          body: "يدعم Pharmacy Training Tracker إدارة التدريب الصيدلاني للطلاب والمشرفين وإدارات الجامعات.",
        },
        {
          title: "المعلومات التي يتم جمعها",
          body: "قد يجمع التطبيق تفاصيل الحساب والدور وسجلات الحضور وأعداد جمع الوصفات وملاحظات التدريب وتفاصيل التحقق من التفعيل والدفع.",
        },
        {
          title: "خصوصية المرضى",
          body: "الخدمة مخصصة لتتبع تقدم التدريب ويجب ألا تخزن وجوه المرضى أو صورا تكشف هوياتهم.",
        },
        {
          title: "استخدام المعلومات",
          body: "تستخدم المعلومات لإدارة التفعيل وتتبع تقدم التدريب ودعم مراجعة المشرف وتوفير متابعة الجامعة.",
        },
        {
          title: "التواصل",
          body: "يمكن إرسال أسئلة الخصوصية إلى البريد الرسمي المذكور في هذا الموقع.",
        },
      ],
    },
    terms: {
      title: "شروط الاستخدام",
      updated: "آخر تحديث: 17 حزيران 2026",
      sections: [
        {
          title: "الاستخدام المصرح",
          body: "التطبيق مخصص للمشاركين المعتمدين في التدريب الصيدلاني والمشرفين وفرق الإدارة.",
        },
        {
          title: "التفعيل",
          body: "قد تصدر رموز التفعيل بعد تأكيد الدفع وتفاصيل البرنامج من قبل مالك التطبيق.",
        },
        {
          title: "مسؤولية المستخدم",
          body: "يجب على المستخدمين تقديم معلومات تدريب ودفع دقيقة وعدم مشاركة رموز التفعيل بدون إذن.",
        },
        {
          title: "سجلات التدريب",
          body: "يجب أن يعكس الحضور وأعداد الوصفات والملاحظات وبيانات المراجعة نشاط التدريب الحقيقي.",
        },
        {
          title: "التغييرات",
          body: "يمكن لمالك التطبيق تحديث هذه الشروط وتعليمات الدفع ومتطلبات التفعيل عند الحاجة.",
        },
      ],
    },
    footer: {
      product: "Pharmacy Training Tracker",
      note: "إدارة تدريب أندرويد احترافية لكليات الصيدلة والدورات العملية بإشراف.",
      cloudflare: "جاهز لـ Cloudflare Pages",
    },
  },
};

Object.assign(translations.ar.hero, {
  consoleTitle: "عمليات التدريب في الكلية",
  status: "عرض الدفعة الحالي",
  reviewQueue: "قائمة مراجعة المشرف",
  queueItems: ["قيد الانتظار", "تمت المراجعة", "بحاجة متابعة"],
});

translations.ar.home.platform = [
  {
    title: "مصمم للحوكمة الأكاديمية",
    body: "يدعم متابعة الكلية بصلاحيات واضحة حسب الدور، وسجلات تدريب قابلة للمراجعة، ومسارات اعتماد منظمة.",
  },
  {
    title: "مناسب للتحقق الميداني",
    body: "ينظم الحضور ونشاط الوصفات وملاحظات المشرف ضمن دورات التدريب الواقعية في الصيدليات.",
  },
  {
    title: "جاهز للتقارير المؤسسية",
    body: "يوفر لمنسقي البرامج رؤية موثوقة لتقدم الطلاب بدون أن يبدو الموقع كمتجر إلكتروني.",
  },
];

translations.ar.home.workflowSubtitle =
  "نموذج تشغيلي مركز لكليات الصيدلة التي تدير الطلاب والمشرفين والصيدليات وإدارات الجامعة.";

translations.ar.features.eyebrow = "وحدات المنصة";

translations.ar.screenshots = {
  eyebrow: "أماكن مخصصة لواجهات التطبيق",
  title: "شاشات للمهام التي سيديرها فريق التدريب",
  subtitle:
    "أماكن خفيفة لعرض لقطات التطبيق لاحقا بدون إضافة ملفات كبيرة أو صور وجوه أو محتوى يكشف هوية المرضى.",
  items: [
    {
      title: "متابعة الإدارة",
      caption: "نظرة على الدفعة والجامعة",
      lines: ["الالتزام بالحضور", "إنجاز الدفعة", "استثناءات المشرفين"],
    },
    {
      title: "تطبيق الطالب",
      caption: "تسجيل نشاط التدريب",
      lines: ["حالة تسجيل الحضور", "جمع الوصفات", "ملخص التقدم"],
    },
    {
      title: "مراجعة المشرف",
      caption: "مسار اعتماد منظم",
      lines: ["النشاط المرسل", "قرار المراجعة", "ملاحظات المتابعة"],
    },
  ],
};

translations.ar.faq = {
  title: "الأسئلة الشائعة",
  subtitle: "إجابات مباشرة للكليات والمشرفين والطلاب قبل التفعيل.",
  items: [
    {
      question: "لمن صممت المنصة؟",
      answer:
        "صممت لطلاب الصيدلة والمشرفين الميدانيين وإدارات الكليات ومكاتب التدريب الجامعي التي تدير التدريب العملي.",
    },
    {
      question: "هل يخزن الموقع صور مرضى؟",
      answer:
        "لا. يتجنب الموقع وأماكن الصور استخدام وجوه المرضى أو الأشخاص، ويركز المحتوى على سجلات التدريب فقط.",
    },
    {
      question: "متى تصدر رموز التفعيل؟",
      answer:
        "تصدر رموز التفعيل فقط بعد تأكيد الدفع وتفاصيل البرنامج من قبل مالك التطبيق.",
    },
    {
      question: "هل يمكن استضافة الموقع على Cloudflare Pages؟",
      answer:
        "نعم. الموقع مبني كإخراج Vite ثابت وخفيف مع نسخ إعدادات Cloudflare للـ headers والـ redirects إلى مجلد dist.",
    },
  ],
};

translations.ar.cta = {
  eyebrow: "ابدأ إطلاقا منظما",
  title: "جهز دفعة التدريب الصيدلاني بتفعيل موثق ومراجعة مشرفين واضحة.",
  subtitle:
    "استخدم نموذج التفعيل للطلاب أو المشرفين أو مستخدمي الإدارة المعتمدين، ثم ثبت تطبيق أندرويد بعد إصدار الرمز.",
};

Object.assign(translations.ar.download, {
  release: {
    versionLabel: "الإصدار",
    version: "v1.0.0",
    dateLabel: "تاريخ الإصدار",
    date: "17 حزيران 2026",
    sizeLabel: "حجم الملف",
    size: "38.6 MB",
    linkLabel: "رابط APK مؤقت",
    href: "/downloads/pharmacy-training-tracker-v1.0.0.apk",
    button: "تحميل APK مؤقت",
    note: "هذا الرابط مؤقت إلى أن يتم رفع ملف APK الإنتاجي الموقع.",
  },
  installTitle: "تعليمات التثبيت",
  installSteps: [
    "حمل ملف APK من الرابط الرسمي الظاهر في هذه الصفحة.",
    "افتح الملف بعد اكتمال التحميل على جهاز أندرويد.",
    "إذا طلب النظام ذلك، اسمح بالتثبيت من هذا المصدر الموثوق.",
    "افتح التطبيق وأدخل رمز التفعيل عند الطلب.",
  ],
});
