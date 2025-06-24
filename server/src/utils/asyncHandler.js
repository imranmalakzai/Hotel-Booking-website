const asyncHandler = (Fuction) => {
  return async (req, res, next) => {
    try {
      await Fuction(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export default asyncHandler;
