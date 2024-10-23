import { Router } from "express";
import { userValidator } from "../middlewares/user.validator.js";
import UserManager from "../managers/user.manager.js";
import { uploader } from "../middlewares/multer.js";
const userManager = new UserManager("./users.json");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await userManager.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userManager.getUserById(id);
    res.status(200).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", [userValidator], async (req, res) => {
  try {
    const user = await userManager.createUser(req.body);
    res.status(201).json({ id: user.id, email: user.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/upload-file", uploader.single('profile'), async (req, res) => {
  try {
    console.log(req.file);
    const userBody = req.body
    userBody.profile = req.file.filename
    const user = await userManager.createUser(userBody);
    res.status(201).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await userManager.deleteUsers();
    res.json({ message: "users deleted ok" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userDel = await userManager.deleteUser(id);
    res.status(200).json({ message: `User id: ${userDel.id} deleted ok` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userUpd = await userManager.updateUser(req.body, id);
    res.status(200).json(userUpd);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;