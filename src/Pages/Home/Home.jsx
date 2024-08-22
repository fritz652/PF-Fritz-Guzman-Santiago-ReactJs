import Carousel from "../../Components/Carousel/Carousel";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

import { Container, Grid } from "@mui/material";

/* :::img::: */
import calzado from '../../assets/calzado1.png';
import zapatilla from '../../assets/zapatilla1.png';
import botas1 from '../../assets/botas1.png';
import botas2 from '../../assets/botas2.png';

import './Home.css'

const Home = () => {
  return (
    <div>
      <Carousel />
      <Container>
        <div><h2 className="titleHome">Lo nuevo</h2></div>
        <Grid container className="gapCont">
          <Grid item xs={12} sm={5} className="bgCard">
              <div className="d-flex">
                  <img className="imgCard" src={calzado} alt="" />
                  <div className="centerCol w-200">
                      <h2 className="titleCard">Lo nuevo en Calzados StepUp</h2>
                      <p className="txt">Calzados urbano para varon </p>
                  </div>
              </div>
          </Grid>
          <Grid item xs={12} sm={6} className="bgCard">
              <div className="d-flex">
                  <img className="imgCard" src={zapatilla} alt="" />
                  <div className="centerCol w-200">
                      <h2 className="titleCard">Lo nuevo en Calzados StepUp</h2>
                      <p className="txt">Calzados urbano para varon </p>
                  </div>
              </div>
          </Grid>
          <Grid item xs={12} sm={6} className="bgCard">
            <div className="d-flex">
                <img className="imgCard" src={botas1} alt="" />
                <div className="centerCol w-200">
                    <h2 className="titleCard">Lo nuevo en Calzados StepUp</h2>
                    <p className="txt">Calzados urbano para varon </p>
                </div>
            </div>
          </Grid>
          <Grid  item xs={12} sm={5}  className="bgCard">
            <div className="d-flex">
                <img className="imgCard" src={botas2} alt="" />
                <div className="centerCol w-200">
                    <h2 className="titleCard">Lo nuevo en Calzados StepUp</h2>
                    <p className="txt">Calzados urbano para varon </p>
            </div>
            </div>
          </Grid>
        </Grid>
        <ItemListContainer />
      </Container>
    </div>
  );
};

export default Home;
