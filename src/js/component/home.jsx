import React, { useState, useEffect } from 'react';
import { SecondsCounter } from './SecondsCounter';

const Home = () => {

	const [counter, setCounter] = useState(0);


	const updateCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};


	useEffect(() => {
		const interval = setInterval(updateCounter, 1000);


		return () => clearInterval(interval);
	}, []);

	const units = counter % 10;
	const tens = Math.floor(counter / 10) % 10;
	const hundreds = Math.floor(counter / 100) % 10;
	const thousands = Math.floor(counter / 1000) % 10;
	const tenThousands = Math.floor(counter / 10000) % 10;
	const hundredThousands = Math.floor(counter / 100000) % 10;

	return (
		<div className="container text-center my-4">
			<h1>Counter</h1>
			<div className="d-flex justify-content-center align-items-center">
				<div className="digit box bg-dark">
					<i className="fas fa-clock"></i>
				</div>

				<SecondsCounter
					units={units}
					tens={tens}
					hundreds={hundreds}
					thousands={thousands}
					tenThousands={tenThousands}
					hundredThousands={hundredThousands}
				/>
			</div>
		</div>
	);
};

export default Home;
