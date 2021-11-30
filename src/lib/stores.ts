import { writable } from "svelte/store";

export const openIndex = writable(0);
export const prevIndex = writable(-1);
export const answers = writable([]);
