const OEmbedComponent = (): React.JSX.Element => {
	const oEmbedData = {
		version: '1.0',
		type: 'photo',
		title: 'Opensouthcode-2025-Image-Web-Performance',
		url: '/assets/documents/opensouthcode.pdf',
		author_name: 'Elena Ortega',
		author_url: 'https://www.elenaorfe.com',
		provider_name: 'elenaorfe',
		provider_url: 'https://www.elenaorfe.com',
	};

	return (
		<iframe
			title={oEmbedData.title}
			src={oEmbedData.url}
			allowFullScreen
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
			}}
		/>
	);
};

export default OEmbedComponent;
