import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.div({
  width: "200px",
  height: "70px",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  position: "absolute",
  top: "100px",
  right: "100px",
  "@media (max-width: 768px)": {
  display: "none",
  },
});

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design and develop beautiful and functional websites. Ensuring that
        your website is easy to use and navigate.
      </Desc>
    </>
  );
};

export default WebDesign;
