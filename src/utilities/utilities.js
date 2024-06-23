export const Request = async (url, method, body) => {
  await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: window.localStorage.getItem('token')
    },
    body: body ? JSON.stringify(body) : null
  })
    .then(res => { return res })
}