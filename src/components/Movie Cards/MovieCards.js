import React from 'react'
import './MovieCard.css';



const infos = [
    {
      title: 'Thor',
      description: 'The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.',
      duration: '124',
      year: '2011',
      director: 'Kenneth Branagh',
      cast: ['Chris Hemsworth','Anthony Hopkins','Natalie Portman'],
      rating: 8.7,
      imdbLink: 'https://www.imdb.com/title/tt0800369/',
      poster:  'http://media.comicbook.com/2017/10/thor-movie-poster-marvel-cinematic-universe-1038890.jpg'
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      duration: '142',
      year: '1994',
      director: 'Frank Darabont',
      cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
      rating: 9.3,
      imdbLink: 'https://www.imdb.com/title/tt0111161/',
      poster: "https://ae01.alicdn.com/kf/HTB1xKI9PFXXXXXAXVXXq6xXFXXXG/Dropship-The-Shawshank-Redemption-Nostalgia-classic-movie-kraft-paper-bar-poster-Retro-Poster-decorative-painting.jpg"
    },
    {
      title: 'The Silence of the Lambs',
      description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
      duration: '118',
      year: '1991',
      director: 'Jonathan Demme',
      cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
      rating: 8.6,
      imdbLink: 'https://www.imdb.com/title/tt0102926/',
      poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
    },
    {
      title: 'Spirited Away',
      description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      duration: '125',
      year: '2001',
      director: 'Hayao Miyazaki',
      cast: ['Daveigh Chase', 'Suzanne Pleshette', 'Miyu Irino'],
      rating: 8.6,
      imdbLink: 'https://www.imdb.com/title/tt0245429/',
      poster: "https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljNC00ZjU5LWJiODQtZmEzZTU0MjBlNzgxL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
      title: 'Starship Troopers',
      description: "Humans in a fascistic, militaristic future do battle with giant alien bugs in a fight for survival.",
      duration: '129',
      year: '1997',
      director: 'Paul Verhoeven',
      cast: ['Casper Van Dien', 'Denise Richards', 'Dina Meyer'],
      rating: 7.2,
      imdbLink: 'https://www.imdb.com/title/tttt0120201/',
      poster: "https://m.media-amazon.com/images/M/MV5BNThlOTFhOGEtZjE2NC00MzMzLThkYWItZjlkNWNlMDAzMGZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,732,1000_AL_.jpg"
    },
    
  ];


const Rating = ({rating}) => {
    let stars = [];
    for (let i = 1; i < 11; i++) {
      let klass = "fa fa-star";
      if (rating >= i && rating !== null) {
        klass = "fa fa-star checked";
      }
      stars.push(
        <i
          style={{ direction: (i%2===0) ? "rtl" : "ltr"}}
          className={klass}
          />
      );
    }
    return (
      <div className="movie__rating">
        {stars}
      </div>
    );
  }
  
  
  
const MovieInfo = ({name,value}) => (
    <div className={`movie__${name}`}>
      <span className='info__head'>
        {name.replace(/\b\w/g, l => l.toUpperCase())}
      </span>
      {value}
    </div>
)
  
  
  const Movie = ({infos}) => {
    const cast = <p>{infos.Actors}</p>

    return(
      <div className='movie' style={{backgroundImage: `url(${infos.Poster})`}}>
        
        <h2 className='movie__title'>{infos.Title}</h2>
        
        <span className='movie__description'>{infos.Plot}</span>
        
        <div className='movie__infos'>
          {/* <MovieInfo name='duration' value={infos.duration} /> */}
          <MovieInfo name='director' value={infos.Director} />
          <MovieInfo name='year' value={infos.DVD} />
          <MovieInfo name='cast' value={cast} />
        </div>
        
        <div className='movie__imdb'>
          <Rating rating={Math.round(parseFloat(infos.imdbRating))}/>
          <a href={infos.Website} className='movie__imdb-button' target='blank'> IMDb </a>
        </div>
        
      </div>
    )
  } 
  
  export default class MovieCards extends React.Component {
    constructor(props){
      super(props);
    }
    
    render() {
      const moviesList = this.props.movies.map((movie,i)=> (
        <Movie key={i} infos={movie}/>
      ));

      return (
        <div className='movies__container'>
          {moviesList}
        </div>
      )
    }
  }