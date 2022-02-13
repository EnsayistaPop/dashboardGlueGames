import React from "react";
import img404 from '../assets/images/error404.jpeg'
import {Link} from 'react-router-dom';

function NotFound404(){
    return(
        <div>
            <Link to='/' className='notFound'>
            <img src={img404} alt='imagen de error 404' />
            <h3>Clickea cualquier parte para ir a inicio</h3>
            </Link>
            

            
        </div>
    )
}

export default NotFound404;