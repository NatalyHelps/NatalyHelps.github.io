import '../index.css';
import '../App.css';
import Searchbar from './Searchbar'


export default function Navbar() {
  return (
    <nav>
    {/* <p id="portfoliotext">PORTFOLIO</p>  */}
      <div id="computerdiv"><img src="https://i.gifer.com/75xY.gif" width="100px" id="compimg"/></div>
      <div className="wrapper">
        <div className="linkbtn">
          <a href="#" className="insidebtnlink">
             projects 
          </a>
        </div>
      </div>
      
      <div className="wrapper">
        <div className="linkbtn">
          <a href="#" className="insidebtnlink">
            about
          </a>
        </div>
      </div>

      <div className="wrapper">
        <div className="linkbtn">
          <a href="#" className="insidebtnlink">
            contact
          </a>
        </div>
      </div>
      
      <Searchbar />
    </nav>
  );
}