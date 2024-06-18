import * as payloads from "$lib/payloads";

export function getUsers(request: payloads.GetUsersRequest): payloads.GetUsersResponse {
  request;
  return { users: [{ name: "Christopher Columbus", email: "chris@spain.es", birthday: "1492-10-12" }] };
}
