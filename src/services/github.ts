import { GITHUB_REPO_NAME, GITHUB_USERNAME } from '@/constants/common';

const getGitHubRepoStars = async (): Promise<string | null> => {
	if (!GITHUB_USERNAME || !GITHUB_REPO_NAME) return null;

	try {
		const response = await fetch(
			`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}`,
			{
				headers: {
					Accept: 'application/vnd.github+json'
				},
				next: {
					revalidate: 60
				}
			}
		);

		if (!response?.ok) {
			return null;
		}

		const json = await response.json();

		return parseInt(json['stargazers_count']).toLocaleString();
	} catch (error) {
		console.error('Failed to fetch github star, error: ', error);
		return null;
	}
};

export { getGitHubRepoStars };
