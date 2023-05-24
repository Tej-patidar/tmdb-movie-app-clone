import Navbar from '@/components/Navbar';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "../styles/trendingMovies.module.css";
import Link from 'next/link';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const trendingMovies=async()=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
    setMovies(data.results)
    console.log(data);
  }

  useEffect(()=>{
    trendingMovies()
  },[])
  return (
    <div>
        <h4 className={style.trendingMoviesh4}>Popular Movies</h4>
   <ul className={style.trendingMoviesUl}>
{movies && movies.map((i)=>(
  <li key={i.id}>
  <Link href={`/MovieDetail/${i.id}`}><img
  height={250}
  key={i.id} 
  src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt="" /></Link>
  <h5> Release_date:  {i.release_date}</h5>
  </li>
))}

</ul>
<hr />
        
    </div>
  )
}

export default TrendingMovies;