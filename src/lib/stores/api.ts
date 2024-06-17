import { persisted } from "svelte-local-storage-store";

export const token = persisted<string>("token", "");
