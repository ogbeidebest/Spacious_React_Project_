import React from 'react'
import InfoModal2 from './Modal2';
import { Link } from 'react-router-dom'



const charaterl = [
    {
        id: 1,
        image: "./images/characters/character-1.png",
        Name: "brookyln simmons",
        Friends: "23 friends"
    },
    {
        id: 2,
        image: "./images/characters/character-2.png",
        Name: "cameron williamson",
        Friends: "23 friends"
    },
    {
        id: 3,
        image: "./images/characters/character-3.png",
        Name: "leslie alexander",
        Friends: "23 friends"
    }, {
        id: 4,
        image: "./images/characters/character-4.png",
        Name: "kristin waston",
        Friends: "23 friends"
    },
    {
        id: 5,
        image: "./images/characters/character-5.png",
        Name: "jenny wilson",
        Friends: "23 friends"
    },
    {
        id: 6,
        image: "./images/characters/character-6.png",
        Name: "marvin mckinney",
        Friends: "23 friends"
    },
    {
        id: 7,
        image: "./images/characters/character-7.png",
        Name: "jerome bell",
        Friends: "23 friends"
    },
    {
        id: 8,
        image: "./images/characters/character-8.png",
        Name: "guy hawkins",
        Friends: "23 friends"
    },
    {
        id: 9,
        image: "./images/characters/character-9.png",
        Name: "robert fox",
        Friends: "23 friends"
    }, {
        id: 7,
        image: "./images/characters/character-10.png",
        Name: "jerome bell",
        Friends: "23 friends"
    },
    {
        id: 8,
        image: "./images/characters/character-11.png",
        Name: "guy hawkins",
        Friends: "23 friends"
    },
    {
        id: 9,
        image: "./images/characters/character-12.png",
        Name: "robert fox",
        Friends: "23 friends"
    }

];
const Charater = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {charaterl.map((Planet) => (

                        <div className="col-12 col-lg-3 col-md-4 " key={Planet.id}>
                            <Link to="/CharaterList">
                                <div className="card bone my-2">
                                    <div className="d-flex justify-content-center">
                                        <img src={Planet.image} className="img-fluid rounded-1" alt="..." />
                                    </div>

                                    <div className="ms-1">
                                        <p className="toy text-capitalized "> {Planet.Name}<p className="toy-2">{Planet.Friends}</p>
                                        </p>

                                    </div>
                                </div></Link>
                        </div>



                    ))}     </div>  <div className="good">
                    <InfoModal2 />


                </div>
            </div>
        </div >

    )
}

export default Charater
