import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> 

let moviesInDB = {
    title: 'Users in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: "fa-solid fa-users"
}

 <!-- Total awards --> 

let totalAwards = {
    title:' ADMINS', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

 <!-- Actors quantity --> 

let actorsQuantity = {
    title:'Activos' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];*/

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            <SmallCard/>

        </div>
    )
}

export default ContentRowMovies;