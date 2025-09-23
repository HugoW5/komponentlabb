function MovieCard(props){
    return(
        <div>
            <div>
                <p className="card-title">{props.Title}</p>
            </div>
            <div>
                <img src={props.Poster} alt="movie poster" />
            </div>
            <div className="footer-info">
                <p>Year {props.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;