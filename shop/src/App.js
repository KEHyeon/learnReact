import './App.css';
import { Button,Navbar, Container, Nav,Row,Col } from 'react-bootstrap';
import {useState} from "react";
import data from './data';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';
function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate()
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShopShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
          <>
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
          </>  
        }/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>맴버임</div>} />
          <Route path="location" element={<About/>} />
        </Route>
        <Route path="/event" element={<EventPage/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}/>
          
        </Route>
      </Routes>
    </div>
  );
  function EventPage() {
    return(
      <div>
        <h4>오늘의 이벤트</h4>
        <Outlet></Outlet>
      </div>
    );
  }
  function About() {
    return(
      <div>
        <h4>회사정보임</h4>
        <Outlet></Outlet>
      </div>
    );
  }
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