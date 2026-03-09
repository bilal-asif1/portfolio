# Your Personal Portfolio

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio features a beautiful dark theme, smooth animations, and is fully optimized for all devices.

## 🚀 Features

- **Modern Dark Theme**: Beautiful gradient backgrounds with glassmorphism effects
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop devices
- **Smooth Animations**: Typing effects, scroll animations, and interactive elements
- **Accessibility**: Semantic HTML5 with proper ARIA labels and keyboard navigation
- **Performance**: Optimized for fast loading and smooth interactions
- **Contact Form**: Functional contact form with notification system
- **SEO Optimized**: Meta tags and structured data for search engines

## 📁 Project Structure

```
portfolio/
├── 📄 index.html              # Main portfolio page
├── 🎨 favicon.svg             # Site icon
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 🎨 style.css       # All styling & animations
│   ├── 📁 js/
│   │   └── ⚡ script.js       # All functionality
│   └── 📁 images/
│       └── 🖼️ profile.jpg     # Your profile photo
└── 📖 README.md               # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern features including Grid, Flexbox, and CSS Variables
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Ionicons**: Beautiful icon library
- **Google Fonts**: Inter and Poppins typography

## 🎨 Customization Guide

### 1. Personal Information

Replace the placeholder content in `index.html` with your actual information:

#### Basic Information
```html
<!-- Update these meta tags -->
<title>Your Name - Full Stack Developer & Software Engineer</title>
<meta name="description" content="Your professional description...">
<meta name="author" content="Your Name">

<!-- Update logo text -->
<span class="logo-text">YN</span> <!-- Your initials -->

<!-- Update hero section -->
<h1 class="hero-title">
  <span class="name-text">Your Name</span>
  <span class="title-text">
    <span class="typing-text" data-typing="YourTitle1,YourTitle2,YourTitle3"></span>
  </span>
</h1>
```

#### Contact Information
```html
<!-- Update email links -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Update social links -->
<a href="https://linkedin.com/in/yourprofile">Your LinkedIn</a>
<a href="https://github.com/yourusername">Your GitHub</a>
<a href="https://twitter.com/yourusername">Your Twitter</a>
```

#### About Section
```html
<!-- Update your education and experience -->
<div class="highlight-item">
  <h3>Education</h3>
  <p>Your Degree</p>
  <span class="highlight-detail">University Name • GPA: X.X/4.0</span>
</div>

<div class="highlight-item">
  <h3>Experience</h3>
  <p>Your Job Title</p>
  <span class="highlight-detail">X+ years of professional experience</span>
</div>
```

### 2. Profile Photo

Replace `assets/images/profile.jpg` with your actual photo:
- Recommended size: 280x280 pixels
- Format: JPG or PNG
- Keep the file size under 100KB for better performance

### 3. Projects

Update the portfolio section with your real projects:

```html
<article class="portfolio-card">
  <div class="card-image">
    <img src="path-to-your-project-image.jpg" alt="Project Name">
    <!-- Add live demo and GitHub links -->
    <a href="https://your-project-demo.com" class="card-link">
      <ion-icon name="eye"></ion-icon>
    </a>
    <a href="https://github.com/yourusername/project-repo" class="card-link">
      <ion-icon name="logo-github"></ion-icon>
    </a>
  </div>
  <div class="card-content">
    <h3 class="card-title">Your Project Name</h3>
    <p class="card-description">Project description...</p>
    <div class="card-tech">
      <span class="tech-tag">Technology1</span>
      <span class="tech-tag">Technology2</span>
    </div>
  </div>
</article>
```

### 4. Skills

Update your skills section with your actual skill levels:

```html
<div class="skill-item">
  <div class="skill-info">
    <span class="skill-name">Your Skill</span>
    <span class="skill-percentage">XX%</span>
  </div>
  <div class="skill-progress">
    <div class="progress-bar" data-width="XX%"></div>
  </div>
</div>
```

### 5. Colors and Theme

Customize the color scheme by modifying CSS variables in `assets/css/style.css`:

```css
:root {
  --primary: #6366f1;        /* Main brand color */
  --secondary: #8b5cf6;      /* Secondary accent */
  --accent: #06b6d4;         /* Accent color */
  
  --dark-bg: #0f0f23;        /* Background color */
  --dark-surface: #1a1a2e;    /* Card/surface color */
  
  --text-primary: #f7fafc;   /* Main text color */
  --text-secondary: #e2e8f0; /* Secondary text color */
}
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- **Mobile (< 768px)**: Single column layout, hamburger menu
- **Tablet (768px - 1024px)**: Two-column layouts, adapted navigation
- **Desktop (> 1024px)**: Full multi-column layouts, hover effects

## 🚀 Deployment

### Option 1: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source as "Deploy from a branch"
4. Choose main branch and save

### Option 2: Netlify/Vercel
1. Connect your GitHub repository
2. Configure build settings (if needed)
3. Deploy automatically

### Option 3: Traditional Hosting
1. Upload all files to your web server
2. Ensure the server supports static files
3. Update your domain to point to the files

## 🔧 Advanced Customization

### Adding New Sections
1. Add new section HTML in `index.html`
2. Add corresponding CSS styles in `assets/css/style.css`
3. Add JavaScript functionality if needed in `assets/js/script.js`

### Custom Animations
The portfolio includes several animation types:
- **Typing Animation**: For rotating text in hero section
- **Scroll Animations**: Elements animate when they come into view
- **Hover Effects**: Interactive elements respond to mouse hover
- **Parallax Effects**: Background moves at different speeds

### Contact Form Integration
To make the contact form functional, replace the form handler in `script.js`:

```javascript
contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  // Add your form submission logic here
  // Example: Send to Formspree, Netlify Forms, or custom backend
  
  const formData = new FormData(contactForm);
  // Process and send data...
  
  showNotification('Message sent successfully!', 'success');
  contactForm.reset();
});
```

## 📈 Performance Optimization

- Images are lazy loaded for better performance
- CSS and JS are minified in production
- Font preloading for faster rendering
- Optimized animations using CSS transforms

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or want to suggest improvements, please open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you need help customizing your portfolio or have any questions, feel free to reach out:

- Create an issue in the repository
- Contact me through the links in the portfolio

---

**Built with ❤️ using modern web technologies**
