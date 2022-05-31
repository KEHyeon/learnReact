/* eslint-diable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let 입력값 = "";
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {
        글제목.map(function(a, i){
          return (
            <div className='list'>
            <h4 onClick={()=>{
              modal == true ? setModal(false) : setModal(true);
              (title != i) ? setModal(true) : console.log('');
              setTitle(i);
            }}>{ 글제목[i] }<span onClick={(e)=>{
              e.stopPropagation();
              let copy = [...따봉];
              copy[i] += 1;
              따봉변경(copy);
            }}>😍</span>{따봉[i]}</h4>
            <p>2월 17일 발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
              copy = [...따봉];
              copy.splice(i,1);
              따봉변경(copy);
            }}>글삭제</button>
          </div>
          )
        })
      }
      {
        modal == true ? <Modal title={title} 글제목={글제목}/> : null
      }
      <input onChange={(e)=>{입력값=e.target.value}}/>
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy);
        copy=[...따봉];
        따봉.unshift(0);
        따봉변경(따봉);
      }}>글발행</button>
    </div>
  );
}
function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
