const handleRequest = async (context) => {
  try {
    const cfWorkerHeader = context.request.headers.get("cf-worker");
    console.log("cfWorkerHeader", cfWorkerHeader);
    if (cfWorkerHeader === "static-web-sample.pages.dev") {
      console.log("cfWorkerHeader is matched");
      return context.next();
    }

    // TODO: 下位のパスも対応すること
    const redirectUrl = "https://static-web-sample.pages.dev/jp";
    return Response.redirect(redirectUrl, 301);
  } catch (err) {
    console.error(err);
    return context.next();
  }
};

export const onRequest = [handleRequest];
