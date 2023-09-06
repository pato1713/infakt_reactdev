import { styled } from "styled-components";

const PrimaryButton = styled.div`
  display: inline-block;
  border-radius: 8px;
  opacity: 1;
  background-color: rgba(227, 242, 253, 1);
  opacity: 1;
  color: rgba(30, 136, 229, 1);
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0px;
  text-align: left;
  line-height: 20px;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default PrimaryButton;
