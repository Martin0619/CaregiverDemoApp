const baseUrl = "http://localhost:3000/api";

export const requestBuilder = (url: string) => new Request(`${baseUrl}/${url}`);
