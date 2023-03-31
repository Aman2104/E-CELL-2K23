import React, { useState } from "react";
import "../styles/gallery.css";
import gallery1 from '../assets/gallery/oic-1.png'
import gallery2 from '../assets/gallery/oic-2.png'
import gallery3 from '../assets/gallery/oic-3.png'
import gallery4 from '../assets/gallery/oic-4.png'
import gallery5 from '../assets/gallery/oic-5.png'
import gallery6 from '../assets/gallery/oic-6.png'
import gallery7 from '../assets/gallery/oic-7.png'
import gallery8 from '../assets/gallery/oic-8.png'
import gallery9 from '../assets/gallery/gallery.png'
import gallery10 from '../assets/gallery/gallery-1.png'
import gallery11 from '../assets/gallery/gallery-2.png'
import gallery12 from '../assets/gallery/gallery-3.png'
import gallery13 from '../assets/gallery/mystory-1.png'
import gallery14 from '../assets/gallery/mystory-3.png'
import gallery15 from '../assets/gallery/workshop-1.png'
import gallery16 from '../assets/gallery/workshop-2.png'
import gallery17 from '../assets/gallery/workshop-3.png'
import gallery18 from '../assets/gallery/workshop-4.png'

const data = [
    {
        id: 1,
        image: gallery1,
        title: 'OIC 2020',
        description: "Smart Farmgain System"
    },
    {
        id: 2,
        image: gallery2,
        title: 'OIC 2020',
        description: "Sarvsahyak"
    },
    {
        id: 3,
        image: gallery3,
        title: 'OIC 2020',
        description: "Vegetable Washing Machine"
    },
    {
        id: 4,
        image: gallery4,
        title: 'OIC 2020',
        description: "Atenmal (Smart Attendance Taker during COVID time period)"
    },
    {
        id: 5,
        image: gallery5,
        title: 'OIC 2020',
        description: "Fika - Online Mental Health Consult"
    },
    {
        id: 6,
        image: gallery6,
        title: 'OIC 2020',
        description: "Atenmal (Smart Attendance Taker during COVID time period)"
    },
    {
        id: 7,
        image: gallery7,
        title: 'OIC 2020',
        description: "Smart Parking System"
    },
    {
        id: 8,
        image: gallery8,
        title: 'OIC 2020',
        description: "OIC in News"
    },
    {
        id: 9,
        image: gallery9,
        title: 'Workshop',
        description: ""
    },
    {
        id: 10,
        image: gallery10,
        title: 'SIH',
        description: ""
    },
    {
        id: 11,
        image: gallery11,
        title: 'SIH',
        description: ""
    },
    {
        id: 12,
        image: gallery12,
        title: 'SIH',
        description: ""
    },
    {
        id: 13,
        image: gallery13,
        title: 'My Story',
        description: "During event Screenshots"
    },
    {
        id: 14,
        image: gallery14,
        title: 'My Story',
        description: "During event Screenshots"
    },
    {
        id: 15,
        image: gallery15,
        title: 'Workshop',
        description: "During event Screenshots"
    },
    {
        id: 16,
        image: gallery16,
        title: 'Workshop',
        description: "During event Screenshots"
    },
    {
        id: 17,
        image: gallery17,
        title: 'Workshop',
        description: "During event Screenshots"
    },
    {
        id: 18,
        image: gallery18,
        title: 'Workshop',
        description: "During event Screenshots"
    },
];

const Item = ({ item }) => {
    const [showData, setShowData] = useState(false);

    const handleMouseEnter = () => {
        setShowData(true);
    };

    const handleMouseLeave = () => {
        setShowData(false);
    };

    return (
        <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={item.image} alt={item.name} />
            <div className={showData ? "data show" : "data"}>
                <h3 className="text-center">{item.title}</h3>
                <p className="text-center">{item.description}</p>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="container">
            <h2 className="text-center my-4">Gallery</h2>
            <div className="gallery-container ">
                {data.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default App;
