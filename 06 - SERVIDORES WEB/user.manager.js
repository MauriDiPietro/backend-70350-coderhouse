import fs from "node:fs";

class UserManager {
  constructor(path) {
    this.path = path;
  }

  async getUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const users = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(users);
      } else return [];
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(user) {
    try {
      const users = await this.getUsers();
      users.push(user);
      await fs.promises.writeFile(this.path, JSON.stringify(users));
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id) {
    try {
      const users = await this.getUsers();
      const user = users.find((user) => user.id === id);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

const userManager = new UserManager("./users.json");
export default userManager;
