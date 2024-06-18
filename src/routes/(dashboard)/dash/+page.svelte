<script lang="ts">
  import User from "$lib/components/User.svelte";
  import type { UserEntity } from "$lib/entities/user";
  import type { GetUsersResponse } from "$lib/payloads/user";
  import { api } from "$lib/services/api";
  import dayjs from "$lib/utils/datetime";

  let response: Promise<GetUsersResponse>;
  let users: UserEntity[] = [];

  let getUsers = async () => {
    response = api.get<GetUsersResponse>("/users");
    response.then((response) => {
      users = response.users.map(
        (user) => <UserEntity>{ name: user.name, email: user.email, birthday: dayjs(user.birthday).toDate() },
      );
    });
  };
</script>

<h1 class="text-xl font-bold">Dashboard Page 👋</h1>
<button on:click={() => getUsers()} class="rounded-md border-2 border-amber-500 p-2">Get User</button>
{#if !users.length}
  No users 😭
{/if}
{#await response}
  <span>Going back..</span>
{:then}
  {#each users as user (user.name)}
    <User {...user} />
  {/each}
{/await}
