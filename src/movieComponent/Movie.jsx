import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {/*장르 중에 undefined가 있어*/}
                    {genres === undefined ?
                        ""
                        : genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                </ul>
                <p className="movie__summary">
                    {/*summary가 너무 길어서 180글자로 자를거임*/}
                    {summary.slice(0, 180)}
                </p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    // 장르 배열을 가져올 때 쓰는법
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;