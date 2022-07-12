import { tryCatch } from "rubico";

type urlApi = {
  url: string;
};

const fetchApi = tryCatch(
  async ({ url }: urlApi) => {
    let req = await fetch(url);
    let resp = await req.json();
    return resp;
  },
  (err: object, data: object) => {
    console.clear();
    console.log(data);
    console.log(err);
  }
);

export { fetchApi };
