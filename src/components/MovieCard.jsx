import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../config"

export default function MovieCard() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/api_data`);
                console.log(response.data)
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchMovies();
    }, []);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    {movies.map(movie => (
                        <div key={movie.id} className="col-md-4 mb-4">
                            <h5>{movie.title}</h5>
                            <p>{movie.overview}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};