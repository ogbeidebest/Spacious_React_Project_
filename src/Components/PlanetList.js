import React from 'react'
import InfoModal from './Modal1';
import { Link } from 'react-router-dom';
import paul1 from '../paul1.svg';
import paul2 from '../paul2.svg';
import paul3 from '../paul3.svg';
import paul4 from '../paul4.svg';
import paul5 from '../paul5.svg';
import paul6 from '../paul6.svg';
import paul7 from '../paul7.svg';
import paul8 from '../paul8.svg';
import paul9 from '../paul9.svg';




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
    }, {
        id: 10,
        image: paul4,
        planetName: ' planet alpha',
        pop: ' pop:235'
    }, {
        id: 11,
        image: paul1,
        planetName: ' planet alpha',
        pop: ' pop:235'
    }, {
        id: 12,
        image: paul3,
        planetName: ' planet alpha',
        pop: ' pop:235'
    }
];

const PlanetList = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    {Planets.map((Planet) => (

                        <div className="col-12 col-lg-3 col-md-4 my-3 " key={Planet.id}>
                            <Link to="/PlanetApp">
                                <div className="card bone">
                                    <div className="d-flex justify-content-center gosh">
                                        <img src={Planet.image} className="" alt="..." />
                                    </div>

                                    <div className="ms-3 mb-2 ">
                                        <p className="toy  ms-2 text-capitalize"> {Planet.planetName} <p className="toy-2 m-2">{Planet.pop}</p>
                                        </p>

                                    </div>
                                </div>
                            </Link>
                        </div>




                    ))}
                </div>

                <div className="goodsP  d-none d-md-block ">
                    <InfoModal />
                </div>
            </div>
        </div >

    )
}

export default PlanetList
