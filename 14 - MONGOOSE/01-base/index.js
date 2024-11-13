import { initMongoDB } from "./01-conexion.js";
import { UserModel } from "./02-schema.js";

const test = async () => {
  try {
    await initMongoDB();

    const user = {
      first_name: "Juan",
      last_name: "Perex",
      email: "jperez2@mail.com",
      password: "1234",
      role: "USER1",
    };

    console.log('creando usuario...');
    return await UserModel.create(user)
    
    //db.users.insertOne(user)
  } catch (error) {
    console.error(error.message);
  }
};

test();
