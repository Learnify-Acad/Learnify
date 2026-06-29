/**
 * Learnify Academy — full bilingual portal content (child-friendly tone)
 */
const academyTranslations = {
    ar: {
        meta: {
            title: 'Learnify Academy — بوابة المناهج',
            loginTitle: 'دخول Learnify Academy',
            portalTitle: 'Learnify Academy — صيف 2026'
        },
        login: {
            heading: 'مرحباً بكم في Learnify Academy',
            subheading: 'محتوى المناهج والكامبات متاح للأهالي والمعلمين بكلمة مرور',
            passwordLabel: 'كلمة المرور',
            passwordPlaceholder: 'أدخل كلمة المرور',
            submit: 'دخول',
            error: 'كلمة المرور غير صحيحة. حاول مرة أخرى.',
            hint: 'للحصول على كلمة المرور تواصل معنا على واتساب',
            contact: '01038583382'
        },
        nav: {
            home: 'الرئيسية',
            courses: 'الكورسات',
            camps: 'الكامبات',
            ageGuide: 'دليل العمر',
            contact: 'تواصل',
            logout: 'خروج',
            competition: 'مسابقة المدرسة'
        },
        hero: {
            title: 'Learnify Academy — صيف 2026',
            subtitle: 'مكان طفلك يتعلم فيه بمرح: ألعاب، تطبيقات، روبوتات، وذكاء اصطناعي — بأسلوب سهل وممتع',
            tagline: 'من الماضي نبني المستقبل'
        },
        intro: {
            title: 'ليه Learnify Academy؟',
            parent: 'للأهالي: وقت الشاشة يتحول لمهارة مفيدة — مشاريع حقيقية كل فترة، أسعار مناسبة، ومتابعة واضحة.',
            child: 'للأطفال: هتعمل حاجة بإيدك — لعبة، تطبيق، روبوت، أو مشروع ذكاء — وتعرضها قدام أهلك وصحابك!',
            note: 'مش محتاج تعرف برمجة قبل كده. بنبدأ من الصفر خطوة خطوة.'
        },
        stats: {
            courses: 'كورسات',
            camps: 'كامبات صيف',
            ages: 'سنة عمر',
            beginner: 'مبتدئ — بدون خبرة'
        },
        courses: {
            title: 'الكورسات الكاملة (طول العام)',
            subtitle: 'كل كورس فيه مشاريع صغيرة كل أسبوع — ومشروع كبير في الآخر. لغة سهلة وشرح بالعربي.',
            sc: {
                name: 'Scratch والإبداع',
                code: 'LF-SC',
                age: '6–11 سنة | الصف 1–5',
                duration: '12 أسبوع',
                price: '550 ج (مجموعة)',
                desc: 'أول خطوة: قصص ملونة وألعاب بسيطة بدون كتابة كود معقد.',
                project: 'مشروع نهائي: لعبة "رحلة الفرعون"'
            },
            gd: {
                name: 'صناعة الألعاب',
                code: 'LF-GD',
                age: '8–16 سنة | الصف 3+',
                duration: '16 أسبوع',
                price: '750 ج (مجموعة)',
                desc: 'من لعبة Scratch لحد ألعاب أكبر — خطوة ورا خطوة.',
                project: 'مشروع نهائي: لعبة مغامرة كاملة'
            },
            rb: {
                name: 'الروبوتات',
                code: 'LF-RB',
                age: '7–16 سنة | الصف 5+',
                duration: '20 أسبوع',
                price: '850 ج (مجموعة)',
                desc: 'توصيل دوائر، برمجة Arduino، وروبوت يتحرك من الموبايل.',
                project: 'مشروع نهائي: روبوت بالبلوتوث'
            },
            ap: {
                name: 'تطبيقات الموبايل',
                code: 'LF-AP',
                age: '9–15 سنة | الصف 5+',
                duration: '12 أسبوع',
                price: '650 ج (مجموعة)',
                desc: 'تطبيق حقيقي على تليفون Android — كويز أو دليل أو ريموت.',
                project: 'مشروع نهائي: تطبيق جاهز للعرض'
            },
            wb: {
                name: 'صناعة المواقع',
                code: 'LF-WB',
                age: '10–16 سنة | الصف 6+',
                duration: '14 أسبوع',
                price: '700 ج (مجموعة)',
                desc: 'صفحة شخصية وموقع بسيط — HTML و CSS بلغة سهلة.',
                project: 'مشروع نهائي: موقع Portfolio'
            },
            py: {
                name: 'بايثون للمبتدئين',
                code: 'LF-PY',
                age: '10–18 سنة | الصف 6+',
                duration: '16 أسبوع',
                price: '800 ج (مجموعة)',
                desc: 'برامج تفاعلية وألعاب نصية — أساس قوي للمستقبل.',
                project: 'مشروع نهائي: محاكي أو لعبة نصية'
            },
            ai: {
                name: 'اكتشف الذكاء الاصطناعي',
                code: 'LF-AI',
                age: '10–16 سنة | الصف 7+',
                duration: '12 أسبوع',
                price: '750 ج (مجموعة)',
                desc: 'إزاي الكمبيوتر "يتعرف" على الصور — بدون رياضيات صعبة.',
                project: 'مشروع نهائي: كاشف صور أو مساعد بسيط'
            },
            cy: {
                name: 'أمان على الإنترنت',
                code: 'LF-CY',
                age: '11–16 سنة | الصف 7+',
                duration: '8 أسابيع',
                price: '500 ج (مجموعة)',
                desc: 'حماية نفسك أونلاين — كلمات سر، خصوصية، وتصيّد.',
                project: 'مشروع نهائي: دليل أمان رقمي'
            }
        },
        camps: {
            title: 'كامبات الصيف (أسبوعان)',
            subtitle: '10 أيام مركّزة — في الآخر مشروع كبير ويوم عرض للأهالي (Demo Day).',
            specs: '4 ساعات يومياً | 9 ص – 1 م | مجموعات صغيرة | شهادة + فيديو مشروع',
            ai: { name: 'كامب صناع AI', code: 'CAMP-AI', age: '10–16', price: '850 ج', desc: 'مشروع ذكاء يتعرف على صور أو يرد على أسئلة بسيطة.' },
            gj: { name: 'كامب Game Jam', code: 'CAMP-GJ', age: '8–14', price: '550 ج', desc: 'لعبة Scratch كاملة في أسبوعين — الأكثر متعة للأطفال!' },
            rb: { name: 'كامب الروبوت', code: 'CAMP-RB', age: '9–16', price: '950 ج', desc: 'روبوت + تحكم من الموبايل. فرق 2–3 طلاب.' },
            ap: { name: 'كامب التطبيقات', code: 'CAMP-AP', age: '10–15', price: '650 ج', desc: 'تطبيق موبايل جاهز في أسبوعين.' },
            wb: { name: 'كامب الويب', code: 'CAMP-WB', age: '11–16', price: '750 ج', desc: 'موقع شخصي تفاعلي — أول خطوة في عالم الويب.' },
            in: { name: 'كامب المخترع الصغير', code: 'CAMP-IN', age: '6–9', price: '450 ج', desc: 'للصغار: قصة تفاعلية + نشاط يدوي ممتع.' },
            demo: 'يوم العرض: الطفل يشرح مشروعه 5 دقائق قدام الأهل — وياخد شهادة وجائزة.'
        },
        age: {
            title: 'هل الكورس مناسب لطفلي؟',
            subtitle: 'جدول بسيط يساعدك تختار — ولو لسه مبتدئ، ابدأ من العلامة الخضراء.',
            table: {
                h1: 'الصف', h2: 'العمر', h3: 'ابدأ من هنا', h4: 'كورسات', h5: 'كامبات'
            },
            g12: { grade: '1–2', age: '6–8', start: 'CAMP-IN / LF-SC', courses: 'LF-SC', camps: 'CAMP-IN' },
            g34: { grade: '3–4', age: '8–10', start: 'CAMP-GJ / LF-SC', courses: 'LF-SC, LF-GD', camps: 'CAMP-GJ' },
            g56: { grade: '5–6', age: '10–12', start: 'CAMP-GJ', courses: 'LF-GD, LF-AP, LF-PY', camps: 'GJ, AP, RB' },
            g78: { grade: '7–8', age: '12–14', start: 'LF-PY / CAMP-AI', courses: 'PY, WB, AI, RB', camps: 'AI, WB, RB' },
            g9: { grade: '9', age: '14–16', start: 'LF-AI + LF-PY', courses: 'AI, CY, PY, WB', camps: 'AI, WB' },
            faq1q: 'ابني مش عارف برمجة — ينفع؟',
            faq1a: 'أيوه! الكورسات والكامبات المبتدئة بتبدأ من الصفر. بنستخدم ألوان وصور ومشاريع لعب.',
            faq2q: 'ابني عنده 7 سنوات — إيه الأنسب؟',
            faq2a: 'CAMP-IN أو LF-SC فقط. جلسات قصيرة وممتعة بدون ضغط.',
            faq3q: 'الشرح صعب على الأطفال؟',
            faq3a: 'لا — بنتكلم عربي بسيط، ومصطلحات إنجليزية أساسية فقط. 80% وقت عملي على الكمبيوتر.'
        },
        pricing: {
            title: 'أسعار مناسبة للأسرة المصرية',
            note: 'أسعار مجموعات — تقسيط متاح. برايفت: اسأل على واتساب.',
            campBundle: 'كامب + كورس خريف: خصم 15%',
            siblings: 'أخ/أخت تاني: خصم 10%'
        },
        contact: {
            title: 'احجز أو اسأل',
            whatsapp: 'واتساب',
            phone: '01038583382',
            hours: 'الأحد – الخميس: 9 ص – 6 م',
            cta: 'تواصل على واتساب',
            downloads: 'تحميل PDF'
        },
        buttons: {
            print: 'طباعة / PDF',
            downloadCourses: 'دليل الكورسات',
            downloadCamps: 'كتalog الكامبات',
            downloadAge: 'دليل العمر',
            downloadBrochure: 'بروشور سريع'
        }
    },
    en: {
        meta: {
            title: 'Learnify Academy — Curriculum Portal',
            loginTitle: 'Learnify Academy Login',
            portalTitle: 'Learnify Academy — Summer 2026'
        },
        login: {
            heading: 'Welcome to Learnify Academy',
            subheading: 'Course and camp details for parents and teachers — password required',
            passwordLabel: 'Password',
            passwordPlaceholder: 'Enter password',
            submit: 'Sign in',
            error: 'Incorrect password. Please try again.',
            hint: 'Contact us on WhatsApp for access',
            contact: '01038583382'
        },
        nav: {
            home: 'Home',
            courses: 'Courses',
            camps: 'Camps',
            ageGuide: 'Age Guide',
            contact: 'Contact',
            logout: 'Log out',
            competition: 'School Competition'
        },
        hero: {
            title: 'Learnify Academy — Summer 2026',
            subtitle: 'Where kids learn with fun: games, apps, robots, and AI — simple steps, real projects',
            tagline: 'From the Past We Build the Future'
        },
        intro: {
            title: 'Why Learnify Academy?',
            parent: 'For parents: turn screen time into useful skills — real projects, fair prices, clear progress.',
            child: 'For kids: build something yourself — a game, app, robot, or AI project — and show it to everyone!',
            note: 'No coding experience needed. We start from zero, step by step.'
        },
        stats: {
            courses: 'Courses',
            camps: 'Summer camps',
            ages: 'Years old',
            beginner: 'Beginners welcome'
        },
        courses: {
            title: 'Full-Year Courses',
            subtitle: 'Small weekly projects plus one big final project. Simple language, Arabic-first teaching.',
            sc: {
                name: 'Scratch & Creativity',
                code: 'LF-SC',
                age: 'Ages 6–11 | Grades 1–5',
                duration: '12 weeks',
                price: '550 EGP (group)',
                desc: 'First step: colorful stories and easy games — no hard typing.',
                project: 'Final: "Pharaoh\'s Journey" game'
            },
            gd: {
                name: 'Game Creators',
                code: 'LF-GD',
                age: 'Ages 8–16 | Grade 3+',
                duration: '16 weeks',
                price: '750 EGP (group)',
                desc: 'From Scratch games to bigger projects — one step at a time.',
                project: 'Final: full adventure game'
            },
            rb: {
                name: 'Robo Engineers',
                code: 'LF-RB',
                age: 'Ages 7–16 | Grade 5+',
                duration: '20 weeks',
                price: '850 EGP (group)',
                desc: 'Circuits, Arduino, and a robot you control from your phone.',
                project: 'Final: Bluetooth robot'
            },
            ap: {
                name: 'App Builders',
                code: 'LF-AP',
                age: 'Ages 9–15 | Grade 5+',
                duration: '12 weeks',
                price: '650 EGP (group)',
                desc: 'A real Android app — quiz, guide, or remote control.',
                project: 'Final: app ready to demo'
            },
            wb: {
                name: 'Web Makers',
                code: 'LF-WB',
                age: 'Ages 10–16 | Grade 6+',
                duration: '14 weeks',
                price: '700 EGP (group)',
                desc: 'Personal page and simple website — HTML & CSS made easy.',
                project: 'Final: portfolio website'
            },
            py: {
                name: 'Python Pioneers',
                code: 'LF-PY',
                age: 'Ages 10–18 | Grade 6+',
                duration: '16 weeks',
                price: '800 EGP (group)',
                desc: 'Interactive programs and text games — strong base for the future.',
                project: 'Final: simulator or text game'
            },
            ai: {
                name: 'AI Explorers',
                code: 'LF-AI',
                age: 'Ages 10–16 | Grade 7+',
                duration: '12 weeks',
                price: '750 EGP (group)',
                desc: 'How computers "recognize" pictures — no hard math.',
                project: 'Final: image detector or simple assistant'
            },
            cy: {
                name: 'Cyber Guardians',
                code: 'LF-CY',
                age: 'Ages 11–16 | Grade 7+',
                duration: '8 weeks',
                price: '500 EGP (group)',
                desc: 'Stay safe online — passwords, privacy, and phishing.',
                project: 'Final: digital safety guide'
            }
        },
        camps: {
            title: 'Summer Camps (2 weeks)',
            subtitle: '10 focused days — one big project and a Demo Day for parents.',
            specs: '4 hours daily | 9 AM – 1 PM | small groups | certificate + project video',
            ai: { name: 'AI Makers Camp', code: 'CAMP-AI', age: '10–16', price: '850 EGP', desc: 'AI project that recognizes images or answers simple questions.' },
            gj: { name: 'Game Jam Camp', code: 'CAMP-GJ', age: '8–14', price: '550 EGP', desc: 'Full Scratch game in two weeks — kids love this one!' },
            rb: { name: 'Robot Command Camp', code: 'CAMP-RB', age: '9–16', price: '950 EGP', desc: 'Robot + phone control. Teams of 2–3.' },
            ap: { name: 'App Launch Camp', code: 'CAMP-AP', age: '10–15', price: '650 EGP', desc: 'Mobile app ready in two weeks.' },
            wb: { name: 'Web Studio Camp', code: 'CAMP-WB', age: '11–16', price: '750 EGP', desc: 'Interactive personal website — first step into the web.' },
            in: { name: 'Young Inventor Camp', code: 'CAMP-IN', age: '6–9', price: '450 EGP', desc: 'For little ones: interactive story + fun hands-on activity.' },
            demo: 'Demo Day: your child presents for 5 minutes — certificate and awards.'
        },
        age: {
            title: 'Is this right for my child?',
            subtitle: 'Simple guide — green labels are the best starting points for beginners.',
            table: {
                h1: 'Grade', h2: 'Age', h3: 'Start here', h4: 'Courses', h5: 'Camps'
            },
            g12: { grade: '1–2', age: '6–8', start: 'CAMP-IN / LF-SC', courses: 'LF-SC', camps: 'CAMP-IN' },
            g34: { grade: '3–4', age: '8–10', start: 'CAMP-GJ / LF-SC', courses: 'LF-SC, LF-GD', camps: 'CAMP-GJ' },
            g56: { grade: '5–6', age: '10–12', start: 'CAMP-GJ', courses: 'LF-GD, LF-AP, LF-PY', camps: 'GJ, AP, RB' },
            g78: { grade: '7–8', age: '12–14', start: 'LF-PY / CAMP-AI', courses: 'PY, WB, AI, RB', camps: 'AI, WB, RB' },
            g9: { grade: '9', age: '14–16', start: 'LF-AI + LF-PY', courses: 'AI, CY, PY, WB', camps: 'AI, WB' },
            faq1q: 'My child never coded — is that OK?',
            faq1a: 'Yes! Beginner tracks start from zero with colors, pictures, and play-based projects.',
            faq2q: 'My child is 7 — what fits best?',
            faq2a: 'CAMP-IN or LF-SC only. Short, fun sessions with no pressure.',
            faq3q: 'Is the content too hard for kids?',
            faq3a: 'No — simple Arabic, basic English terms only. 80% hands-on computer time.'
        },
        pricing: {
            title: 'Affordable family pricing',
            note: 'Group rates — installments available. Private lessons: ask on WhatsApp.',
            campBundle: 'Camp + fall course: 15% off',
            siblings: 'Second sibling: 10% off'
        },
        contact: {
            title: 'Book or ask us',
            whatsapp: 'WhatsApp',
            phone: '01038583382',
            hours: 'Sun – Thu: 9 AM – 6 PM',
            cta: 'Chat on WhatsApp',
            downloads: 'Download PDF'
        },
        buttons: {
            print: 'Print / Save PDF',
            downloadCourses: 'Courses catalog',
            downloadCamps: 'Camps catalog',
            downloadAge: 'Age guide',
            downloadBrochure: 'Quick brochure'
        }
    }
};

function getAcademyTranslation(lang, key) {
    const keys = key.split('.');
    let value = academyTranslations[lang];
    for (const k of keys) {
        value = value?.[k];
    }
    return value ?? key;
}
