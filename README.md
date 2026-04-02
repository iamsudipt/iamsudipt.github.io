# Sudsharma's Personal Portfolio

A modern, interactive personal landing page with multi-dimensional graphics showcasing skills, professional journey, and personal interests.

## Features

- **Animated Profile Photo**: Floating profile picture with pulsing ring effects
- **Linux Man Page About Section**: Unique terminal-styled introduction formatted like a Unix man page with authentic green-on-black terminal aesthetics, scanline effects, and blinking cursor
- **3D Particle Background**: Dynamic animated particle system
- **Interactive Skills Universe**: 3D rotating sphere visualization of skills (drag to rotate, click nodes for details)
- **Professional Timeline**: Animated timeline of career milestones
- **Interest Cards**: Beautiful grid layout of hobbies and passions
- **Blog Section**: Showcase your latest blog posts with tags
- **Contact Form**: Get in touch section with social media links
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Eye-catching transitions and effects

## Customization

Edit the `CONFIG` object in `script.js` to personalize your page:

### Profile Photo
Replace `profile.jpg` with your own photo (recommended size: 500x500px minimum). The current file is a placeholder SVG.

### Man Page About Section
Customize your introduction directly in `index.html` (lines 50-120). The section follows the traditional Unix man page format with:
- **NAME**: Your title and role
- **SYNOPSIS**: Command-line style summary
- **DESCRIPTION**: Detailed about you
- **OPTIONS**: Your technical skills and tools
- **ENVIRONMENT**: Your tech stack
- **EXAMPLES**: Sample "commands" showcasing your work
- **EXIT STATUS**: Fun status codes
- **SEE ALSO**: Links to other sections
- **AUTHOR**: Your name and contact info

### Skills
Add or modify your skills with proficiency levels:
```javascript
skills: [
    { name: 'JavaScript', level: 90, category: 'frontend', color: '#00ff88' }
]
```

### Professional Journey
Update your career timeline:
```javascript
journey: [
    {
        date: '2024 - Present',
        title: 'Senior Developer',
        company: 'Tech Innovators Inc.',
        description: 'Your role description...'
    }
]
```

### Interests
Customize your hobbies and interests:
```javascript
interests: [
    {
        icon: '🎮',
        title: 'Gaming',
        description: 'Your interest description...'
    }
]
```

### Blog Posts
The blog section is integrated with Medium profile: `https://medium.com/@su_dipt`

Update with your latest Medium posts in `script.js`:
```javascript
blogPosts: [
    {
        title: 'Your Blog Post Title',
        date: 'March 15, 2026',
        excerpt: 'A brief description of your post...',
        tags: ['React', 'JavaScript', 'Web Dev'],
        url: 'https://medium.com/@su_dipt/your-post-slug',
        image: 'blog-image.jpg'
    }
]
```

The "View All Posts on Medium" button links to your Medium profile. Update in `index.html` if you change your Medium username.

### Colors
Modify CSS variables in `style.css`:
```css
:root {
    --primary-color: #00ff88;
    --secondary-color: #0088ff;
    --accent-color: #ff0088;
}
```

### Social Links
Update social media links in `index.html`:
- GitHub: Line 86
- LinkedIn: Line 89
- Twitter: Line 92

## Deployment to GitHub Pages

1. Create a repository named `sudsharma.github.io` on GitHub
2. Push this code:
```bash
git remote add origin https://github.com/sudsharma/sudsharma.github.io.git
git add .
git commit -m "Initial commit: Personal portfolio site"
git branch -M main
git push -u origin main
```
3. Your site will be live at: `https://sudsharma.github.io`

## Local Development

Simply open `index.html` in a browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Technologies Used

- HTML5 Canvas for 3D graphics
- Pure JavaScript (no frameworks needed)
- CSS3 animations and transitions
- Responsive design with CSS Grid and Flexbox

## Browser Support

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## License

Feel free to use this template for your own portfolio!
