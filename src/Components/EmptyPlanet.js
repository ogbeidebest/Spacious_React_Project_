import { Container } from 'react-bootstrap';
const EmptyPlanet = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center ">
                <img src="./images/assets/planet-loader.svg" alt="" />
            </div>
            <div>
                <p className="d-flex justify-content-center fs-3 mt-3 pt-3 emptyplanet">Space doesn't have to be empty.</p>

            </div>

            <div className="">
                <button type="button" className="btn btn-primary btn-lg d-flex  m-auto text-uppercase emptyplanetbtn">create planet
                </button>
            </div>
            <div >
                <img src="./images/assets/plus-circle-solid.svg" alt="" className="img-fluid wit mt-5 pt-5" />
            </div>








        </Container>
    )
}

export default EmptyPlanet;
