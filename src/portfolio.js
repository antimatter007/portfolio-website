/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
// Make sure to replace './assets/lottie/splashAnimation' with your custom splash animation file if you have one
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ankit Sonal Prasad",
  title: "Hi all, I'm Ankit",
  subTitle: emoji(
    "A dedicated Backend Developer 🚀 with 1.5 years of experience in building robust backend applications and AI/ML models. Passionate about leveraging technology to solve real-world problems."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pyfeMfC-u2bxNdSOhEYB23E6zgZkmt-T/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/antimatter007",
  linkedin: "https://www.linkedin.com/in/ankit-prasad-690393169/",
  gmail: "ankitsprasad007@gmail.com",
  gitlab: "", // If you have a GitLab profile, add the link here
  facebook: "", // If applicable
  medium: "", // If applicable
  stackoverflow: "", // If applicable
  instagram: "", // If applicable
  twitter: "", // If applicable
  kaggle: "", // If applicable
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "CRAZY BACKEND DEVELOPER WHO LOVES TO EXPLORE NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop highly efficient and scalable backend systems for web and mobile applications"
    ),
    emoji("⚡ Build and integrate RESTful APIs and microservices"),
    emoji(
      "⚡ Implement AI/ML models to enhance application functionalities"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-leaf" // Using a leaf icon for Django
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-rocket" // Using a rocket icon for FastAPI
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-chart-line" // Using a chart icon for Prometheus
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fas fa-chart-bar" // Using a bar chart icon for Grafana
    },
    {
      skillName: "OpenTelemetry",
      fontAwesomeClassname: "fas fa-microchip" // Using a microchip icon for OpenTelemetry
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Bombay",
      logo: require("./assets/images/iitb_logo.png"), // Ensure you have this image in the specified path
      subHeader: "B.Tech. in Chemical Engineering",
      duration: "July 2019 - April 2023",
      desc: "Graduated with a strong foundation in engineering principles and applied technologies.",
      descBullets: [
        "Software Development, Backend Engineering and Machine Learning in Computer Science",
        "Extracurriculars in ECell and Techfest as Coordinator."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "AI/ML Integration",
      progressPercentage: "75%"
    },
    {
      Stack: "Database Management",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (Backend)",
      company: "Truckx Inc.",
      companylogo: require("./assets/images/truckx-pure-blue-logo.png"), // Ensure you have this image
      date: "June 2023 – Present",
      desc: "Collaborated as part of a core backend platform engineering team to manage and enhance the Truckx logbook and fleet management services.",
      descBullets: [
        "Developed and deployed a device monitoring system for tracking the states of 25,000 on-ground IoT devices using Kubernetes Helm charts, Prometheus, FastAPI, and Grafana.",
        "Built a comprehensive tracing and metrics setup by integrating and deploying OpenTelemetry on critical services, enhancing error tracking and performance monitoring on KloudFuse.",
        "Developed a driver referral program leveraging Django Rest Framework, Tornado, Redis, MySQL, PostgreSQL, Google Cloud Pub/Sub, and Cron jobs to enhance user engagement.",
        "Automated database backup procedures for Apache Pinot using Google Cloud Scheduler, ensuring a rolling 7-day backup of critical location data.",
        "Revamped the report generation and email scheduling system by migrating from TSDB to MySQL and Apache Pinot, improving report delivery and system reliability.",
        "Developed real-time pop-up notifications for fleet managers regarding driver behaviors using Google Cloud Pub/Sub, OneSignal, WebSockets, and Socket.io."
      ]
    },
    {
      role: "Software Engineer (Machine Learning)",
      company: "MapIT.ai",
      companylogo: require("./assets/images/mapit-images.jpeg"), // Ensure you have this image
      date: "May 2023 – Sep 2023",
      desc: "Developed a robust neural inertial navigation system and collaborated with a US-based company to build a conversational GPT system.",
      descBullets: [
        "Developed a neural inertial navigation system utilizing ResNet1D, improving efficiency and accuracy for real-world applications.",
        "Executed model training, parameter tuning, and data augmentation using Python.",
        "Conducted extensive testing of the navigation model on real-time data, achieving an average error rate of approximately 7%.",
        "Collaborated with a US-based Ramen company to build a platform for training their data on LLM to provide a conversational GPT system."
      ]
    },
    {
      role: "Algorithm Software Engineer",
      company: "Kearney",
      companylogo: require("./assets/images/Kearney Logo.png"), // Ensure you have this image
      date: "May 2022 – Aug 2022",
      desc: "Designed logistics algorithms and implemented dispatch plans using genetic algorithms and graph-based algorithms.",
      descBullets: [
        "Collaborated with the HOPTEK team to design logistics algorithms using Genetic Algorithm and Single Depot Capacitated Vehicle Routing Problem.",
        "Implemented the Initial Dispatch Plan in Python, leveraging Dijkstra’s and Kruskal’s algorithms, achieving a 70% accurate initial solution.",
        "Conducted advanced graph analytics using TigerGraph, GSQL, GraphQL, Python, and C++ to extract and interpret complex relational data."
      ]
    },
    {
      role: "Software Engineer (Full-Stack)",
      company: "Tech Japan Inc",
      companylogo: require("./assets/images/Tech Japan Overview.webp"), // Ensure you have this image
      date: "May 2022 – July 2022",
      desc: "Enhanced student profile pages and developed algorithms for candidate skill matching using a robust tech stack.",
      descBullets: [
        "Led the enhancement of the student profile page, integrating link preview in React for projects and portfolios.",
        "Developed advanced PDF parsing mechanisms for direct resume data extraction.",
        "Designed and implemented algorithms for precise candidate skill matching with job descriptions using Node.js, Next.js, Tailwind CSS, and GraphQL."
      ]
    },
    {
      role: "Software Engineer (Machine Learning)",
      company: "FitBuddy - E-trainer Analytics",
      companylogo: require("./assets/images/Fitbuddy Logo.jpeg"), // Ensure you have this image
      date: "May 2021 – July 2021",
      desc: "Engineered a Pose Detection Model to enhance real-time exercise tracking for Yoga and Gym routines.",
      descBullets: [
        "Developed a Pose Detection Model utilizing OpenCV and Mediapipe for 7 distinct Yoga and Gym routines.",
        "Implemented pose detection and classification using TensorFlow Pose Classification, improving model accuracy.",
        "Curated and validated training datasets, deployed the Android application showcasing the model's capabilities on GitHub."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "techmihirnaik Group",
      companylogo: require("./assets/images/Tech Mihir Naik Logo.png"), // Ensure you have this image
      date: "May 2021 – Jun 2021",
      desc: "Optimized website UX and enhanced API services using Django REST framework.",
      descBullets: [
        "Enhanced API services with Django REST framework, resulting in faster load times and efficient data retrieval.",
        "Crafted complex MySQL queries for user data aggregation, enabling comprehensive data analytics and reporting.",
        "Developed a more responsive and user-friendly website using SQL, HTML, Bootstrap, JavaScript, and Django."
      ]
    },
    {
      role: "Competitive Programming Teaching Assistant",
      company: "Coding Ninjas",
      companylogo: require("./assets/images/Coding Ninjas Logo.png"), // Ensure you have this image
      date: "Jan 2022 – Apr 2022",
      desc: "Assisted students enrolled in the Competitive Programming Course by solving doubts and providing guidance.",
      descBullets: [
        "Solved student’s doubts with a rating of 4.5+/5.0, enhancing their understanding of competitive programming concepts."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // Uncomment and ensure you have the image if available
      // image: require("./assets/images/simplebank_logo.webp"), // Ensure you have this image
      projectName: "SimpleBank - Banking System",
      projectDesc: "Engineered a comprehensive banking system backend using Go and the Gin web framework.",
      footerLink: [
        {
          name: "API Documentation",
          url: "https://docs.google.com/document/d/1dZjrXXP0LgXB71GPYnMtDymNnEer6YCEnGjM7dmatOk/edit?usp=sharing"
        },
        {
          name: "GitHub",
          url: "https://github.com/antimatter007/go-backend"
        }
      ]
    },
    {
      // Uncomment and ensure you have the image if available
      // image: require("./assets/images/muskgpt_logo.webp"), // Ensure you have this image
      projectName: "MuskGPT - AI Chatbot",
      projectDesc: "Designed and developed an AI-powered chatbot using Flask and OpenAI’s GPT models.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/antimatter007/muskGPT"
        }
      ]
    }
    // You can add more projects here if needed
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks, competitive programming profiles, etc.

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters, Competitive Programming Profiles, and Some Cool Stuff that I have done!",
  
  achievementsCards: [

    {
      title: "CodeChef",
      subtitle:
        "Achieved a Global Rank of 54 in Starters 41 Div 4. Max Rating - 1923.",
      // Uncomment and ensure you have the image if available
      image: require("./assets/images/codechef_logo.jpg"), // Ensure you have this image
      imageAlt: "CodeChef Logo",
      footerLink: [
        {
          name: "Profile",
          url: "https://www.codechef.com/users/antimatters"
        }
      ]
    },
    // New Achievement Card for LeetCode
    {
      title: "LeetCode",
      subtitle:
        "Solved 1000+ Problems based on Data Structures and Algorithms.",
      // Uncomment and ensure you have the image if available
      image: require("./assets/images/leetcode_logo.png"), // Ensure you have this image
      imageAlt: "LeetCode Logo",
      footerLink: [
        {
          name: "Profile",
          url: "https://leetcode.com/u/antimatters/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // Add your blog posts here or remove the section if you don't have any
    // Example:
    // {
    //   url: "https://yourblog.com/post1",
    //   title: "Your Blog Post Title",
    //   description: "A brief description of your blog post."
    // }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
// Reintroduced with display: false to prevent errors

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embedded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Link to your resume can be placed here if available
  resumeUrl: "https://drive.google.com/file/d/1pyfeMfC-u2bxNdSOhEYB23E6zgZkmt-T/view?usp=drivesdk",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91-7362975797",
  email_address: "ankitsprasad007@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "antimatter007", // Replace with your Twitter username without @ if applicable
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set to true if you are looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection, // Re-added podcastSection with display: false
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
