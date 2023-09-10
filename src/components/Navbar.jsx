import styled from "styled-components";

const Section = styled.div({
  display: "flex",
  justifyContent: "center",
  '@media (max-width: 768px)': {
    width: "100vw",
  },
});

const Container = styled.div({
  width: "90vw",
  maxWidth: "1400px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0px",
  '@media (max-width: 768px)': {
    width: "100vw",
    padding: "0px 10px",
  },
});

const Links = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "50px",
  
});

const Logo = styled.img({
  height: "50px",
});

const List = styled.ul({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  listStyle: "none",
  '@media (max-width: 768px)': {
    // flexDirection: "column",
    display: "none",
  },
})

const ListItem = styled.li({
  cursor: "pointer",
})

const Icons = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "20px", 
})

const Icon = styled.img({
  width: "20px",
  cursor: "pointer",
})

const Button = styled.button({
  width: "100px",
  padding: "10px",
  backgroundColor: '#da4ea2',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',

})

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="img/search.png" />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
