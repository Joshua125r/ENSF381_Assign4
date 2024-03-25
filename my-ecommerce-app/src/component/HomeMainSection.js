import React, { useState, useEffect } from "react";
import reviewsData from "../data/reviews";

const HomeMainSection = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		// Fetching random reviews
		const randomReviews = getRandomReviews(2);
		setReviews(randomReviews);
	}, []);

	const getRandomReviews = (count) => {
		const shuffledReviews = reviewsData.sort(() => 0.5 - Math.random());
		return shuffledReviews.slice(0, count);
	};

	return (
		<section>
			<h2>About Us</h2>
			<p>Company's vision and mission...</p>
			<button
				onClick={() => {
					/* Redirect to Product Page */
				}}
			>
				Shop Now
			</button>

			<div className="customer-reviews">
				<h2>Customer Reviews</h2>
				{reviews.map((review, index) => (
					<div key={index} className="review">
						<p>{review.customerName}</p>
						<p>{review.reviewContent}</p>
						<p>
							Rating:{" "}
							{Array.from({ length: review.stars }, (_, i) => (
								<span key={i}>⭐</span>
							))}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default HomeMainSection;
