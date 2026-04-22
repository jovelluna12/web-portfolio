const projects = [
  {
    id: 'p5',
    title: 'WordPress Website Development',
    description: 'Developed and maintained responsive, SEO-optimized WordPress websites across various industries including business, eCommerce, and blogs.',
    fullDescription: `As a WordPress developer, I've built and maintained numerous websites across different industries. My work includes custom theme development, plugin integration, and performance optimization.

Key accomplishments:
- Developed custom WordPress themes from scratch using modern practices
- Integrated WooCommerce for e-commerce functionality
- Implemented SEO best practices resulting in improved search rankings
- Optimized site performance through caching and image optimization
- Created custom plugins to extend WordPress functionality
- Maintained and updated existing sites ensuring security and compatibility`,
    tech: ['PHP', 'WordPress', 'JavaScript', 'CSS', 'MySQL', 'WooCommerce'],
    link: '/blog/wordpress-projects',
    image: '',
    role: 'Full Stack Developer',
    duration: '2020 - Present',
    highlights: [
      'Built 20+ custom WordPress themes',
      'Achieved 90+ PageSpeed scores',
      'Integrated payment gateways and shipping APIs',
      'Implemented multi-language support'
    ]
  },
  {
    id: 'p6',
    title: 'Legacy Sports Job Listing & Social Platform',
    description: 'Maintained and modernized a legacy job listing and social networking platform, improving stability, performance, and feature set.',
    fullDescription: `Worked on a comprehensive sports industry job listing and social networking platform. The project involved modernizing legacy code while adding new features to enhance user experience.

The platform connects sports professionals with employers, featuring job listings, company profiles, and social networking capabilities.

Key contributions:
- Refactored legacy Laravel codebase for improved maintainability
- Migrated frontend components from Vue 2 Options API to Composition API patterns
- Implemented real-time notifications using WebSockets
- Optimized database queries reducing load times by 40%
- Added new social features including messaging and connections`,
    tech: ['Laravel', 'Vue 2', 'JavaScript', 'Sass', 'MySQL', 'Redis'],
    link: '/blog/sports-job-listing',
    image: '',
    role: 'Full Stack Developer',
    duration: '2022 - 2023',
    highlights: [
      'Reduced page load time by 40%',
      'Implemented real-time messaging',
      'Migrated to modern Vue patterns',
      'Improved code coverage to 80%'
    ]
  },
  {
    id: 'p7',
    title: 'Property Management Platform',
    description: 'Enhanced and maintained a property management system, adding new features and improving system stability and performance.',
    fullDescription: `Contributed to a property management platform used by real estate professionals to manage their property portfolios, tenants, and maintenance requests.

The system handles everything from property listings to tenant communications and financial reporting.

Key contributions:
- Developed new modules for maintenance request tracking
- Implemented automated rent reminder system
- Created comprehensive reporting dashboards
- Integrated third-party payment processing
- Improved system security and data validation`,
    tech: ['Laravel', 'JavaScript', 'jQuery', 'CSS', 'MySQL', 'Stripe'],
    link: '/blog/property-management-system',
    image: '',
    role: 'Backend Developer',
    duration: '2021 - 2022',
    highlights: [
      'Built automated payment reminders',
      'Created financial reporting module',
      'Integrated Stripe payments',
      'Implemented role-based access control'
    ]
  },
  {
    id: 'p4',
    title: 'Headless CMS',
    description: 'A modular API-first CMS built with Laravel, featuring authentication, role management, and content APIs.',
    fullDescription: `Developed a headless CMS designed for flexibility and ease of integration with any frontend framework. The system provides a robust API for content management while maintaining simplicity.

Features include:
- RESTful API with comprehensive documentation
- JWT-based authentication
- Role-based access control with customizable permissions
- Media library with image optimization
- Content versioning and drafts
- Webhook support for external integrations`,
    tech: ['PHP', 'Laravel', 'API', 'MySQL', 'JWT', 'Redis'],
    link: 'https://github.com/jovelluna12/jcl-dashboard',
    image: '',
    role: 'Full Stack Developer',
    duration: '2023',
    highlights: [
      'Built RESTful API architecture',
      'Implemented JWT authentication',
      'Created admin dashboard',
      'Added media management system'
    ]
  },
  {
    id: 'p1',
    title: 'Great White Sands Resorts | A Sample Resort Landing Page',
    description: 'A landing page for a fictional resort built with a modern frontend stack.',
    fullDescription: `A showcase landing page demonstrating modern frontend development practices. This project features smooth animations, responsive design, and optimized performance.

Built as a portfolio piece to demonstrate capabilities in:
- Modern Vue 3 Composition API
- CSS animations and transitions
- Responsive design principles
- Performance optimization techniques
- Accessibility best practices`,
    tech: ['JavaScript', 'Vue', 'Vite', 'CSS', 'GSAP'],
    link: 'https://sample-resort-portfolio.vercel.app/',
    image: '',
    role: 'Frontend Developer',
    duration: '2024',
    highlights: [
      'Achieved 95+ Lighthouse score',
      'Implemented smooth scroll animations',
      'Built fully responsive layout',
      'Optimized images and assets'
    ]
  },
  {
    id: 'p2',
    title: 'Bistro Vue | A Sample Restaurant Landing Page',
    description: 'A responsive landing page for a fictional restaurant.',
    fullDescription: `A beautifully designed restaurant landing page showcasing modern web design principles. Features an engaging hero section, menu display, and contact information.

This project demonstrates:
- Clean, modern UI/UX design
- Interactive menu components
- Reservation form integration
- Mobile-first responsive design
- Smooth page transitions`,
    tech: ['JavaScript', 'Vue', 'Vite', 'CSS', 'Tailwind'],
    link: 'https://sample-restaurant-portfolio-yez2.vercel.app/',
    image: '',
    role: 'Frontend Developer',
    duration: '2024',
    highlights: [
      'Designed modern restaurant UI',
      'Built interactive menu system',
      'Created reservation form',
      'Implemented dark/light themes'
    ]
  },
]

export default projects
