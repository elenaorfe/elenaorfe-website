import { Icon } from '@iconify/react';
import React from 'react';
import { Translations } from '../types/common';
import { Course } from '../types/course';
import Title from './Title';

interface CoursesProp {
	courses: Course[];
	translations: Translations;
}

const CoursesSection: React.FC<CoursesProp> = ({ courses, translations }) => {
	const getDate = (dateString: string): string => {
		const date = new Date(dateString);
		// Get the month name from the date
		const month = date.toLocaleString('default', { month: 'long' });
		return `${month} ${date.getFullYear()}`;
	};

	return (
		<section className="mb-8">
			<Title text={translations.courses.title} />
			<div className="grid grid-cols-1 gap-4">
				{courses.map((course) => (
					<div className="card flex space-x-4 lg:space-x-8" key={course.id}>
						<div className="circle flex" aria-hidden="true">
							<Icon
								icon={course.icon.name}
								width={24}
								height={24}
								color="white"
							/>
						</div>
						<div>
							<p className="text-label">{course.name}</p>
							<p className="text-meta">{getDate(course.date)}</p>
							<p className="text-description">{course.provider}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default CoursesSection;
