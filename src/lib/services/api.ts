import { goto } from "$app/navigation";
import { page } from "$app/stores";
import * as entities from "$lib/entities/error";
import * as payloads from "$lib/payloads";
import { token } from "$lib/stores/api";
import { get } from "svelte/store";

export class api {
  private static BASE_URL = window.location.origin + "/api";
  private static AUTH_PATH: string = "/auth";
  private static AUTH_HEADER: string = "Authorization";
  private static AUTH_TOKEN: string = "";

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static {
    token.subscribe((value) => {
      this.AUTH_TOKEN = value;
    });
  }

  private static async request<Q, S>(endpoint: string, method: string, body?: Q, auth?: boolean): Promise<S> {
    let response;

    try {
      response = await fetch(this.BASE_URL + endpoint, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          ...(auth && { [this.AUTH_HEADER]: this.AUTH_TOKEN }),
        },
        method: method,
        body: body && JSON.stringify(body),
      });
    } catch (error) {
      // Do something with error...
      throw new entities.ApiError(entities.ApiErrorCode.ERR_SERVER_GENERIC, error as any, 500); // eslint-disable-line @typescript-eslint/no-explicit-any
    }

    if (!response.ok) {
      const path = get(page).url.pathname;
      if (response.status === 401 && path !== this.AUTH_PATH) {
        goto(`${this.AUTH_PATH}?location=${path}`);
      }

      let code = entities.ApiErrorCode.ERR_SERVER_GENERIC;
      let message = response.statusText;
      const status = response.status;

      try {
        const error: payloads.ApiError = await response.json();

        if (error.code) {
          code = entities.ApiErrorCode[error.code as keyof typeof entities.ApiErrorCode];
        }

        if (error.message) {
          message = error.message;
        }
        // eslint-disable-next-line no-empty
      } catch {}

      // Do something with error...
      throw new entities.ApiError(code, message, status);
    }

    return response.json();
  }

  public static async get<S>(endpoint: string, auth = true): Promise<S> {
    return await this.request(endpoint, "GET", undefined, auth);
  }

  public static async post<Q, S>(endpoint: string, body?: Q, auth = true): Promise<S> {
    return await this.request(endpoint, "POST", body, auth);
  }

  public static async put<Q, S>(endpoint: string, body?: Q, auth = true): Promise<S> {
    return await this.request(endpoint, "PUT", body, auth);
  }

  public static async delete<S>(endpoint: string, auth = true): Promise<S> {
    return await this.request(endpoint, "DELETE", undefined, auth);
  }
}
