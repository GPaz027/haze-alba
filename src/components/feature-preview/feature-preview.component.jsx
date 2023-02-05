const FeaturePreview = ({ feature }) => {
  const { title, body } = features;
  return (
    <div className="feature-preview-container">
      <span className="feature-preview-title">{title}</span>
      <span className="feature-preview-body">{body}</span>
    </div>
  );
};

export default FeaturePreview;
