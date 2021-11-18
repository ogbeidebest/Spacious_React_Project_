import React from 'react';
import InfoModal2 from './Modal2';

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
import peter13 from '../peter13.png';
import peter14 from '../peter14.png';
import peter15 from '../peter15.png';


const Charaters = [
    {
        id: 1,
        image: peter1,
        Name: "brookyln simmons",
        Friends: "23 friends"
    },
    {
        id: 2,
        image: peter2,
        Name: "cameron williamson",
        Friends: "23 friends"
    },
    {
        id: 3,
        image: peter3,
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
        image: peter5,
        Name: "jenny wilson",
        Friends: "23 friends"
    },
    {
        id: 6,
        image: peter6,
        Name: "marvin mckinney",
        Friends: "23 friends"
    },
    {
        id: 7,
        image: peter7,
        Name: "jerome bell",
        Friends: "23 friends"
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
        Friends: "23 friends"
    }

];

const Charateristics = [
    {
        id: 1,
        image: peter12,
        Name: "brookyln simmons",
        Friends: "Lives in planet alpha"
    },
    {
        id: 2,
        image: peter13,
        Name: "cameron williamson",
        Friends: "Lives in planet alpha"
    },


    {
        id: 3,
        image: peter14,
        Name: "marvin mckinney",
        Friends: "Lives  in planet alpha"
    },
    {
        id: 4,
        image: peter15,
        Name: "cameron williamson",
        Friends: "Lives in  planet alpha"
    },

    {
        id: 5,
        image: peter10,
        Name: "cameron williamson",
        Friends: "Lives in planet alpha"
    },
    {
        id: 6,
        image: peter11,
        Name: "cameron williamson",
        Friends: "Lives in planet alpha"
    }

];
const CharaterList = ({ person }) => {

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
                                <h2 className="text-catapitalize fs-3">
                                    {person.name}
                                </h2>
                                <p>{person.des}</p>
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
