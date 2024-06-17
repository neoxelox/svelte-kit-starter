<script lang="ts">
  import type { UserEntity } from "$lib/entities/user";
  import dayjs from "$lib/utils/datetime";

  export let user: UserEntity;
</script>

<div class="flex flex-col items-center justify-center gap-1">
  <div class="font-bold">{user.name}</div>
  <div>{user.email}</div>
  <div>They were born {dayjs(user.birthday).fromNow()}</div>
</div>
