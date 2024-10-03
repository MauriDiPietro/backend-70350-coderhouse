const divisionPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) reject("No se puede dividir por 0");
    else resolve(a / b);
  });
};

const sumaPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) reject("0+0 operacion innecesaria");
    else resolve(a + b);
  });
};

const restaPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) reject("0-0 operacion invalida");
    if (a - b < 0) reject("la calculadora solo retorna valores positivos");
    else resolve(a - b);
  });
};

const multiPromesa = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) reject("la calculadora solo retorna valores positivos");
    else resolve(a * b);
  });
};

const divisionAsync = async (a, b) => {
  try {
    return await divisionPromesa(a, b);
  } catch (error) {
    console.log(error);
  }
};

const sumaAsync = async (a, b) => {
  try {
    return await sumaPromesa(a, b);
  } catch (error) {
    console.log(error);
  }
};

const restaAsync = async (a, b) => {
  try {
    return await restaPromesa(a, b);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const multiAsync = async (a, b) => {
  try {
    return await multiPromesa(a, b);
  } catch (error) {
    console.log(error);
  } finally {
    // return 'finalizó la multiplicacion'
  }
};

const test = async () => {
  console.log("suma", await sumaAsync(7, 7));
  console.log("resta", await restaAsync(1, 1));
  console.log("multiplicacion", await multiAsync(5, 2));
  console.log("division", await divisionAsync(10, 2));
};

// test();

/* ------------------------------------ - ----------------------------------- */

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (!error) resolve("datos recibidos");
      reject("error al obtener los datos");
    }, 2000);
  });
};

const obtenerDatos = async () => {
  try {
    console.log(await getData());
  } catch (error) {
    console.log(error);
  }
};

// obtenerDatos()

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err))

const getApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(await response.json());
};

// getApi()

const getInfoUser = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("error al obtener los datos del usuario");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// getInfoUser("MauriDiPietro")
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

const test2 = async () => {
  console.log(await getInfoUser("MauriDiPietro"));
};

test2();

