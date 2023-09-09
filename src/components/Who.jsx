import styled from "styled-components";

const Section = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  display: "flex",
  justifyContent: "center",
  padding: '0 50px',
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
});
const Right = styled.div({
  flex: 1,
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
  width: "120px",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
});


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
LEFT
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="img/line.png" />
            <Subtitle>Who We Are</Subtitle>
          </WhatWeDo>
          <Desc>
          a creative team of designers, developers, and strategists who are passionate about creating beautiful and functional websites.
          </Desc>
          <Button>See out works</Button>
          {/* 3d model */}
        </Right>
      </Container>
    </Section>
  );
};
export default Who;
