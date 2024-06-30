import { SERVER } from "./middleware.js";
import { DB } from "./middleware.js";
import { PORT } from "./middleware.js";
import { fetchMovieData } from "./middleware.js";

// GET request from api_data table
SERVER.get("/api/api_data", async (req, res) => {
    try {
        let result = await DB.query(`SELECT * FROM api_data`);
        console.log(`Successfully fetched api_data...`)
        res.status(200).send(result.rows);
    } catch (error) {
        console.error(`Error fetching : ${error}`);
        res.status(500).send(`Error fetching api_data...`)
    }
});

SERVER.get("/api/insert-movies", async (req, res) => {
    try {
        let moviesRequested = await fetchMovieData();

        for (let movie of moviesRequested) {
            const { id, title, overview, popularity, release_date, vote_average, vote_count, adult, backdrop_path, genre_ids, original_language, original_title, poster_path, video } = movie;
            let query = `INSERT INTO api_data (id, title, overview, popularity, release_date, vote_average, vote_count) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (id) DO NOTHING`;

            await DB.query(query, [id, title, overview, popularity, release_date, vote_average, vote_count]);
        }
    res.status(200).send('Movies inserted successfully');
    } catch (error) {
        console.error(`Error inserting movie data: ${error}`);
        res.status(500).send('Error inserting data');
    };
});

SERVER.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});