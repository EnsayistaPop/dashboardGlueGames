import React, {useEffect, useState}from "react";
import ImgDefault from '../../../assets/images/box.png'
import './ProductDetail.css'
import { useParams } from "react-router-dom";

function ProductDetailComponent (){
    const params = useParams()
    const [producto, setProducto] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/productosApi/' + params.id)
        .then(response => response.json())
        .then(product => {
            setProducto(
                product.data
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
				<h3 class="user">Datos del producto</h3>
                <p class= "botones"> Id: {producto.id} </p>
				<p class= "botones"> Nombre: {producto.nombre} </p>
				<p class= "botones"> Precio lista: {producto.precio_lista} </p>
                <p class= "botones"> Descuento: {producto.descuento} </p>
                <p class= "botones"> Precio final: {producto.precio} </p>
                <p class= "botones"> Inventario: {producto.stock} </p>
                <p class= "botones"> Categoria: {producto.categoria} </p>
                <p class= "botones"> Marca: {producto.marca} </p>
                <p class= "botones"> Descripcion: {producto.descripcion} </p>
                </div>
                </div>
    )
}

export default ProductDetailComponent;

