# Harshal Parekh - Modern Portfolio Website

A modern, responsive portfolio website showcasing Harshal Parekh's skills, projects, and automation expertise. Built with HTML5, CSS3, and JavaScript with a focus on user experience and modern design principles.

## 🌟 Features

### ✨ Modern Design
- **Gradient Backgrounds**: Beautiful gradient overlays and animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Glass Morphism**: Modern frosted glass effects on navigation and cards
- **Floating Elements**: Dynamic floating cards and geometric shapes

### 🚀 Unique BUILD Section
- **Automation Showcase**: Special section highlighting automation trial plans
- **Interactive Cards**: Engaging project cards with hover effects
- **Status Badges**: Visual indicators for project phases (Planning, Development, Completed)
- **Technology Tags**: Clear indication of technologies used in each automation project
- **Future-Forward**: Showcases innovative automation ideas and concepts

### 💼 Professional Sections
- **Hero Section**: Eye-catching introduction with animated elements
- **About Me**: Professional background and statistics
- **Education**: Academic journey timeline
- **Projects**: Featured project showcase with live links
- **Skills**: Interactive skill bars with percentage indicators
- **Contact**: Functional contact form with email integration

### 🎨 Interactive Features
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Form Validation**: Client-side form validation with user feedback
- **Typing Animation**: Dynamic typing effect for name display
- **Scroll Progress**: Visual progress indicator while scrolling
- **Custom Cursor**: Enhanced cursor experience on desktop

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome 6.0
- **Design**: CSS Grid, Flexbox, CSS Animations
- **Responsive**: Mobile-first design approach

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── create_placeholders.html # Tool to generate placeholder images
├── README.md               # Documentation
└── images/                 # Image assets (to be added)
    ├── profile-placeholder.jpg
    ├── about-placeholder.jpg
    ├── project1-placeholder.jpg
    ├── project2-placeholder.jpg
    ├── project3-placeholder.jpg
    └── project4-placeholder.jpg
```

## 🚀 Getting Started

### 1. Replace Placeholder Images

1. Open `create_placeholders.html` in your browser
2. Click on each colored box to download placeholder images
3. Replace with your actual photos:
   - **Profile Photo**: Professional headshot (300x300px)
   - **About Image**: Casual or professional photo (400x500px)
   - **Project Images**: Screenshots or mockups of your projects (400x250px)

### 2. Customize Content

1. **Personal Information**: Update contact details, social links, and bio
2. **Projects**: Replace with your actual projects and GitHub links
3. **Skills**: Adjust skill percentages based on your expertise
4. **BUILD Section**: Add your real automation projects and ideas

### 3. Add Your Images

Replace the placeholder images with your actual photos:

```html
<!-- In index.html, update these image sources -->
<img src="your-profile-photo.jpg" alt="Harshal Parekh" id="profile-img">
<img src="your-about-photo.jpg" alt="About Harshal" id="about-img">
<!-- And project images -->
```

## 🌐 Hosting Options

### 1. GitHub Pages (Recommended - FREE)

**Steps:**
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → "main" branch
5. Your site will be available at: `https://yourusername.github.io/repository-name`

**Pros:**
- Completely free
- Easy to update via Git
- Custom domain support
- SSL certificate included
- Perfect for portfolios

### 2. Netlify (FREE with Premium Options)

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub account
3. Click "New site from Git"
4. Connect your GitHub repository
5. Deploy automatically

**Pros:**
- Free SSL certificate
- Custom domain support
- Automatic deployments from Git
- Form handling
- CDN included

### 3. Vercel (FREE for Personal Use)

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy with one click

**Pros:**
- Lightning fast
- Free SSL
- Global CDN
- Easy custom domain setup

### 4. Traditional Web Hosting

For shared hosting providers like:
- **Hostinger** (~$2/month)
- **Namecheap** (~$3/month)
- **Bluehost** (~$3/month)

Simply upload all files via FTP to the public_html folder.

## 🎨 Customization Guide

### Colors

The website uses a purple-blue gradient theme. To change:

```css
/* In styles.css, update these CSS variables */
:root {
    --primary-gradient: linear-gradient(45deg, #667eea, #764ba2);
    --primary-color: #6366f1;
    --secondary-color: #764ba2;
}
```

### Fonts

To change the font family:

```css
/* In styles.css */
body {
    font-family: 'Your-Font-Name', sans-serif;
}
```

Don't forget to update the Google Fonts link in index.html.

### Content Updates

1. **Contact Information**: Update phone, email, and address in the contact section
2. **Social Links**: Replace GitHub and LinkedIn URLs with your profiles
3. **Projects**: Update project descriptions, technologies, and links
4. **BUILD Section**: Customize automation projects with your ideas

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading times
- Accessible design principles

## 🔧 Advanced Features

### Email Integration

The contact form uses `mailto:` links. For advanced form handling:

1. **Formspree** (Free): Add `action="https://formspree.io/f/YOUR_ID"` to form
2. **Netlify Forms**: Add `data-netlify="true"` to form (if using Netlify)
3. **EmailJS**: For client-side email sending without backend

### Analytics

Add Google Analytics by inserting this before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions and titles
- Open Graph tags for social sharing
- Structured data for better search visibility

## 🎯 BUILD Section - Automation Showcase

The unique BUILD section features:

### Current Automation Projects:
1. **Smart Home Automation Suite** (Planning Phase)
2. **Automated Trading Bot** (In Development)
3. **Automated Testing Framework** (Prototype Ready)
4. **AI-Powered Content Generator** (Research Phase)

### Features:
- **Status Tracking**: Visual badges showing project progress
- **Technology Stack**: Clear indication of tools and frameworks
- **Feature Lists**: Detailed breakdown of each automation project
- **Call-to-Action**: Encourages collaboration and networking

## 🤝 Contributing

Want to improve this portfolio template?

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you need help customizing your portfolio:

1. **GitHub Issues**: Create an issue for bugs or questions
2. **Email**: harshalparekh17@gmail.com
3. **LinkedIn**: [Connect with Harshal](https://www.linkedin.com/in/harshal-parekh-bb3a11257/)

## 🚀 Deployment Checklist

Before going live:

- [ ] Replace all placeholder images with your actual photos
- [ ] Update all contact information and social links
- [ ] Test contact form functionality
- [ ] Verify all project links work
- [ ] Check responsive design on multiple devices
- [ ] Optimize images for web (compress for faster loading)
- [ ] Add Google Analytics (optional)
- [ ] Test website speed and performance
- [ ] Set up custom domain (optional)
- [ ] Add favicon.ico for browser tab icon

## 🌟 Pro Tips

1. **Image Optimization**: Use tools like TinyPNG to compress images
2. **Performance**: Keep images under 1MB for faster loading
3. **Content**: Write compelling project descriptions with results/impact
4. **SEO**: Use descriptive alt tags for all images
5. **Updates**: Regularly update your projects and skills
6. **Backup**: Keep your code in version control (Git)

---

**Ready to launch your professional portfolio? Follow this guide and you'll have a stunning website live in minutes!**

🚀 **Quick Start**: Upload to GitHub → Enable GitHub Pages → Share your link!

For questions or collaboration opportunities, reach out to Harshal Parekh at harshalparekh17@gmail.com