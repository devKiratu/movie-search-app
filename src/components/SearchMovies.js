import React, { useState } from "react";
import ContentCard from "./ContentCard";

export default function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const searchMovie = async (e) => {
		e.preventDefault();

		const url = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<h1>React Movie Search App</h1>
			<form className="search-box" onSubmit={searchMovie}>
				<label className="search-box-label" htmlFor="query">
					Movie Name:
				</label>
				<input
					className="search-box-input"
					type="text"
					name="query"
					placeholder="e.g. Jurassic Park"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="search-box-button" type="submit">
					Search!
				</button>
			</form>
			<div>
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						<ContentCard movie={movie} key={movie.id} />
					))}
			</div>
		</div>
	);
}
