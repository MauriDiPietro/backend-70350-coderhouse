

// async create(obj) {
//     try {
//       // const cart = await cartManager.create();
//       const cart = {
//         id: uuidv4(),
//         products: [],
//       };
//       const carts = await this.getcarts();
//       const userExist = carts.find((u) => u.email === user.email);
//       if (userExist) throw new Error("User already exists");
//       this.#createHash(user);
//       carts.push(user);
//       await fs.promises.writeFile(this.path, JSON.stringify(carts));
//       return user;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }