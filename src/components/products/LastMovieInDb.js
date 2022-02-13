import React, {Component} from 'react';
import imagenFondo from '../../assets/images/box.png';

class LastMovieInDb extends Component{

    constructor(props){
        super(props);
        this.state = {
            ultimoProducto:''
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/productosApi/ultimo')
        .then(response => response.json())
        .then(data => this.setState({
            ultimoProducto: 
            <table className='listaUltimoProducto' >
                <tr>id: {data.data.id}</tr>
                <tr>nombre: {data.data.nombre}</tr>
                <tr>precio: {data.data.precio}</tr>
                <tr>precio de lista:{data.data.precio_lista}</tr>
                <tr>inventario: {data.data.stock}</tr>
                <tr>descripcion: {data.data.descripcion}</tr>
                <tr>departamento: {data.data.departamento}</tr>
                <tr>categoria: {data.data.categoria}</tr>
                <tr>marca: {data.data.marca}</tr>
                <tr>descuento:{data.data.descuento}</tr>
            </table>
        }))
    }

    render(){
        let producto;
            if(this.state.ultimoProducto === ''){
                producto = <p>Cargando...</p>
            }else{
                producto = <div>{this.state.ultimoProducto}</div> 
            }
        return(
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last user in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                        {producto}
                        </div>
                        </div>
                        </div>
                
        </div>

        )
    }

}




export default LastMovieInDb
