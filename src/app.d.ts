/// <reference types="@sveltejs/kit" />

declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	interface Stuff {
		crumbs: {
			text: string;
			href: string;
		}[];
	}
}
