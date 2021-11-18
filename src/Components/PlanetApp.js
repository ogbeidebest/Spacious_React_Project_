import React from 'react';
import InfoModal from './Modal1';


import paul1 from '../paul1.svg';
import paul2 from '../paul2.svg';
import paul3 from '../paul3.svg';
import paul4 from '../paul4.svg';
import paul5 from '../paul5.svg';
import paul6 from '../paul6.svg';
import paul7 from '../paul7.svg';
import paul8 from '../paul8.svg';
import paul9 from '../paul9.svg';

import peter4 from '../peter4.png';

import peter13 from '../peter13.png';

import peter9 from '../peter9.png';
import peter10 from '../peter10.png';
import peter11 from '../peter11.png';
import peter12 from '../peter12.png';
import icon1 from '../icon1.svg';
import icon2 from '../icon2.svg';










const PlanetApp = () => {

    const Planets = [
        {
            id: 1,
            image: paul1,
            planetName: ' planet alpha',
            pop: ' pop:235'
        },
        {
            id: 2,
            image: paul2,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 3,
            image: paul3,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 4,
            image: paul4,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 5,
            image: paul5,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 6,
            image: paul6,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 7,
            image: paul7,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 8,
            image: paul8,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 9,
            image: paul9,
            planetName: ' planet alpha',
            pop: ' pop:235'
        }
    ];

    const Charaters = [
        {
            id: 1,
            image: peter12,
            Name: "brookyln simmons",
            Friends: "23 friends"
        },
        {
            id: 2,
            image: peter11,
            Name: "cameron williamson",
            Friends: "23 friends"
        },
        {
            id: 3,
            image: peter13,
            Name: "leslie alexander",
            Friends: "23 friends"
        }, {
            id: 4,
            image: peter4,
            Name: "kristin waston",
            Friends: "23 friends"
        },
        {
            id: 5,
            image: peter10,
            Name: "jenny wilson",
            Friends: "23 friends"
        },
        {
            id: 6,
            image: peter9,
            Name: "marvin mckinney",
            Friends: "23 friends"
        }

    ];


    return (

        <div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 col-md-7 d-none d-md-block ps-5 huy mt-5" >
                        <div className="container">
                            <div className="row">
                                {Planets.map((Planet) => (

                                    <div className=" col-lg-4 col-md-6 my-3" key={Planet.id}>

                                        <div className="card bones">
                                            <div className="d-flex justify-content-center gosh">
                                                <img src={Planet.image} className="" alt="..." />
                                            </div>

                                            <div className="ms-3 mb-2 d-flex fuk">
                                                <p className="toy  ms-2"> {Planet.planetName}

                                                    <span className="toy-2 ms-0">{Planet.pop}</span>
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                ))}    </div>
                            <div className="goods  d-none d-md-block ">
                                <InfoModal />


                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 wins">
                        <div className="">
                            <div className="win  d-flex justify-content-end my-4  " >


                                <img src={icon2} alt="" className=" " />


                            </div>
                            <div className="aph">
                                <h2 className=" text-capitalize fs-2">
                                    alpha planet
                                </h2>
                                <p className="text-justify">alpha planet is the place to be if you like everything related to planets.
                                    I know it's a bit meta, but come to see by yourself</p>
                                <p>population</p>
                                <p>234</p>
                                <div className="d-flex justify-content-between">
                                    <p className="toy text-capitalize fs-4">charater</p>
                                    <div className="  " >


                                        <img src={icon1} alt="" className="img-fluid " />


                                    </div>
                                </div>

                                {Charaters.map((charater) => (

                                    <div className="col-12 col-lg-4 col-md-4 my-3 " key={charater.id}>

                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <img src={charater.image} className="with" alt="..." />
                                            </div>

                                            <div className="m-1">
                                                <p className="toy"> {charater.Name}    <p className="toy-2">{charater.Friends}</p>
                                                </p>

                                            </div>
                                        </div>
                                    </div>



                                ))}     </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default PlanetApp;
