import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

const CarouselPage = () => {
  return (
    <div>
      <Fade>
        <Carousel>
          <Carousel.Item className="carousel-item" style={{ display: "flex" }}>
            <Fade left>
            <div className="carousel-item-1">
              <h1>Solusi Pajak Dalam Genggaman</h1>
              <p>Menyediakan solusi untuk empat macam kebutuhan dasar pajak, yaitu Belajar, Hitung, Lapor, dan Setor. Ayo laksanakan hak dan kewajiban pajak demi kemajuan Bangsa!</p>
              <div className='download-at'>
                <Link to={""}>
                  <img src={require("./../assets/images/googleplay.png")} alt="First slide" height="85px" width="250px" />
                </Link>
                <Link to={""}>
                  <img src={require("./../assets/images/appstore.png")} alt="First slide" height="80px" width="250px" />
                </Link>
              </div>
            </div>
            </Fade>
            <Fade right>
            <div>
              <img className="d-block" src={require("./../assets/images/pick.png")} alt="first slide" height="900vh" />
            </div>

            </Fade>
          </Carousel.Item>
        </Carousel>
      </Fade>
    </div>
  );
};
export default CarouselPage;
