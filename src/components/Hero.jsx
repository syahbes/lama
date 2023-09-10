/* eslint-disable react/no-unknown-property */
import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: '0 50px',
  '@media (max-width: 768px)': {
    height: '200vh',
    justifyContent: 'flex-start',
  }
});

const Container = styled.div({
  // height: "100vh",
  scrollSnapAlign: "center",
  maxWidth: "1400px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  '@media (max-width: 768px)': {
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    width: '100%',
    height: '100%',
  }
});
const Left = styled.div({
  flex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "20px",
  '@media (max-width: 768px)': {
    flex: 1,
    alignItems: "center",
  }
});
const Title = styled.h1({
  fontSize: "74px",
  '@media (max-width: 768px)': {
  textAlign: "center",
  }
});
const WhatWeDo = styled.div({
  display: "f4lex",
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
  '@media (max-width: 768px)': {
    flex: 1,
    width: '100vw',
    padding: '0',
  }
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
  '@media (max-width: 768px)': {
    width: "350px",
    // height: "300px",
  },
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
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4} >

            <MeshDistortMaterial 
            color={'#3d1c56'}
            attach={"material"}
            distort={0.5}
            speed={2}
            />
            </Sphere>
          </Canvas>
          <Img src="img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
