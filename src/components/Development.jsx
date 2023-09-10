import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div({
  width: "200px",
  height: "70px",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  position: "absolute",
  bottom: "20px",
  right: "40px",
  "@media (max-width: 768px)": {
    display: "none",
    },
});


const Development = () => {
  return (
    <>
    <Canvas>
      <Stage environment={"city"} intensity={0.6}>
        <Atom />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Desc>
     Our development team is always ready to help you
      </Desc></>
  );
};

export default Development;