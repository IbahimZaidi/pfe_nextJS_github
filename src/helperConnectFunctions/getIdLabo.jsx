// this function return the object equivalente with id_Labo :

export const getIdLabo = async (id_lab) => {
  const response = await fetch(
    `http://localhost:3000/api/laboAndEqui/labo/${id_lab}`
  );

  const result = await response.json();

  return result;
};
