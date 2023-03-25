import './style.scss';
import {Education,Projects,Skills,Navbar,Coding,Contact,Theme} from './components'
import { useTheme } from './context/ThemeContext';
function App() {
  const {theme} = useTheme();
  return (
    <div class={`main ${theme?"cool":"warm"}`}>
    <Theme/>
    <Navbar />
    <div className={`container ${theme?"cool6":"warm"}`}>
       <div className={`${theme?"cool4":"img"}`}></div>
       <div className={`name ${theme?"cool":"warm"}`}>Shweta Gupta</div>
       <div className='text'>
       <div>Comptative Programmer</div> 
      </div>
      <div className='text1'>
       <div>Full Stack Developer</div> 
      </div>
    </div>
      <div className={`img-bottom ${theme?"cool1":"warm"}`}></div>
    <Education />
    <Projects />
    <Coding/>
    <Skills/>
    <Contact/>
    </div>
  );
}

export default App;
