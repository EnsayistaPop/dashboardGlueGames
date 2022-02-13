import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class ChartRow extends Component{

constructor(props){
    super(props);
this.state= {
    usuarios:''
}
}

componentDidMount(){
    fetch('http://localhost:4000/usuariosApi')
    .then(response => response.json())
    .then(data => this.setState({
        usuarios: data.data.map((usuario, i) => 
        
        <tr key={i+usuario.id}>
        <td><Link to={`${usuario.id}`}>{usuario.id}</Link></td>
        <td>{usuario.nombre}</td>
        <td>{usuario.nombre_usuario}</td>
        <td >{usuario.email}</td>
        <td>{usuario.fecha_nacimiento}</td>
        </tr>
        
      
        )
    }))
    .catch(error => console.log(error))

}


    render(){
        let usuario = '';
        if(this.state.usuarios === ''){
            usuario = 
            <tr>
            <td>cargando...</td>
            <td>cargando...</td>
            <td>cargando...</td>
            <td>cargando...</td>
            <td>cargando...</td>
             </tr>
         }else{
             usuario = 
             <tbody>
                {this.state.usuarios}
            </tbody>
         }

        return(
            
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nombre</th>
                                <th>usuario</th>
                                <th>e-mail</th>
                                <th>cumpleaños</th>
                            </tr>
                        </thead>
                       
                        
                            {usuario}
                            

                        
                    </table>
                    
           
        )
    }
}
    
        

export default ChartRow;