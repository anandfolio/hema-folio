import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'hemadharshinimarimuthu@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Hemadharshini, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/' },
];

export const MY_STACK = {
    cloud: [
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Cloud Architecture',
            icon: '/logo/aws.png',
        },
        {
            name: 'REST APIs',
            icon: '/logo/node.png',
        },
        {
            name: 'API Gateway Concepts',
            icon: '/logo/aws.png',
        },
        {
            name: 'Cloud Networking Basics',
            icon: '/logo/aws.png',
        },
    ],
    programming: [
        {
            name: 'Python',
            icon: '/logo/js.png', // Placeholder
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'HTML',
            icon: '/logo/js.png', // Placeholder
        },
        {
            name: 'CSS',
            icon: '/logo/sass.png',
        },
    ],
    frameworks: [
        {
            name: 'Django',
            icon: '/logo/node.png', // Placeholder
        },
        {
            name: 'REST APIs',
            icon: '/logo/node.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS Console',
            icon: '/logo/aws.png',
        },
        {
            name: 'Power BI',
            icon: '/logo/js.png', // Placeholder
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Railway Track Sensor Detection System',
        slug: 'railway-track-sensor-detection',
        year: 2024,
        description: `
      Developed an IoT-based railway safety system using Arduino ESP32 and multiple sensors including ultrasonic, GPS, IR, RFID, vibration, acoustic emission, and fiber-optic sensors. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>Real-time anomaly detection</li>
        <li>Sensor data processing</li>
        <li>Communication system integration</li>
        <li>Predictive maintenance logic</li>
      </ul><br/>
      
      Impact:
      <ul>
        <li>Improved railway safety</li>
        <li>Reduced maintenance costs</li>
        <li>Enabled predictive monitoring</li>
      </ul>
      `,
        role: `
      Cloud & IoT Engineer <br/>
      <ul>
        <li>Developed the core IoT system using Arduino ESP32</li>
        <li>Integrated multiple sensors for real-time monitoring</li>
        <li>Implemented predictive maintenance logic</li>
      </ul>
      `,
        techStack: [
            'Arduino ESP32',
            'IoT Systems',
            'Sensors',
            'Real-time Processing',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Cloud Deployment Project',
        slug: 'cloud-deployment-project',
        year: 2024,
        description: 'Coming Soon',
        role: 'Cloud Engineer',
        techStack: ['AWS', 'Cloud Architecture'],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [],
    },
    {
        title: 'API Hosting Project',
        slug: 'api-hosting-project',
        year: 2024,
        description: 'Coming Soon',
        role: 'Cloud Engineer',
        techStack: ['AWS', 'REST APIs'],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [],
    },
    {
        title: 'DevOps Pipeline Project',
        slug: 'devops-pipeline-project',
        year: 2024,
        description: 'Coming Soon',
        role: 'Cloud Engineer',
        techStack: ['Docker', 'AWS'],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'AWS Learning Journey',
        company: 'Cloud & Technical Experience',
        duration: '',
    },
    {
        title: 'Cloud Computing Practice',
        company: 'Cloud & Technical Experience',
        duration: '',
    },
    {
        title: 'API Development',
        company: 'Cloud & Technical Experience',
        duration: '',
    },
    {
        title: 'IoT System Integration',
        company: 'Cloud & Technical Experience',
        duration: '',
    },
    {
        title: 'Backend System Development',
        company: 'Cloud & Technical Experience',
        duration: '',
    },
];

export const CERTIFICATIONS = [
    {
        title: 'AWS Solutions Architecture Certification',
        isMain: true,
    },
    {
        title: 'Full Stack Development Certification',
        isMain: false,
    },
    {
        title: 'Data Analytics Certification',
        isMain: false,
    },
    {
        title: 'Data Visualization Certification',
        isMain: false,
    },
];


