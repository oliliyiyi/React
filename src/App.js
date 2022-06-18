import React from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './components/MenuComponent';
import Car from './components/Car';
import Comment from './components/Comment';
import { Navbar, NavbarBrand } from 'reactstrap';
import Welcome from './components/Welcome';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const comment = {
  date: new Date(),
  text: 'I hope you enjoy my restaurant!',
  author: {
    name: 'alberto',
    avatarUrl: './images/alberto.png'
  }
};
function App(){
  return(
    <div className='App'>
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
  )
}

// function App(){
//   return (
//     <Car/>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Comment date={comment.date} text={comment.text} author={comment.author}/>
//       {/* <Welcome name="Van" />
//       <Welcome name="Thuy Kieu" />
//       <Welcome name="Thuy Van"/> */}
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return(
//       <div className='App'>
//         <Navbar dark color="primary">
//           <div className='container'>
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }

export default App;
