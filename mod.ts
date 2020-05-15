/** Check if a website is up */
export async function isUp(url: string): Promise<boolean> {
  const hostname = encodeURIComponent((new URL(url)).hostname);
  const result: {
    "domain": string;
    "port": number;
    "status_code": 1 | 2 | 3;
    "response_ip": string;
    "response_code": number;
    "response_time": number;
  } = await (await fetch(`https://isitup.org/${hostname}.json`))
    .json();
  return result.status_code === 1;
}

for (let arg of Deno.args) {
  console.log(arg, await isUp(arg) ? " is up" : " is down");
}
