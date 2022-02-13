import React from 'react';
import './home.css'
import imgUsuarios from '../../assets/images/computer-science-g1187fbc0c_640.png';
import imgProducts from '../../assets/images/checklist-gc09d75663_640.png';
import logo from '../../assets/images/logo-DH.png';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className='el_home'>
            <h2>BIENVENIDO ADMIN</h2>
          

            <div className='cajasDeCaminos'>
            <Link to='/users' className="categoria">
            
                 <img src={imgUsuarios} alt='imagen usuarios'/>
                 <p className="nombre-categoria">USUARIOS</p>
             
            </Link>

           
        <Link to='/products' className="categoria">
             
                <img src={imgProducts} alt='imagen productos' />
                 <p className="nombre-categoria">PRODUCTOS</p>
             
        </Link>

            <img src={logo}  alt='logo' className='logo'/>
            </div>
        </div>
       
    )
}


export default Home;
