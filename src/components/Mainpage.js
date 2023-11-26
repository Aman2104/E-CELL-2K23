import React from "react";
import Work from "./Work";
import Team from "./Team";
import LandingPage from "./LandingPage";
import UpcomingEvents from "./UpcomingEvents";
import Corousel from "./CorouselItem";
import About from "./About";
import Contactform from "./Contactform";

import direc from "../assets/coordinators/direc.png";
import teacher1 from "../assets/coordinators/teacher-1.png";
import teacher2 from "../assets/coordinators/teacher-2.png";
import teacher7 from "../assets/coordinators/teacher-7.png";
import teacher12 from "../assets/coordinators/teacher-12.png";
import atul from "../assets/coordinators/atul.png";
import dm from "../assets/coordinators/DM.png";
import sc from "../assets/coordinators/SC.png";
import ss from "../assets/coordinators/SS.png";
import nikhil from "../assets/coordinators/nikhil.png";
import sanjay from "../assets/coordinators/sanjay.png";
import sanjeev from "../assets/coordinators/sanjeev.png";

import himani from "../assets/core team/himani.png";
import aman from "../assets/core team/AMAN.png";
import arjav from "../assets/core team/Arjav.png";
import ayush from "../assets/core team/ayushraj.png";
import gajender from "../assets/core team/gajenderyadav.png";
import kanishka from "../assets/core team/kanishka.png";
import naman from "../assets/core team/NAMAN.png";
import sumit from "../assets/core team/SUMIT.png";
import tanishq from "../assets/core team/tanishq.png";
import umakshi from "../assets/core team/umakshi.png";
import dipanshu from "../assets/core team/dipanshu.jpg";
import Aayush from "../assets/core team/Aayush.jpeg";
import aditi from "../assets/core team/aditi.jpg"
import ANSH from "../assets/core team/ANSH.jpg"
import Ansheka from "../assets/core team/Ansheka.jpg"
import Bhavika from "../assets/core team/Bhavika.jpg"
import Chakshu from "../assets/core team/Chakshu.jpg"
import Chandan from "../assets/core team/Chandan.jpg"
import Gaurav from "../assets/core team/Gaurav.jpg"
import Himanshu from "../assets/core team/Himanshu.jpg"
import jagriti from "../assets/core team/jagriti.jpg"
import Jay from "../assets/core team/Jay.jpg"
import Kaushal from "../assets/core team/Kaushal.jpg"
import Khushi from "../assets/core team/Khushi.jpg"
import Khushi_Dixit from "../assets/core team/Khushi_Dixit.jpeg"
import Prashant from "../assets/core team/Prashant.jpg"
import Priyanshu from "../assets/core team/Priyanshu.jpg"
import ROHIT from "../assets/core team/ROHIT.jpg"
import sahil from "../assets/core team/sahil.JPG"
import Shankar from "../assets/core team/Shankar.jpg"
import Shyam from "../assets/core team/Shyam.jpg"
import tanuj from "../assets/core team/tanuj.jpeg"
import Arvind from "../assets/core team/Arvind.jpg"


function Mainpage() {
  const benefitJSon = [
    {
      Name: "Accelerate your idea",
      icon: "fa-tachometer-alt",
      statement:
        "Our program is designed to help you speed up the process of developing and launching your idea.",
    },
    {
      Name: "Interactions with successful entrepreneurs",
      icon: "fa-users",
      statement:
        "Get the opportunity to interact with successful entrepreneurs who can share their experiences and insights with you.",
    },
    {
      Name: "Mentorship by experts",
      icon: "fa-chalkboard-teacher",
      statement:
        "Our experienced mentors will guide and support you through every step of your entrepreneurial journey.",
    },
    {
      Name: "Monetary support",
      icon: "fa-money-bill-wave",
      statement:
        "We provide financial support to help you fund your idea and bring it to life.",
    },
    {
      Name: "Converting Idea into business models",
      icon: "fa-chart-line",
      statement:
        "We'll help you turn your idea into a viable and sustainable business model that can succeed in the marketplace.",
    },
    {
      Name: "Linking startups and budding entrepreneurs in an informal way.",
      icon: "fa-link",
      statement:
        "We connect startups and entrepreneurs in an informal and collaborative environment where they can share ideas and support each other.",
    },
    {
      Name: "Providing a platform for turning your ideas to reality",
      icon: "fa-rocket",
      statement:
        "Our platform is designed to help you turn your ideas into reality by providing the resources, support, and guidance you need to succeed.",
    },
  ];
  const workJSon = [
    {
      Name: "Ideate",
      icon: "fa-lightbulb",
      statement: "Generate new ideas and concepts",
      description:
        "Brainstorm and create new ideas for products, services, or processes.",
    },
    {
      Name: "Innovate",
      icon: "fa-cogs",
      statement: "Implement new ideas and concepts",
      description:
        "Bring new ideas to life through research, development, and implementation.",
    },
    {
      Name: "Incubate",
      icon: "fa-rocket",
      statement: "Nurture early-stage startups",
      description:
        "Provide support, resources, and guidance to help startups grow and succeed.",
    },
  ];
  const coordinator = [
    {
      Name: "Prof. Sunil Dhingra",
      Designation: "Director, UIET & Head, IIC",
      Photo: `${direc}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Dr. Vishal Ahlawat",
      Designation: "IIC President & Coordinator, CIC",
      Photo: `${teacher1}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Dr. Kulvinder Singh",
      Designation: "Nodal Officer, CIC",
      Photo: `${teacher12}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Dr. Sunil Nain",
      Designation: "Vice President, IIC",
      Photo: `${teacher7}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "DR. SANJAY KAJAL",
      Designation: "Startup & Internship Activity Coordinator",
      Photo: `${sanjay}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "DR. NIKHIL MARRIWALA",
      Designation: "MSME Coordinator",
      Photo: `${nikhil}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "DR. SANJEEV AHUJA",
      Designation: "Member IIC",
      Photo: `${sanjeev}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Mr. Archit Sharma",
      Designation: "IPR Activity Coordinator",
      Photo: `${teacher2}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Dr. Deepak Malik",
      Designation: "Innovation Activity and Member",
      Photo: `${dm}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Ms. Sonia Saini",
      Designation: "ARIIA Coordinator",
      Photo: `${ss}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Ms. Shivani",
      Designation: "Social Media Coordinator",
      Photo: `${sc}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      Name: "Mr. Atul",
      Designation: "Web Development Coordinator",
      Photo: `${atul}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
  ];
  const TeamMembers = [
    {
      num: "0",
      Name: "HIMANI HOODA",
      Designation: "Team Lead",
      Photo: `${himani}`,
      Instagram: "",
      LinkedIn: "https://www.linkedin.com/in/himani-hooda-a50aa4221",
      Twitter: "",
      Github: "",
    },
    {
      num: "1",
      Name: "AYUSH RAJ",
      Designation: "Co-Lead",
      Photo: `${ayush}`,
      Instagram:
        "https://www.instagram.com/ayushrajreelandreal/?igshid=YmMyMTA2M2Y%3D",
      LinkedIn: "https://www.linkedin.com/in/digitallyayush",
      Twitter: "https://twitter.com/digitallyayush",
      Github: "",
    },

    {
      num: "4",
      Name: "GAJENDER YADAV",
      Designation: `Web Developer`,
      Photo: `${gajender}`,
      Instagram: "https://www.instagram.com/er._gajendra_yadav/",
      LinkedIn: "https://www.linkedin.com/in/gajender-yadav-452564166",
      Twitter:
        "https://twitter.com/er_gajendra_ydv?t=TH9jqYk8wH3vLkMNLgJVcA&s=09",
      Github: "https://github.com/gajendra77",
    },
    {
      num: "6",
      Name: "Aman Kumar",
      Designation: "Web Developer",
      Photo: `${aman}`,
      Instagram: "",
      LinkedIn: "https://linkedin.com/in/aman-kumar-Aman2104",
      Twitter: "https://twitter.com/Amanyara21",
      Github: "https://github.com/Aman2104",
    },
    
    {
      num: "48",
      Name: "Gaurav",
      Designation: "Web Developer",
      Photo: `${Gaurav}`,
      Instagram: "https://www.instagram.com/mr.gaurav_rathour/",
      LinkedIn: "https://www.linkedin.com/in/gaurav-rathour-85b878264/",
      Twitter: "",
      Github: "",
    },
    {
      num: "49",
      Name: "Himanshu Sinha ",
      Designation: "Web Developer",
      Photo: `${Himanshu}`,
      Instagram: "",
      LinkedIn: "https://www.linkedin.com/in/himanshu-sinha-b4a884236/",
      Twitter: "https://x.com/Himanshu_S1nha?t=RiCsCkf_fr0tpMcBQ4s7XQ&s=09",
      Github: "https://github.com/himanshus1nha",
    }, 
    {
      num: "47",
      Name: "Arvind Yadav",
      Designation: "Web Developer",
      Photo: `${Arvind}`,
      Instagram: "https://www.instagram.com/ayarwind",
      LinkedIn: "https://www.linkedin.com/in/ayarwind",
      Twitter: "https://twitter.com/ayarvind_6368",
      Github: "https://www.github.com/ayarvind",
    },
    {
      num: "51",
      Name: "Shankar",
      Designation: "Web Developer",
      Photo: `${Shankar}`,
      Instagram: "https://instagram.com/shankarmalik002",
      LinkedIn:
        "https://www.linkedin.com/me?trk=p_mwlite_feed_updates-secondary_nav",
      Twitter: "",
      Github: "https://github.com/Shankarmalik002",
    },
    {
      num: "8",
      Name: "Kanishka Mittal",
      Designation: "Graphic Designer",
      Photo: `${kanishka}`,
      Instagram: "https://www.instagram.com/kanishkamittal_/",
      LinkedIn: "https://www.linkedin.com/in/kanishka-mittal/",
      Twitter: "https://twitter.com/KanishkaMittal_",
      Github: "",
    },

    {
      num: "11",
      Name: "Sumit raj",
      Designation: "Graphics Designer",
      Photo: ` ${sumit}`,
      Instagram: "https://instagram.com/sumit_raj027?igshid=ZDdkNTZiNTM=",
      LinkedIn: "https://www.linkedin.com/in/sumit-raj-51163122a",
      Twitter: "",
      Github: "https://github.com/Sumit-Raj026",
    },

    {
      num: "13",
      Name: "Umakshi",
      Designation: "Content Writer",
      Photo: `${umakshi}`,
      Instagram: "",
      LinkedIn: "http://www.linkedin.com/in/umakshi-sharma-163302206",
      Twitter: "",
      Github: "https://github.com/Umakshi12",
    },
    {
      num: "14",
      Name: "Tanishq Garg",
      Designation: "Content Writer",
      Photo: `${tanishq}`,
      Instagram: "its.me_tanishq.garg",
      LinkedIn: "https://www.linkedin.com/in/tanishq-garg-a6288822b",
      Twitter: "@a_GARG_product",
      Github: "tanishqgarg002",
    },
    {
      num: "21",
      Name: "Naman",
      Designation: "Marketing and Promotions",
      Photo: `${naman}`,
      Instagram: "https://instagram.com/naman29saini",
      LinkedIn: "https://www.linkedin.com/in/naman-saini-615279225",
      Twitter: "https://twitter.com/naman29saini",
      Github: "https://github.com/Naman29saini",
    },
    {
      num: "22",
      Name: "Arjav Verma",
      Designation: "Marketing and Promotions",
      Photo: `${arjav}`,
      Instagram: "https://instagram.com/arjav_verma?igshid=ZDdkNTZiNTM=",
      LinkedIn: "https://www.linkedin.com/in/arjav-verma",
      Twitter: "https://twitter.com/verma_arjav?t=JzDFGG2zGuGPUKQYzs_JTw&s=09",
      Github: "",
    },
    {
      num: "25",
      Name: "Dipanshu Verma",
      Designation: "Content Writer",
      Photo: `${dipanshu}`,
      Instagram: "https://instagram.com/great_dipanshu?igshid=dWFicWNpcnZ6bGt6",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "26",
      Name: "Aditi Kumari",
      Designation: "Graphic design ",
      Photo: `${aditi}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "27",
      Name: "Sahil",
      Designation: "Graphic Designer",
      Photo: `${sahil}`,
      Instagram: "https://www.instagram.com/sahil_chandna_/",
      LinkedIn: "https://www.linkedin.com/in/sahilchandna/",
      Twitter: "https://twitter.com/SahilChandna_",
      Github: "https://github.com/sahilchandna60/",
    },
    {
      num: "28",
      Name: "Tanuj kumar",
      Designation: "Graphic designer",
      Photo: `${tanuj}`,
      Instagram: "https://instagram.com/_tanuj_k?igshid=bzFiZnF2ZXp0Z2Nv",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "29",
      Name: "Jagriti",
      Designation: "Graphic Designer ",
      Photo: `${jagriti}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "31",
      Name: "Khushi",
      Designation: "Invite Speakers(Social Team)",
      Photo: `${Khushi}`,
      Instagram: "https://instagram.com/kuhu_gupta001?igshid=MzMyNGUyNmU2YQ==",
      LinkedIn: "https://www.linkedin.com/in/khushirm",
      Twitter: "",
      Github: "https://github.com/khushirm",
    },
    {
      num: "33",
      Name: "Prashant Kumar",
      Designation: "Promotions and Sponsorship (Social Team)",
      Photo: `${Prashant}`,
      Instagram: "",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "34",
      Name: "ANSH KAUSHIK",
      Designation: "Social media manager",
      Photo: `${ANSH}`,
      Instagram:
        "https://instagram.com/anshkaushik625?igshid=MWUxeXF2d24xb3kyZw==",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "35",
      Name: "Khushi Dixit",
      Designation: "Social Team",
      Photo: `${Khushi_Dixit}`,
      Instagram: "https://instagram.com/__khushidixit?igshid=YzAwZjE1ZTI0Zg==",
      LinkedIn:
        "https://www.linkedin.com/in/khushi-dixit-19257021a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Twitter: "",
      Github: "",
    },
    {
      num: "36",
      Name: "Jay Verma",
      Designation: "Social Team",
      Photo: `${Jay}`,
      Instagram: "",
      LinkedIn: "www.linkedin.com/in/jay-verma-a24275205",
      Twitter: "",
      Github: "https://github.com/vermajay",
    },
    {
      num: "37",
      Name: "Ansheka Pandita",
      Designation: "Social Team",
      Photo: `${Ansheka}`,
      Instagram:
        "https://instagram.com/ansheka_pandita?igshid=emZsamMwdjd6OWFj",
      LinkedIn:
        "https://www.linkedin.com/in/ansheka-pandita-353487276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Twitter: "",
      Github: "",
    },
    {
      num: "38",
      Name: "Aayush Saini",
      Designation: "Social team ",
      Photo: `${Aayush}`,
      Instagram:
        "https://instagram.com/_.aayushsaini_?igshid=ajhzNnhqbjZlYnRi&utm_source=qr",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "39",
      Name: "Priyanshu Joshi",
      Designation: "Social Team ",
      Photo: `${Priyanshu}`,
      Instagram:
        "https://instagram.com/pianistarshjoshi?igshid=MzNlNGNkZWQ4Mg==",
      LinkedIn:
        "https://www.linkedin.com/in/priyanshu-joshi-b49247259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Twitter: "https://x.com/ArshJoshi152153?t=87r7_ePZB-FbWxyxYJvAaw&s=09",
      Github: "https://github.com/priyanshu9046",
    },
    {
      num: "40",
      Name: "ROHIT KUMAR SAINI ",
      Designation: "Social team ",
      Photo: `${ROHIT}`,
      Instagram: "https://instagram.com/finexrohit?igshid=YnRqbGp2OHkxZG5l",
      LinkedIn:
        "https://www.linkedin.com/in/rohit-saini-5b0a0424b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Twitter: "https://x.com/finexrohit?t=pXmHkzOWmCA6BUORtrbANA&s=09",
      Github: "https://github.com/finexrohit",
    },
    {
      num: "41",
      Name: "Chandan",
      Designation: "Social team member",
      Photo: `${Chandan}`,
      Instagram:
        "https://instagram.com/chandan.chaudhary77?igshid=MWdyMTBib25jaHJnNw==",
      LinkedIn:
        "https://www.linkedin.com/in/chandan-chaudhary-35033721b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      Twitter: "",
      Github: "",
    },
    {
      num: "42",
      Name: "Chakshu",
      Designation: "Social Team Member",
      Photo: `${Chakshu}`,
      Instagram: "https://instagram.com/chakshu0901?igshid=Z3lhOGV6bHhsaG93",
      LinkedIn: "https://www.linkedin.com/in/chakshu-831018276",
      Twitter: "",
      Github: "",
    },
    {
      num: "43",
      Name: "Bhavika",
      Designation: "Social tram",
      Photo: `${Bhavika}`,
      Instagram: "https://instagram.com/bhavika_9007?igshid=NzZlODBkYWE4Ng==",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "44",
      Name: "Kaushal Kumar ",
      Designation: "Video Editor",
      Photo: `${Kaushal}`,
      Instagram: "www.instagram.com/i.hardeeppp",
      LinkedIn: "",
      Twitter: "",
      Github: "",
    },
    {
      num: "45",
      Name: "Shyam",
      Designation: "Video editor",
      Photo: `${Shyam}`,
      Instagram: "",
      LinkedIn: "https://www.linkedin.com/in/Shyamsingh070703/",
      Twitter: "",
      Github: "",
    },
  ];

  return (
    <div>
      <LandingPage />
      <UpcomingEvents />
      <Corousel />
      <About />
      <Work workJSon={workJSon} heading="Our work" />
      <Work workJSon={benefitJSon} heading="Benefits" />
      <Team heading="Teacher Coordinators" TeamJSon={coordinator} />
      <Team heading="Core Team" TeamJSon={TeamMembers} />
      <Contactform />
    </div>
  );
}

export default Mainpage;
