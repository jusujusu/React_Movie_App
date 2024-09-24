import './App.css';

//axios
import axios from 'axios';
import React from "react";
import Movie from "./movieComponent/Movie.jsx";


class App extends React.Component {
    //스테이트 생성
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        //axios로 url을 가져옴
        /*//변수를 비구조화 할당을 하지 않을경우
        const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
        console.log(movies.data.data.movies);*/
        //변수는 비구조화 할당을 사용해 작성
        const {data: {data: {movies}}} = await axios.get(
            "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
        );
        console.log(movies);
        this.setState({movies, isLoading: false});
    }


    //컴포넌트 마운트
    //이때 데이터 fetch를 함
    componentDidMount() {
        /*setTimeout( () => {
            this.setState({isLoading: false})
        }, 1000);*/
        this.getMovies();
    }


    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading
                    ?
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                    :
                    <div className="movies">
                        {movies.map((movie) => {
                            console.log(movies);
                            return (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    year={movie.year}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />
                            )
                        })
                        }
                    </div>
                }
            </section>
        );
    }
}


export default App;
