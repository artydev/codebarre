import { tryCatch, pipe, tap} from "rubico";

type urlApi = {
  url: string;
};

function log(msg:string) {
  tap(() => console.log(msg))
}

function toJson(resp:any) {
  return resp.json()
}

const fetchApi = tryCatch(
  async ({ url }: urlApi)  => {
    return pipe([
      fetch,
      log("Searching for " + url),
      toJson,
      log("End Searching for " + url),
    ])(url);
  },
  (err: object, data: object) => {
    console.clear();
    console.log(data);
    console.log(err);
  }
);

export { fetchApi };
