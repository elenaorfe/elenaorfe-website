import { Icon } from '@iconify/react';
import Image from 'next/image';
import pictureGPTW from '../../public/assets/img/picture_gptw.png';

const TeachingCoverLetter: React.FC = () => {
	return (
		<section>
			<h2 className="mb-2 text-lg font-semibold">Sharing is caring</h2>
			<p className="mb-4 hyphens-auto text-justify">
				I always promote a working environment where we can learn from others.
			</p>
			<p className="mb-4 hyphens-auto text-justify">
				Few years ago, I had the opportunity to become a trainer to teach my
				colleagues about the software that we were integrating into our
				projects. It ended up being surprisingly grateful, as I realised that I
				learn a lot by teaching others.
			</p>

			<div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
				<div className="flex flex-1 flex-col justify-between">
					<div>
						<p className="mb-4 hyphens-auto text-justify">
							I value a working environment that promotes a culture of trust and
							pride. I took the initiative to drive my company to become a{' '}
							<a
								href="https://www.greatplacetowork.com/"
								target="_blank"
								rel="noreferrer"
								className="text-persian-green-500"
							>
								{' '}
								Great Place to Work{' '}
							</a>
							certified company. This certification is a recognition of the
							effort that we put into creating a healthy and happy workplace.
						</p>
					</div>
					<div className="flex items-center justify-end gap-4">
						<i className="text-end text-xs">
							Part of the Gofore team celebrating the certification
						</i>
						<div className="order-last">
							<Icon
								icon="fluent:arrow-reply-20-regular"
								className="rotate-[145deg] -scale-x-[1] text-slate-700 lg:scale-x-[1]"
								width={48}
								height={48}
							/>
						</div>
					</div>
				</div>
				<div className="flex-1">
					<Image
						src={pictureGPTW}
						alt="Group of colleagues smiling and celebrating certification with funny stickers"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};
export default TeachingCoverLetter;
