//funcion para eliminar los elementos duplicados en los campos de tipo array

//funcion para arrays con campos primitivos
const removeDuplicated = (body) => {
  const arrayFinal = body.filter((element, index) => {
    return body.indexOf(element) === index;
  });

  return arrayFinal;
};

//funcion para arrays de objetos
const removeDuplicatesObjects = (body) => {
  console.log(body);
  const arrayFinal = body.filter((ele, index, self) => {
    const eleString = ele.toString(); //convetimos ObjectId en string
    index === self.findIndex((obj) => obj.toString() === eleString);
  });
  console.log(arrayFinal);
  return arrayFinal;
};

module.exports = { removeDuplicated, removeDuplicatesObjects };
