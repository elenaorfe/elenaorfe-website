<template>
	<section>
		<HeadingPrimary :text="$t('languages.title')"></HeadingPrimary>
		<div class="lg:grid lg:grid-cols-3 space-y-4 lg:space-y-0 gap-4">
			<div
				class="bg-white rounded shadow p-4"
				v-for="item in data?.[$i18n.locale]"
				:key="item.id"
			>
				<p>{{ item.name }}</p>
				<p class="text-sm text-gray-500">{{ item.level }}</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeadingPrimary from '../components/HeadingPrimary.vue';
import data from '../assets/data/languages';
import { Language } from '../models/language.model';

export default defineComponent({
	name: 'Languages',
	components: {
		HeadingPrimary,
	},
	setup() {
		return {
			data: data as unknown as {
				[key: string]: Language[];
			},
		};
	},
});
</script>
