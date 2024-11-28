export default {
	'**/*.ts?(x)': () => 'tsc --pretty --noEmit',
	'*.{js,ts,tsx}': 'eslint',
	'**/*.{js,ts,tsx}': 'prettier --write'
};
