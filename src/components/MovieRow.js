import React, { Component } from 'react';

export default class MovieRow extends Component {
	viewMovie() {
		console.log('viewMovie')
		console.log(this.props.movie.title)
		const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
		window.location.href = url
	}

	render() {
		const { movie } = this.props;
		return (
			<table key={movie.id}>
	      <tbody>
	        <tr>
	          <td>
	            <img width="180" src={movie.poster_src} alt="poster"/>
	          </td>
	          <td>
	            <h3>{movie.title}</h3>
	            <p>{movie.overview}</p>
	            <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
	          </td>
	        </tr>
	      </tbody>
	    </table>
		);
	}
}
