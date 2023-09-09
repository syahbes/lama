import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div({
  height: "100vh",
  scrollSnapAlign: "center",
  
});

const Container = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "50px",
  height: "100%",
  // alignItems: "center",
});
const Left = styled.div({
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});

const Form = styled.form({
  width: '500px',
  display: "flex",
  flexDirection: "column",
  gap: "25px",

});

const Title = styled.h1({
  // fontSize: "50px",
  fontWeight: "200",
});
const Input = styled.input({
  padding: '20px',
  border: "none",
  outline: "none",
  borderRadius: "5px",
  backgroundColor: '#e8e6e6'
});

const TextArea = styled.textarea({
  padding: '20px',
  border: "none",
  outline: "none",
  borderRadius: "5px",
  backgroundColor: '#e8e6e6',

});

const Button = styled.button({
  backgroundColor: '#da4ea2',
  color: '#fff',
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: "5px",
  padding: "15px",
  fontSize: "18px",
});

const Right = styled.div({
  flex: "1",
});


const Contacts = () => {
  const ref = useRef();
  const [success , setSuccess] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_9jdnuqd', 'template_wh4890s', ref.current, 'SM34eR24S2EWWt2HE')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Get in touch</Title>
            <Input placeholder="Name" name='name'/>
            <Input placeholder="Email" name='email'/>
            <TextArea placeholder="Write your message" rows="10" name='message'/>
            <Button type="submit">Send</Button>
            {success && <p>Message sent successfully</p>}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  );
};

export default Contacts;
