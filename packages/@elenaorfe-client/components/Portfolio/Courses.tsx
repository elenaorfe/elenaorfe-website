import { Icon } from '@iconify/react';
import React from 'react';
import { Translations } from '../../types/common';
import { Course } from '../../types/course';
import Card from '../Card';
import ShapeCircle from '../ShapeCircle';
import Title from '../Title';

type CoursesProp = {
	courses: Course[];
	translations: Translations;
};

const CoursesSection = (props: CoursesProp): React.JSX.Element => {
	const { courses, translations } = props;
	const getDate = (dateString: string): string => {
		const date = new Date(dateString);
		// Get the month name from the date
		const month = date.toLocaleString('default', { month: 'long' });
		return `${month} ${date.getFullYear()}`;
	};

	return (
		<section className="mb-8">
			<Title text={translations.courses.title} />
			<div className="grid-cols-2 gap-8 space-y-4 md:grid md:space-y-0">
				{courses.map((course) => (
					<Card key={course.id}>
						<div className="flex space-x-4 p-4 lg:space-x-8" key={course.id}>
							<ShapeCircle>
								<Icon
									icon={course.icon.name}
									width={24}
									height={24}
									color="white"
								/>
							</ShapeCircle>
							<div>
								<p className="text-base text-slate-900 dark:text-slate-100">
									{course.name}
								</p>
								<p className="text-xs text-slate-500">{getDate(course.date)}</p>
								<p className="text-sm text-slate-500">{course.provider}</p>
							</div>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
};

export default CoursesSection;
