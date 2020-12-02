import React from "react";

export default function ContentCard({ movie }) {
	return (
		<div className="content-card">
			<img
				className="content-card-image"
				src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
				alt={movie.title + " poster"}
			/>
			<div className="content-card-content">
				<h3 className="content-card-title">{movie.title}</h3>
				<p>
					<small>RELEASE DATE: {movie.release_date}</small>
				</p>
				<p>
					<small>RATING: {movie.vote_average}</small>
				</p>
				<p className="content-card-desc">{movie.overview}</p>
			</div>
		</div>
	);
}
