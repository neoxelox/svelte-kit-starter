import type { GetUsersRequest, GetUsersResponse } from "$lib/payloads/user";

export function getUsers(request: GetUsersRequest): GetUsersResponse {
  request;
  return { users: [{ name: "Christopher Columbus", email: "chris@spain.es", birthday: "1492-10-12" }] };
}
