import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Beautybar from './components/Beautybar';

function App() {
 
  return (
    <>
           <Navbar />
       
           <Welcome />
           <Beautybar />
           <About />
           <Projects/>
           </>
  )
}
export default App
