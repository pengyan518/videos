export default function getQueryString(obj: {[x: string]: any; hasOwnProperty: (arg0: string) => any}) {
  let url = ''

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null) {
      url += `${key}=${value}&`
    }
  }
  return url.substr(0, url.length - 1)
}
