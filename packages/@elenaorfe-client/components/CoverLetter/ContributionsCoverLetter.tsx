import React from 'react';
import CodeWrapper from '../CodeWrapper';

const ContributionsCoverLetter: React.FC = () => {
	return (
		<section>
			<h2 className="mb-2 text-lg font-semibold">Some of my contributions</h2>
			<h3 className="text-persian-green-500 font-normal">
				Maximizing Efficiency with Husky
			</h3>
			<div className="mb-8 grid grid-cols-2 gap-8">
				<div className="space-y-4">
					<p className="hyphens-auto text-justify">
						I&apos;m totally into automation, letting machines handle the
						repetitive stuff to free up our time. Lately, I&apos;ve noticed a
						common hiccup in my current project: developers would push code,
						open the merge request, and only realize after the pipeline fails
						that tests weren&apos;t passing. Also untidy code formatting was a
						real eyesore for me while reviewing pull requests.
					</p>
					<p className="hyphens-auto text-justify">
						Due to the size of our team and our workflow, which generates a high
						volume of daily builds, we were incurring significantly higher costs
						than necessary.
					</p>
					<p className="hyphens-auto text-justify">
						I was aware of pre-commit hooks, but I wanted a solution that
						ensured developers couldn&apos;t skip running the Unit Tests and
						Prettier checks before committing. That&apos;s when I got to know{' '}
						<a
							href="https://typicode.github.io/husky/"
							target="_blank"
							rel="noreferrer"
							className="text-persian-green-500"
						>
							Husky
						</a>{' '}
						🐶 and gave it a shot. I was absolutely amazed at how well it fit
						the purpose! In fact, I liked it so much that I even set it up for
						my personal website.
					</p>
				</div>
				<div className="w-full">
					<CodeWrapper fileName=".husky/pre-commit">
						<pre className="overflow-x-auto text-xs">
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">1</span>
								<span className="text-slate-400">#!/usr/bin/env sh</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">2</span>
								<span>
									. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;
								</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">3</span>
								<span></span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">4</span>
								<span className="text-slate-400">
									# Check Prettier standards
								</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">5</span>
								<span>echo &apos;🔍 Checking Prettier standards 🔍&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">6</span>
								<span>yarn format ||</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">7</span>
								<span>(</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">8</span>
								<span>
									{' '}
									echo &apos;❌ Prettier standards are not met ❌&apos;
								</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">9</span>
								<span> false;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">10</span>
								<span>)</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">11</span>
								<span>echo &apos;✅ Prettier standards are met ✅&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">12</span>
								<span></span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">13</span>
								<span className="text-slate-400"># Run unit tests</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">14</span>
								<span>echo &apos;🧪 Running unit tests 🧪&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">15</span>
								<span>yarn test ||</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">16</span>
								<span>(</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">17</span>
								<span> echo &apos;❌ Unit tests failed ❌&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">18</span>
								<span> false;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">19</span>
								<span>)</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">20</span>
								<span>echo &apos;✅ Unit tests successful ✅&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">21</span>
								<span></span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">22</span>
								<span className="text-slate-400"># Build the client</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">23</span>
								<span>echo &apos;🚧 Building the client 🚧&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">24</span>
								<span>yarn build ||</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">25</span>
								<span>(</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">26</span>
								<span> echo &apos;❌ Client build failed ❌&apos;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">27</span>
								<span> false;</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">28</span>
								<span>)</span>
							</div>
							<div className="flex items-baseline space-x-4 leading-relaxed">
								<span className="select-none text-slate-400">29</span>
								<span>echo &apos;✅ Client build successful ✅&apos;</span>
							</div>
						</pre>
					</CodeWrapper>
				</div>
			</div>
			<div>
				<h3 className="text-persian-green-500 font-normal">
					Sharing Lessons Learned from an Angular Migration
				</h3>
				<p className="mb-4 hyphens-auto text-justify">
					Back in 2019, I was involved in a migration from AngularJS to Angular.
					The task was challenging because the code was customised over the
					years and deviated from the standards. I wrote a{' '}
					<a
						href="https://medium.com/@elenaorfe/migrate-angularjs-to-angular-through-angular-cli-hybrid-application-8790b272a1d7"
						target="_blank"
						rel="noreferrer"
						className="text-persian-green-500"
					>
						Medium article
					</a>{' '}
					about the migration process, which was well received by the community.
				</p>
			</div>
		</section>
	);
};

export default ContributionsCoverLetter;
