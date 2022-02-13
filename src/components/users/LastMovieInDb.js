import React, {Component} from 'react';
import imagenFondo from '../../assets/images/user.png';

class LastMovieInDb extends Component{

    constructor(props){
        super(props);
        this.state = {
            ultimoUsuario:''
            
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/usuariosApi/ultimo')
        .then(response => response.json())
        .then(data => this.setState({
            ultimoUsuario: 
            <ul className='listaUltimoUsuario' >
                <li>{data.data.id}</li>
                <li>{data.data.nombre}</li>
                <li>{data.data.apellido}</li>
                <li>{data.data.email}</li>
                <li>{data.data.nombre_usuario}</li>
                <li>{data.data.fecha_nacimiento}</li>
            </ul>
        }))
    }

    render(){
        let usuario;
            if(this.state.ultimoUsuario === ''){
                usuario = <p>Cargando...</p>
            }else{
                usuario = <div>{this.state.ultimoUsuario}</div> 
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
                        {usuario}
                        </div>
                        </div>
                        </div>
                
        </div>

        )
    }

}




export default LastMovieInDb
