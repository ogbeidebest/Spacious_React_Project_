import React from 'react'
import InfoModal from './Modal1';
import { Link } from 'react-router-dom';




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
        image: ' ./images/planets/planet-9.svg',
        planetName: ' planet alpha',
        pop: ' pop:235'
    }, {
        id: 10,
        image: ' ./images/planets/planet-4.svg',
        planetName: ' planet alpha',
        pop: ' pop:235'
    }, {
        id: 11,
        image: ' ./images/planets/planet-5.svg',
        planetName: ' planet alpha',
        pop: ' pop:235'
    }, {
        id: 12,
        image: ' ./images/planets/planet-6.svg',
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

                <div className="goodsP">
                    <InfoModal />
                </div>
            </div>
        </div >

    )
}

export default PlanetList
