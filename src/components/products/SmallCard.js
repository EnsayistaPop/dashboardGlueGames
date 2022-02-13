import React, {Component} from 'react';


class SmallCard extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            cuantity:''
            
        }
    }


  componentDidMount(){
      fetch('http://localhost:4000/productosApi')
      .then(response => response.json())
      .then(data => this.setState({
          cuantity: data.productsTotal
      }))
  }
    
  
   
    
    

 
        render(){ 
            let cantidad;
            if(this.state.cuantity === ''){
                cantidad = <p>Cargando...</p>
            }else{
                cantidad = <p>{this.state.cuantity}</p> 
            }

            return( 
        <div className="col-md-4 mb-4">
            <div className={`card border-left- shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text- text-uppercase mb-1`}> Productos en la base</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cantidad}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fa fa-solid fa-users fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }
        
    
}





export default SmallCard;