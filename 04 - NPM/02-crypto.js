const crypto = require("node:crypto");

class UserManager {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  register(obj) {
    const user = { ...obj };
    user.salt = crypto.randomBytes(128).toString(); //string random
    user.password = crypto
      .createHmac("sha256", user.salt)
      .update(user.password)
      .digest("hex");
    this.users.push(user);
  }

  login(username, password) {
    try {
      const users = this.getUsers();
      const user = users.find((user) => user.username === username);
      if (!user) throw new Error("User not found");
      const passLoginCrypto = crypto
        .createHmac("sha256", user.salt)
        .update(password)
        .digest("hex");
      if (user.password === passLoginCrypto) return "Login ok";
      return "user / pass fail";
    } catch (error) {
      console.log(error.message);
    }
  }
}

const manager = new UserManager();

const user1 = {
  username: "Juan",
  password: "1234",
};

const test = () => {
  manager.register(user1);
  //   console.log(manager.getUsers());
  console.log(manager.login("Juan", "1234"));
};

test();
