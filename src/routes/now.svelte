<script context="module" lang="ts">
	import type { Load } from './__types';

	export const load: Load = async () => {
		const crumbs = [{ text: 'Now', href: '/now' }];

		return {
			stuff: { crumbs },
		};
	};
</script>

<svelte:head>
	<title>Now</title>
	<meta name="description" content="Ora e dopo." />
</svelte:head>

<section>
	<h1 class="sr-only">Journal by mellow</h1>
	<p class="headline">Now</p>

	<article>
		<h2 class="subheadline">2022-07-20 Altruism</h2>
		<p>
			I'm slowly transitioning into working on other's open source projects
			rather than my own. There's a great joy in helping. Let's create together.
		</p>
	</article>

	<article>
		<h2 class="subheadline">2022-07-16 A tomato</h2>
		<p>
			I ate a tomato from the ground from a newly found community garden. Pure
			joy. A simple, natural process that gets swept up by the unnecessary
			distractions of society. Take me back in time, please.
		</p>
	</article>

	<article>
		<h2 class="subheadline">2022-07-04 Digital garden</h2>
		<p>
			Started a personal website redesign with no javascript, small images, and
			a focus on sustainability and sharing my journey. Embracing functional
			minimalism.
		</p>
	</article>
</section>
