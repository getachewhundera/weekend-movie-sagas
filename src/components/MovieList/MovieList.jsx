import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const history = useHistory();

    const handleRoute = () => {
        history.push(`/MovieList/${movies.id}`)
    }



    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to={`/MovieList/${movie.id}`}>
                                <img src={movie.poster} alt={movie.title} />
                            </Link>
                        </div>
                    );
                })}
            </section>

{/* temporary button to get to the details page view  */}
            <Button
                    component={Link}
                    to={'/MovieList/:DetailsPageId'}
                    variant="contained"
                    color="primary"
                > Details page </Button>

        </main>

    );
}

export default MovieList;