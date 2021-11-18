import React from 'react'
import InfoModal2 from './Modal2';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import peter1 from '../peter1.png';
import peter2 from '../peter2.png';
import peter3 from '../peter3.png';
import peter4 from '../peter4.png';
import peter5 from '../peter5.png';
import peter6 from '../peter6.png';
import peter7 from '../peter7.png';
import peter8 from '../peter8.png';
import peter9 from '../peter9.png';
import peter10 from '../peter10.png';
import peter11 from '../peter11.png';
import peter12 from '../peter12.png';
import CharaterList from './CharaterList'




const Charater = () => {
    const handleClick = () => {
        setShow(false)
        setDisplay1(true)
    }

    const [person, setPerson] = useState({})
    const [display1, setDisplay1] = useState(false);
    const [show, setShow] = useState(true)


    const [charater1, setCharater1] = useState(
        [{
            id: 1,
            image: peter1,
            Name: "brookyln simmons",
            Friends: "23 friends",
            des: "Brookyln is a very nice people"
        },
        {
            id: 2,
            image: peter2,
            Name: "cameron williamson",
            Friends: "23 friends",
            des: "Cemeron is a very nice people"
        },
        {
            id: 3,
            image: peter3,
            Name: "leslie alexander",
            Friends: "23 friends",
            des: "Leslie is a very nice people"
        }, {
            id: 4,
            image: peter4,
            Name: "kristin waston",
            Friends: "23 friends",
            des: "Kristin is a very nice people"
        },
        {
            id: 5,
            image: peter5,
            Name: "jenny wilson",
            Friends: "23 friends",
            des: " jenny is a very nice people"
        },
        {
            id: 6,
            image: peter6,
            Name: "marvin mckinney",
            Friends: "23 friends",
            des: "marvin is a very nice people"
        },
        {
            id: 7,
            image: peter7,
            Name: "jerome bell",
            Friends: "23 friends",
            des: "jerome is a very nice people"
        },
        {
            id: 8,
            image: peter8,
            Name: "guy hawkins",
            Friends: "23 friends"
        },
        {
            id: 9,
            image: peter9,
            Name: "robert fox",
            Friends: "23 friends",
            des: "robert is a very nice people"
        }, {
            id: 10,
            image: peter10,
            Name: "jerome bell",
            Friends: "23 friends",
            des: "jerome is a very nice people"
        },

        {
            id: 11,
            image: peter11,
            Name: "guy hawkins",
            Friends: "23 friends",
            des: " guy is a very nice people"
        },
        {
            id: 12,
            image: peter12,
            Name: "robert fox",
            Friends: "23 friends",
            des: "robert is a very nice people"
        }]
    )

    return (
        <div>{show &&
            (< div className="container">
                <div className="row">
                    {charater1.map((char) => (

                        <div className="col-12 col-lg-3 col-md-4 " key={char.id}>
                            <div onClick={handleClick}><div onClick={() => setPerson(char)}>
                                <div className="card bone my-2">
                                    <div className="d-flex justify-content-center">
                                        <img src={char.image} className="img-fluid rounded-1" alt="..." />
                                    </div>

                                    <div className="ms-1">
                                        <p className="toy text-capitalize "> {char.Name}<p className="toy-2">{char.Friends}</p>
                                        </p>

                                    </div>
                                </div></div>
                            </div></div>



                    ))}     </div>  <div className="good  d-none d-md-block ">
                    <InfoModal2 />


                </div>
            </div>)}
            {
                display1 && <CharaterList person={person} />
            }
        </div >


    )
}

export default Charater
