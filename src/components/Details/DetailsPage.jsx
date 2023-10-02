import React from "react";
import './DetailsPage.css'
import { Link } from "react-router-dom";
import { Button } from "@mui/material";




function DetailsPage() {

    return(
        <>
        <h1> This is the Details Page </h1>


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
