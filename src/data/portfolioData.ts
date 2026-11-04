// ===== Portfolio Data =====
// Single source of truth for all content. Edit this file to update the portfolio.

export const personalInfo = {
  name: 'Deep Khatri',
  location: 'Vadodara, Gujarat, India',
  tagline: 'Building Ideas Into Intelligent Experiences.',
  intro: 'COMPUTER ENGINEERING STUDENT · DEVELOPER · BUILDER',
  about: `I'm a Computer Engineering student who finds joy in turning ideas into working technology. 
Whether it's building full-stack web apps, experimenting with Generative AI, or exploring how cloud 
infrastructure scales — I learn best by doing. My goal is simple: build things that matter, 
solve problems with curiosity, and grow as an engineer with every project I ship.`,
  philosophy: `I believe great software starts with genuine understanding of a problem. 
I approach every project with a builder's mindset — prototype fast, iterate often, and 
never stop asking "can this be better?"`,
  github: 'https://github.com/deepkhatri2410',
  githubAlt: 'https://github.com/khatrideep133-ops',  linkedin: 'https://www.linkedin.com/in/deep-khatri-964306417/',
  heroSubtitle:
    'I explore the intersection of full-stack development, Generative AI, and cloud technologies to build meaningful digital experiences.',
};

export const education = [
  {
    institution: 'CHARUSAT',
    degree: 'Bachelor of Technology – Computer Engineering',
    period: 'July 2026 – July 2029',
    status: 'current',
    icon: '🎓',
  },
  {
    institution: 'The Maharaja Sayajirao University of Baroda',
    degree: 'Diploma in Computer Engineering',
    period: 'August 2023 – April 2026',
    score: '87.31%',
    status: 'completed',
    icon: '📚',
  },
];

export const skillGroups = [
  {
    category: 'Programming',
    icon: '⌨️',
    color: 'violet',
    skills: [
      { name: 'Python', level: 'Building with', desc: 'Flask APIs, automation, data scripts' },
      { name: 'JavaScript', level: 'Building with', desc: 'Web apps, DOM, ES6+' },
      { name: 'TypeScript', level: 'Learning through projects', desc: 'Type-safe React development' },
    ],
  },
  {
    category: 'Frontend Development',
    icon: '🎨',
    color: 'cyan',
    skills: [
      { name: 'HTML5', level: 'Hands-on experience', desc: 'Semantic markup, accessibility' },
      { name: 'CSS3', level: 'Hands-on experience', desc: 'Flexbox, Grid, animations' },
      { name: 'React', level: 'Learning through projects', desc: 'Component-based UIs' },
    ],
  },
  {
    category: 'Backend Development',
    icon: '⚙️',
    color: 'blue',
    skills: [
      { name: 'Flask', level: 'Building with', desc: 'REST APIs, routing, templating' },
      { name: 'REST APIs', level: 'Hands-on experience', desc: 'Design, integration, testing' },
    ],
  },
  {
    category: 'AI & Generative AI',
    icon: '🧠',
    color: 'violet',
    skills: [
      { name: 'Prompt Engineering', level: 'Hands-on experience', desc: 'LLM prompting, Chain-of-thought' },
      { name: 'Generative AI Concepts', level: 'Currently exploring', desc: 'LLMs, embeddings, RAG' },
      { name: 'AI Integration', level: 'Building with', desc: 'AI-powered features in projects' },
    ],
  },
  {
    category: 'Cloud & Tools',
    icon: '☁️',
    color: 'cyan',
    skills: [
      { name: 'AWS Amplify', level: 'Currently exploring', desc: 'Hosting, deployment pipelines' },
      { name: 'Google Cloud', level: 'Hands-on experience', desc: '10 hands-on labs completed' },
      { name: 'Git & GitHub', level: 'Hands-on experience', desc: 'Version control, collaboration' },
    ],
  },
  {
    category: 'CS Foundations',
    icon: '📐',
    color: 'blue',
    skills: [
      { name: 'Data Structures', level: 'Building with', desc: 'Arrays, trees, graphs, hash maps' },
      { name: 'Algorithms', level: 'Building with', desc: '30-day DSA challenge completed' },
      { name: 'Problem Solving', level: 'Hands-on experience', desc: 'Competitive programming practice' },
    ],
  },
];

export const projects = [
  {
    id: 'stadiumind-ai',
    title: 'StadiumMind AI',
    subtitle: 'AI-Powered Smart Stadium Operating System Concept',
    priority: 'flagship',
    category: 'AI · Innovation Concept',
    description:
      'An intelligent stadium operations concept designed to make large-scale events safer, smarter, more accessible, and more sustainable through AI-powered assistance and real-time operational insights.',
    longDesc:
      'StadiumMind AI reimagines how major events are managed — from crowd dynamics to emergency response. Built as an innovation concept with a working prototype, it explores how AI can transform the stadium experience for fans, staff, and operators alike.',
    problem:
      'Large-scale events face complex operational challenges: crowd congestion, accessibility barriers, multilingual communication gaps, and reactive rather than proactive safety management. Traditional stadium systems are siloed and slow to respond.',
    solution:
      'An AI-powered operating system concept that unifies crowd monitoring, navigation assistance, emergency response, volunteer coordination, and sustainability insights into a cohesive digital command center.',
    features: [
      { icon: '👥', text: 'Crowd monitoring and congestion insights' },
      { icon: '🗺️', text: 'AI-powered navigation and accessibility support' },
      { icon: '🚨', text: 'Emergency assistance and alert coordination' },
      { icon: '🌐', text: 'Multilingual AI assistant for global audiences' },
      { icon: '🙋', text: 'Volunteer and staff management support' },
      { icon: '♻️', text: 'Sustainability recommendations and insights' },
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Google Gemini API'],
    challenges: [
      'Designing a real-time data flow architecture for high-concurrency events',
      'Making AI responses contextually relevant across multilingual scenarios',
      'Balancing feature scope in a hackathon-style timeline',
    ],
    learnings: [
      'Deep understanding of event-driven UI design for high-stakes scenarios',
      'Practical experience integrating generative AI into operational workflows',
      'How to communicate complex AI concepts through clear UX',
    ],
    demo: 'https://www.linkedin.com/posts/deep-khatri-964306417_stadiumminai-activity-7219693983764049920-xvbX',
    github: null,
    status: 'prototype',
    color: 'violet',
    future: [
      'Real-time sensor integration for actual crowd density data',
      'Native mobile apps for staff and fans',
      'Integration with emergency services APIs',
      'Accessibility device connectivity (hearing loops, navigation beacons)',
    ],
  },
  {
    id: 'ecosphere-pro',
    title: 'EcoSphere Pro',
    subtitle: 'Interactive Sustainability & Carbon Footprint Platform',
    priority: 'featured',
    category: 'Full-Stack Web App · Sustainability',
    description:
      'An interactive sustainability platform that helps users understand, simulate, and improve their environmental impact through carbon calculations, personalized recommendations, and visual insights.',
    longDesc:
      'EcoSphere Pro puts environmental data in the hands of everyday users. Through a clean, interactive interface built entirely with HTML, CSS, and JavaScript, it transforms abstract sustainability metrics into actionable personal insights.',
    problem:
      'Most people have no intuitive way to understand their personal carbon footprint or know how specific lifestyle changes translate into real environmental impact.',
    solution:
      'A web application that calculates, visualizes, and gamifies the process of reducing your carbon footprint — making sustainability tangible, measurable, and approachable.',
    features: [
      { icon: '🧮', text: 'Carbon footprint calculator with lifestyle inputs' },
      { icon: '💡', text: 'Eco Coach — personalized sustainability recommendations' },
      { icon: '🔮', text: 'What-If simulator for lifestyle change modeling' },
      { icon: '💰', text: 'Personal carbon budget tracking' },
      { icon: '📈', text: 'Green Action ROI calculator' },
      { icon: '🌍', text: 'Global benchmark comparisons' },
      { icon: '📊', text: 'Custom SVG data visualizations' },
      { icon: '🌲', text: 'Carbon offset scenario simulator' },
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SVG', 'Custom Charts'],
    challenges: [
      'Building custom SVG chart components without external libraries',
      'Modeling complex carbon calculation logic accurately',
      'Creating an intuitive UX for sustainability data',
    ],
    learnings: [
      'Deep CSS and vanilla JS capabilities without framework dependencies',
      'How to make data visualization accessible and meaningful',
      'Importance of user-centered design for behavior-change applications',
    ],
    demo: 'https://ecosphere-pro.vercel.app',
    github: 'https://github.com/deepkhatri2410/EcoSphere-Pro',
    status: 'live',
    color: 'cyan',
    note: 'Built with vanilla HTML/CSS/JS. The Eco Coach provides rule-based personalized recommendations rather than a live AI model.',
    future: [
      'Actual LLM integration for Eco Coach',
      'Community challenges and social features',
      'Historical progress tracking with localStorage',
      'PWA offline support',
    ],
  },
  {
    id: 'dsa-challenge',
    title: '30 Days DSA Challenge',
    subtitle: 'Problem of the Day — Unstop',
    priority: 'achievement',
    category: 'Algorithms · Competitive Programming',
    description:
      'Completed the 30 Days Problem of the Day challenge on Unstop, solving a curated DSA problem daily — strengthening algorithmic thinking and code-writing consistency.',
    longDesc:
      'A structured 30-day commitment to daily algorithmic problem solving. Each problem tested data structures and algorithm fundamentals — arrays, trees, graphs, dynamic programming, and more.',
    problem: 'Developing consistent algorithmic thinking and interview-readiness in CS fundamentals.',
    solution:
      'Daily commitment to solving curated problems across increasing difficulty levels, tracking progress and building problem-solving patterns.',
    features: [
      { icon: '🗓️', text: '30 consecutive days of problem solving' },
      { icon: '🌳', text: 'Topics: Arrays, Trees, DP, Graphs, Sorting' },
      { icon: '⚡', text: 'Time complexity optimization practice' },
      { icon: '💻', text: 'Solutions in Python' },
    ],
    tech: ['Python', 'Algorithms', 'Data Structures'],
    challenges: ['Maintaining daily consistency', 'Approaching unfamiliar problem types'],
    learnings: [
      'Consistent practice dramatically improves pattern recognition',
      'Understanding time/space complexity trade-offs',
    ],
    demo: null,
    github: 'https://github.com/deepkhatri2410',
    status: 'completed',
    color: 'blue',
    future: [],
  },
];

export const achievements = [
  {
    id: 'unstop-30days',
    title: '30 Days Problem of the Day',
    org: 'Unstop',
    description:
      'Completed the 30 Days Problem of the Day Challenge — solving a curated DSA problem every day for 30 consecutive days, strengthening algorithmic thinking and problem-solving consistency.',
    icon: '⚡',
    color: 'violet',
    type: 'Challenge',
  },
  {
    id: 'google-cloud-labs',
    title: 'Google Cloud Learn with Communities × GFG',
    org: 'Google Cloud × GeeksforGeeks',
    description:
      'Completed 10 hands-on Google Cloud labs through the Google Cloud Learn with Communities initiative in partnership with GeeksforGeeks. Gained practical experience with GCP services.',
    icon: '☁️',
    color: 'cyan',
    type: 'Hands-on Labs',
  },
  {
    id: 'promptwars',
    title: 'PromptWars Virtual — Challenge 3',
    org: 'Google for Developers × H2S',
    description:
      "Successfully completed Challenge 3 of PromptWars Virtual — an AI prompt engineering competition organized by Google for Developers in collaboration with H2S. Demonstrated creative and effective LLM prompting skills.",
    icon: '🤖',
    color: 'violet',
    type: 'AI Competition',
  },
  {
    id: 'ibm-genai',
    title: 'Getting Started with Generative AI',
    org: 'IBM SkillsBuild',
    description:
      'Completed the Getting Started with Generative AI course on IBM SkillsBuild — covering foundational concepts of generative models, large language models, and their practical applications.',
    icon: '🧠',
    color: 'blue',
    type: 'Course Completion',
  },
  {
    id: 'microsoft-genai',
    title: 'Career Essentials in Generative AI',
    org: 'Microsoft / LinkedIn Learning',
    description:
      'Completed the Career Essentials in Generative AI learning path from Microsoft and LinkedIn Learning, covering AI fundamentals, responsible AI practices, and industry applications of generative models.',
    icon: '🏆',
    color: 'cyan',
    type: 'Professional Learning',
  },
];

export const journey = [
  {
    year: '2023',
    period: 'August 2023',
    title: 'Diploma in Computer Engineering begins',
    org: 'MSU Baroda',
    description: 'Started the journey with foundational CS — programming, networks, databases, and engineering mathematics.',
    icon: '📚',
    type: 'education',
  },
  {
    year: '2024',
    period: 'Early 2024',
    title: 'First web projects & Python scripting',
    org: 'Self-directed',
    description: 'Built first interactive web projects using HTML, CSS, and JavaScript. Started Python for automation and scripting.',
    icon: '🛠️',
    type: 'project',
  },
  {
    year: '2024',
    period: 'Mid 2024',
    title: 'EcoSphere Pro — full platform launch',
    org: 'Personal Project',
    description: 'Built and deployed EcoSphere Pro — a complete sustainability platform with carbon calculators, SVG charts, and data visualization. Deployed live on Vercel.',
    icon: '🌱',
    type: 'project',
  },
  {
    year: '2024',
    period: 'Late 2024',
    title: 'AI & Generative AI exploration begins',
    org: 'IBM SkillsBuild + Microsoft',
    description: 'Completed IBM SkillsBuild Generative AI course and Microsoft LinkedIn Learning career essentials in AI. Dived into LLMs and prompt engineering.',
    icon: '🧠',
    type: 'learning',
  },
  {
    year: '2025',
    period: 'Early 2025',
    title: '30 Days DSA Challenge completed',
    org: 'Unstop',
    description: 'Committed to 30 consecutive days of algorithmic problem solving on Unstop, building strong foundations in data structures and algorithms.',
    icon: '⚡',
    type: 'achievement',
  },
  {
    year: '2025',
    period: '2025',
    title: 'Google Cloud hands-on labs',
    org: 'Google Cloud × GFG',
    description: 'Completed 10 Google Cloud hands-on labs through the Learn with Communities initiative — first practical exposure to cloud infrastructure.',
    icon: '☁️',
    type: 'learning',
  },
  {
    year: '2025',
    period: '2025',
    title: 'PromptWars — AI competition',
    org: 'Google for Developers × H2S',
    description: 'Competed in PromptWars Virtual, completing Challenge 3 — testing creative prompt engineering skills in a competitive environment.',
    icon: '🤖',
    type: 'achievement',
  },
  {
    year: '2026',
    period: 'Early 2026',
    title: 'StadiumMind AI — flagship innovation project',
    org: 'Hackathon / Innovation',
    description: 'Built StadiumMind AI — an intelligent stadium operations concept integrating crowd monitoring, multilingual AI, and sustainability features. Presented at event.',
    icon: '🏟️',
    type: 'project',
  },
  {
    year: '2026',
    period: 'April 2026',
    title: 'Diploma completed with 87.31%',
    org: 'MSU Baroda',
    description: 'Successfully completed the Diploma in Computer Engineering with a strong academic record of 87.31%.',
    icon: '🎓',
    type: 'education',
  },
  {
    year: '2026',
    period: 'July 2026',
    title: 'B.Tech Computer Engineering begins',
    org: 'CHARUSAT',
    description: 'Enrolled in the Bachelor of Technology in Computer Engineering at CHARUSAT — continuing the engineering journey with expanded depth in CS and cloud computing.',
    icon: '🚀',
    type: 'education',
    current: true,
  },
];

export const awsArchitecture = {
  services: [
    {
      name: 'AWS Amplify Hosting',
      role: 'Primary hosting and deployment',
      description:
        'The portfolio is built as a static React SPA and hosted on AWS Amplify. Amplify provides automated builds from GitHub, global CDN distribution, custom domain support, and HTTPS.',
      icon: '🚀',
    },
    {
      name: 'Amazon CloudFront (via Amplify)',
      role: 'Content delivery and caching',
      description:
        'Amplify automatically provisions CloudFront for global content delivery, ensuring fast load times for visitors worldwide.',
      icon: '🌍',
    },
    {
      name: 'Amazon S3 (via Amplify)',
      role: 'Static asset storage',
      description:
        'Amplify stores build artifacts and static assets in S3 buckets behind the scenes, providing reliable and durable asset hosting.',
      icon: '🗃️',
    },
  ],
  deploymentFlow: [
    'Developer pushes code to GitHub repository',
    'AWS Amplify detects the push and triggers an automated build',
    'Amplify runs `npm install` and `npm run build`',
    'Build artifacts are deployed to S3 and distributed via CloudFront',
    'Portfolio is live at the custom Amplify domain / custom domain',
  ],
  buildConfig: `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*`,
};

export const deepOSCommands = {
  help: `Available commands:
  
  about        — Who I am and what I build
  skills       — My technical toolkit
  projects     — Featured projects and builds
  journey      — Education and learning timeline
  achievements — Completed challenges and courses
  superpowers  — My developer capabilities
  contact      — How to reach me
  theme        — Toggle terminal theme
  surprise     — 🎉 You'll see...
  clear        — Clear terminal output
  exit         — Close DEEP.OS`,

  about: `> DEEP KHATRI // DEVELOPER PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Role       : Computer Engineering Student
Location   : Vadodara, Gujarat, India
Focus      : Full-Stack · Generative AI · Cloud
Education  : B.Tech CE @ CHARUSAT (current)
             Diploma CE @ MSU Baroda (87.31%)

I build interactive web applications, explore
Generative AI, and experiment with cloud tech.
Learning by building — one project at a time.

GitHub     : github.com/deepkhatri2410
LinkedIn   : linkedin.com/in/deep-khatri-964306417`,

  skills: `> TECHNICAL TOOLKIT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROGRAMMING
  ▸ Python           [Building with]
  ▸ JavaScript       [Building with]
  ▸ TypeScript       [Learning through projects]

FRONTEND
  ▸ HTML5 / CSS3     [Hands-on experience]
  ▸ React            [Learning through projects]

BACKEND
  ▸ Flask            [Building with]
  ▸ REST APIs        [Hands-on experience]

AI & CLOUD
  ▸ Generative AI    [Hands-on experience]
  ▸ Prompt Eng.      [Hands-on experience]
  ▸ Google Cloud     [10 labs completed]
  ▸ AWS Amplify      [Currently exploring]

FOUNDATIONS
  ▸ Data Structures  [Building with]
  ▸ Algorithms       [Building with]
  ▸ Git & GitHub     [Hands-on experience]`,

  projects: `> FEATURED PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[1] STADIUMIND AI ★ FLAGSHIP
    AI-powered smart stadium operating system
    Stack: React, TypeScript, Firebase, Gemini
    Demo: lnkd.in/dYp6v8AT

[2] ECOSPHERE PRO ★ FEATURED
    Sustainability & carbon footprint platform
    Stack: HTML, CSS, JavaScript, SVG Charts
    Live: ecosphere-pro.vercel.app
    Code: github.com/deepkhatri2410

[3] DSA CHALLENGE
    30 consecutive days of algorithmic problem
    solving on Unstop. Python solutions.
    Stack: Python, Algorithms, Data Structures

Scroll to Projects section for full details →`,

  journey: `> LEARNING JOURNEY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2023  Started Diploma CE @ MSU Baroda
2024  First web projects (HTML/CSS/JS)
2024  EcoSphere Pro deployed on Vercel
2024  IBM SkillsBuild — Generative AI
2024  Microsoft/LinkedIn — AI Career Essentials  
2025  30 Days DSA Challenge on Unstop ✓
2025  10 Google Cloud labs completed ✓
2025  PromptWars Virtual — Challenge 3 ✓
2026  StadiumMind AI — innovation project
2026  Diploma CE completed (87.31%) 🎓
2026  B.Tech CE @ CHARUSAT → CURRENT 🚀`,

  achievements: `> ACHIEVEMENTS & CERTIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ 30 Days Problem of the Day — Unstop
   Daily DSA challenges, 30-day streak

☁️ Google Cloud Learn × GeeksforGeeks
   10 hands-on GCP labs completed

🤖 PromptWars Virtual — Challenge 3
   Google for Developers × H2S

🧠 Getting Started with Generative AI
   IBM SkillsBuild

🏆 Career Essentials in Generative AI
   Microsoft / LinkedIn Learning`,

  superpowers: `> DEVELOPER SUPERPOWERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ RAPID BUILDER
   Turning ideas into working prototypes fast
   
🧩 PROBLEM ARCHITECT  
   Breaking complex challenges into solvable steps

🎨 FULL-STACK THINKER
   Connecting frontend experience with backend logic

🤖 AI INTEGRATOR
   Embedding intelligence into real applications

☁️ CLOUD CURIOUS
   Exploring how infrastructure scales ideas

📊 DATA VISUALIZER
   Making numbers tell compelling stories

🌱 PERPETUAL LEARNER
   Every project teaches something new`,

  contact: `> CONTACT DEEP KHATRI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 LinkedIn
   linkedin.com/in/deep-khatri-964306417

💻 GitHub (Primary)
   github.com/deepkhatri2410

💻 GitHub (Secondary)
   github.com/khatrideep133-ops

📍 Location
   Vadodara, Gujarat, India

I'm always open to learning, collaborating,
and building meaningful technology.`,

  surprise: `UNLOCKING SUPERPOWER...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ██████╗ ███████╗███████╗██████╗ 
  ██╔══██╗██╔════╝██╔════╝██╔══██╗
  ██║  ██║█████╗  █████╗  ██████╔╝
  ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝ 
  ██████╔╝███████╗███████╗██║     
  ╚═════╝ ╚══════╝╚══════╝╚═╝     
  
  .OS SUPERPOWER UNLOCKED 🚀
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  ABILITY: BUILDING IDEAS INTO REALITY
  
  Every line of code is a step forward.
  Every bug is a lesson.
  Every project is a story.
  
  "The best way to predict the future
   is to build it." 
                       — Deep Khatri
  
  Thanks for exploring DEEP.OS! 🎉`,
};

