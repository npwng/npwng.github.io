// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'npwng', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Companion Cube',
          // description: 'Lorem ipsum',
          imageUrl: '/projects/CompanionCube_Original.webp',
        },
        {
          title: 'Jar',
          // description: 'Lorem ipsum',
          imageUrl: '/projects/Jar_Open.webp',
        },
        {
          title: 'Trapped Ball',
          // description: 'Lorem ipsum',
          imageUrl: '/projects/TrappedBall.webp',
        },
        {
          title: 'R8 Arbor',
          imageUrl: '/projects/Arbor_Full.webp',
        },
        {
          title: 'Collet Wrench',
          imageUrl: '/projects/ColletWrench_Both_Cross.webp',
        },
        {
          title: 'T-Slot Adapter',
          imageUrl: '/projects/DPClamp_Both_ISO.webp',
        },
        {
          title: 'Low Profile Vise Jaws',
          imageUrl: '/projects/LPVJ_Full.webp',
        },
      ],
    },
  },
  seo: {
    title: 'Nicholas Probst Wong',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://npwng.github.io',
    phone: '',
    email: 'nicholas.pw@tuta.com',
  },
  resume: {
    // fileUrl:
    //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Solidworks',
    'Fusion 360 CAD & CAM',
    'Parametric Modeling',
    'CNC Milling',
    'CNC Turning',
    'Python',
    'LaTeX',
  ],
  experiences: [
    {
      company: 'Elko Engineering Garage',
      position: 'Applications Intern',
      from: 'May 2023',
      to: 'Present',
      companyLink: 'https://confluence.garage.ualberta.ca/',
    },
    {
      company: 'Canadian Tire',
      position: 'Warehouse Associate',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://corp.canadiantire.ca/English/home/default.aspx',
    },
  ],
  educations: [
    {
      institution: 'University of Alberta',
      degree: 'Mechanical Engineering, BSc Co-op',
      from: '2022',
      to: '2027',
    },
  ],
  certifications: [
    {
      name: 'Certified SolidWorks Professional (CSWP)',
      // body: '',
      year: '2024',
      link: 'https://www.solidworks.com/certifications/solidworks-cad-design-professional',
    },
    {
      name: 'Certified SolidWorks Associate (CSWA)',
      // body: '',
      year: '2023',
      link: 'https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design',
    },
    {
      name: 'WHMIS 2024',
      // body: '',
      year: '2024',
      link: 'https://www.canada.ca/en/health-canada/services/environmental-workplace-health/occupational-health-safety/workplace-hazardous-materials-information-system.html',
    },
    {
      name:'Diplôme d\'Études en Langue Française (DELF) B2',
      year:'2022',
      link: 'https://www.alliance-francaise.ca/en/exams/diplomas/delf',
    }
  ],
  publications: [
    {
      // title: 'Publication Title',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      // description:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
