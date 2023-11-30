import { requestBuilder } from "../api";

const LIBRARY_URLS = {
  recommended: requestBuilder("library/recommended"),
  resourceById: (id: string) => requestBuilder(`library/${id}`),
};

export default LIBRARY_URLS;
