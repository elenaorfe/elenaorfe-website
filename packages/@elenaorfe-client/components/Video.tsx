import React from 'react';

interface VideoProps {
	id: string;
	src: string;
}

const Video: React.FC<VideoProps> = ({ id, src }) => {
	return (
		<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-[--color-text-inverted]">
			<video
				id={id}
				width="1248"
				height="735"
				controls
				autoPlay
				muted
				loop
				className="h-auto w-full"
			>
				<source src={src} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Video;
