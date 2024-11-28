'use client';

import { useEffect } from 'react';

import { Button } from '@ui/button';

const Home = () => {
	const hello = (text: string) => {
		// eslint-disable-next-line no-console
		console.log('Hello ', text);
		return text;
	};

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log('hello world');
		hello('John Doe');
	}, []);

	return (
		<div className="p-32">
			<h1>Home Page</h1>
			<div className="mt-8">
				<Button>Primary Button</Button>
			</div>
		</div>
	);
};

export default Home;
