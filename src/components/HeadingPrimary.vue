<template>
	<h1 class="text-xl mb-4">{{ text }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'HeadingPrimary',
	props: {
		text: {
			type: String,
			required: true,
		},
	},
});
</script>
