const logger = (req, res, next) => {
  const reqURL = req.url;
  const startTime = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - startTime;
    console.log(
      `[${new Date().toISOString()}]: ✅ RESPONSE ${req.method} ~ ${reqURL} ~ ${
        res.statusCode
      } ~ ${duration}ms`
    );
  });
  // Log the request method and URL
  console.log(`[${new Date().toISOString()}]: 🔍 REQUEST  ${req.method} ~ ${reqURL}`);
  next();
};

export default logger;
