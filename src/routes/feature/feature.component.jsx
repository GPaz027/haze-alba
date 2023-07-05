import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFeatures } from "../../store/features/features.selector";

const Feature = () => {
  const featuresMap = useSelector(selectFeatures);
  const { feature } = useParams();
  return (
    <div>
      <h1>{feature.title}</h1>
    </div>
  );
};

export default Feature;
