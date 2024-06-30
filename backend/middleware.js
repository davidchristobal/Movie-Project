import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const SERVER = express();
const API_KEY = process.env.API_KEY;
const DB = new pg.Pool({
    connectionString:process.env.DATABASE_URL,
});

SERVER.use(express.static("public"));
SERVER.use(express.json());

const fetchMovieData = async () => {
    try {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);

        return response.data.results;
    } catch (error) {
        console.error(`Error fetching movie data: ${error}`);
    }
};

export {SERVER, DB, PORT, API_KEY, fetchMovieData};