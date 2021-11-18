import React from 'react'

import InfoModal2 from './Modal2';


const Charaters = [
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
        Name: "Jane Coper",
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
        image: "./images/characters/character-9.png",
        Name: "robert fox",
        Friends: "23 friends"
    }
    ,
    {
        id: 7,
        image: "./images/characters/character-2.png",
        Name: "jerome bell",
        Friends: "23 friends"
    },
    {
        id: 8,
        image: "./images/characters/character-8.png",
        Name: "guy hawkins",
        Friends: "23 friends"
    }, {
        id: 9,
        image: "./images/characters/character-6.png",
        Name: "marvin mckinney",
        Friends: "23 friends"
    }


];
const Charateristics = [
    {
        id: 1,
        image: "./images/characters/character-10.png",
        Name: "brookyln simmons",
        Friends: "Lives in planet alpha"
    },
    {
        id: 2,
        image: "./images/characters/character-2.png",
        Name: "cameron williamson",
        Friends: "Lives in planet alpha"
    },


    {
        id: 4,
        image: "./images/characters/character-5.png",
        Name: "marvin mckinney",
        Friends: "Lives  in planet alpha"
    },
    {
        id: 5,
        image: "./images/characters/character-11.png",
        Name: "cameron williamson",
        Friends: "Lives in  planet alpha"
    },

    {
        id: 6,
        image: "./images/characters/character-15.png",
        Name: "cameron williamson",
        Friends: "Lives in planet alpha"
    }

];
const CharaterList = () => {
    return (
        <div className="container-fluid">
            <div className="contain-fluid">
                <div className="row">



                    <div className="col-lg-8 col-md-7 huy d-none d-md-block ps-5  mt-5 ">
                        <div className="container">   <div className="container  ">

                            <div className="">

                            </div>
                            <div className="row my-5">
                                {Charaters.map((charater) => (
                                    <div className=" col-lg-4 col-md-6 mt-3 d-sm-none d-md-block " key={charater.id}>
                                        <div className="card muds h-100">
                                            <img src={charater.image} className="img-fluid rounded-2" alt="..." />
                                            <div className="mx-2 mt-2">
                                                <p className=""> {charater.Name}    <p className="">{charater.Friends}</p>
                                                </p>

                                            </div>
                                        </div>

                                    </div>))}

                            </div>
                            <div className="goodC">
                                <InfoModal2 />


                            </div>

                        </div></div>
                    </div>
                    <div className="col-lg-3 col-md-4 wins">
                        <div className="container">
                            <div className="win    d-flex justify-content-end my-4">
                                <img src="./images/assets/x-square-fill.svg" alt="" />
                            </div>
                            <div className="aph">
                                <h2 className="alpha">
                                    Jane Coper
                                </h2>
                                <p>Jane Coper is a really nice person she's been living on planet alpha for the last 10years</p>
                                <div className="d-flex justify-content-between">
                                    <div> <p>Planet</p>
                                        <p>Alpha</p>
                                    </div>
                                    <div><p>friends</p>
                                        <p>234</p></div>
                                </div>

                                <div className="d-flex justify-content-between">
                                    <p>Friends</p>

                                </div>

                                {Charateristics.map((charaterses) => (

                                    <div className="col-12 col-lg-4 col-md-4 my-3" key={charaterses.id}>

                                        <div className="d-flex gap-2">
                                            <div className="">
                                                <img src={charaterses.image} className="with" alt="..." />
                                            </div>

                                            <div className="">
                                                <p className=""> {charaterses.Name}    <p className="chat">{charaterses.Friends}</p>
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
    )
}

export default CharaterList
