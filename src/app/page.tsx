import { useEffect } from 'react';

const Home = () => {
	const hello = (text: string) => {
		// eslint-disable-next-line no-console
		console.log('Hello ', text);
		return text;
	};

	useEffect(() => {
		hello('John Doe');
	}, []);

	return <div>Home Page</div>;
};

export default Home;
