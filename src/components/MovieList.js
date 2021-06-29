import React from 'react'

const MovieList = props => {
    const movies = props.movies;
    const deleteMovieProps = props.deleteMovieProps;
    return (
        <div className="row">
            {movies.map(movie => {
                return <div className="col-sm-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt="Movie List ALt" />
                        <div className="card-body">
                            <h5 className="card-title text-center">{movie.title}</h5>
                            <p className="card-text text-muted">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" onClick={(e) => deleteMovieProps(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <h3><span className="badge bg-info">{movie.vote_average}</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default MovieList;