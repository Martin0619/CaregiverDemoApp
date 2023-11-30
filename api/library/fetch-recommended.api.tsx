import LIBRARY_URLS from "./libray.api";

export default async function fetchRecommendedResources(): Promise<Resource[]> {
  const rawRes = await fetch(LIBRARY_URLS.recommended, {
    cache: "no-store",
  });
  const res = await rawRes.json();
  return res.data;
}
