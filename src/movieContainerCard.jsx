import React from "react";
import cardStyle from './movieContainer.module.css'

const Card = ({movieName:{Title,Year,imdbID,Type,Poster}})=>{
    return(
        <>
         <div className={cardStyle.movie} key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster!=='N/A' ? Poster:"https://via.placeholder.com/400"} alt={Title}/>
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>

         </div>
        </>
    );
}

export default Card;