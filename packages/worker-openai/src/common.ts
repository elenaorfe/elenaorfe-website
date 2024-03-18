export const headers = { 'Access-Control-Allow-Origin': '*' };

export const handleError = (error: any) => {
	const errorMessage = {
		error: true,
		message: error.message || 'Unknown error',
	};

	return new Response(JSON.stringify(errorMessage), {
		status: error.status,
		headers: {
			...headers,
			'Content-Type': 'application/json',
		},
	});
};
