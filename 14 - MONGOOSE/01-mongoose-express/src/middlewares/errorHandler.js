export const errorHandler = (error, req, res, next) => {
  console.log(`error ${error.message}`);
  const status = 400;
  res.status(status).json({ msg: error.message });
};
