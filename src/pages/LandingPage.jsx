import { useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Carousel from "../components/Carousel";

export default function LandingPage () {
    
    return (
        <>
            <div className="d-flex full-screen bg-dark">
                <Header/>
                <MovieCard/>
                <Carousel/>
            </div>
        </>
    )
};