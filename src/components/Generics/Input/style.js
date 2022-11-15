import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        backgroundColor: "transparent",
        border: `1px solid #fff`,
        color: "#fff",
      };
    case "light":
      return {
        backgroundColor: "#fff",
        border: `1px solid #E6E9EC`,
        color: "#0D263B",
      };
    case "primary":
      return {
        backgroundColor: "#0061DF",
        border: "1px solid #0061DF",
        color: "#fff",
      };
    default:
      return {
        backgroundColor: "#0061DF",
        border: "1px solid #0061DF",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  border: 1px solid #e6e9ec;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1.4rem")};
  width: ${({ width }) => (width ? `${width}rem` : `100%`)};
  height: ${({ height }) => (height ? `${height}rem` : `4.4rem`)};
  outline: none;
  padding-left: ${({ icon }) => (icon ? "4rem" : "2rem")};
  /* ${getType} */
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: yellow;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

export { Container, Wrapper, Icon };
