import React from 'react'
import style from "../styles/secondNav.module.css";
const SecondNav = () => {
  return (
    <div>
        <div className={style.container}>
            <h2>Welcome.</h2>
            <h1>Millions of movies, TV shows and people to discover. Explore now.</h1>
            <input type="text" placeholder='Search For a Movie, TV-Shows & Person ...' />
            <button>Search</button>
        </div>
    </div>
  )
}

export default SecondNav;