import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { AboutItem, LocalizedAbout } from '../types/about';
import { Lang } from '../types/common';
import styles from '../styles/About.module.css';

const About = ({ about }: { about: LocalizedAbout }) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section className="mb-8">
			<div>
				<h1 className={styles.title}>{about[currentLocale]?.name}, </h1>
				<h2 className={styles.subtitle}>{about[currentLocale]?.role}</h2>
			</div>
			{about[currentLocale]?.status !== '' && (
				<div className="mb-8">
					<span className="chip">{about[currentLocale]?.status},</span>
				</div>
			)}
			{about[currentLocale]?.items?.map((item: AboutItem) => (
				<div className="mb-4 text-justify" key={item.id}>
					<div dangerouslySetInnerHTML={{ __html: item.text }} />
				</div>
			))}
		</section>
	);
};

export default About;
