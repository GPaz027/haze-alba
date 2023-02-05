import FeaturePreview from "../feature-preview/feature-preview.component";

const FeatureCarrousel = ({ features }) => {
  return (
    <div className="feature-carrousel">
      {features.map((feature) => {
        <FeaturePreview feature={feature} />;
      })}
    </div>
  );
};

export default FeatureCarrousel;
