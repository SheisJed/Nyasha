import { PortfolioConfig } from '../types'

/**
 * Portfolio Configuration
 *
 * This file contains all your personal information, projects, and settings.
 * Update this file to customize your portfolio.
 */

export const portfolioConfig: PortfolioConfig = {
  // Personal Information
  personal: {
    name: 'Waithiegeni Jedidah',
    title: '.Industrial Chemist | Water Treatment Design Engineer | Water & Wastewater Consultant | Writer | Curious Explorer | Foodie',
    location: 'Nairobi, Kenya',
    bio: 'I work with water, chemistry, words, and the occasional very serious plate of food. I’m an industrial chemist and water treatment design engineer curious about better ways to treat, reuse, and rethink water. When I’m not designing systems or writing, I’m probably exploring somewhere new—or deciding what to eat next',
    email: 'jedidahgithinji12@gmail.com',
    phone: '(+254) 712 293 972',
    birthday: undefined, 
    banner: '/profile-background.jpg',
    resumeUrl: '/resume.pdf', // Add your resume PDF to the public folder
    avatar: '/profile-avatar.gif',
  },

  // Social Media Links
  social: {
    github: 'SheisJed',
    linkedin: 'https://www.linkedin.com/in/waithiegeni-jedidah/',
    twitter: 'https://x.com/WaithiegeniJ',
    website: 'https://waithiegeni.substack.com',
  },

  // Current Work Status
  workStatus: {
    status: 'available', // 'available' | 'employed' | 'away' | 'busy'
    message: 'Open to water problems, good writing & great food'
  },

  // Featured Projects (will be enhanced with GitHub API data)
  featuredProjects: [],

  // Achievements & Awards
  achievements: [
    {
      id: 1,
      title: 'Bachelor of Science in Industrial Chemistry',
      description: 'Jomo Kenyatta University of Agriculture and Technology',
      icon: '🎓',
      year: 2024,
      unlocked: true,
      rarity: 'common',
    },
  ],

  // Personal Hobbies & Interests
  hobbies: [
  {
    id: 1,
    title: 'Writing',
    description: 'Turning random thoughts into essays and occasionally pretending I know where the story is going',
    icon: '✍️',
  },
  {
    id: 2,
    title: 'Reading',
    description: 'Collecting books, getting emotionally attached to fictional people, and disappearing into a good story',
    icon: '📚',
  },
  {
    id: 3,
    title: 'Traveling',
    description: 'Going somewhere new, seeing something beautiful, and inevitably wondering what the local food is like',
    icon: '✈️',
  },
  {
    id: 4,
    title: 'Curiosity',
    description: 'Asking “but why?” until I understand how something works—or accidentally discover three new questions',
    icon: '🔎',
  },
],

  // Technical Skills (from resume)
  technicalSkills: {
   'Chemistry & Laboratory': [
    'Analytical Chemistry',
    'Water Analysis',
    'Atomic Absorption Spectroscopy (AAS)',
    'Atomic Emission Spectroscopy (AES)',
    'Flame Photometry',
    'Sample Preparation',
  ],

  'Water Treatment': [
    'Water Treatment System Design',
    'Water Quality Analysis',
    'Reverse Osmosis (RO)',
    'Water Softening',
    'Filtration',
    'Wastewater Treatment',
  ],

  'Manufacturing & Quality': [
    'Manufacturing Quality Control',
    'Dimensional Inspection',
    'Tensile Strength Testing',
    'Product Specification Validation',
  ],

  'Technical Work': [
    'Technical Proposals',
    'Quotations',
    'Technical Documentation',
    'Laboratory Reporting',
    'Data Interpretation',
  ],

  'Tools & Instruments': [
    'Microsoft Excel',
    'Microsoft Word',
    'Microsoft PowerPoint',
    'Vernier Calipers',
    'Micrometer Screw Gauge',
  ],
  },

  // Display Settings
  showTestimonials: false, // Set to true if you add testimonials later
  showAllRepos: false, // Set to true to display all GitHub repositories
}

// Helper function to calculate years of experience
export const getYearsOfExperience = (): number => {
  const startYear = 2023
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
}

// Helper function to get work status display
export const getWorkStatusConfig = (status: string) => {
  const statusConfig = {
    available: {
      badge: 'online',
      text: 'Available for Work',
      color: '#a4d007',
    },
    employed: {
      badge: 'busy',
      text: 'Currently Employed',
      color: '#f39c12',
    },
    away: {
      badge: 'away',
      text: 'Away',
      color: '#95a5a6',
    },
    busy: {
      badge: 'busy',
      text: 'Busy',
      color: '#e74c3c',
    },
  }

  return statusConfig[status as keyof typeof statusConfig] || statusConfig.away
}

// Helper function to calculate age
export const getAge = (): number => {
  if (!portfolioConfig.personal.birthday) return 0

  const birthday = new Date(portfolioConfig.personal.birthday)
  const today = new Date()

  let age = today.getFullYear() - birthday.getFullYear()
  const monthDiff = today.getMonth() - birthday.getMonth()

  // Adjust if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--
  }

  return age
}

export default portfolioConfig
