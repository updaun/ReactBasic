import PropTypes from 'prop-types';

function Movie({ CoverImg, title, summary, genres }) {
    return (
        <div>
            <img src={CoverImg} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    CoverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;