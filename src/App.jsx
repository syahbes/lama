import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contacts from './components/Contacts';

const Container = styled.div({
  height: '100vh',
  scrollSnapType: 'y mandatory',
  scbellBehavior: 'smooth',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  color: 'white',
  background: 'url(./img/bg.jpeg)',
})

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contacts />
      
    </Container>
  );
}

export default App;
