import FeaturePreview from "../feature-preview/feature-preview.component";

import { FeatureCarroselContainer } from "./feature-carrousel.styles";


const FEATURES = [
  {
    id: 1,
    title: "engine",
    body: "The engine is now more powerful than before",
    icon: "settings",
  },
  {
    id: 2,
    title: "doors",
    body: "Elastic doors that allow better movility",
    icon: "directions_car",
  },
  {
    id: 3,
    title: "stereo",
    body: "First class stereo to listen to your favorite hits",
    icon: "speaker",
  },
  {
    id: 4,
    title: "battery",
    body: "Long-life battery to avoid charges while you are travelling",
    icon: "ev_station",
  },
];

const FeatureCarrousel = () => {

  return (
    <FeatureCarroselContainer>
      {FEATURES.map((feature) => (
        <FeaturePreview feature={feature} key={feature.id} />
      ))}
    </FeatureCarroselContainer>
  );
};

export default FeatureCarrousel;
