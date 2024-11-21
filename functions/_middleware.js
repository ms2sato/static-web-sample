const handleRequest = async (context) => {
  const url = new URL(context.request.url)
  console.log('context', context)
  return context.next()
};

export const onRequest = [handleRequest];