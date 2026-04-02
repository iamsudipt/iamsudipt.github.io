// Data Configuration - Customize this section with your information
const CONFIG = {
    skills: [
        // Cloud & Infrastructure
        { name: 'AWS', level: 95, category: 'cloud', color: '#00ff88' },
        { name: 'Kubernetes', level: 95, category: 'cloud', color: '#00ff88' },
        { name: 'Terraform', level: 90, category: 'cloud', color: '#00ff88' },
        { name: 'Docker', level: 90, category: 'cloud', color: '#00ff88' },
        { name: 'EKS', level: 90, category: 'cloud', color: '#00ff88' },
        { name: 'ECS', level: 85, category: 'cloud', color: '#00ff88' },
        { name: 'EC2', level: 90, category: 'cloud', color: '#00ff88' },
        { name: 'Nomad', level: 85, category: 'cloud', color: '#00ff88' },
        { name: 'Linux', level: 95, category: 'cloud', color: '#00ff88' },

        // Observability & Monitoring
        { name: 'Datadog', level: 95, category: 'observability', color: '#0088ff' },
        { name: 'OpenTelemetry', level: 90, category: 'observability', color: '#0088ff' },
        { name: 'Prometheus', level: 85, category: 'observability', color: '#0088ff' },
        { name: 'Grafana', level: 85, category: 'observability', color: '#0088ff' },
        { name: 'Splunk', level: 80, category: 'observability', color: '#0088ff' },
        { name: 'ELK Stack', level: 80, category: 'observability', color: '#0088ff' },
        { name: 'TICK Stack', level: 75, category: 'observability', color: '#0088ff' },

        // CI/CD & GitOps
        { name: 'ArgoCD', level: 90, category: 'cicd', color: '#ff0088' },
        { name: 'Jenkins', level: 90, category: 'cicd', color: '#ff0088' },
        { name: 'GitHub Actions', level: 85, category: 'cicd', color: '#ff0088' },
        { name: 'GitLab CI', level: 85, category: 'cicd', color: '#ff0088' },
        { name: 'CircleCI', level: 80, category: 'cicd', color: '#ff0088' },
        { name: 'Spinnaker', level: 75, category: 'cicd', color: '#ff0088' },
        { name: 'Git', level: 95, category: 'cicd', color: '#ff0088' },

        // Automation & IaC
        { name: 'Python', level: 90, category: 'automation', color: '#ffaa00' },
        { name: 'Bash', level: 95, category: 'automation', color: '#ffaa00' },
        { name: 'Ansible', level: 85, category: 'automation', color: '#ffaa00' },
        { name: 'Go', level: 70, category: 'automation', color: '#ffaa00' },
        { name: 'YAML', level: 90, category: 'automation', color: '#ffaa00' },
        { name: 'HCL', level: 85, category: 'automation', color: '#ffaa00' },

        // SRE Practices
        { name: 'SRE', level: 95, category: 'practices', color: '#ff00ff' },
        { name: 'High Availability', level: 90, category: 'practices', color: '#ff00ff' },
        { name: 'Incident Mgmt', level: 90, category: 'practices', color: '#ff00ff' },
        { name: 'Cost Optimization', level: 95, category: 'practices', color: '#ff00ff' },
        { name: 'Scalability', level: 90, category: 'practices', color: '#ff00ff' }
    ],

    journey: [
        {
            date: 'September 2022 - Present',
            title: 'Infrastructure & Enterprise Engineer III',
            company: 'Expedia Group, Gurugram',
            description: 'Architected enterprise observability platform (APM, logs, tracing) using OpenTelemetry + Datadog. Led migration from legacy logging delivering $1.6M annual savings. Designed log-tiering strategy saving $2.5–3M annually. Developed GenAI-powered RCA automation and Slack-based operational tooling. Impact: Reduced MTTR, improved system visibility, saved $4M+ annually.'
        },
        {
            date: 'April 2021 - September 2022',
            title: 'Principal Engineer DevOps',
            company: 'Airtel Digital, Gurugram',
            description: 'Led organization-wide Kubernetes adoption enabling scalable infrastructure. Designed GitOps-based CI/CD platform with one-click environment provisioning. Managed hybrid cloud (AWS + on-prem) infrastructure. Delivered $40K/month cost savings through optimization. Improved deployment reliability and release velocity.'
        },
        {
            date: 'August 2018 - April 2021',
            title: 'DevOps Specialist',
            company: 'Opstree Solutions, Noida',
            description: 'Managed 8K+ containers in Nomad for Apple Inc; migrated to Kubernetes. Reduced CI/CD build times by 60% for EZMall. Revamped AWS infrastructure with Terraform for Wheelseye, reducing build times from 15 min to 4 min. Maintained open source projects (OT-OSM, OT-CLOUD-KIT). Delivered DevOps training and authored technical blogs.'
        },
        {
            date: 'April 2016 - July 2018',
            title: 'Associate Analyst',
            company: 'GlobalLogic Technologies, Gurgaon',
            description: 'Designed, tested, and implemented system solutions for enterprise clients. Authored technical documentation and trained client personnel on system implementations.'
        },
        {
            date: 'October 2015 - March 2016',
            title: 'Quality Assurance Engineer',
            company: 'Precitech Engineers, Noida',
            description: 'Ensured manufacturing quality standards for server racks across production stages. Maintained quality control and compliance processes.'
        },
        {
            date: '2011 - 2015',
            title: 'Mechanical Engineering',
            company: 'Dr. A.P.J Abdul Kalam Technical University',
            description: 'Bachelor of Technology in Mechanical Engineering. Built foundation in engineering principles, problem-solving, and technical analysis.'
        }
    ],

    interests: [
        {
            icon: '🚴',
            title: 'Cycling',
            description: 'Passionate cyclist who loves outdoor activities. Whether it\'s city rides or exploring new trails, cycling is my go-to way to unwind and stay active.'
        },
        {
            icon: '🚗',
            title: 'Road Trips & Travel',
            description: 'Covered 70,000+ km across North and West India in the last three years. Memorable drives include Jaisalmer Fort to border area. Dream destinations: Mt Kailash, Swiss Alps.'
        },
        {
            icon: '🏔️',
            title: 'Adventure & Trekking',
            description: 'Love exploring mountains and outdoor adventures. Planning treks to Mount Annapurna and spiritual journeys to Mt Kailash when time permits.'
        },
        {
            icon: '📚',
            title: 'Reading',
            description: 'Avid reader with diverse interests spanning self-help, mythology, psychology, philosophy, and ancient texts. Always exploring deeper understanding of human nature and ancient wisdom.'
        },
        {
            icon: '🎓',
            title: 'Mentoring',
            description: 'Delivering DevOps training and mentoring engineers. Helping teams adopt SRE practices and improve their infrastructure skills.'
        },
        {
            icon: '🍨',
            title: 'Food & Culinary',
            description: 'Firm believer that Gulab Jamun with vanilla ice cream is one of the best things in the world. Always exploring local cuisines during travels.'
        },
        {
            icon: '📸',
            title: 'Photography',
            description: 'Capturing moments from road trips and adventures. Love photographing landscapes, especially during drives through scenic routes.'
        }
    ],

    blogPosts: [
        {
            title: 'Gitlab-CI with Nexus',
            date: 'September 10, 2019',
            excerpt: 'Integration of Gitlab-CI with Nexus. A practical guide to setting up CI/CD pipelines with artifact management using Gitlab and Nexus.',
            tags: ['GitLab CI', 'Nexus', 'CI/CD'],
            url: 'https://medium.com/opstree-technology/gitlab-ci-with-nexus-cc0ae55a9d9a',
            image: 'blog-placeholder-1.jpg'
        },
        {
            title: 'Unix File Tree Part-2',
            date: 'September 10, 2019',
            excerpt: 'The Significance of each directory. Deep dive into the Unix filesystem hierarchy and the purpose of each critical directory.',
            tags: ['Unix', 'Linux', 'System Administration'],
            url: 'https://medium.com/opstree-technology/unix-file-tree-part-2-eb628b0f58f5',
            image: 'blog-placeholder-2.jpg'
        },
        {
            title: 'Unix File Tree Part-1',
            date: 'July 17, 2019',
            excerpt: 'The Philosophy of Unix directory structure. Understanding the foundational principles behind Unix filesystem organization.',
            tags: ['Unix', 'Linux', 'DevOps'],
            url: 'https://medium.com/opstree-technology/unix-file-tree-part-1-4febe1e9a8a',
            image: 'blog-placeholder-3.jpg'
        },
        {
            title: 'Git-Submodule',
            date: 'March 7, 2019',
            excerpt: 'A solution for dependent git projects. Learn how to manage complex multi-repository projects using Git submodules effectively.',
            tags: ['Git', 'Version Control', 'DevOps'],
            url: 'https://medium.com/opstree-technology/git-submodule-27ee24e91716',
            image: 'blog-placeholder-4.jpg'
        }
    ]
};

// 3D Background Particles
class ParticleBackground {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 100;

        this.resize();
        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
            this.ctx.fill();
        });

        // Connect nearby particles
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - distance / 150)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// 3D Skills Visualization
class SkillsVisualization {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.skills = CONFIG.skills;
        this.nodes = [];
        this.rotation = { x: 0, y: 0 };
        this.autoRotate = true;
        this.isDragging = false;
        this.lastMouse = { x: 0, y: 0 };

        this.resize();
        this.init();
        this.setupEvents();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.radius = Math.min(this.canvas.width, this.canvas.height) * 0.3;
    }

    init() {
        // Create nodes in 3D sphere
        this.nodes = this.skills.map((skill, i) => {
            const phi = Math.acos(-1 + (2 * i) / this.skills.length);
            const theta = Math.sqrt(this.skills.length * Math.PI) * phi;

            return {
                x: this.radius * Math.cos(theta) * Math.sin(phi),
                y: this.radius * Math.sin(theta) * Math.sin(phi),
                z: this.radius * Math.cos(phi),
                skill: skill,
                originalPos: {
                    x: this.radius * Math.cos(theta) * Math.sin(phi),
                    y: this.radius * Math.sin(theta) * Math.sin(phi),
                    z: this.radius * Math.cos(phi)
                }
            };
        });
    }

    setupEvents() {
        this.canvas.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.autoRotate = false;
            this.lastMouse = { x: e.clientX, y: e.clientY };
        });

        this.canvas.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                const dx = e.clientX - this.lastMouse.x;
                const dy = e.clientY - this.lastMouse.y;
                this.rotation.y += dx * 0.01;
                this.rotation.x += dy * 0.01;
                this.lastMouse = { x: e.clientX, y: e.clientY };
            }
        });

        this.canvas.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        this.canvas.addEventListener('mouseleave', () => {
            this.isDragging = false;
        });

        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Check if clicked on a node
            this.nodes.forEach(node => {
                const projectedX = this.centerX + node.x;
                const projectedY = this.centerY + node.y;
                const distance = Math.sqrt(
                    Math.pow(mouseX - projectedX, 2) +
                    Math.pow(mouseY - projectedY, 2)
                );

                if (distance < 30) {
                    alert(`${node.skill.name}\nProficiency: ${node.skill.level}%\nCategory: ${node.skill.category}`);
                }
            });
        });
    }

    rotate3D(x, y, z) {
        // Rotate around Y axis
        let cosY = Math.cos(this.rotation.y);
        let sinY = Math.sin(this.rotation.y);
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        // Rotate around X axis
        let cosX = Math.cos(this.rotation.x);
        let sinX = Math.sin(this.rotation.x);
        let y1 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        return { x: x1, y: y1, z: z2 };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.autoRotate) {
            this.rotation.y += 0.005;
            this.rotation.x = Math.sin(Date.now() * 0.0003) * 0.2;
        }

        // Update node positions
        this.nodes.forEach(node => {
            const rotated = this.rotate3D(
                node.originalPos.x,
                node.originalPos.y,
                node.originalPos.z
            );
            node.x = rotated.x;
            node.y = rotated.y;
            node.z = rotated.z;
        });

        // Sort by z for proper depth
        this.nodes.sort((a, b) => a.z - b.z);

        // Draw connections
        this.ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(this.nodes[i].originalPos.x - this.nodes[j].originalPos.x, 2) +
                    Math.pow(this.nodes[i].originalPos.y - this.nodes[j].originalPos.y, 2) +
                    Math.pow(this.nodes[i].originalPos.z - this.nodes[j].originalPos.z, 2)
                );

                if (distance < this.radius * 0.8) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(
                        this.centerX + this.nodes[i].x,
                        this.centerY + this.nodes[i].y
                    );
                    this.ctx.lineTo(
                        this.centerX + this.nodes[j].x,
                        this.centerY + this.nodes[j].y
                    );
                    this.ctx.stroke();
                }
            }
        }

        // Draw nodes
        this.nodes.forEach(node => {
            const scale = (node.z + this.radius) / (2 * this.radius);
            const size = 5 + scale * 10 + (node.skill.level / 100) * 10;
            const alpha = 0.3 + scale * 0.7;

            const x = this.centerX + node.x;
            const y = this.centerY + node.y;

            // Draw glow
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * 2);
            gradient.addColorStop(0, `${node.skill.color}80`);
            gradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(x - size * 2, y - size * 2, size * 4, size * 4);

            // Draw node
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = node.skill.color;
            this.ctx.globalAlpha = alpha;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;

            // Draw label for front nodes
            if (scale > 0.6) {
                this.ctx.font = `${10 + scale * 4}px sans-serif`;
                this.ctx.fillStyle = 'white';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(node.skill.name, x, y - size - 10);
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Timeline
function initTimeline() {
    const timeline = document.querySelector('.timeline');

    CONFIG.journey.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;

        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <div class="timeline-company">${item.company}</div>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;

        timeline.appendChild(timelineItem);
    });
}

// Initialize Interests
function initInterests() {
    const grid = document.querySelector('.interests-grid');

    CONFIG.interests.forEach((interest, index) => {
        const card = document.createElement('div');
        card.className = 'interest-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <span class="interest-icon">${interest.icon}</span>
            <h3 class="interest-title">${interest.title}</h3>
            <p class="interest-description">${interest.description}</p>
        `;

        grid.appendChild(card);
    });
}

// Initialize Blog
function initBlog() {
    const grid = document.querySelector('.blog-grid');

    CONFIG.blogPosts.forEach((post, index) => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.style.animationDelay = `${index * 0.15}s`;

        // Create a gradient placeholder for blog images
        const gradients = [
            'linear-gradient(135deg, #00ff88, #0088ff)',
            'linear-gradient(135deg, #0088ff, #ff0088)',
            'linear-gradient(135deg, #ff0088, #ffaa00)'
        ];

        article.innerHTML = `
            <div class="blog-image" style="background: ${gradients[index % 3]}"></div>
            <div class="blog-content">
                <span class="blog-date">${post.date}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        article.addEventListener('click', () => {
            window.open(post.url, '_blank');
        });

        grid.appendChild(article);
    });
}

// Smooth scrolling for navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Form handling
function initContactForm() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);

        // Here you would typically send the data to a server
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize background particles
    const bgCanvas = document.getElementById('bgCanvas');
    new ParticleBackground(bgCanvas);

    // Initialize skills visualization
    const skillsCanvas = document.getElementById('skillsCanvas');
    new SkillsVisualization(skillsCanvas);

    // Initialize timeline, interests, and blog
    initTimeline();
    initInterests();
    initBlog();

    // Initialize navigation
    initNavigation();

    // Initialize contact form
    initContactForm();

    // Handle profile photo loading
    const profilePhoto = document.getElementById('profilePhoto');
    profilePhoto.addEventListener('error', function() {
        // If image fails to load, keep the placeholder SVG
        console.log('Using placeholder profile photo - replace profile.jpg with your photo');
    });

    // Add scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item, .interest-card, .blog-post').forEach(el => {
        observer.observe(el);
    });
});
