function MovieCard(props){
    return(
        <div>
            <div>
                <p className="card-title">{props.title}</p>
            </div>
            <div>
                <img src={props.poster} alt="movie poster" />
            </div>
            <div className="footer-info">
                <p>Year {props.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard;