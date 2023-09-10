import { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import Development from "./Development";
import ProductDesign from "./ProductDesign";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  display: "flex",
  justifyContent: "center",
  padding: "0 50px",
  position: "relative",
  color: 'black',
  fontSize: '14px',
  fontWeight: '300'
});

const Container = styled.div({
  maxWidth: "1400px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  '@media (max-width: 768px)': {
  width: "100%",
  flexDirection: "column",
  }
});

const Left = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  '@media (max-width: 768px)': {
    padding: "20px",
    justifyContent: "center",
  }
});

const List = styled.ul({
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const ListItem = styled.li({
  fontSize: "80px",
  cursor: "pointer",
  fontWeight: "bold",
  color: "transparent",
  "-webkitTextStroke": "2px #fff",
  position: "relative",

  "@media (max-width: 768px)": {
    fontSize: "24px",
      "-webkitTextStroke": "0px",
      color: "#fff",
  },

  "::after": {
    content: (props) => `"${props.text}"`,
    position: "absolute",
    top: 0,
    left: 0,
    color: "pink",
    width: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  "&:hover": {
    "::after": {
      animation: "moveText 0.5s linear both",
      "@keyframes moveText": {
        "100%": {
          width: "100%",
        },
      },
    },
  },
});

const Right = styled.div({
  flex: 1,
});
const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
