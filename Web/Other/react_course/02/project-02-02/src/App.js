import React from "react";
import Contact from "./components/Contact";
import profilePicture01 from "./images/profile-01.png";
import profilePicture02 from "./images/profile-02.png";
import profilePicture03 from "./images/profile-03.png";
import profilePicture04 from "./images/profile-04.jpeg";

export default function App() {
    return (
        <div className="contacts">
            <Contact
                img={ profilePicture01 }
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={ profilePicture02 }
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fliff@me.com"
            />
            <Contact
                img={ profilePicture03 }
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                img={ profilePicture04 }
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    );
}