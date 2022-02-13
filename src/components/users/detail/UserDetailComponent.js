import React, {useEffect, useState}from "react";
import ImgDefault from '../../../assets/images/user.png'
import './userDetail.css'
import { useParams } from "react-router-dom";

function UserDetailComponent(){
    const params = useParams()
    const [usuario, setUsuario] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/usuariosApi/' + params.id)
        .then(response => response.json())
        .then(user => {
            setUsuario(
                user.data
            )
        })
        .catch(error => console.log(error));
    })


    return(
    
        <div class="user__detail__container" >
            
			<div class="image__user">
				<img src={ImgDefault} alt='profileimg' / >
				
				</div>
			<div class="box__details">	
				<h3 class="user">Datos de la cuenta</h3>
                <p class= "botones"> Usuario: {usuario.id} </p>
				<p class= "botones"> Usuario: {usuario.nombre_usuario} </p>
				<p class= "botones"> Email: {usuario.email} </p>
				
				<h3>Datos personales</h3>
				<p class= "botones"> Nombre: {usuario.nombre}</p>
				<p class= "botones"> Apellido: {usuario.apellido}  </p>
				<p class= "botones"> Fecha de Nacimiento:{usuario.fecha_nacimiento} </p>
                </div>
                </div>
    )
}

export default UserDetailComponent