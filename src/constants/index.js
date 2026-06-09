export const myProjects = [
  {
    id: 1,
    title: "Planet Detector",
    description:
      "Analyzes BLS files from the Kepler Space Missions and detects the pressence of planets in the system.",
    subDescription: [
      "Built a scalable application with TKinter, Matplotlib, and Lightkurve, allowing for quick computation.",
      "Allowed for searching of the MAST database and downloading specific files.",
      "Detects single and multiple planet systems, giving stats on each planet detected.",
      "Includes information about the analysis, informing the user on what is happening.",
    ],
    href: "https://github.com/Elizabeth225156/planetDetector",
    logo: "Planet Detector",
    image: `${import.meta.env.BASE_URL}assets/projects/planetDetector1.png`,
    tags: [
      {
        id: 1,
        name: "Python",
        path: `${import.meta.env.BASE_URL}assets/logos/python.svg`,
      },
    ],
  },
  {
    id: 2,
    title: "Digital Synthesizer",
    description:
      "An application created using JUCE framework to mimic a simple sine wave synthesizer.",
    subDescription: [
      "Created using CMake and JUCE framework for a school project.",
      "Includes an oscilloscope that shows the current sine wave being played.",
      "Has one ASDR envelope with sliders to adjust values.",
      "Contains one filter for high and low voices.",
    ],
    href: "https://github.com/Elizabeth225156/synth",
    logo: `${import.meta.env.BASE_URL}assets/projects/Synth.png`,
    image: `${import.meta.env.BASE_URL}assets/projects/Synth.png`,
    tags: [
      {
        id: 1,
        name: "JUCE",
        path: `${import.meta.env.BASE_URL}assets/logos/JUCE.svg`,
      },
    ],
  },
  {
    id: 3,
    title: "Water Filter Hub",
    description:
      "A web application connecting to an Arduino on a microplastic filter.",
    subDescription: [
      "Built as a submission to several design competitions.",
      "Won Promising STEM Innovation Award from Samsung Solve for Tomorrow",
      "Connects to arduino with sensors and sends data back to web page",
      "Sensors monitor moisture and status of the filter, enabling easier maintenance.",
    ],
    href: "https://github.com/Elizabeth225156/water_filter_hub",
    logo: `${import.meta.env.BASE_URL}assets/projects/waterFilterHub.png`,
    image: `${import.meta.env.BASE_URL}assets/projects/waterFilterHub.png`,
    tags: [
      {
        id: 1,
        name: "C++",
        path: `${import.meta.env.BASE_URL}assets/logos/c++.svg`,
      },
      {
        id: 2,
        name: "Arduino",
        path: `${import.meta.env.BASE_URL}assets/logos/arduino.svg`,
      },
    ],
  },
  {
    id: 4,
    title: "AI D&D Dungeon Master",
    description:
      "A console-based Dungeons and Dragons game with an AI Dungeon Master.",
    subDescription: [
      "Utilizes Cohere AI as the Dungeon Master",
      "Allows for custon characters to be created.",
      "Enables the user to end the campaign whenever they feel like it.",
      "Implements all core features of Dungeons and Dragons.",
    ],
    href: "https://github.com/Elizabeth225156/dnd-campaign1",
    logo: `${import.meta.env.BASE_URL}assets/projects/aiDND.png`,
    image: `${import.meta.env.BASE_URL}assets/projects/aiDND.png`,
    tags: [
      {
        id: 1,
        name: "Python",
        path: `${import.meta.env.BASE_URL}assets/logos/python.svg`,
      },
    ],
  },
  {
    id: 5,
    title: "Turtle Planet Renderer",
    description:
      "An application written with the Turtle library for Python that randomly generates planets.",
    subDescription: [
      "Creates both continents, islands, and oceans on the planets.",
      "Contains a background of randomized stars.",
      "Every planet is completely unique.",
      "Has multiple biome types for the planets.",
    ],
    href: "https://github.com/Elizabeth225156/Turtle-Project",
    logo: `${import.meta.env.BASE_URL}assets/projects/turtlePlanet.png`,
    image: `${import.meta.env.BASE_URL}assets/projects/turtlePlanet.png`,
    tags: [
      {
        id: 1,
        name: "Python",
        path: `${import.meta.env.BASE_URL}assets/logos/python.svg`,
      },
    ],
  },
];

// export const mySocials = [
//   {
//     name: "Email",
//     href: "",
//     icon: "/assets/socials/whatsApp.svg",
//   },
//   {
//     name: "Linkedin",
//     href: "https://www.linkedin.com/in/ali-sanati/",
//     icon: "/assets/socials/linkedIn.svg",
//   },
//   {
//     name: "Instagram",
//     href: "https://www.instagram.com/ali.sanatidev/reels/",
//     icon: "/assets/socials/instagram.svg",
//   },
// ];

export const experiences = [
  {
    title: "High School",
    job: "Freshman Year",
    date: "2024-2025",
    contents: [
      "Learned Javascript, Java, P5.js, Godot, HTML, and CSS in class.",
      "Submitted to the Design Quest competition and received a Judges Special Recognition Category Award.",
      "Participated in my school's Robotics and Girls Who Code clubs.",
      "Built several projects such as a 3d rubiks cube and an AI chatbot for school.",
    ],
  },
  {
    title: "High School",
    job: "Sophomore Year",
    date: "2024-2025",
    contents: [
      "Collaborated with the Academy of Biotechnology to submit to several competitions.",
      "Won a Promising STEM Innovation Award for submission to Samsung Solve for Tomorrow competition.",
      "Created several projects such as a digital synthesizer, planet detector, and more.",
      "Competed in TSA challenges and won 5th in the state for Web Design.",
      "Girls Who Code Vice President for the school year.",
    ],
  },
  {
    title: "High School",
    job: "Junior Year",
    date: "2026-2027",
    contents: [
      "Will begin in September.",
    ],
  },
];
