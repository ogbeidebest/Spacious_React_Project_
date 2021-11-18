import React from 'react';
import InfoModal from './Modal1';



const PlanetApp = () => {

    const Planets = [
        {
            id: 1,
            image: ' ./images/planets/planet-1.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        },
        {
            id: 2,
            image: ' ./images/planets/planet-2.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 3,
            image: ' ./images/planets/planet-3.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 4,
            image: ' ./images/planets/planet-4.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 5,
            image: ' ./images/planets/planet-5.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 6,
            image: ' ./images/planets/planet-6.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 7,
            image: ' ./images/planets/planet-7.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 8,
            image: ' ./images/planets/planet-8.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }, {
            id: 9,
            image: ' /images/planets/planet-9.svg',
            planetName: ' planet alpha',
            pop: ' pop:235'
        }
    ];
    const Charaters = [
        {
            id: 1,
            image: "./images/characters/character-1.png",
            Name: "brookyln simmons",
            Friends: "23 friends"
        },

        {
            id: 3,
            image: "./images/characters/character-13.png",
            Name: "leslie alexander",
            Friends: "23 friends"
        }, {
            id: 4,
            image: "./images/characters/character-14.png",
            Name: "kristin waston",
            Friends: "23 friends"
        },


        {
            id: 6,
            image: "./images/characters/character-12.png",
            Name: "marvin mckinney",
            Friends: "23 friends"
        },

        {
            id: 8,
            image: "./images/characters/character-11.png",
            Name: "marvin mckinney",
            Friends: "23 friends"
        }, {
            id: 7,
            image: "./images/characters/character-10.png",
            Name: "kristin waston",
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
                            <div className="goods">
                                <InfoModal />


                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 wins">
                        <div className="">
                            <div className="win  d-flex justify-content-end my-4  " >


                                <img src="/images/assets/x-square-fill.svg" alt="" className=" " />


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


                                        <img src="./images/assets/plus-square-fill.svg" alt="" className="img-fluid " />


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
