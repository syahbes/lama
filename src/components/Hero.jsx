import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 10px",
});

const Container = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  maxWidth: "1400px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});
const Left = styled.div({
  flex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "20px",
});
const Title = styled.h1({
  fontSize: "74px",
});
const WhatWeDo = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});
const Line = styled.img({
  height: "5px",
});
const Subtitle = styled.h2({
  color: "#da4ea2",
});
const Desc = styled.p({
  fontSize: "24px",
  color: "lightgray",
});
const Button = styled.button({
  backgroundColor: "#da4ea2",
  color: "white",
  fontWeight: 500,
  width: "100px",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
});

const Right = styled.div({
  flex: 3,
  position: "relative",
});

const Img = styled.img({
  width: "800px",
  height: "600px",
  objectFit: "contain",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  animation: "animate 2s infinite ease alternate",
  "@keyframes animate": {
    "100%": {
      transform: "translateY(20px)",
    },
  },
});

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Create. Code.</Title>
          <WhatWeDo>
            <Line src="img/line.png" />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>
            We enjoy creating beautiful and functional websites, human-centered
            digital experience.
          </Desc>
          <Button>Lets Talk</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Img src="img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
