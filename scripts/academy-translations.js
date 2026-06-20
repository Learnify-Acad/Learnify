/**
 * Learnify Academy — full bilingual portal content (child-friendly tone)
 * Updated: All camps 300 EGP, all courses 900 EGP, learn outcomes added,
 * instructor profiles, student & parent brief cards.
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
            competition: 'مسابقة المدرسة',
            instructors: 'المدربون'
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
            subtitle: 'كل كورس فيه مشاريع صغيرة كل أسبوع — ومشروع كبير في الآخر. لغة سهلة وشرح بالعربي. سعر موحد: 900 ج للجميع.',
            sc: {
                name: 'Scratch والإبداع',
                code: 'LF-SC',
                age: '6–11 سنة | الصف 1–5',
                duration: '12 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'أول خطوة: قصص ملونة وألعاب بسيطة بدون كتابة كود معقد.',
                project: 'مشروع نهائي: لعبة "رحلة الفرعون"',
                learn: '• تعلم سحب وإفلات الكتل لصنع قصص متحركة ملونة\n• ابنِ ألعاب بسيطة بشخصيات وأصوات\n• افهم المفاهيم الأساسية: التكرار والأحداث\n• شارك مشروعك النهائي مع العائلة والأصدقاء'
            },
            gd: {
                name: 'صناعة الألعاب',
                code: 'LF-GD',
                age: '8–16 سنة | الصف 3+',
                duration: '16 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'من لعبة Scratch لحد ألعاب أكبر — خطوة ورا خطوة.',
                project: 'مشروع نهائي: لعبة مغامرة كاملة',
                learn: '• تصميم ألعاب متعددة المراحل باستخدام Scratch ثم Python\n• إضافة أصوات ومؤثرات ونقاط للاعب\n• فهم منطق اللعب والتحديات\n• مشروع نهائي: لعبة مغامرة كاملة'
            },
            rb: {
                name: 'الروبوتات',
                code: 'LF-RB',
                age: '7–16 سنة | الصف 5+',
                duration: '20 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'توصيل دوائر، برمجة Arduino، وروبوت يتحرك من الموبايل.',
                project: 'مشروع نهائي: روبوت بالبلوتوث',
                learn: '• تعلم أساسيات الدوائر الكهربائية والتوصيل\n• برمجة Arduino لتحريك الروبوت\n• التحكم في الروبوت بالبلوتوث من الموبايل\n• استخدام المستشعرات لتجنب العوائق'
            },
            ap: {
                name: 'تطبيقات الموبايل',
                code: 'LF-AP',
                age: '9–15 سنة | الصف 5+',
                duration: '12 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'تطبيق حقيقي على تليفون Android — كويز أو دليل أو ريموت.',
                project: 'مشروع نهائي: تطبيق جاهز للعرض',
                learn: '• تصميم واجهات تطبيقات بسيطة وجذابة\n• برمجة تطبيق حقيقي يعمل على Android\n• استخدام الأزرار والقوائم والشاشات المتعددة\n• مشروع نهائي: تطبيق جاهز للاستخدام'
            },
            wb: {
                name: 'صناعة المواقع',
                code: 'LF-WB',
                age: '10–16 سنة | الصف 6+',
                duration: '14 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'صفحة شخصية وموقع بسيط — HTML و CSS بلغة سهلة.',
                project: 'مشروع نهائي: موقع Portfolio',
                learn: '• تعلم HTML و CSS لبناء صفحات ويب\n• تصميم موقع شخصي بألوان وصور\n• إضافة تأثيرات حركة وتفاعلية\n• جعل الموقع يعمل على الموبايل والكمبيوتر'
            },
            py: {
                name: 'بايثون للمبتدئين',
                code: 'LF-PY',
                age: '10–18 سنة | الصف 6+',
                duration: '16 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'برامج تفاعلية وألعاب نصية — أساس قوي للمستقبل.',
                project: 'مشروع نهائي: محاكي أو لعبة نصية',
                learn: '• كتابة برامج بلغة Python بسيطة وواضحة\n• بناء ألعاب نصية تفاعلية ومحاكيات\n• فهم المتغيرات والحلقات والشروط\n• أساس قوي لأي مسار تقني مستقبلي'
            },
            ai: {
                name: 'اكتشف الذكاء الاصطناعي',
                code: 'LF-AI',
                age: '10–16 سنة | الصف 7+',
                duration: '12 أسبوع',
                price: '900 ج (مجموعة)',
                desc: 'إزاي الكمبيوتر "يتعرف" على الصور — بدون رياضيات صعبة.',
                project: 'مشروع نهائي: كاشف صور أو مساعد بسيط',
                learn: '• فهم كيف يتعلم الكمبيوتر من الصور والبيانات\n• بناء كاشف صور بسيط باستخدام أدوات جاهزة\n• تجربة محادثة مع ذكاء اصطناعي بسيط\n• مشروع نهائي: مساعد ذكي أو كاشف أشياء'
            },
            cy: {
                name: 'أمان على الإنترنت',
                code: 'LF-CY',
                age: '11–16 سنة | الصف 7+',
                duration: '8 أسابيع',
                price: '900 ج (مجموعة)',
                desc: 'حماية نفسك أونلاين — كلمات سر، خصوصية، وتصيّد.',
                project: 'مشروع نهائي: دليل أمان رقمي',
                learn: '• كيفية إنشاء كلمات مرور قوية وآمنة\n• التعرف على الرسائل المخادعة (تصيد)\n• حماية البيانات الشخصية والخصوصية\n• إعداد دليل أمان رقمي للعائلة'
            }
        },
        camps: {
            title: 'كامبات الصيف (أسبوعان)',
            subtitle: '10 أيام مركّزة — في الآخر مشروع كبير ويوم عرض للأهالي (Demo Day). سعر موحد: 300 ج للجميع.',
            specs: '4 ساعات يومياً | 9 ص – 1 م | مجموعات صغيرة | شهادة + فيديو مشروع',
            ai: { name: 'كامب صناع AI', code: 'CAMP-AI', age: '10–16', price: '300 ج', desc: 'مشروع ذكاء يتعرف على صور أو يرد على أسئلة بسيطة.', learn: '• بناء مشروع ذكاء اصطناعي يتعرف على صور\n• تجربة محادثة مع روبوت بسيط\n• فهم كيف تتعلم الآلات دون رياضيات معقدة\n• مشروع نهائي: كاشف صور أو نبات ذكي' },
            gj: { name: 'كامب Game Jam', code: 'CAMP-GJ', age: '8–14', price: '300 ج', desc: 'لعبة Scratch كاملة في أسبوعين — الأكثر متعة للأطفال!', learn: '• تصميم لعبة كاملة في Scratch بشخصيات ومراحل\n• إضافة أصوات ومؤثرات ونقاط\n• اختبار اللعبة مع الأصدقاء\n• يوم العرض: تقديم اللعبة أمام الأهل' },
            rb: { name: 'كامب الروبوت', code: 'CAMP-RB', age: '9–16', price: '300 ج', desc: 'روبوت + تحكم من الموبايل. فرق 2–3 طلاب.', learn: '• تجميع وتوصيل دائرة روبوت بسيط\n• برمجة الروبوت للتحرك والاستجابة\n• التحكم بالروبوت من تطبيق الموبايل\n• مسابقة صغيرة بين الفرق' },
            ap: { name: 'كامب التطبيقات', code: 'CAMP-AP', age: '10–15', price: '300 ج', desc: 'تطبيق موبايل جاهز في أسبوعين.', learn: '• تصميم فكرة تطبيق وحل مشكلة يومية\n• بناء التطبيق باستخدام App Inventor\n• اختباره على موبايل حقيقي\n• مشروع نهائي: تطبيق جاهز للاستخدام' },
            wb: { name: 'كامب الويب', code: 'CAMP-WB', age: '11–16', price: '300 ج', desc: 'موقع شخصي تفاعلي — أول خطوة في عالم الويب.', learn: '• بناء موقع شخصي تفاعلي بـ HTML و CSS\n• إضافة صور وألوان وصفحات متعددة\n• عرض الموقع على العائلة والأصدقاء\n• مشروع نهائي: موقع Portfolio كامل' },
            in: { name: 'كامب المخترع الصغير', code: 'CAMP-IN', age: '6–9', price: '300 ج', desc: 'للصغار: قصة تفاعلية + نشاط يدوي ممتع.', learn: '• سرد قصة تفاعلية رقمية ملونة\n• بناء نشاط يدوي باستخدام Kits إبداعية\n• التعرف على ألوان وأشكال وحركة\n• مشروع نهائي: قصة + نشاط يدوي' },
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
            note: 'سعر موحد: الكورس 900 ج — الكامب 300 ج (مجموعات). تقسيط متاح. برايفت: اسأل على واتساب.',
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
            downloadCamps: 'كتالوج الكامبات',
            downloadAge: 'دليل العمر',
            downloadBrochure: 'بروشور سريع'
        },
        instructors: {
            title: 'فريق المدربين',
            subtitle: 'مدربون متخصصون في تعليم الأطفال والمراهقين — بخبرة تقنية وتربوية.',
            i1: { name: 'أحمد حسن', role: 'مدير أكاديمية Learnify', bio: 'متخصص في تعليم الأطفال البرمجة والروبوتات منذ 5 سنوات. حاصل على شهادة Arduino Certified. يُدرّس: Scratch، Python، وElectronics.' },
            i2: { name: 'سارة محمد', role: 'مهندسة ميكاترونكس', bio: 'مرشدة مسابقات روبوتات (WRO, FIRST). خبرة 4 سنوات في تعليم STEM. تُدرّس: Robotics، App Inventor، وAI للمبتدئين.' },
            i3: { name: 'عمر خالد', role: 'باحث في الذكاء الاصطناعي', bio: 'متخصص في تبسيط المفاهيم التقنية للأطفال. يُدرّس: AI Explorers، Web Development، وCyber Security.' },
            i4: { name: 'ليلى يوسف', role: 'مطورة برمجيات', bio: 'خبيرة في تصميم مشاريع إبداعية للأطفال. تُدرّس: Web Makers، App Builders، وGame Creators.' }
        },
        briefs: {
            studentTitle: 'بطاقة الطالب',
            studentSubtitle: 'إيه اللي هتتعلمه وتحققه؟',
            student1: '• ستبني مشروعاً حقيقياً بيدك',
            student2: '• ستتعلم مهارات المستقبل (AI، برمجة، روبوتات)',
            student3: '• ستعرض مشروعك أمام العائلة والأصدقاء',
            student4: '• ستشارك في مسابقات وتحصل على شهادات',
            parentTitle: 'بطاقة الأهل',
            parentSubtitle: 'ليه تختار Learnify Academy؟',
            parent1: '• تحويل وقت الشاشة إلى مهارة مفيدة',
            parent2: '• مشاريع عملية كل فترة + شهادات معتمدة',
            parent3: '• أسعار مناسبة: الكامب 300 ج — الكورس 900 ج',
            parent4: '• متابعة مستمرة وتقرير عن تقدم الطفل'
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
            competition: 'School Competition',
            instructors: 'Instructors'
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
            subtitle: 'Small weekly projects plus one big final project. Simple language, Arabic-first teaching. Flat rate: 900 EGP for all.',
            sc: {
                name: 'Scratch & Creativity',
                code: 'LF-SC',
                age: 'Ages 6–11 | Grades 1–5',
                duration: '12 weeks',
                price: '900 EGP (group)',
                desc: 'First step: colorful stories and easy games — no hard typing.',
                project: 'Final: "Pharaoh\'s Journey" game',
                learn: '• Learn drag-and-drop blocks to make colorful animated stories\n• Build simple games with characters and sounds\n• Understand basics: loops and events\n• Share your final project with family and friends'
            },
            gd: {
                name: 'Game Creators',
                code: 'LF-GD',
                age: 'Ages 8–16 | Grade 3+',
                duration: '16 weeks',
                price: '900 EGP (group)',
                desc: 'From Scratch games to bigger projects — one step at a time.',
                project: 'Final: full adventure game',
                learn: '• Design multi-level games using Scratch then Python\n• Add sounds, effects, and player scores\n• Understand game logic and challenges\n• Final project: complete adventure game'
            },
            rb: {
                name: 'Robo Engineers',
                code: 'LF-RB',
                age: 'Ages 7–16 | Grade 5+',
                duration: '20 weeks',
                price: '900 EGP (group)',
                desc: 'Circuits, Arduino, and a robot you control from your phone.',
                project: 'Final: Bluetooth robot',
                learn: '• Learn basic electric circuits and wiring\n• Program Arduino to move the robot\n• Control the robot via Bluetooth from your phone\n• Use sensors to avoid obstacles'
            },
            ap: {
                name: 'App Builders',
                code: 'LF-AP',
                age: 'Ages 9–15 | Grade 5+',
                duration: '12 weeks',
                price: '900 EGP (group)',
                desc: 'A real Android app — quiz, guide, or remote control.',
                project: 'Final: app ready to demo',
                learn: '• Design simple and attractive app interfaces\n• Program a real app that works on Android\n• Use buttons, menus, and multiple screens\n• Final project: app ready for use'
            },
            wb: {
                name: 'Web Makers',
                code: 'LF-WB',
                age: 'Ages 10–16 | Grade 6+',
                duration: '14 weeks',
                price: '900 EGP (group)',
                desc: 'Personal page and simple website — HTML & CSS made easy.',
                project: 'Final: portfolio website',
                learn: '• Learn HTML & CSS to build web pages\n• Design a personal site with colors and images\n• Add animations and interactive effects\n• Make the site work on mobile and desktop'
            },
            py: {
                name: 'Python Pioneers',
                code: 'LF-PY',
                age: 'Ages 10–18 | Grade 6+',
                duration: '16 weeks',
                price: '900 EGP (group)',
                desc: 'Interactive programs and text games — strong base for the future.',
                project: 'Final: simulator or text game',
                learn: '• Write simple, clear Python programs\n• Build interactive text games and simulators\n• Understand variables, loops, and conditions\n• Strong foundation for any future tech path'
            },
            ai: {
                name: 'AI Explorers',
                code: 'LF-AI',
                age: 'Ages 10–16 | Grade 7+',
                duration: '12 weeks',
                price: '900 EGP (group)',
                desc: 'How computers "recognize" pictures — no hard math.',
                project: 'Final: image detector or simple assistant',
                learn: '• Understand how computers learn from images and data\n• Build a simple image detector using ready tools\n• Try chatting with a simple AI assistant\n• Final project: smart helper or object detector'
            },
            cy: {
                name: 'Cyber Guardians',
                code: 'LF-CY',
                age: 'Ages 11–16 | Grade 7+',
                duration: '8 weeks',
                price: '900 EGP (group)',
                desc: 'Stay safe online — passwords, privacy, and phishing.',
                project: 'Final: digital safety guide',
                learn: '• Create strong and safe passwords\n• Recognize phishing and scam messages\n• Protect personal data and privacy\n• Build a digital safety guide for the family'
            }
        },
        camps: {
            title: 'Summer Camps (2 weeks)',
            subtitle: '10 focused days — one big project and a Demo Day for parents. Flat rate: 300 EGP for all.',
            specs: '4 hours daily | 9 AM – 1 PM | small groups | certificate + project video',
            ai: { name: 'AI Makers Camp', code: 'CAMP-AI', age: '10–16', price: '300 EGP', desc: 'AI project that recognizes images or answers simple questions.', learn: '• Build an AI project that recognizes images\n• Try chatting with a simple robot\n• Understand how machines learn without hard math\n• Final project: image detector or smart plant' },
            gj: { name: 'Game Jam Camp', code: 'CAMP-GJ', age: '8–14', price: '300 EGP', desc: 'Full Scratch game in two weeks — kids love this one!', learn: '• Design a complete Scratch game with characters & levels\n• Add sounds, effects, and scores\n• Test the game with friends\n• Demo Day: present your game to parents' },
            rb: { name: 'Robot Command Camp', code: 'CAMP-RB', age: '9–16', price: '300 EGP', desc: 'Robot + phone control. Teams of 2–3.', learn: '• Assemble and wire a simple robot circuit\n• Program the robot to move and respond\n• Control the robot from a mobile app\n• Small team competition' },
            ap: { name: 'App Launch Camp', code: 'CAMP-AP', age: '10–15', price: '300 EGP', desc: 'Mobile app ready in two weeks.', learn: '• Design an app idea to solve a daily problem\n• Build the app using App Inventor\n• Test it on a real phone\n• Final project: app ready for use' },
            wb: { name: 'Web Studio Camp', code: 'CAMP-WB', age: '11–16', price: '300 EGP', desc: 'Interactive personal website — first step into the web.', learn: '• Build an interactive personal site with HTML & CSS\n• Add images, colors, and multiple pages\n• Show the site to family and friends\n• Final project: complete portfolio website' },
            in: { name: 'Young Inventor Camp', code: 'CAMP-IN', age: '6–9', price: '300 EGP', desc: 'For little ones: interactive story + fun hands-on activity.', learn: '• Tell a colorful interactive digital story\n• Build a hands-on activity with creative kits\n• Learn colors, shapes, and movement\n• Final project: story + hands-on activity' },
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
            note: 'Flat rate: Course 900 EGP — Camp 300 EGP (groups). Installments available. Private: ask on WhatsApp.',
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
        },
        instructors: {
            title: 'Our Instructors',
            subtitle: 'Specialists in teaching kids and teens — with both technical and educational expertise.',
            i1: { name: 'Ahmed Hassan', role: 'Lead Instructor at Learnify Academy', bio: 'Specialized in teaching kids coding and robotics for 5 years. Arduino Certified. Teaches: Scratch, Python, and Electronics.' },
            i2: { name: 'Sara Mohamed', role: 'Mechatronics Engineer', bio: 'Robotics competition mentor (WRO, FIRST). 4 years STEM teaching experience. Teaches: Robotics, App Inventor, and AI for beginners.' },
            i3: { name: 'Omar Khaled', role: 'AI Researcher', bio: 'Specialized in simplifying technical concepts for children. Teaches: AI Explorers, Web Development, and Cyber Security.' },
            i4: { name: 'Laila Youssef', role: 'Software Developer', bio: 'Expert in designing creative projects for kids. Teaches: Web Makers, App Builders, and Game Creators.' }
        },
        briefs: {
            studentTitle: 'Student Card',
            studentSubtitle: 'What will you learn and achieve?',
            student1: '• Build a real project with your own hands',
            student2: '• Learn future skills (AI, coding, robotics)',
            student3: '• Present your project to family and friends',
            student4: '• Join competitions and earn certificates',
            parentTitle: 'Parent Card',
            parentSubtitle: 'Why choose Learnify Academy?',
            parent1: '• Turn screen time into useful skills',
            parent2: '• Hands-on projects every period + certified certificates',
            parent3: '• Affordable prices: Camp 300 EGP — Course 900 EGP',
            parent4: '• Continuous follow-up and progress reports'
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
