export type GetUsersRequest = Record<PropertyKey, never>;

export type GetUsersResponseUser = {
  name: string;
  email: string;
  birthday: string;
};

export type GetUsersResponse = {
  users: GetUsersResponseUser[];
};
