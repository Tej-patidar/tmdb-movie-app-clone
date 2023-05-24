import axios from "axios";
import React from "react";
import style from "../../styles/MovieDetail.module.css";
const MovieDetail = (props) => {
  console.log(props.data);
  return (
    <div>
      <div className={style.MainDiv}>
        <div className={style.image}>
          <img
            height={450}
            src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}
            alt=""
          />
        </div>
        <div className={style.list}>
          <ol>
            <h2>
              <li>Imdb_Id: {props.data.imdb_id}</li>
            </h2>
            <h2>
              <li>Original-Title: {props.data.title}</li>
            </h2>
            <h2>
              <li>OverView: {props.data.overview}</li>
            </h2>
            <h2>
              <li>Popularity: {props.data.popularity}</li>
            </h2>
            <h2>
              <li>Release_date: {props.data.release_date}</li>
            </h2>
            <h2>
              <li>Tagline: {props.data.tagline}</li>
            </h2>
            <h2>
              <li>Status: {props.data.status}</li>
            </h2>
          </ol>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=90237f229568ba07f497594486e6cdef`
  );

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default MovieDetail;
