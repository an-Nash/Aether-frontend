import React, {useState} from 'react'
import "./Cards.css"
import TinderCard from "react-tinder-card";

function Cards() {
    const [people, setPeople] = useState([
        {
            name: "Nash",
            url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1699%26cropX2%3D3845%26cropY1%3D559%26cropY2%3D2704"
        },
        {
            name: "Gates",
            url: "https://yt3.ggpht.com/KyXAUjlAH_yiPIv9g8H_0dpP1_iRIqFiKudBzLHhyBhKQ65OgqHJQPz5MB9Dy-Gm0MOUlHcxjg=s900-c-k-c0x00ffffff-no-rj"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("remove" + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + "left screen");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default Cards;
