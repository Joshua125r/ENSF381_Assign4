import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
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
			<p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service.
			Learn more about our story and commitment to your satisfaction.</p>
			<button>
				<Link to="/products">Shop Now</Link>
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
