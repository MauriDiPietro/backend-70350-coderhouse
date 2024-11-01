import fs from "node:fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

class MessagesManager {
  constructor(path) {
    this.path = path;
  }

  async getAll() {
    try {
      if (fs.existsSync(this.path)) {
        const messages = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(messages);
      } else return [];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(obj) {
    try {
      const message = {
        id: uuidv4(),
        ...obj,
      };
      const messages = await this.getAll();
      const msgExist = messages.find((p) => p.id === message.id);
      if (msgExist) throw new Error("message already exists");
      messages.push(message);
      await fs.promises.writeFile(this.path, JSON.stringify(messages));
      return message;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const messages = await this.getAll();
      if (!messages.length > 0) throw new Error("list messages is empty");
      const message = messages.find((message) => message.id === id);
      if (!message) throw new Error("message not found");
      return message;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(obj, id) {
    try {
      const messages = await this.getAll();
      let msg = await this.getById(id);
      msg = { ...msg, ...obj };
      const newArray = messages.filter((msg) => msg.id !== id);
      newArray.push(msg);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return msg;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const msg = await this.getById(id);
      const messages = await this.getAll();
      const newArray = messages.filter((msg) => msg.id !== id);
      await fs.promises.writeFile(this.path, JSON.stringify(newArray));
      return msg;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteAll() {
    try {
      const messages = await this.getAll();
      if (!messages.length > 0) throw new Error("messages is empty");
      await fs.promises.unlink(this.path);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const msgManager = new MessagesManager(
  path.join(process.cwd(), "src/db/messages.json")
);
