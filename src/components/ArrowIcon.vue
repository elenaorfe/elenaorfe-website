<template>
	<svg
		class="w-4 h-4 text-primary-600 cursor-pointer"
		:class="{ 'animate-bounce': isAnimate }"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ArrowIcon',
	props: {
		isAnimate: {
			type: Boolean,
			default: false,
		},
	},
});
</script>
<style lang="scss">
.arrow-wrapper--rotate-180 {
	transform: rotate(180deg);
}
.arrow-wrapper--rotate-270 {
	transform: rotate(270deg);
}
</style>
