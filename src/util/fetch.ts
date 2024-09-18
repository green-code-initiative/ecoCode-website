export const post = async (resource: string, body: any) => {
  return fetch(`https://api.ecocode.io/${resource}`, {
    method: "POST",
    body: new URLSearchParams(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  });
};
