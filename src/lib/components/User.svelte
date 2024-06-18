<script lang="ts">
  import * as entities from "$lib/entities";
  import dayjs from "$lib/utils/datetime";

  type $$Props = entities.User;
  export let name: $$Props["name"];
  export let email: $$Props["email"];
  export let birthday: $$Props["birthday"];
</script>

<div class="flex flex-col items-center justify-center gap-1">
  <div class="font-bold">{name}</div>
  <div>{email}</div>
  <div>They were born {dayjs(birthday).fromNow()}</div>
</div>
