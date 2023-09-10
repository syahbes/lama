/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./Cube";

const Section = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  display: "flex",
  justifyContent: "center",
  padding: "0 50px",
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
  flex: 1,
  '@media (max-width: 768px)': {
    display: "none",
  }
});
const Right = styled.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "20px",
  '@media (max-width: 768px)': {
    alignItems: "center",
    textAlign: "center",
  }
});
const Title = styled.h1({
  fontSize: "74px",
  '@media (max-width: 768px)': {
    fontSize: "60px",
    textAlign: "left",
  }
});
const WhatWeDo = styled.div({
  display: "flex",
  alignItems: "center",
  '@media (max-width: 768px)': {
  width: "100%",
  textAlign: "left",
  alignItems: "center",
  gap: "20px",
  }
});
const Line = styled.img({
  height: "5px",
});
const Subtitle = styled.h2({
  color: "#da4ea2",
  '@media (max-width: 768px)': {
    fontSize: "24px",
   
  }
});
const Desc = styled.p({
  fontSize: "24px",
  color: "lightgray",
  '@media (max-width: 768px)': {
    fontSize: "22px",
  }
});
const Button = styled.button({
  backgroundColor: "#da4ea2",
  color: "white",
  fontWeight: 500,
  width: "120px",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  '@media (max-width: 768px)': {
    fontSize: "20px",
    width: "80%",
    marginTop: "20px",
  }
});

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5,5,5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="img/line.png" />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>
            a creative team of designers, developers, and strategists who are
            passionate about creating beautiful and functional websites.
          </Desc>
          <Button>See out works</Button>
          {/* 3d model */}
        </Right>
      </Container>
    </Section>
  );
};
export default Who;
