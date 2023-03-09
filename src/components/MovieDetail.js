import PropTypes from 'prop-types';

function Movie({ CoverImg, title }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={CoverImg} alt={title} />
        </div>
    );
}

Movie.propTypes = {
    CoverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Movie;