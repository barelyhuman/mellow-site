<script context="module" lang="ts">
	import type { Load } from './__types';

	export const load: Load = async () => {
		const crumbs = [{ text: 'About', href: '/about' }];

		return {
			stuff: { crumbs },
		};
	};
</script>

<script>
	import Link from '$lib/link.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Question everything." />
</svelte:head>

<article>
	<h1 class="headline">About</h1>

	<p>
		Practicing minimalism and slower, intentional living. Learning Italian to
		explore my cultural background and nurture new connections. Exploring low
		level architecture and self-sustainability. <Link href="/writing"
			>Documenting my journey</Link
		>.
	</p>

	<h2 class="subheadline">Reading</h2>

	<p>
		I am reading my first book, <Link
			href="https://literal.club/not/book/rekka-bellum-busy-doing-nothing-r1nc4"
			>Busy Doing Nothing</Link
		> by Hundred Rabbits. Happy to receive recommendations for what to read next!
	</p>

	<ul>
		<li>
			<Link href="https://literal.club/not">literal.club/not</Link>
		</li>
	</ul>

	<h2 class="subheadline">Connect</h2>

	<p>I would love to exchange thoughts and hear your experiences.</p>

	<ul>
		<li>
			<Link href="https://eldritch.cafe/@not">not@eldritch.cafe</Link>
		</li>
		<li>
			<Link href="https://github.com/mvllow">github.com/mvllow</Link>
		</li>
	</ul>
</article>
