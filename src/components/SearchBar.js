import React, { Component } from 'react'

export default class SearchBar extends Component {
    handleFormSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit} >
                <div className="my-3 d-flex justify-content-end align-items-end">
                    <div className="col-3">
                        <input onChange={this.props.searchMovieProps} type="text" className="form-control" id="movieName" placeholder="Search Movie" />
                    </div>
                </div>
            </form>
        )
    }
}
