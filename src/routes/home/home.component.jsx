import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import FeatureCarrousel from "../../components/feature-carrousel/feature-carrousel.component";
import ProductHeader from "../../components/header/header.component";

const Home = () => {
  return (
    <Fragment>
      <Outlet />
      <ProductHeader />
      <FeatureCarrousel />
    </Fragment>
  );
};

export default Home;
