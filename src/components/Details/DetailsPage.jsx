import React, { useEffect } from "react";
import './DetailsPage.css'
import { Button } from "@mui/material";
import {Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";






function DetailsPage() {

    
    const movies = useSelector(store => store.movies);

    const { DetailsPageId } = useParams();

    //converts DetailsPageId to a number since it's a string from the URL 
    const movieId= Number(DetailsPageId); 
    const Movie = movies.find((movie) => movie.id === movieId);

    //Dispatch an action to fetch the movie details 
    useEffect(() => {
        dispatchEvent({ type: 'FETCH_MOVIE_DETAILS', payload: movieId }); 
    }, [dispatch, movieId]); 


    return(
        <>
        <h1> This is the Details Page </h1>

        <h2> {Movie} </h2> 

        <Button
                    component={Link}
                    to={"/MovieList"}
                    variant="contained"
                    color="primary"
                > Back to List </Button>


  



        </> 


    ); 
}; 

export default DetailsPage; 
