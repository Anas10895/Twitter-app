import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, ButtonGroup ,Button,Link , ListGroup} from "react-bootstrap"

function App() {
  return (
    <div className="App">

<Nav   bg="light" variant="light"   className="film-list">

 <Navbar.Brand href="/">
   <img src="http://pngimg.com/uploads/twitter/twitter_PNG9.png" alt="" height="40"/>
  </Navbar.Brand>

  <nav classvertical>
  <ListGroup  >
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>


</nav>
</Nav>
    </div>
  );
}

export default App;
