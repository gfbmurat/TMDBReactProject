import React, { Component } from 'react'
import SearchBar from './SearchBar'
import MovieList from '../components/MovieList';
import axios from 'axios';
require('dotenv').config();


export default class App extends Component {
    state = {
        movies: [],
        searchQuery: ""
    }


    async componentDidMount() {
        const response = await axios.get(`https://api.themoviedb.org/3/list/7100221?api_key=${process.env.REACT_APP_API_KEY}&language=tr`);
        console.log(response.data.items)
        this.setState({ movies: response.data.items })
    }


    deleteMovie = async (movie) => {
        // ! Normalde delete metot kullanılır ancak tmdb'deki filmi
        // !silemeyeceğimiz için tmdb documentasyonda olduğu gibi post metot kullanıldı.
        axios.post(`https://api.themoviedb.org/3/list/7100221/remove_item?media_id=${movie.id}&session_id=${process.env.REACT_APP_SESSION_KEY}&api_key=${process.env.REACT_APP_API_KEY}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState({
            movies: newMovieList
        })
    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }
    render() {

        let filteredMovie = this.state.movies.filter(
            (movie) => {
                return movie.title.toLowerCase().indexOf(this.state.searchQuery.
                    toLowerCase()) !== -1;
            })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProps={this.searchMovie} />
                    </div>
                </div>
                <MovieList movies={filteredMovie}
                    deleteMovieProps={this.deleteMovie} />
            </div>
        )
    }
}



