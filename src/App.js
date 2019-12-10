import React, { Component } from 'react';
import movie_logo from './movie_logo.svg';
import './App.css';
import MovieRow from './components/MovieRow';
import $ from 'jquery';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // const movies = [
    //   {id: 0, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", title: "Joker", overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure."},
    //   {id: 1, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/lNnomQxXpRP9mgUwMuSZhA8LXfA.jpg", title: "Ad Astra", overview: "An astronaut travels to the outer edges of the solar system to find his father and unravel a mystery that threatens the survival of our planet. "},
    // ];
  
    // const movieRows = [];

    // movies.forEach(movie => {
    //   const movieRow = <MovieRow key={movie.id} movie={movie}/>
    //   movieRows.push(movieRow)
    // })
    
    // this.state = {
    //   rows: movieRows
    // } 
    this.performSearch("avengers")
  }

  performSearch(searchTerm) {
    console.log("performSearch on MovieDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=0d44a00f64273fa5cd8ef473525a9680&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("fetched data success")
        console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow) 
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("failed to fetch data")
      }
    })
  }

  searchHandleChange(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="50" src={movie_logo} alt="movie_logo_is_broken" />
              </td>
              <td width="8"></td>
              <td>
                <h1>MovieDB search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="searchBar" onChange={this.searchHandleChange.bind(this)} placeholder="Enter search term" />
        {this.state.rows}

      </div>
    );
    }
}

export default App;
