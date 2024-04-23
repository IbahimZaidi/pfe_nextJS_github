// this function return the object equivalente with id_Equipe :

export const getIdEquipe = async (id_eq) => {
  const response = await fetch(
    `http://localhost:3000/api/laboAndEqui/equipe/${id_eq}`
  );

  const result = await response.json();

  return result;
};
