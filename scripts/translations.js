// Bilingual translations for Al Horya School Technology Competition
// Arabic (Egyptian) and English

const translations = {
    ar: {
        // Navigation
        nav: {
            home: "الرئيسية",
            about: "عن المسابقة",
            categories: "الفئات",
            academy: "Learnify Academy",
            timeline: "الجدول الزمني",
            rules: "القواعد",
            submit: "التقديم",
            faq: "الأسئلة الشائعة",
            contact: "التواصل"
        },

        // Hero Section
        hero: {
            title: "مسابقة التكنولوجيا المدرسية",
            subtitle: "من الماضي نبني المستقبل",
            description: "رحلة مبتكرة تربط بين التراث المصري العريق والتكنولوجيا الحديثة",
            cta1: "سجل الآن",
            cta2: "اعرف المزيد",
            dates: "نبدأ من إجازة الصيف ٢٠٢٥ - التصفيات في الترم الثاني"
        },

        // About Section
        about: {
            title: "عن المسابقة",
            heading: "ما هي مسابقة التكنولوجيا؟",
            description: "مسابقة تكنولوجية شاملة تستهدف جميع طلاب مدرسة الحرية من الصف الأول حتى المرحلة الإعدادية. نربط التراث المصري القديم بالتكنولوجيا الحديثة، ونشجع الطلاب على استخدام مهاراتهم التقنية لإعادة تخيل حضارتنا العظيمة بطرق مبتكرة.",
            goals: {
                title: "أهداف المسابقة",
                items: [
                    "تعزيز التفكير الإبداعي والابتكاري",
                    "تطوير المهارات التقنية والبرمجية",
                    "الربط بين التراث الثقافي والتكنولوجيا",
                    "تشجيع العمل الجماعي والتعاون",
                    "بناء ثقة الطلاب في قدراتهم التقنية"
                ]
            },
            stats: {
                students: "جميع الطلاب",
                levels: "٣ مستويات",
                weeks: "أسبوعان",
                prizes: "جوائز قيمة"
            }
        },

        // Categories Section
        categories: {
            title: "فئات المسابقة",
            level1: {
                name: "المستوى الأول",
                grades: "الصف الأول والثاني",
                description: "رحلة الفرعون - مشاريع إبداعية باستخدام الرسم والتلوين والأنشطة التفاعلية",
                skills: ["الإبداع", "المنطق", "العمل اليدوي", "التفكير البصري"],
                task: "إنشاء مشروع فني يصور رحلة في مصر القديمة",
                tools: "الرسم، الكولاج الرقمي، الألغاز، الأعمال اليدوية",
                time: "أسبوعان"
            },
            level2: {
                name: "المستوى الثاني",
                grades: "الصفوف الثالث والرابع والخامس والسادس",
                description: "أسرار الأهرامات التفاعلية - لعبة أو قصة تفاعلية باستخدام Scratch",
                skills: ["برمجة Scratch", "التصميم", "المنطق البرمجي", "الإبداع"],
                task: "بناء لعبة أو قصة تفاعلية عن مصر القديمة",
                tools: "برنامج Scratch",
                time: "أسبوعان"
            },
            level3: {
                name: "المستوى الثالث",
                grades: "المرحلة الإعدادية (١-٣)",
                description: "محاكي الحضارة المصرية - برنامج Python يحاكي جانب من الحضارة المصرية",
                skills: ["برمجة Python", "الخوارزميات", "البنية البرمجية", "حل المشكلات"],
                task: "كتابة برنامج يحاكي أحد جوانب الحضارة المصرية",
                tools: "Python 3.x",
                time: "أسبوعان"
            },
            rcRobot: {
                name: "مسار الروبوت",
                badge: "مسار الروبوت",
                grades: "جميع المستويات",
                description: "الروبوت المتحكم به عن بُعد - تجميع وبرمجة روبوت يعمل بالبلوتوث",
                skills: ["إلكترونيات", "تجميع", "برمجة"],
                task: "بناء روبوت يتحكم به عبر البلوتوث",
                time: "أسبوعان"
            },
            viewDetails: "عرض التفاصيل",
            requirements: "المتطلبات",
            examples: "أمثلة",
            scoring: "معايير التقييم"
        },

        // Timeline Section
        timeline: {
            title: "الجدول الزمني",
            week1: {
                title: "المرحلة الأولى",
                dates: "بداية إجازة الصيف",
                events: [
                    "الإعلان الرسمي للمسابقة",
                    "توزيع الإرشادات والمواد",
                    "جلسات توضيحية في الفصول",
                    "بدء العمل على المشاريع"
                ]
            },
            week2: {
                title: "المرحلة الثانية",
                dates: "منتصف إجازة الصيف",
                events: [
                    "مواصلة العمل على المشاريع",
                    "دعم وتوجيه من المعلمين",
                    "الموعد النهائي للتقديم",
                    "جمع المشاريع بواسطة المعلمين"
                ]
            },
            week3: {
                title: "المرحلة الثالثة",
                dates: "بداية الترم الثاني",
                events: [
                    "التصفية الابتدائية (قسم التكنولوجيا)",
                    "اختيار أفضل ٣ مشاريع لكل فصل",
                    "إعلان المشاريع المتأهلة",
                    "التحضير للعروض التقديمية"
                ]
            },
            week4: {
                title: "المرحلة النهائية",
                dates: "الترم الثاني",
                events: [
                    "يوم العرض النهائي",
                    "حفل النتائج والجوائز",
                    "نشر الصور والنتائج",
                    "الاحتفال بالفائزين"
                ]
            }
        },

        // Rules & Scoring
        rules: {
            title: "القواعد ومعايير التقييم",
            general: {
                title: "القواعد العامة",
                items: [
                    "يجب أن يكون العمل أصلياً من إبداع الطالب/الفريق",
                    "الالتزام بالمواعيد النهائية المحددة",
                    "اتباع المتطلبات التقنية لكل مستوى",
                    "العمل المقدم يجب أن يكون مرتبطاً بالموضوع المصري",
                    "يمكن العمل فردياً أو في فرق (٢-٣ طلاب) حسب المستوى",
                    "احترام قواعد السلوك والأمانة الأكاديمية"
                ]
            },
            scoring: {
                title: "معايير التقييم",
                creativity: "الإبداع والابتكار",
                technical: "الصحة التقنية",
                theme: "الربط بالموضوع",
                presentation: "العرض التقديمي",
                teamwork: "العمل الجماعي",
                total: "المجموع: ١٠٠ نقطة"
            },
            awards: {
                title: "الجوائز",
                first: "المركز الأول",
                firstDesc: "جوائز قيمة ومميزة",
                second: "المركز الثاني",
                secondDesc: "جوائز مميزة",
                third: "المركز الثالث",
                thirdDesc: "جوائز تشجيعية",
                special: "⭐ جوائز خاصة + شهادات مشاركة"
            }
        },

        // Submission Section
        submission: {
            title: "تقديم المشاريع",
            description: "قدم مشروعك من خلال معلم الفصل أو عبر النموذج الإلكتروني",
            classSubmission: {
                title: "التقديم عبر الفصل",
                description: "سلم مشروعك لمعلم التكنولوجيا في فصلك قبل ١٨ ديسمبر"
            },
            onlineSubmission: {
                title: "التقديم الإلكتروني",
                description: "املأ النموذج الإلكتروني وارفع ملفات المشروع",
                button: "افتح نموذج التقديم"
            },
            requirements: {
                title: "متطلبات التقديم",
                items: [
                    "معلومات الطالب/الفريق كاملة",
                    "ملف المشروع (حسب المستوى)",
                    "وصف موجز للمشروع (١٠٠-٢٠٠ كلمة)",
                    "لقطات شاشة أو صور للمشروع",
                    "موافقة المعلم"
                ]
            }
        },

        // FAQ Section
        faq: {
            title: "الأسئلة الشائعة",
            questions: [
                {
                    q: "من يمكنه المشاركة؟",
                    a: "جميع طلاب مدرسة الحرية من الصف الأول حتى الصف الثالث الإعدادي."
                },
                {
                    q: "هل يمكن العمل في فريق؟",
                    a: "نعم! يمكن للطلاب العمل فردياً أو في فرق من ٢-٣ طلاب."
                },
                {
                    q: "ما هي الأدوات المطلوبة؟",
                    a: "تختلف حسب المستوى: المستوى ١ (مواد فنية)، المستوى ٢ (برنامج Scratch)، المستوى ٣ (Python)."
                },
                {
                    q: "ماذا لو لم أكمل المشروع في الوقت المحدد؟",
                    a: "الموعد النهائي هو ١٨ ديسمبر. ننصح بالبدء مبكراً والاستفادة من دعم المعلمين."
                },
                {
                    q: "كيف يتم اختيار الفائزين؟",
                    a: "تمر المشاريع بثلاث مراحل: التقييم الفصلي، التصفية على مستوى المدرسة، ثم التقييم النهائي من لجنة محكمين متخصصة."
                },
                {
                    q: "هل هناك دعم متاح أثناء العمل؟",
                    a: "نعم! معلمو التكنولوجيا متاحون للمساعدة والتوجيه طوال فترة المسابقة."
                },
                {
                    q: "ما هي الجوائز؟",
                    a: "كئوس وشهادات وجوائز قيمة للمراكز الثلاثة الأولى في كل فئة، بالإضافة لجوائز خاصة وشهادات مشاركة للجميع."
                }
            ]
        },

        // Contact Section
        contact: {
            title: "تواصل معنا",
            description: "هل لديك أسئلة؟ نحن هنا للمساعدة!",
            email: "البريد الإلكتروني",
            phone: "الهاتف/واتساب",
            hours: "ساعات الدعم",
            hoursValue: "الأحد-الخميس: ٩ صباحاً - ٢ مساءً",
            location: "مدرسة الحرية - قسم التكنولوجيا"
        },

        // Footer
        footer: {
            school: "مدرسة الحرية",
            techDept: "قسم التكنولوجيا",
            rights: "جميع الحقوق محفوظة © ٢٠٢٥",
            links: {
                about: "عن المدرسة",
                courses: "المناهج",
                contact: "اتصل بنا",
                privacy: "سياسة الخصوصية"
            }
        },

        // Buttons & Actions
        buttons: {
            learnMore: "اعرف المزيد",
            register: "سجل الآن",
            download: "تحميل",
            submit: "إرسال",
            close: "إغلاق",
            previous: "السابق",
            next: "التالي"
        },

        // Downloads
        downloads: {
            title: "المواد التعليمية",
            studentGuide: "دليل الطالب",
            teacherGuide: "دليل المعلم",
            rubric: "معايير التقييم",
            form: "نموذج التقديم"
        },

        // Learnify Academy
        academy: {
            title: "Learnify Academy",
            subtitle: "من الماضي نبني المستقبل",
            nav: {
                home: "الرئيسية",
                courses: "الكورسات",
                camps: "الكامبات",
                ageGuide: "دليل العمر"
            },
            section: {
                title: "Learnify Academy — صيف 2026",
                subtitle: "كورسات سنوية وكامبات صيفية — مشاريع حقيقية من Scratch لحد AI والروبوتات",
                coursesTitle: "الكورسات الكاملة",
                coursesDesc: "8 مسارات — من الصف 1 للإعدادي",
                campsTitle: "كامبات الصيف",
                campsDesc: "أسبوعان — مشروع كبير + Demo Day",
                ageTitle: "دليل العمر والصف",
                ageDesc: "هل يناسب ابني؟ لا يشترط خبرة برمجة",
                cta: "استكشف الأكاديمية"
            },
            hero: {
                title: "Learnify Academy — صيف 2026",
                subtitle: "حوّل شغف طفلك التقني لمهارة مستقبلية — ألعاب، تطبيقات، روبوتات، وذكاء اصطناعي",
                ctaCourses: "استكشف الكورسات",
                ctaCamps: "كامبات الصيف"
            },
            stats: {
                courses: "كورسات",
                camps: "كامبات",
                ages: "سنة",
                experience: "خبرة مطلوبة للمبتدئين"
            },
            value: {
                parent: "للأهالي: مشاريع حقيقية كل شهر، شهادات، ومحاذاة منهج AI المدرسي 2025–2026.",
                student: "للأطفال: اعمل لعبتك، تطبيقك، روبوتك، أو مشروع AI — واعرضه قدام الكل."
            },
            hub: {
                title: "اختر دليلك",
                coursesTitle: "الكورسات الكاملة",
                coursesDesc: "8 مسارات سنوية — من Scratch لحد AI و Robotics",
                campsTitle: "كامبات الصيف",
                campsDesc: "أسبوعان مكثفين — مشروع كبير + Demo Day",
                ageTitle: "دليل العمر والصف",
                ageDesc: "هل يناسب ابني؟ هل يحتاج يعرف برمجة؟",
                view: "عرض الكتالوج"
            },
            downloads: {
                title: "تحميل الكتالوجات PDF",
                brochure: "بروشور سريع",
                courses: "كتالوج الكورسات",
                camps: "كتالوج الكامبات",
                age: "دليل العمر",
                hint: "أو استخدم زر طباعة / حفظ PDF داخل أي صفحة كتالوج."
            },
            path: {
                title: "المسار الذهبي",
                stage: "المرحلة",
                program: "البرنامج",
                goal: "الهدف",
                summer: "إجازة صيف",
                summerGoal: "تجربة مسار سريعة",
                year: "العام الدراسي",
                yearGoal: "بناء مهارات عميقة",
                end: "نهاية العام",
                endGoal: "Capstone + جوائز",
                advanced: "متقدم",
                advancedGoal: "Portfolio + توصية"
            },
            trending: {
                title: "الأكثر طلباً في مصر 2026"
            },
            footer: {
                competition: "مسابقة التكنولوجيا المدرسية"
            }
        }
    },

    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            categories: "Categories",
            academy: "Academy",
            timeline: "Timeline",
            rules: "Rules",
            submit: "Submit",
            faq: "FAQ",
            contact: "Contact"
        },

        // Hero Section
        hero: {
            title: "School Technology Competition",
            subtitle: "From the Past We Build the Future",
            description: "An innovative journey connecting Ancient Egyptian heritage with modern technology",
            cta1: "Register Now",
            cta2: "Learn More",
            dates: "Starting Summer Vacation 2025 - Qualifiers in Second Term"
        },

        // About Section
        about: {
            title: "About Competition",
            heading: "What is the Technology Competition?",
            description: "A comprehensive technology competition for all Al Horya School students from Grade 1 to Preparatory Stage. We connect Ancient Egyptian heritage with modern technology, encouraging students to use their technical skills to reimagine our great civilization in innovative ways.",
            goals: {
                title: "Competition Goals",
                items: [
                    "Enhance creative and innovative thinking",
                    "Develop technical and programming skills",
                    "Connect cultural heritage with technology",
                    "Encourage teamwork and collaboration",
                    "Build student confidence in their technical abilities"
                ]
            },
            stats: {
                students: "All Students",
                levels: "3 Levels",
                weeks: "2 Weeks",
                prizes: "Valuable Prizes"
            }
        },

        // Categories Section
        categories: {
            title: "Competition Categories",
            level1: {
                name: "Level 1",
                grades: "Grades 1-2",
                description: "The Pharaoh's Journey - Creative projects using drawing, coloring, and interactive activities",
                skills: ["Creativity", "Logic", "Crafts", "Visual Thinking"],
                task: "Create an artistic project depicting a journey in Ancient Egypt",
                tools: "Drawing, digital collage, puzzles, crafts",
                time: "Two weeks"
            },
            level2: {
                name: "Level 2",
                grades: "Grades 3-6",
                description: "Interactive Pyramid Secrets - A game or interactive story using Scratch",
                skills: ["Scratch Programming", "Design", "Logic", "Creativity"],
                task: "Build an interactive game or story about Ancient Egypt",
                tools: "Scratch Software",
                time: "Two weeks"
            },
            level3: {
                name: "Level 3",
                grades: "Preparatory (1-3)",
                description: "Egyptian Civilization Simulator - A Python program simulating an aspect of Egyptian civilization",
                skills: ["Python Programming", "Algorithms", "Code Structure", "Problem Solving"],
                task: "Write a program simulating an aspect of Egyptian civilization",
                tools: "Python 3.x",
                time: "Two weeks"
            },
            rcRobot: {
                name: "RC Robot Track",
                badge: "Robot Track",
                grades: "All Levels",
                description: "Remote Controlled Robot - Assembly and programming of a Bluetooth-controlled robot",
                skills: ["Electronics", "Assembly", "Programming"],
                task: "Build a robot controlled via Bluetooth",
                time: "Two weeks"
            },
            viewDetails: "View Details",
            requirements: "Requirements",
            examples: "Examples",
            scoring: "Scoring"
        },

        // Timeline Section
        timeline: {
            title: "Timeline",
            week1: {
                title: "Phase 1",
                dates: "Start of Summer Vacation",
                events: [
                    "Official competition announcement",
                    "Distribution of guidelines and materials",
                    "Classroom briefing sessions",
                    "Begin working on projects"
                ]
            },
            week2: {
                title: "Phase 2",
                dates: "Mid Summer Vacation",
                events: [
                    "Continue working on projects",
                    "Support and guidance from teachers",
                    "Submission deadline",
                    "Project collection by teachers"
                ]
            },
            week3: {
                title: "Phase 3",
                dates: "Start of Second Term",
                events: [
                    "Preliminary filtering (Technology Department)",
                    "Selection of top 3 projects per class",
                    "Announcement of qualified projects",
                    "Preparation for presentations"
                ]
            },
            week4: {
                title: "Final Phase",
                dates: "Second Term",
                events: [
                    "Final presentation day",
                    "Results and awards ceremony",
                    "Publish photos and results",
                    "Celebrate winners"
                ]
            }
        },

        // Rules & Scoring
        rules: {
            title: "Rules & Scoring Criteria",
            general: {
                title: "General Rules",
                items: [
                    "Work must be original and created by the student/team",
                    "Adhere to specified deadlines",
                    "Follow technical requirements for each level",
                    "Submitted work must be related to Egyptian theme",
                    "Can work individually or in teams (2-3 students) depending on level",
                    "Respect code of conduct and academic honesty"
                ]
            },
            scoring: {
                title: "Scoring Criteria",
                creativity: "Creativity and Innovation",
                technical: "Technical Accuracy",
                theme: "Theme Connection",
                presentation: "Presentation",
                teamwork: "Teamwork",
                total: "Total: 100 points"
            },
            awards: {
                title: "Awards",
                first: "First Place",
                firstDesc: "Valuable and distinctive prizes",
                second: "Second Place",
                secondDesc: "Distinctive prizes",
                third: "Third Place",
                thirdDesc: "Encouraging prizes",
                special: "⭐ Special awards + participation certificates"
            }
        },

        // Submission Section
        submission: {
            title: "Project Submission",
            description: "Submit your project through your class teacher or via online form",
            classSubmission: {
                title: "Class Submission",
                description: "Deliver your project to your technology teacher before December 18"
            },
            onlineSubmission: {
                title: "Online Submission",
                description: "Fill out the online form and upload project files",
                button: "Open Submission Form"
            },
            requirements: {
                title: "Submission Requirements",
                items: [
                    "Complete student/team information",
                    "Project file (based on level)",
                    "Brief project description (100-200 words)",
                    "Screenshots or project images",
                    "Teacher approval"
                ]
            }
        },

        // FAQ Section
        faq: {
            title: "Frequently Asked Questions",
            questions: [
                {
                    q: "Who can participate?",
                    a: "All Al Horya School students from Grade 1 to Preparatory Grade 3."
                },
                {
                    q: "Can we work in teams?",
                    a: "Yes! Students can work individually or in teams of 2-3 students."
                },
                {
                    q: "What tools are required?",
                    a: "Varies by level: Level 1 (art supplies), Level 2 (Scratch software), Level 3 (Python)."
                },
                {
                    q: "What if I don't finish on time?",
                    a: "The deadline is December 18. We recommend starting early and utilizing teacher support."
                },
                {
                    q: "How are winners selected?",
                    a: "Projects go through three stages: class-level evaluation, school-wide filtering, then final evaluation by a specialized judging panel."
                },
                {
                    q: "Is support available while working?",
                    a: "Yes! Technology teachers are available to help and guide throughout the competition period."
                },
                {
                    q: "What are the prizes?",
                    a: "Trophies, certificates, and valuable prizes for top 3 places in each category, plus special awards and participation certificates for all."
                }
            ]
        },

        // Contact Section
        contact: {
            title: "Contact Us",
            description: "Have questions? We're here to help!",
            email: "Email",
            phone: "Phone/WhatsApp",
            hours: "Support Hours",
            hoursValue: "Sunday-Thursday: 9AM - 2PM",
            location: "Al Horya School - Technology Department"
        },

        // Footer
        footer: {
            school: "Al Horya School",
            techDept: "Technology Department",
            rights: "All Rights Reserved © 2025",
            links: {
                about: "About School",
                courses: "Curricula",
                contact: "Contact Us",
                privacy: "Privacy Policy"
            }
        },

        // Buttons & Actions
        buttons: {
            learnMore: "Learn More",
            register: "Register Now",
            download: "Download",
            submit: "Submit",
            close: "Close",
            previous: "Previous",
            next: "Next"
        },

        // Downloads
        downloads: {
            title: "Educational Materials",
            studentGuide: "Student Guide",
            teacherGuide: "Teacher Guide",
            rubric: "Scoring Rubric",
            form: "Submission Form"
        },

        academy: {
            title: "Learnify Academy",
            subtitle: "From the Past We Build the Future",
            nav: {
                home: "Home",
                courses: "Courses",
                camps: "Camps",
                ageGuide: "Age Guide"
            },
            section: {
                title: "Learnify Academy — Summer 2026",
                subtitle: "Full-year courses and summer camps — real projects from Scratch to AI and Robotics",
                coursesTitle: "Full Courses",
                coursesDesc: "8 tracks — Grades 1 through Prep",
                campsTitle: "Summer Camps",
                campsDesc: "2 weeks — capstone project + Demo Day",
                ageTitle: "Age & Grade Guide",
                ageDesc: "Is it right for my child? No coding experience required",
                cta: "Explore Academy"
            },
            hero: {
                title: "Learnify Academy — Summer 2026",
                subtitle: "Turn your child's tech passion into a future skill — games, apps, robots, and AI",
                ctaCourses: "Explore Courses",
                ctaCamps: "Summer Camps"
            },
            stats: {
                courses: "Courses",
                camps: "Camps",
                ages: "Years",
                experience: "Experience needed for beginners"
            },
            value: {
                parent: "For parents: real monthly projects, certificates, aligned with school AI curriculum 2025–2026.",
                student: "For kids: build your game, app, robot, or AI project — and present it to everyone."
            },
            hub: {
                title: "Choose your guide",
                coursesTitle: "Full Courses",
                coursesDesc: "8 annual tracks — Scratch to AI & Robotics",
                campsTitle: "Summer Camps",
                campsDesc: "2 intensive weeks — big project + Demo Day",
                ageTitle: "Age & Grade Guide",
                ageDesc: "Is it right for my child? Need prior coding?",
                view: "View catalog"
            },
            downloads: {
                title: "Download PDF Catalogs",
                brochure: "Quick brochure",
                courses: "Courses catalog",
                camps: "Camps catalog",
                age: "Age guide",
                hint: "Or use Print / Save as PDF on any catalog page."
            },
            path: {
                title: "Golden path",
                stage: "Stage",
                program: "Program",
                goal: "Goal",
                summer: "Summer break",
                summerGoal: "Quick track trial",
                year: "School year",
                yearGoal: "Deep skill building",
                end: "Year end",
                endGoal: "Capstone + awards",
                advanced: "Advanced",
                advancedGoal: "Portfolio + recommendation"
            },
            trending: {
                title: "Most in-demand in Egypt 2026"
            },
            footer: {
                competition: "School Technology Competition"
            }
        }
    }
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}
