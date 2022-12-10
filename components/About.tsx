import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { AboutItem, LocalizedAbout } from '../types/about';
import { Lang } from '../types/common';
import styles from '../styles/About.module.css';
import profilePic from '../public/assets/img/profile.png';

const About = ({ about }: { about: LocalizedAbout }) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
			<div className="order-2 lg:order-1">
				<div>
					<h1 className={styles.title}>{about[currentLocale]?.name}, </h1>
					<h2 className={styles.subtitle}>{about[currentLocale]?.role}</h2>
				</div>
				{about[currentLocale]?.status !== '' && (
					<div className="mb-8">
						<span className="chip chip-secondary">
							{about[currentLocale]?.status}
						</span>
					</div>
				)}
				{about[currentLocale]?.items?.map((item: AboutItem) => (
					<div className="mb-4 text-justify" key={item.id}>
						<div dangerouslySetInnerHTML={{ __html: item.text }} />
					</div>
				))}
			</div>
			<div className="order-1 lg:order-2 m-auto">
				<Image
					src={profilePic}
					alt=""
					width={500}
					height={500}
					className="lg:absolute lg:top-0 lg:right-0"
				/>
			</div>
		</section>
	);
};

export default About;
