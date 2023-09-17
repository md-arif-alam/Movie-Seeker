import React, { useEffect } from "react";
import Styles from './AppContainer.module.css';
import Card from "./movieContainerCard";
import logo from './logo.png';
import search from './search1.png';



const AppContainer = (props)=>{
   
    // console.log(props.search);
    // const find={props.movies}.find(o=>o.Title).Title;
    // console.log(find);
    // console.log(props.movies.values);
        return(
            <>
            <div className={Styles.app}>
                <header className={Styles.head}>
                    <img src={logo} alt="website-Logo" />
                    <h1>Movie-Seeker</h1>
                </header>
                    <div className={Styles.search}>
                        <input
                            type="text"
                            onChange={(e)=>props.setSearch(e.target.value)}
                            value={props.search}
                            placeholder="Search your favourite movies"
                        />
                        <img 
                            src={search}
                            alt="searchIcon"
                            onClick={()=>props.movieSearch(props.search)}
                        />
                    </div>

                    {props.movies?.length > 0 ? (
                        <div className={Styles.container}>
                        {props.movies.map((currMovie)=>{
                            return <Card movieName={currMovie}/>
                        })}
                        </div>
                
                    ):
                    (
                        <></>            
                    )
                }
                {props.movies ? (
                   
                   <></>
              
                ):(
                    <div className={Styles.empty}> 
                     <h2>No movie found ! try some other movies name</h2>
                    </div>
                )}
            </div>
            
            </>
        );
    }

export default AppContainer;