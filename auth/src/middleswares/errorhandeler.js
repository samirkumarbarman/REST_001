const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    const message = err.message || "Internal Server Error";
  
    // Handle specific errors
    if (err.name === "ValidationError") {
      res.status(400).json({ message: err.message });
    } else if (err.name === "CastError" && err.kind === "ObjectId") {
      res.status(400).json({ message: "Invalid ID format" });
    } else {
      res.status(statusCode).json({ message });
    }
  };
  
  export default errorHandler;
  