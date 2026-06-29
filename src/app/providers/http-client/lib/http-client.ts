import ky from "ky";

export const httpClient = ky.create({
  prefix: import.meta.env.VITE_API_URL,
});
