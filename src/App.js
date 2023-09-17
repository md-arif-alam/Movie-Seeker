import React ,{useState}from 'react';
import AppContainer from './AppContainer';
import sty from './App.module.css'
import AboutMe from './aboutme';


//3e0781ff


const url = 'https://www.omdbapi.com?apikey=3e0781ff';

function App() {

  const[search,setSearch]=useState("");
  const[movies,setMovies]=useState([]);  // movies contains the array of movie which fetched by api through the help of steMovies method
  const[aboutMe,setAbout]=useState(false);
  
  const movieSearch = async (title)=>{
    const responcefromAPi = await fetch(`${url}&s=${title}`);
    const dataFromApi = await responcefromAPi.json();
    // console.log(dataFromApi.Search);
     setMovies(dataFromApi.Search);
  };
  

  return(
    <>
    <button onClick={()=>setAbout(true)} className={sty.btn}>Info</button> 
      {aboutMe !== false ? (
        <div>
           {<AboutMe/>}
         </div>
      ):(
        <div>
          {
            <AppContainer movies={movies} search={search} setSearch={setSearch} movieSearch={movieSearch}/>
         }
        </div> 
      ) 
      }
    </>
  );
 
}
export default App;
 