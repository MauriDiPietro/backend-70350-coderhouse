export const userValidator = (req, res, next) => {
  if (
    req.body.email === undefined ||
    typeof req.body.email !== "string" ||
    req.body.password === undefined ||
    typeof req.body.password !== "string"
  )
    res
      .status(500)
      .json({ message: "Invalid body: email | password is required" });
  return next();
};
