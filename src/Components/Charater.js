import React from 'react'
import InfoModal2 from './Modal2';
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


const charaterl = [
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
    }, {
        id: 10,
        image: peter10,
        Name: "jerome bell",
        Friends: "23 friends"
    },
    {
        id: 11,
        image: peter11,
        Name: "guy hawkins",
        Friends: "23 friends"
    },
    {
        id: 12,
        image: peter12,
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



                    ))}     </div>  <div className="good  d-none d-md-block ">
                    <InfoModal2 />


                </div>
            </div>
        </div >

    )
}

export default Charater
