import { getUsers } from "$lib/server/user";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  const users = getUsers({});
  await sleep(3000);

  return json(users);
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
