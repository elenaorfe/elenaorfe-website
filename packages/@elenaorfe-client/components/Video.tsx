import React from 'react';

interface VideoProps {
	id: string;
	src: string;
}

const Video: React.FC<VideoProps> = ({ id, src }) => {
	return (
		<div className="mx-auto w-fit overflow-hidden rounded-lg shadow-lg ring-1 ring-slate-100 dark:ring-slate-700">
			<video
				id={id}
				width="1248"
				height="735"
				controls
				autoPlay
				muted
				loop
				className="h-auto max-h-96 w-fit"
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Video;
