import './App.css'
import Navbar from './navbar.jsx';
import Course from './course.jsx';
import Footer from './footer.jsx';
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
function App() { 
  return (
    <>
    <Course name="Html Course" price={200} img={html} ratings={4.5} show={true}/>
    <Course name="CSS Course" price={300} img={css} ratings={4.0} show={true}/>
    <Course name="JavaScript Course" price={500} img={js} ratings={4.8} show={true}/>
    </>
  )
}
export default App
