import React from 'react';
import {Link} from 'react-router-dom';



const Navegacion = () => {

    return (
        <nav>
            <ol>
                <li>
                    <Link to="/login"> Login </Link>
                    <Link to="/registro"> Registro </Link>
                    <Link to="/"> Home </Link>
                </li>
            </ol>
        </nav>
    )
}
 
export default Navegacion;