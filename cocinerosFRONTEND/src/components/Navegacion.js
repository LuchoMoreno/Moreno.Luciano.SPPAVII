import React from 'react';
import { Link } from 'react-router-dom';



const Navegacion = () => {

    return (
        <div class="nav">
               
                <a> <Link to="/login"> LOGIN </Link> </a>
                <a> <Link to="/registro"> REGISTRO </Link> </a>
                <a> <Link to="/"> HOME </Link> </a>
        </div>
    )
}

export default Navegacion;