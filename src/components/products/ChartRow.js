import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class ChartRow extends Component{

constructor(props){
    super(props);
this.state= {
    productos:''
}
}

componentDidMount(){
    fetch('http://localhost:4000/productosApi')
    .then(response => response.json())
    .then(data => this.setState({
        productos: data.data.map((producto, i) => 
        
        <tr key={i+producto.id}>
        <td><Link to={`${producto.id}`}>{producto.id}</Link></td>
        <td>{producto.nombre}</td>
        <td>{producto.precio_lista}</td>
        <td >{producto.descuento}</td>
        <td>{producto.precio}</td>
        </tr>
        
      
        )
    }))
    .catch(error => console.log(error))

}


    render(){
        let productos = '';
        if(this.state.productos === ''){
            productos = 
            <tr>
            <td>cargando...</td>
            <td>cargando...</td>
            <td>cargando...</td>
            <td>cargando...</td>
            <td>cargando...</td>
             </tr>
         }else{
             productos = 
             <tbody>
                {this.state.productos}
            </tbody>
         }

        return(
            
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nombre</th>
                                <th>precio lista</th>
                                <th>descuento</th>
                                <th>precio</th>
                            </tr>
                        </thead>
                       
                        
                            {productos}
                            

                        
                    </table>
                    
           
        )
    }
}
    
        

export default ChartRow;