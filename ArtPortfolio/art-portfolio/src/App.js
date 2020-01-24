import React from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import ImageUploader from "./components/imageUploader"

function App() {
  return (
    <StyledDiv className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Digital Art Portfolio</h1>
        {/* <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         Enter Site
        </a> */}
      </header>
      <body>
        <ImageUploader/>
      </body>
    </StyledDiv>
  );
}

export default App;


const StyledDiv = styled.div`
border:1px solid red;
margin:0 auto;
.App-header{
  height:20%;
}
`