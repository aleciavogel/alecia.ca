import { StyleSheet } from "@react-pdf/renderer";

import { createTw } from "react-pdf-tailwind";
import { ExperienceItem, Skills } from "./types";

export const COLORS = {
  pink: "#f472b6",
  lightPink: "#f9a8d4",
  indigo: "#6366f1",
  bgGrey: "rgb(226, 226, 226)",
};

export const tw = createTw({
  theme: {
    fontFamily: ["Helvetica", "Helvetica-Bold", "Times-Roman"],
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

export const styles = StyleSheet.create({
  frontPage: {
    // backgroundColor: "rgb(142,204,209)",
    backgroundColor: COLORS.indigo,
    fontFamily: "Helvetica",
    padding: "20px 50px 0px",
  },
  bgIndigo: {
    backgroundColor: COLORS.indigo,
  },
  bgGrey: {
    backgroundColor: COLORS.bgGrey,
  },
  page: {
    padding: 30,
    fontFamily: "Helvetica",
  },
  fontBold: {
    fontFamily: "Helvetica-Bold",
  },
  fontOblique: {
    fontFamily: "Helvetica-Oblique",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  section: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  borderBottom: {
    borderBottom: "1px solid #c9c9c9",
  },
  textSmol: {
    fontSize: 10,
  },
  textGray: {
    color: "#666666",
  },
  bgBlue: {
    backgroundColor: "rgb(142,204,209)",
  },
  textBlue: {
    color: "rgb(142,204,209)",
  },
  bulletIcon: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
  },
  bulletPoint: {
    display: "flex",
    flexDirection: "row",
  },
  table: {
    display: "flex",
    width: "auto",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#c9c9c9",
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableCell: {
    padding: 4,
    textAlign: "center",
  },
  tableHeader: {
    paddingTop: 0,
    fontSize: 10,
    fontWeight: "bold",
  },
  tableContent: {
    color: "#666666",
  },
});

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    title: "Senior Software Developer (LX)",
    company: "Onlea",
    location: "Edmonton, AB [Remote]",
    dateRange: "Sep 2022 - Sep 2023",
    description: [
      "Customized SCORM package code to meet client needs, converted SCORM packages into mobile apps and executable software for offline access, and ensured compliance with W3C Accessibility guidelines.",
      "Transcribed a digital textbook built with rbook into an interactive Moodle Book module for a post-graduate finance course at the University of Alberta.",
      "Conducted client-facing demos and presentations, simplifying intricate software functionalities to ensure client understanding and promote effective usage.",
      "Co-led Onlea's first Google Design Sprint, resulting in a rapid prototype for an enhanced internal QA process.",
      "Experimented with photogrammetry techniques to bring cultural education to life in an e-learning setting. Captured multiple-angle photographs of a Métis artefact and successfully converted it into an interactive 3D model.",
      "Engineered a custom Docker development environment specifically tailored for the creation of bespoke Moodle plugins, incorporating Behat and PHPUnit for robust unit testing.",
    ],
    skills: [
      "PHP",
      "TypeScript",
      "ReactJS",
      "Electron",
      "CapacitorJS",
      "Python",
      "Docker",
      "SCORM",
      "Git",
    ],
  },
  {
    title: "Software Engineer (Mapmaker & Platform Tools)",
    company: "Gather Town",
    location: "San Francisco, CA [Remote]",
    dateRange: "May 2021 - Jun 2022",
    description: [
      "Orchestrated an overhaul of the internal customer service dashboard using TypeScript, ReactJS, Material UI, and Node. Collaborated with Customer Support and Art teams to achieve a 75% reduction in customer issue resolution times.",
      "Pioneered AI-powered gesture and cat facial detection in Gather's video chat, offering hands-free user interaction ahead of industry adoption.",
      "Architected and deployed a scalable paywall feature in Gather Town, implemented in TypeScript and Node. Dynamically controlled server access according to the volume of paid users, leading to triple the paid event bookings by customers.",
      "Participated in code reviews and pair programming sessions to ensure code quality and maintainability.",
    ],
    skills: ["TypeScript", "NodeJS", "ReactJS", "Firebase", "Git"],
  },
  {
    title: "Software Developer (Data Science)",
    company: "Cybera",
    location: "Edmonton, AB [Remote]",
    dateRange: "Nov 2018 - May 2021",
    description: [
      "Led the front-end development of a $1.2M socioeconomic project and built a data visualization platform powered by machine learning for the Alberta Government's Ministry of Labour.",
      "Conducted a specialized workshop for PhD candidates at the University of Alberta, providing in-depth instruction on leveraging Docker for Data Science projects.",
      "Consulted with the Communications team on the redesign and rebranding of the Cybera website.",
      "Executed a total code overhaul for Cybera's timesheet app, enhancing code readability, maintainability, and scalability.",
      "Collaborated with the Data Science team to develop, maintain, and support software applications to analyze large amounts of data.",
      "Facilitated usability tests to quantify and improve the user experience of proprietary Data Science tools.",
    ],
    skills: [
      "TypeScript",
      "JavaScript",
      "ReactJS",
      "Python",
      "GoLang",
      "PHP",
      "Docker",
      "Neo4J",
      "PostgreSQL",
      "Git",
    ],
  },
];

export const WORK_EXPERIENCES_CONTINUED: ExperienceItem[] = [
  {
    title: "Full Stack Rails Developer",
    company: "Yardstick Assessment Strategies",
    location: "Edmonton, AB",
    dateRange: "Jun 2017 - Oct 2018",
    description: [
      "Maintained and improved Yardstick's high-stakes exam administration platform, Measure. Fixed a critical bug in the Measure platform that was causing a weekly crash of the production server due to the report generation feature.",
      "Refactored and redesigned the Proctor Portal interface to improve usability, accessibility, and overall efficiency of exam marking and scheduling.",
      "Led the creation of Yardstick's API documentation website, delving deep into the Ruby on Rails codebase to enumerate and detail all API endpoints, properties, and headers. Employed the Slate framework with Markdown for structure and design, and leveraged Postman for endpoint validation, ensuring robust and accessible documentation.",
    ],
    skills: [
      "Ruby on Rails",
      "JavaScript",
      "AngularJS",
      "ThreeJS",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Git",
    ],
  },
  {
    title: "E-learning Developer",
    company: "Yardstick Training",
    location: "Edmonton, AB",
    dateRange: "Jan 2017 - Jun 2017",
    description: [
      "Designed and developed bespoke eLearning solutions, including a 3D intoxicated boating simulator for a boat safety course that was built with ThreeJS and approved by Transport Canada.",
      "Refactored and debugged a legacy Vaccine Storage form for Alberta Health Services, ensuring cross-browser compatibility from Internet Explorer 8 to modern browsers like Google Chrome.",
      "Actively contributed to the open-source SCORM tool, Adapt, enhancing its functionality and broadening its community impact.",
      "Spearheaded the development of a SCORM-compliant course about disaster preparedness for the Government of Alberta by transforming instructional designers' plans into a fully-realized eLearning experience using the Adapt framework.",
    ],
    skills: ["JavaScript", "HTML5", "CSS3", "Git"],
  },
  {
    title: "WordPress Developer",
    company: "SOS Media Corp.",
    location: "Edmonton, AB",
    dateRange: "Aug 2016 - Nov 2016",
    description: [
      "Built feature-rich client websites from scratch, leveraging HTML, CSS, JavaScript, PHP, and various web development frameworks to deliver high-quality, scalable solutions. Managed and created bespoke WordPress themes and plugins, catering to unique client requirements and enhancing site functionality.",
      "Authored cross-platform code to ensure seamless user experiences across diverse web browsers and devices, optimizing performance and accessibility.",
      "Received Photoshop design mockups and meticulously translated them into fully functional, custom WordPress themes, ensuring high fidelity to the original visual design.",
      "Collaborated with clients to refine website specifications and requirements, delivering tailored solutions that aligned with business objectives.",
      "Authored one of SOS Media Corp's most-read blog articles, detailing the nuances of 'reactive,' 'responsive,' and 'interactive' design. Enhanced the article with custom JavaScript for interactive, browser-based learning, contributing to its high-traffic status and demonstrating my skills in technical writing and web development.",
    ],
    skills: ["WordPress", "JavaScript", "PHP", "MySQL", "Git"],
  },
  {
    title: "Continuing Education Instructor (Game Design Camp)",
    company: "Red Deer College",
    location: "Red Deer, AB",
    dateRange: "Jul 2016",
    description: [
      "Stepped in to redesign the entire Video Game Design camp curriculum within a week, transitioning from Project Spark to Unity 3D due to unexpected discontinuation of the former platform.",
      "Delivered a comprehensive educational experience, teaching computer programming fundamentals in C# including algorithms and data structures. Topics covered ranged from game design, story and character development, to advanced programming techniques like procedural generation.",
    ],
    skills: ["Curriculum Development", "Unity 3D", "C#", "Team Collaboration"],
  },
];

export const LAST_WORK_EXPERIENCE = [
  {
    title: "Youth Technology Instructor",
    company: "University of Lethbridge",
    location: "Lethbridge, AB",
    dateRange: "Jun 2015 - Aug 2015",
    description: [
      "Developed a one-of-a-kind, five-camp curriculum that empowered young minds to dive into robotics, microcomputers, and software development. Platforms leveraged include LEGO MindStorms and MinecraftEDU.",
      "Orchestrated a series of interactive lessons and games in computer science fundamentals, utilizing tools like MIT Scratch, Sonic Pi, and Python to make learning not just educational but also fun!",
    ],
    skills: ["Curriculum Design", "Robotics", "MinecraftEDU", "MIT Scratch", "Python", "Ruby"],
  },
];

export const OTHER_WORK_EXPERIENCE = [
  {
    title: "Audio Engineer & Live Sports Producer (WHL Hurricanes Radio Show)",
    company: "Clear Sky Radio Inc.",
    location: "Lethbridge, AB",
    dateRange: "Jan 2013 - Mar 2014",
    description: [
      "Oversaw operation of the audio board, guaranteeing listeners an impeccable auditory experience during live broadcasts.",
      "Quickly captured, edited, and prepared key hockey goals, ensuring their preparation for reappearance in post-game highlights.",
      "Diligently monitored studio sound equipment, making on-the-spot adjustments and troubleshooting to maintain uninterrupted and top-notch program quality.",
    ],
    skills: ["Audio Engineering", "Broadcasting", "Sound Editing"],
  },
  {
    title: "Summer Events Cruiser Hostess",
    company: "PR Broadcasting",
    location: "Peace River, AB",
    dateRange: "May 2013 - Aug 2013",
    description: [
      "Navigated to remote and bustling events across Northern Alberta from High Level to Fox Creek. Once on location, delivered on-the-spot, hourly reports to keep listeners in the loop.",
      "Liaised with event organizers and sponsors, coordinating cruiser appearances in addition to establishing and maintaining strong relationships for future collaborations.",
    ],
    skills: ["Public Relations", "Event Coordination", "Reporting"],
  },
  {
    title: "Radio Host (YL Country)",
    company: "PR Broadcasting",
    location: "Peace River, AB",
    dateRange: "May 2011 - Sep 2012",
    description: [
      "Articulated timely updates, from event announcements to weather reports, ensuring listeners stayed informed and engaged.",
      "Conducted interviews with local personalities, artists, and experts, adding depth and variety to programming.",
      "Ensured compliance with SOCAN and CRTC guidelines regarding on-air conduct, programming, and advertising.",
    ],
    skills: ["On-Air Hosting", "Public Speaking", "Interviewing", "Compliance Monitoring"],
  },
];

export const SKILLS_EXPERIENCE = [
  {
    title: "Ruby on Rails",
    exp: "8 years",
  },
  {
    title: "Postgres",
    exp: "8 years",
  },
  {
    title: "Python",
    exp: "8 years",
  },
  {
    title: "ReactJS",
    exp: "7 years",
  },
  {
    title: "NodeJS",
    exp: "5 years",
  },
  {
    title: "TypeScript",
    exp: "3 years",
  },
];

export const SKILLS: Skills = {
  "Programming Languages": ["TypeScript", "JavaScript", "Ruby", "Python", "Elixir", "PHP"],
  Tools: ["Git", "NPM", "Yarn", "Docker"],
  "Frontend Frameworks": ["ReactJS", "React Native", "NextJS", "GatsbyJS", "ThreeJS"],
  Databases: ["Supabase", "PostgreSQL", "Firebase", "Neo4J", "MySQL", "GraphQL"],
  "Full Stack Frameworks": ["Ruby on Rails", "CapacitorJS", "Electron", "Phoenix", "Express"],
  Design: ["Figma", "Sketch", "InDesign", "Photoshop", "Illustrator"],
};

export const VOLUNTEERING = [
  {
    title: "Mentor & Instructor",
    company: "Canada Learning Code",
    location: "Edmonton, AB",
    dateRange: "Sep 2016 - Mar 2020",
    description: [
      "Volunteered as a mentor and instructor at Canada Learning Code (formerly Ladies Learning Code) in the Startup Edmonton chapter.",
      "Mentored up to four students per workshop, assisting with queries and ensuring course progression.",
      "Led beginner workshops for both youth and adults, guiding students in building their first multi-page websites using HTML & CSS.",
      "Focused on increasing digital literacy among marginalized groups and youth.",
    ],
  },
  {
    title: "Mentor",
    company: "Technovation Challenge",
    location: "Edmonton, AB",
    dateRange: "Dec 2018 - Jun 2019",
    description: [
      "Mentored a team of female high school students, focusing on app development to address socioeconomic issues in the community.",
      "Provided technical and strategic guidance for the development of 'SwitchOff,' an app designed to tackle pollution from idling cars.",
      "Successfully coached the team through to the global semi-finals, showcasing the app's innovation and impact.",
    ],
  },
];

interface ConferenceItem {
  title: string;
  date: string;
  location: string;
}

export const CONFERENCES: ConferenceItem[] = [
  {
    title: "Interface Design Patterns",
    date: "Nov 2021",
    location: "Online, hosted by Vitaly Friedman",
  },
  {
    title: "Scrummaster Training",
    date: "Aug 2020",
    location: "Online, hosted by Agile Pain Relief",
  },
  {
    title: "Awwwards Conference",
    date: "Jan 2020",
    location: "Tokyo, Japan",
  },
  {
    title: "Dribbble Hangtime",
    date: "June 2019",
    location: "New York City, NY",
  },
  {
    title: "Awwwards Conference",
    date: "Feb 2019",
    location: "Amsterdam, Netherlands",
  },
  {
    title: "UX Camp",
    date: "Sept 2016",
    location: "Edmonton, AB",
  },
];
