import styled, { keyframes } from "styled-components";

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
});

const Container = styled.div({
  maxWidth: "1400px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const Left = styled.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
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
  "::after": {
    content: (props) => `"${props.text}"`,
    position: "absolute",
    top: 0,
    left: 0,
    color: "pink",
    width: '0px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  "&:hover": {
    "::after": {
      animation: "moveText 0.5s linear both",
      "@keyframes moveText" : {
    
    "100%": {
      width: "100%",
    },}}
  
  }
});

const Right = styled.div({
  flex: 1,
});
const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item}>{item}</ListItem>
            ))}
          </List>      
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Works;
