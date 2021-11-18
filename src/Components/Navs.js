
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'



const Navs = () => {
    return (
        <div className="">
            <Container>
                <div className="First-section d-flex gap-2 justify-content-between mopy mb-3">
                    <div className=" d-flex gap-2 ">
                        <div className="">

                            <Link to="/"><button type="button" class="btn btn-light btn-lg first-div">Planents</button>
                            </Link></div>
                        <div className="">

                            <Link to="/Charater"><button type="button" class="btn btn-light btn-lg first-div">Charaters</button>
                            </Link>
                        </div>
                    </div>


                </div>

            </Container>
        </div>
    );
}

export default Navs;