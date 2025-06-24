import ApiError from "../utils/apiError.js";
//**Defining the error handler middlewares */
const errorHandlerMiddlewares = (err, req, res, next) => {
  try {
    //**We are checking IF the error belongs to Api Error if yes  */
    if (err instanceof ApiError) {
      return res
        .status(err.statusCode || 500)
        .json({ ...err, message: err.message });
    }
    //** IF the error is not belong to Api Error then go down */
    return res.status(err.statusCode || 500).json({ error: err.message });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ message: error.message, ...error });
  }
};

export default errorHandlerMiddlewares;
