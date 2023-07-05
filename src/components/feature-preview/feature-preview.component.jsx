import {
  FeaturePreviewContainer,
  FeaturePreviewTitle,
  FeaturePreviewBody,
  IconContainer,
  CardButton,
} from "./feature-preview.styles";

import { Routes, Route } from "react-router-dom";
import Feature from "../../routes/feature/feature.component";

const clickHandler = () => {
  return (
    <Routes>
      <Route path=":feature" element={<Feature />} />
    </Routes>
  );
};

const FeaturePreview = ({ feature }) => {
  const { title, body, icon, id } = feature;
  return (
    <FeaturePreviewContainer id={id}>
      <IconContainer>
        <span className="material-symbols-outlined">{icon}</span>
      </IconContainer>
      <FeaturePreviewTitle>{title}</FeaturePreviewTitle>
      <FeaturePreviewBody>{body}</FeaturePreviewBody>
      <CardButton onClick={clickHandler}>CLICK ME!</CardButton>
    </FeaturePreviewContainer>
  );
};

export default FeaturePreview;
