const abTest = async (context) => {
  const url = new URL(context.request.url)
  if (url.pathname === "/jp") {
    return fetch('https://static-web-sample-jp.pages.dev/')
  }
  return context.next()
};

export const onRequest = [abTest];