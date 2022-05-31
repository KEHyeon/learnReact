import './App.css';
import { Button,Navbar, Container, Nav,Row,Col } from 'react-bootstrap';
import {useState} from "react";
import data from './data';
function App() {
  let [shoes] = useState(data)
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {
          data.map(function(shoe, i){
            console.log(1);
            return <Card shoe={shoes[i]}/>;
          })
          }
        </Row>
      </Container>  
    </div>
    
  );
  function Card(props) {
    return (
      <Col sm>
              <img src={`https://codingapple1.github.io/shop/shoes${props.shoe.id + 1}.jpg`} width="80%"/>
              <h4>{props.shoe.title}</h4>
              <p>{props.shoe.price.toLocaleString('ko-KR')} </p>
      </Col>
    );
  }
}
export default App;
