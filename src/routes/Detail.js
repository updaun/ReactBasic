import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
    }
    useEffect(() => {
        getMovie();

    }, []);
    console.log(movie);
    return <MovieDetail
        key={movie.id}
        CoverImg={movie.medium_cover_image}
        title={movie.title} />;
}

export default Detail;