import React, { useEffect } from "react";
import './DetailsPage.css'
import { Button } from "@mui/material";
import {Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";







function DetailsPage() {

    const dispatch = useDispatch();
    
    const movieDetails = useSelector(store => store.movieDetails);

    const { movieId } = useParams();

    //converts movieId to a number since it's a string from the URL 
    const moviesId = Number(movieId); 

    //Dispatch an action to fetch the movie details 
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: moviesId }); 
    }, [dispatch, moviesId]); 


    return(
        <>
        <h1> This is the Details Page </h1>

        <h2> {movieDetails.title} </h2>
        <img src={movieDetails.poster} alt={movieDetails.title}  />
        <p> {movieDetails.description} </p>

        <Button
                    component={Link}
                    to={"/"}
                    variant="contained"
                    color="primary"
                > Back to List </Button>

        </> 
    ); 
}; 

export default DetailsPage; 
