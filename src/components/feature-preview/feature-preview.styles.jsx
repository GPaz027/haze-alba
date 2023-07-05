import styled from "styled-components";
import Button from "../button/button.component";

export const FeaturePreviewTitle = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  color: #fcfbfb;
  margin-bottom: 1em;
`;

export const FeaturePreviewBody = styled.span`
  text-align: center;
  font-weight: medium;
  align-self: center;
  color: #fcfbfb;
  margin-left: 1em;
  margin-right: 1em;
`;

export const IconContainer = styled.div`
  padding: 1rem;
  background-color: #fcfbfb;
  border-radius: 50px 50px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 1%;
`;

export const CardButton = styled(Button)`
  background-color: rgba(0, 53, 84, 0);
  opacity: 0;
  transform: rotateY(-180deg);
  position: absolute;
  top: 30%;
  left: 35%;
  border-radius: 25px;
  border-color: rgb(252, 251, 251);
  border: 3px solid;

  &:hover {
    background-color: blue;
  }
`;

export const FeaturePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  background-color: #003554;
  padding: 1em 0.01em;
  border-radius: 20px 20px;
  margin-bottom: 10px;
  width: 20rem;
  transition-property: background-color, color, transform, opacity;
  transition-duration: 1s;
  transition-delay: 0.2s;
  transform: rotateY(0deg);
  cursor: default;

  ${FeaturePreviewTitle}, ${FeaturePreviewBody}, ${IconContainer} {
    transition-property: opacity;
    transition-delay: 0.5s;
    transition-duration: 0.5s;
    opacity: 1;
  }

  ${CardButton} {
    opacity: 0;
    transition-property: opacity;
    transition-delay: 0s;
    transition-duration: 0.5s;
  }

  &:hover {
    background-color: #006494;
    color: #006494;
    transition-property: background-color, color, transform;
    transition-duration: 1s;
    transition-delay: 0.2s;
    transform: rotateY(180deg);
    ${FeaturePreviewTitle}, ${FeaturePreviewBody}, ${IconContainer} {
      transition-property: opacity;
      transition-delay: 0s;
      transition-duration: 0.5s;
      opacity: 0;
    }
    ${CardButton} {
      opacity: 1;
      transition-property: opacity;
      transition-delay: 0.5s;
      transition-duration: 0.5s;
    }
  }
`;
