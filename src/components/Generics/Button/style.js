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

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 12rem;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "1.4rem")};
  width: ${({ width }) => (width ? `${width}rem` : `12.8rem`)};
  height: ${({ height }) => (height ? `${height}rem` : `4.4rem`)};
  ${getType}
  cursor: pointer;
  :active {
    opacity: 0.7;
  }
`;

export { Container };
