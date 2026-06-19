 <section class="section" style="background: var(--color-gray-100);">
        <div class="container">
            <h2 class="section-title" data-i18n="downloads.title">المواد التعليمية</h2>

            <div
                style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
                <div class="card animate-on-scroll" style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📘</div>
                    <h4 data-i18n="downloads.studentGuide">دليل الطالب</h4>
                    <button class="btn btn-outline" style="margin-top: 1rem;"
                        onclick="competitionApp.downloadFile('student-guide.pdf')">
                        <span data-i18n="buttons.download">تحميل</span>
                    </button>
                </div>

                <div class="card animate-on-scroll" style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📗</div>
                    <h4 data-i18n="downloads.teacherGuide">دليل المعلم</h4>
                    <button class="btn btn-outline" style="margin-top: 1rem;"
                        onclick="competitionApp.downloadFile('teacher-guide.pdf')">
                        <span data-i18n="buttons.download">تحميل</span>
                    </button>
                </div>

                <div class="card animate-on-scroll" style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">📊</div>
                    <h4 data-i18n="downloads.rubric">معايير التقييم</h4>
                    <button class="btn btn-outline" style="margin-top: 1rem;"
                        onclick="competitionApp.downloadFile('judging-rubric.pdf')">
                        <span data-i18n="buttons.download">تحميل</span>
                    </button>
                </div> <!-- Close rubric card -->
            </div> <!-- Close downloads grid -->
        </div> <!-- Close container -->
    </section> <!-- Close downloads section -->
   