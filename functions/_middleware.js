const handleRequest = async (context) => {
  try {
    const cfWorkerHeader = headers.get("cf-worker");
    console.log("cfWorkerHeader", cfWorkerHeader);
    if (cfWorkerHeader === "static-web-sample.pages.dev") {
      return context.next();
    }

    // TODO: 下位のパスも対応すること
    const redirectUrl = "https://static-web-sample.pages.dev/jp";
    return Response.redirect(redirectUrl, 301);
  } catch (err) {
    console.error(err);
  }
};

export const onRequest = [handleRequest];
