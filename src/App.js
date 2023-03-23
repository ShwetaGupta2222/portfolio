import './style.scss';
import image from './img/babyyy.jpg'
import {Education,Projects,Skills,Navbar,Coding,Contact} from './components'
function App() {
  return (
    <div class='main'>
    <Navbar />
    <div className="container">
       <img src={image} alt=""/>
       <div className='name'>Shweta Gupta</div>
       <div className='text'>
       <div>Comptative Programmer</div> 
      </div>
      <div className='text1'>
       <div>Full Stack Developer</div> 
      </div>
    </div>
      <div className='img-bottom'></div>
    <Education />
    <Projects />
    <Coding/>
    <Skills/>
    <Contact/>
    </div>
  );
}

export default App;
