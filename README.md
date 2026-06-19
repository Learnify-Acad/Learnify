# Al Horya School Technology Competition
## مسابقة التكنولوجيا المدرسية - مدرسة الحرية

**"من الماضي نبني المستقبل | From the Past We Build the Future"**

A comprehensive bilingual (Arabic/English) technology competition system for Al Horya School, linking Ancient Egyptian heritage with modern technology.

---

## Learnify Academy Portal (Summer 2026)

**Separate password-protected portal** for parents and staff:

| Page | Path |
|------|------|
| Login | `academy/index.html` |
| Full content (AR/EN) | `academy/portal.html` |

**Default password:** `Learnify2026` (change in `scripts/academy-auth.js`)

Features:
- Full Arabic + English toggle
- Child-friendly simplified content
- Low group pricing (courses from 500 EGP, camps from 450 EGP)
- WhatsApp: **01038583382**

PDF downloads (after login on portal):
- `downloads/academy-brochure.pdf`
- `downloads/academy-courses-catalog.pdf` (from portal)
- `downloads/academy-camps-catalog.pdf` (from portal)

Regenerate PDFs:
```powershell
.\scripts\generate-academy-pdfs.ps1
```

---

1. [Project Overview](#project-overview)
2. [File Structure](#file-structure)
3. [Features](#features)
4. [Setup & Installation](#setup--installation)
5. [Deployment](#deployment)
6. [Usage Guide](#usage-guide)
7. [Customization](#customization)
8. [Security Considerations](#security-considerations)
9. [Support & Maintenance](#support--maintenance)

---

## 🎯 Project Overview

This complete competition system includes:

- **Bilingual Website** (Arabic/English with RTL/LTR support)
- **Competition Documentation** (full plan, tasks, rubrics, timeline)
- **Communication Templates** (emails, WhatsApp, announcements)
- **Submission System** (forms with validation)
- **Responsive Design** (mobile, tablet, desktop)

**Target Audience:**
- **Level 1:** Grades 1-2 (Creative/Art Projects)
- **Level 2:** Grades 3-5 (Scratch Programming)
- **Level 3:** Preparatory 1-3 (Python Programming)

**Timeline:** December 4-30, 2025 (4 weeks)

---

## 📁 File Structure

```
Learnify Competetion/
├── al_horya_school.jpg          # School logo
├── competition.html              # Main competition page
├── submission-form.html          # Submission form page
├── README.md                     # This file
│
├── docs/
│   ├── competition-plan.md       # Complete competition plan
│   └── competition-tasks.md      # Detailed task specifications
│
├── styles/
│   └── competition.css           # Main stylesheet (RTL/LTR support)
│
├── scripts/
│   ├── translations.js           # Bilingual content dictionary
│   └── competition.js            # Main JavaScript functionality
│
├── templates/
│   ├── announcement-script.md    # Announcement scripts
│   ├── email-templates.md        # Email communication templates
│   └── whatsapp-templates.md     # WhatsApp message templates
│
├── images/
│   ├── level1-icon.png           # Grades 1-2 icon (placeholder)
│   ├── level2-icon.png           # Grades 3-5 icon (placeholder)
│   └── level3-icon.png           # Prep icon (placeholder)
│
└── downloads/
    ├── student-guide.pdf         # Student handbook (to be created)
    ├── teacher-guide.pdf         # Teacher handbook (to be created)
    └── judging-rubric.pdf        # Evaluation forms (to be created)
```

---

## ✨ Features

### Website Features

- ✅ **Bilingual Support:** Full Arabic/English with language switcher
- ✅ **RTL/LTR Layout:** Automatic layout direction based on language
- ✅ **Responsive Design:** Works on mobile, tablet, and desktop
- ✅ **Smooth Animations:** Scroll-triggered animations
- ✅ **Interactive FAQ:** Accordion-style expandable questions
- ✅ **Form Validation:** Client-side validation for submissions
- ✅ **Accessibility:** Semantic HTML, keyboard navigation
- ✅ **SEO Optimized:** Meta tags, structured data

### Competition Features

- ✅ **3 Distinct Levels:** Age-appropriate tasks
- ✅ **Clear Rubrics:** Detailed scoring criteria
- ✅ **Structured Timeline:** 4-week schedule
- ✅ **Multi-stage Filtering:** Class → School → Finals
- ✅ **Comprehensive Awards:** Trophies, certificates, special awards

### Communication Features

- ✅ **Ready-to-use Scripts:** For announcements and ceremonies
- ✅ **Email Templates:** 5 different scenarios
- ✅ **WhatsApp Messages:** Quick, emoji-rich templates
- ✅ **Bilingual Content:** All templates in AR/EN

---

## 🚀 Setup & Installation

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (Apache, Nginx, or simple HTTP server)
- Text editor (VS Code, Sublime, Notepad++)

### Local Testing

1. **Extract Files:**
   ```bash
   # Navigate to project directory
   cd "C:\Users\Access\Desktop\Learnify Competetion"
   ```

2. **Start Local Server:**

   **Option A - Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then open: http://localhost:8000/competition.html
   ```

   **Option B - Using Node.js:**
   ```bash
   npx http-server -p 8000
   
   # Then open: http://localhost:8000/competition.html
   ```

   **Option C - Using VS Code:**
   - Install "Live Server" extension
   - Right-click `competition.html`
   - Select "Open with Live Server"

3. **Test Features:**
   - ✅ Language switcher (AR/EN)
   - ✅ Navigation links
   - ✅ FAQ accordion
   - ✅ Form validation
   - ✅ Responsive design (resize browser)

---

## 🌐 Deployment

### Option 1: Add to Existing School Website

**If using the Learnify Academy website:**

1. **Upload Files:**
   ```
   https://learnify-academy.alnwabnews.com/
   └── competition/
       ├── index.html (rename competition.html)
       ├── styles/
       ├── scripts/
       ├── images/
       └── docs/
   ```

2. **Update Navigation:**
   Add link in main site header:
   ```html
   <a href="/competition/">المسابقة | Competition</a>
   ```

3. **Test URL:**
   ```
   https://learnify-academy.alnwabnews.com/competition/
   ```

### Option 2: Standalone Domain/Subdomain

**Create dedicated competition site:**

1. **Set up subdomain:**
   ```
   competition.alhorya.edu.eg
   ```

2. **Upload all files to web root**

3. **Configure DNS** (if needed)

4. **Enable HTTPS** (recommended)

### Option 3: WordPress Integration

1. **Create new page:** "Technology Competition"
2. **Use Custom HTML block**
3. **Copy content from `competition.html`**
4. **Upload CSS/JS to theme directory**
5. **Enqueue scripts** in `functions.php`

---

## 📖 Usage Guide

### For Website Administrators

**1. Update Content:**
- Edit `scripts/translations.js` for text changes
- Modify dates in timeline section
- Update contact information

**2. Add Downloadable Materials:**
- Place PDF files in `/downloads/` directory
- Update links in competition.html
- Test download functionality

**3. Customize Styling:**
- Edit CSS variables in `:root` section of `competition.css`
- Change colors, fonts, spacing as needed
- Test on multiple devices

### For Competition Coordinators

**1. Pre-Competition (Week 1):**
- [ ] Review `docs/competition-plan.md`
- [ ] Print student guides
- [ ] Distribute email templates to teachers
- [ ] Post announcement on website
- [ ] Send WhatsApp messages to parents

**2. During Competition (Weeks 2-3):**
- [ ] Monitor submissions
- [ ] Send reminder messages
- [ ] Coordinate with teachers
- [ ] Prepare judging materials

**3. Finals (Week 4):**
- [ ] Announce finalists
- [ ] Send ceremony invitations
- [ ] Prepare awards and certificates
- [ ] Conduct final presentations
- [ ] Announce winners

### For Teachers

**1. Access Materials:**
- Student Guide: `/downloads/student-guide.pdf`
- Teacher Guide: `/downloads/teacher-guide.pdf`
- Rubrics: `/downloads/judging-rubric.pdf`

**2. Use Templates:**
- Announcement Scripts: `/templates/announcement-script.md`
- Email Templates: `/templates/email-templates.md`

**3. Submit Projects:**
- Online: Use submission form on website
- Offline: Collect and deliver to tech department

---

## 🛠️ Customization

### Change Colors

Edit `styles/competition.css`:

```css
:root {
  --color-primary: #4F46E5;    /* Main color */
  --color-secondary: #9333EA;   /* Accent color */
  --color-gold: #D4AF37;       /* Egyptian theme color */
}
```

### Add New Language

1. Edit `scripts/translations.js`:
```javascript
const translations = {
  ar: { /* existing */ },
  en: { /* existing */ },
  fr: { /* add French */ }
};
```

2. Add language button in HTML
3. Test thoroughly

### Change Competition Theme

1. Update hero section text
2. Replace Egyptian references
3. Modify task descriptions
4. Update images/icons

### Backend Integration (Submissions)

The current form uses client-side validation only. For production:

**Option A - Email Integration:**
```javascript
// Use FormSubmit.co or similar service
<form action="https://formsubmit.co/your@email.com" method="POST">
```

**Option B - Custom Backend:**
```javascript
// Add server-side handling
fetch('/api/submit-project', {
  method: 'POST',
  body: formData
})
```

**Option C - Google Forms:**
- Create Google Form
- Embed or link from website
- Collect responses in Google Sheets

---

## 🔒 Security Considerations

### File Uploads

**Current Implementation:**
- Client-side validation only
- File size limit: 50MB
- File type checking (basic)

**For Production:**

1. **Server-side Validation:**
   ```php
   // Validate file type
   $allowed = ['pdf', 'zip', 'sb3', 'py'];
   $ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
   
   // Validate file size
   if ($_FILES['file']['size'] > 50 * 1024 * 1024) {
       die('File too large');
   }
   ```

2. **Virus Scanning:**
   - Use ClamAV or similar
   - Scan before saving

3. **Secure Storage:**
   - Store outside web root
   - Use unique filenames
   - Set proper permissions

4. **Rate Limiting:**
   - Limit submissions per user
   - Prevent spam/abuse

### Data Privacy

- **GDPR Compliance:** If applicable
- **Parental Consent:** For student data
- **Data Retention:** Define policy
- **Secure Transmission:** Use HTTPS

---

## 🐛 Troubleshooting

### Language Switcher Not Working

**Cause:** JavaScript not loading
**Solution:**
1. Check browser console for errors
2. Verify `scripts/translations.js` path
3. Ensure JavaScript is enabled

### Arabic Text Appears Broken

**Cause:** Missing Arabic fonts or RTL support
**Solution:**
1. Check Google Fonts loading
2. Verify `dir="rtl"` on html element
3. Test with different browsers

### Forms Not Submitting

**Cause:** No backend configured
**Solution:**
1. Current form is for demonstration
2. Configure backend (see Customization section)
3. Or use third-party form service

### Images Not Loading

**Cause:** Incorrect paths
**Solution:**
1. Use relative paths: `images/filename.png`
2. Verify files exist in correct directory
3. Check file permissions

---

## 📞 Support & Maintenance

### For Technical Issues

**Contact:**
- 📧 Email: tech.dept@alhorya.edu.eg
- 📱 Phone: +20 123 456 7890
- 🕐 Hours: Sunday-Thursday, 9 AM - 2 PM

### Regular Maintenance

**Monthly:**
- [ ] Check for broken links
- [ ] Update contact information
- [ ] Review and update content
- [ ] Test on new browsers/devices

**Annually:**
- [ ] Update competition dates
- [ ] Refresh images and graphics
- [ ] Review and improve tasks
- [ ] Update prizes and awards

### Future Enhancements

**Planned Features:**
- [ ] Online judging dashboard
- [ ] Live results display
- [ ] Photo gallery from previous years
- [ ] Student project showcase
- [ ] Registration system with database
- [ ] Automated email notifications
- [ ] Analytics and reporting

---

## 📄 License & Credits

**Developed for:**
Al Horya School - Technology Department

**Competition Theme:**
"From the Past We Build the Future"
Linking Ancient Egyptian Heritage with Modern Technology

**Design Inspiration:**
- School website: https://learnify-academy.alnwabnews.com/
- Egyptian heritage elements
- Modern web design best practices

**Technologies Used:**
- HTML5, CSS3, JavaScript (ES6+)
- Google Fonts (Cairo, Tajawal for Arabic)
- Responsive design principles
- Accessibility standards (WCAG 2.1)

---

## 📝 Version History

**Version 1.0** (December 3, 2025)
- Initial release
- Complete bilingual website
- All documentation and templates
- Ready for deployment

---

## 🙏 Acknowledgments

Special thanks to:
- Al Horya School administration
- Technology Department staff
- All teachers supporting the competition
- Parents and students participating

---

**For questions or suggestions, please contact the Technology Department.**

**مدرسة الحرية - قسم التكنولوجيا**
**Al Horya School - Technology Department**

🎯 **Let's build the future together!**
