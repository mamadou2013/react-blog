import { Link } from "react-router-dom"

const NotFound = ()=>{
    return (
        <div className="not-found">
            <h2>OOPS 404 !</h2>
            <p>This page does not exist</p>
            <Link to="/">go back to the homepage...</Link>
        </div>
    );
}

export default NotFound;