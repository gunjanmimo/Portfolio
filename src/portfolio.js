﻿/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Gunjan Paul",
  title: "Hi all, I'm Gunjan",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AQICUigb4Os5FnxPiXk112It9qTfIgus/view?usp=sharing",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/gunjanmimo",
  linkedin: "https://www.linkedin.com/in/gunjan-paul-8a2806152/",
  gmail: "gunjan.mtbpaul@gmail.com",
  gitlab: "https://gitlab.com/gunjanmimo",
  facebook: "https://www.facebook.com/gunjan.paul.372/",
  medium: "https://medium.com/@gunjanpaul",
  stackoverflow: "https://stackoverflow.com/users/11675463/gunjan-paul",
  instagram: "https://www.instagram.com/gunjan_mimo/",
  twitter: "https://twitter.com/GunjanPaul2",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    // {
    //   schoolName: "Harvard University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "University of Engineering & Management, Jaipu",
      // logo: require("./assets/images/UEMlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "June 2018 - present",
      desc:
        "Took courses about Software Engineering, Web Security, Operating Systems, Data Science",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%",
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "I'M NOT A BARISTA",
      companylogo: require("./assets/images/BARISTA.png"),
      date: "September 2020 – Present",
      desc: "Developing web application fo rcoffee transaction",
      descBullets: [
        "working on spring boot and spring security",
        "dealing wit microservice and continuous integration",
      ],
    },
    {
      role: "Artificial Intelligence Intern",
      company: "LoveOnn",
      companylogo: require("./assets/images/loveonn.png"),
      date: "July 2020 – Octobor 2020",
      desc: "data driven business solution",
      descBullets: ["AI based loan service", "AI based customized webpage"],
    },
    {
      role: "Research Intern",
      company: "National Institute of Technology",
      companylogo: require("./assets/images/NIT.png"),
      date: "December 2019 – January 2020",
      desc:
        "Image processing model to detect complex building structure from low level image data",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "gunjanmimo", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/technocolabs.png"),
      link: "https://technocolabs.tech/",
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   link: "http://nextu.se/",
    // },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url:
    //         "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing",
    //     },
    //     {
    //       name: "Award Letter",
    //       url:
    //         "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing",
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url:
    //         "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html",
    //     },
    //   ],
    // },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action The Fun FlaskCard Faq Game of Solar System and Universe that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/0000002a88962a22?source=web",
        },
      ],
    },

    {
      title: "Developed Animal Kingdom",
      subtitle:
        " a multi-page web app called ‘Animal Kingdom,a decentralized blockchain application",
      image: require("./assets/images/Dapp.svg"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "#",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://medium.com/@gunjanpaul/google-action-in-10min-without-a-single-line-of-code-and-get-free-google-t-shirt-and-200-of-b459eae82c31",
      title:
        "Google Action in 10min without a single line of code and get free google T-Shirt and $200 of Google Cloud parks",
      description:
        "In this article, I will guide you to make your very first google action and as promised, you will get awesome Google swags",
    },
    {
      url:
        "https://medium.com/@gunjanpaul/my-first-ever-hacktoberfest-contributor-to-meshery-a5f888fc3dbf",
      title: "My First Ever Hacktoberfest: Contributor to Meshery",
      description:
        "Meshery is a multi-mesh management plane with initial functionality as a playground to facilitate learning about the functionality and performance of different service meshes.",
    },
  ],
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
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-6295657810",
  email_address: "gunjan.mtbpaul@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "GunjanPaul2", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
