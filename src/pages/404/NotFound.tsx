import { Link } from "react-router-dom";
import "./NotFound.scss"
function NotFound() {
    return (
        <div className="NotFound">
            <h1>:(</h1>
            <h2>Uh-Oh! That page does not exist.</h2>
            <button><Link to="/">Take Me Home</Link></button>
        </div>
    );
  }
  
  export default NotFound
  