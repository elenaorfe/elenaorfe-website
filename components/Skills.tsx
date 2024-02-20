import { useEffect, useMemo, useRef, useState } from 'react';
import * as d3 from 'd3';
import Title from './Title';
import { generateSkills } from '../utils/skills';
import { useRouter } from 'next/router';
import { Lang } from '../types/common';
import { LocalizedSkill } from '../types/skill';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const d3VoronoiTreemap = require('d3-voronoi-treemap');

interface CustomNode extends d3.HierarchyNode<any> {
	polygon: {
		join: (separator: string) => string;
		site: { x: number; y: number };
	};
	data: {
		color: string;
		name: string;
	};
}

interface SkillProps {
	skills: LocalizedSkill;
}

const Skills = ({ skills }: SkillProps): JSX.Element => {
	const { locale } = useRouter();
	const currentLocale: Lang = useMemo(() => locale as Lang, [locale]);
	const data = generateSkills();
	const height = 500;
	const margin = { top: 10, right: 10, bottom: 10, left: 10 };

	const [width, setWidth] = useState<number | undefined>(undefined);
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		const updateWidth = (): void => {
			const newWidth = document
				.getElementById('section-skills')
				?.getBoundingClientRect().width;
			setWidth(newWidth);
		};

		updateWidth();

		window.addEventListener('resize', updateWidth);

		return () => {
			window.removeEventListener('resize', updateWidth);
		};
	}, []);

	useEffect(() => {
		if (width !== undefined) {
			const voronoiTreemap = d3VoronoiTreemap.voronoiTreemap().clip([
				[0, 0],
				[0, height],
				[width, height],
				[width, 0],
			]);

			const rootNode = d3.hierarchy(data);
			rootNode.sum((d) => d.weight);
			voronoiTreemap(rootNode);

			const svg = d3.select(svgRef.current);
			svg.attr('width', width).attr('height', height);

			const treemapContainer = svg
				.append('g')
				.classed('treemap-container', true);

			const leaves = rootNode.leaves();

			const cells = treemapContainer
				.append('g')
				.classed('cells', true)
				.selectAll('.cell')
				.data(leaves)
				.enter()
				.append('g')
				.classed('cell-group', true);

			// Append the cell
			cells
				.append('path')
				.classed('cell', true)
				.attr('d', (d) => `M${(d as CustomNode).polygon.join(',')}z`)
				.style('fill', (d) => d.data.color);

			// Append the border
			cells
				.append('path')
				.classed('cell-border', true)
				.attr('d', (d) => `M${(d as CustomNode).polygon.join(',')}z`)
				.style('fill', 'none')
				.style('stroke', 'white')
				.style('stroke-width', 2);

			const labels = treemapContainer
				.append('g')
				.classed('labels', true)
				.selectAll('.label')
				.data(leaves)
				.enter()
				.append('g')
				.classed('label', true)
				.attr('transform', (d) => {
					return `translate(${
						(d as CustomNode).polygon.site.x -
						(d as CustomNode).data.name.length * 2
					},${(d as CustomNode).polygon.site.y})`;
				})
				.style('font-size', (d) => d.data.fontSize);

			labels
				.append('text')
				.classed('name', true)
				.html((d) => d.data.name);
		}
	}, [data, margin.left, margin.top, width]);

	return (
		<section className="mb-8" id="section-skills">
			<Title text={skills[currentLocale]?.title} />
			<svg ref={svgRef} width={width} height={height} />
		</section>
	);
};

export default Skills;
