import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { Lang } from '../types/common';
import { CourseItem, LocalizedCourse } from '../types/course';
import Title from './Title';

type CoursesProp = {
	courses: LocalizedCourse;
};

const Courses = ({ courses }: CoursesProp) => {
	const { locale } = useRouter();

	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);

	return (
		<section>
			<Title text={courses[currentLocale]?.title} />
			<div className="grid grid-cols-1 gap-4">
				{courses[currentLocale]?.items?.map((item: CourseItem) => (
					<div className="card flex space-x-4 lg:space-x-8" key={item.id}>
						<div className="circle" aria-hidden="true">
							<ion-icon name={item.icon}></ion-icon>
						</div>
						<div>
							<p className="text-label">{item.title}</p>
							<p className="text-meta">{item.date}</p>
							<p className="text-description">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Courses;
