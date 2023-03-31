import React from 'react'
import Work from './Work'
import Team from './Team'
import LandingPage from './LandingPage'
import Corousel from './CorouselItem'
import About from './About'
import Contactform from './Contactform'


import direc from '../assets/coordinators/direc.png'
import teacher1 from '../assets/coordinators/teacher-1.png'
import teacher2 from '../assets/coordinators/teacher-2.png'
import teacher5 from '../assets/coordinators/teacher-5.png'
import teacher7 from '../assets/coordinators/teacher-7.png'
import teacher12 from '../assets/coordinators/teacher-12.png'
import cd from '../assets/coordinators/CD.png'
import dm from '../assets/coordinators/DM.png'
import sc from '../assets/coordinators/SC.png'
import ss from '../assets/coordinators/SS.png'

import himani from '../assets/core team/himani.png'
import garvit from '../assets/core team/garvitarora.png'
import kashish from '../assets/core team/kashish.png'
import agrim from '../assets/core team/AGRIM.png'
import aman from '../assets/core team/AMAN.png'
import ankit from '../assets/core team/Ankit.png'
import archie from '../assets/core team/archiegoel.png'
import arjav from '../assets/core team/Arjav.png'
import arushi from '../assets/core team/arushijoshi.png'
import ayush from '../assets/core team/ayushraj.png'
import gajender from '../assets/core team/gajenderyadav.png'
import hitesh from '../assets/core team/Hitesh.png'
import kanishka from '../assets/core team/kanishka.png'
import keshav from '../assets/core team/keshav.png'
import naman from '../assets/core team/NAMAN.png'
import nidhi from '../assets/core team/nidhiverma.png'
import puneet from '../assets/core team/puneet.png'
import radhika from '../assets/core team/RADHIKA.png'
import rajat from '../assets/core team/Rajat.png'
import shankar from '../assets/core team/Shankar.png'
import shivani from '../assets/core team/SHIVANI.png'
import sonu from '../assets/core team/sonuyadav.png'
import sumit from '../assets/core team/SUMIT.png'
import tanishq from '../assets/core team/tanishq.png'
import umakshi from '../assets/core team/umakshi.png'
import yash from '../assets/core team/yashpalgoyal.png'





function Mainpage() {
    const benefitJSon = [{ "Name": "Accelerate your idea", "icon": "fa-tachometer-alt", "statement": "Our program is designed to help you speed up the process of developing and launching your idea." }, { "Name": "Interactions with successful entrepreneurs", "icon": "fa-users", "statement": "Get the opportunity to interact with successful entrepreneurs who can share their experiences and insights with you." }, { "Name": "Mentorship by experts", "icon": "fa-chalkboard-teacher", "statement": "Our experienced mentors will guide and support you through every step of your entrepreneurial journey." }, { "Name": "Monetary support", "icon": "fa-money-bill-wave", "statement": "We provide financial support to help you fund your idea and bring it to life." }, { "Name": "Converting Idea into business models", "icon": "fa-chart-line", "statement": "We'll help you turn your idea into a viable and sustainable business model that can succeed in the marketplace." }, { "Name": "Linking startups and budding entrepreneurs in an informal way.", "icon": "fa-link", "statement": "We connect startups and entrepreneurs in an informal and collaborative environment where they can share ideas and support each other." }, { "Name": "Providing a platform for turning your ideas to reality", "icon": "fa-rocket", "statement": "Our platform is designed to help you turn your ideas into reality by providing the resources, support, and guidance you need to succeed." }]
    const workJSon = [{ "Name": "Ideate", "icon": "fa-lightbulb", "statement": "Generate new ideas and concepts", "description": "Brainstorm and create new ideas for products, services, or processes." }, { "Name": "Innovate", "icon": "fa-cogs", "statement": "Implement new ideas and concepts", "description": "Bring new ideas to life through research, development, and implementation." }, { "Name": "Incubate", "icon": "fa-rocket", "statement": "Nurture early-stage startups", "description": "Provide support, resources, and guidance to help startups grow and succeed." }]
    const coordinator = [
        {
            "Name": "Prof. Sunil Dhingra",
            "Designation": "Director, UIET and Head, IIC",
            "Photo": `${direc}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Dr. Vishal Ahlawat",
            "Designation": "Convener and IIC President",
            "Photo": `${teacher1}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Dr. Kulvinder Singh",
            "Designation": "Incharge, Community Incubation Centre",
            "Photo": `${teacher12}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Dr. Sunil Nain",
            "Designation": "Vice President",
            "Photo": `${teacher7}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Mr. Archit Sharma",
            "Designation": "IPR Activity Coordinator",
            "Photo": `${teacher2}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Mr. Ravinder",
            "Designation": "Internship Activity Coordinator",
            "Photo": `${teacher5}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Dr. Chander Diwakar",
            "Designation": "ARIIA Coordinator and Member",
            "Photo": `${cd}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Dr. Deepak Malik",
            "Designation": "Innovation Activity and Member",
            "Photo": `${dm}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Ms. Shivani",
            "Designation": "Social Media and Member",
            "Photo": `${sc}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "Name": "Ms. Sonia Saini",
            "Designation": "ARIIA Coordinator and Member",
            "Photo": `${ss}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
    ]
    const TeamMembers = [
        {
            "num": "0",
            "Name": "HIMANI HOODA",
            "Designation": "Team Lead",
            "Photo": `${himani}`,
            "Instagram": "",
            "LinkedIn": "https://www.linkedin.com/in/himani-hooda-a50aa4221",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "1",
            "Name": "AYUSH RAJ",
            "Designation": "CO-LEAD",
            "Photo": `${ayush}`,
            "Instagram": "https://www.instagram.com/ayushrajreelandreal/?igshid=YmMyMTA2M2Y%3D",
            "LinkedIn": "https://www.linkedin.com/in/digitallyayush",
            "Twitter": "https://twitter.com/digitallyayush",
            "Github": ""
        },
        {
            "num": "2",
            "Name": "Rajat Bansal",
            "Designation": "Student Mentor",
            "Photo": `${rajat}`,
            "Instagram": "https://www.instagram.com/rajat._bansal_/",
            "LinkedIn": "https://www.linkedin.com/in/rajatbansal01/",
            "Twitter": "https://twitter.com/rajatbansal_dev",
            "Github": "https://github.com/rajatbansal01"
        },

        {
            "num": "3",
            "Name": "Sonu yadav",
            "Designation": "Web developer",
            "Photo": `${sonu}`,
            "Instagram": "https://www.instagram.com/___sonuyadav___/",
            "LinkedIn": "https://www.linkedin.com/in/sonu-yadav2/",
            "Twitter": "https://twitter.com/SonuYad51181593",
            "Github": "https://github.com/sonuyadav2"
        },
        {
            "num": "4",
            "Name": "GAJENDER YADAV",
            "Designation": `Web Developer`,
            "Photo": `${gajender}`,
            "Instagram": "https://www.instagram.com/er._gajendra_yadav/",
            "LinkedIn": "https://www.linkedin.com/in/gajender-yadav-452564166",
            "Twitter": "https://twitter.com/er_gajendra_ydv?t=TH9jqYk8wH3vLkMNLgJVcA&s=09",
            "Github": "https://github.com/gajendra77"
        },
        {
            "num": "5",
            "Name": "Shankar Dev",
            "Designation": "Web Developer",
            "Photo": `${shankar}`,
            "Instagram": "https://instagram.com/shankarmalik022?igshid=YmMyMTA2M2Y=",
            "LinkedIn": "https://github.com/Shankarmalik002",
            "Twitter": "",
            "Github": "https://github.com/Shankarmalik002"
        },
        {
            "num": "6",
            "Name": "Aman Kumar",
            "Designation": "Web Developer",
            "Photo": `${aman}`,
            "Instagram": "",
            "LinkedIn": "https://linkedin.com/in/aman-kumar-Aman2104",
            "Twitter": "https://twitter.com/Amanyara21",
            "Github": "https://github.com/Aman2104"
        },
        {
            "num": "8",
            "Name": "Kanishka Mittal",
            "Designation": "Graphic Designer",
            "Photo": `${kanishka}`,
            "Instagram": "https://www.instagram.com/kanishkamittal_/",
            "LinkedIn": "https://www.linkedin.com/in/kanishka-mittal/",
            "Twitter": "https://twitter.com/KanishkaMittal_",
            "Github": ""
        },
        {
            "num": "9",
            "Name": "Kashish",
            "Designation": "Graphic Designer",
            "Photo": `${kashish}`,
            "Instagram": "https://www.instagram.com/kashishgoyal_428/",
            "LinkedIn": "https://www.linkedin.com/in/kashish-69b110201",
            "Twitter": "",
            "Github": "https://github.com/kkashish428"
        },
        {
            "num": "10",
            "Name": "Shivani",
            "Designation": "Graphic Designer",
            "Photo": `${shivani}`,
            "Instagram": "",
            "LinkedIn": "https://www.linkedin.com/in/shivani-729ab7243",
            "Twitter": "",
            "Github": "https://github.com/shivani022"
        },
        {
            "num": "11",
            "Name": "Sumit raj",
            "Designation": "Graphics Designer",
            "Photo": ` ${sumit}`,
            "Instagram": "https://instagram.com/sumit_raj027?igshid=ZDdkNTZiNTM=",
            "LinkedIn": "https://www.linkedin.com/in/sumit-raj-51163122a",
            "Twitter": "",
            "Github": "https://github.com/Sumit-Raj026"
        },

        {
            "num": "12",
            "Name": "Yash Pal Goyal",
            "Designation": "Content Writer",
            "Photo": `${yash}`,
            "Instagram": "",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "13",
            "Name": "Umakshi",
            "Designation": "Content writer",
            "Photo": `${umakshi}`,
            "Instagram": "",
            "LinkedIn": "http://www.linkedin.com/in/umakshi-sharma-163302206",
            "Twitter": "",
            "Github": "https://github.com/Umakshi12"
        },
        {
            "num": "14",
            "Name": "Tanishq Garg",
            "Designation": "Content writer",
            "Photo": `${tanishq}`,
            "Instagram": "its.me_tanishq.garg",
            "LinkedIn": "https://www.linkedin.com/in/tanishq-garg-a6288822b",
            "Twitter": "@a_GARG_product",
            "Github": "tanishqgarg002"
        },

        {
            "num": "15",
            "Name": "Radhika",
            "Designation": "Content writer",
            "Photo": `${radhika}`,
            "Instagram": "https://instagram.com/_radhika_2812?igshid=ZDdkNTZiNTM=",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "16",
            "Name": "Hitesh chauhan",
            "Designation": "Digital content creator",
            "Photo": `${hitesh}`,
            "Instagram": "",
            "LinkedIn": "https://www.linkedin.com/in/hitesh-chauhan-759502207",
            "Twitter": "",
            "Github": ""
        },


        {
            "num": "17",
            "Name": "Archie goel",
            "Designation": "Social media team",
            "Photo": `${archie}`,
            "Instagram": "https://instagram.com/archiegoel01?igshid=NjZiMGI4OTY=",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "18",
            "Name": "Garvit Arora",
            "Designation": "Social Media Team",
            "Photo": `${garvit}`,
            "Instagram": "https://instagram.com/_garvit_arora_?igshid=YmMyMTA2M2Y=",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "19",
            "Name": "Keshav Sardana",
            "Designation": "Marketing and Promotions",
            "Photo": `${keshav}`,
            "Instagram": "Keshav_sardana1",
            "LinkedIn": "https://www.linkedin.com/in/keshav-sardana-3228941b0",
            "Twitter": "https://twitter.com/SardanaKeshav1?t=YBJUwCky-M9HMq5KPyvPDQ&s=09",
            "Github": ""
        },

        {
            "num": "20",
            "Name": "Agrim Gupta",
            "Designation": "Marketing and Promotions",
            "Photo": `${agrim}`,
            "Instagram": "https://instagram.com/agrim___07?igshid=ZDdkNTZiNTM=",
            "LinkedIn": "https://www.linkedin.com/in/agrim-gupta-60b230244",
            "Twitter": "",
            "Github": "Agrim007"
        },
        {
            "num": "21",
            "Name": "Naman",
            "Designation": "Marketing and Promotions",
            "Photo": `${naman}`,
            "Instagram": "",
            "LinkedIn": "https://www.linkedin.com/in/naman-saini-615279225",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "22",
            "Name": "Arjav Verma",
            "Designation": "Marketing and Promotions",
            "Photo": `${arjav}`,
            "Instagram": "https://instagram.com/arjav_verma?igshid=ZDdkNTZiNTM=",
            "LinkedIn": "https://www.linkedin.com/in/arjav-verma",
            "Twitter": "https://twitter.com/verma_arjav?t=JzDFGG2zGuGPUKQYzs_JTw&s=09",
            "Github": ""
        },

        {
            "num": "23",
            "Name": "Nidhi",
            "Designation": "Video editor",
            "Photo": `${nidhi}`,
            "Instagram": "https://instagram.com/verma_nidhi_2003?igshid=ZDdkNTZiNTM=",
            "LinkedIn": "https://www.linkedin.com/in/nidhi-verma-61b918227",
            "Twitter": "https://twitter.com/verma_nidhi2003?t=-BwandA7TUKcOaFyURLyNA&s=09",
            "Github": "https://github.com/nidhirk2020"
        },

        {
            "num": "24",
            "Name": "Puneet verma",
            "Designation": "Video editor",
            "Photo": `${puneet}`,
            "Instagram": "",
            "LinkedIn": "https://www.linkedin.com/in/puneet-kumar-180a3a21b/",
            "Twitter": "https://twitter.com/pernoflyer",
            "Github": "https://pernoflyer-organic-space-capybara-446qp7ppqq7hjvx.github.dev/"
        },

        {
            "num": "25",
            "Name": "Ankit Garg",
            "Designation": "Event Management Lead",
            "Photo": `${ankit}`,
            "Instagram": "https://www.instagram.com/the___untold.story",
            "LinkedIn": "",
            "Twitter": "",
            "Github": ""
        },
        {
            "num": "26",
            "Name": "Arushi Joshi",
            "Designation": "Member",
            "Photo": `${arushi}`,
            "Instagram": "https://www.instagram.com/aru.shijoshi",
            "LinkedIn": "https://www.linkedin.com/in/arushi-joshi-901314222",
            "Twitter": "@ARUSHIJOSHI4",
            "Github": ""
        }
    ]

    return (

        <div>
            <LandingPage />
            <Corousel />
            <About />
            <Work workJSon={workJSon} heading="Our work" />
            <Work workJSon={benefitJSon} heading="Benefits" />
            <Team heading="Teacher Coordinators" TeamJSon={coordinator} />
            <Team heading="Core Team" TeamJSon={TeamMembers} />
            <Contactform />
        </div>
    )
}

export default Mainpage
