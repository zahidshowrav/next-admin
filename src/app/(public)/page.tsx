import { Metadata } from 'next';

import { Button } from '@ui/button';
import { Card } from '@ui/card';

export const metadata: Metadata = {
	title: 'NextAdmin Landing',
	description: 'Landing page'
};

const Home = () => {
	return (
		<div className="max-w-[80%] py-10 px-4 mx-auto">
			<h1 className="mb-8">Home Page</h1>
			<Card className="p-4">
				<h1 className="font-bold text-2xl">Lorem ipsum dolor sit</h1>
				<p className="mt-3">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Facere dignissimos incidunt quas deleniti exercitationem
					optio aliquid modi. Asperiores vero accusantium, a minus
					quibusdam dolores sunt ducimus temporibus illo laudantium
					ipsum!
				</p>
				<div className="mt-8">
					<Button>Primary Button</Button>
				</div>
			</Card>
		</div>
	);
};

export default Home;
