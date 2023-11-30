import LIBRARY_URLS from "./libray.api";

export default async function fetchResourceById(
  id: string
): Promise<Resource | undefined> {
  const rawRes = await fetch(LIBRARY_URLS.resourceById(id), {
    cache: "no-store",
  });
  const res = await rawRes.json();
  return res.data[0];
}
