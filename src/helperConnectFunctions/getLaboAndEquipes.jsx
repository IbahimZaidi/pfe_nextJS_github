export const getLaboAndEquipes = async () => {
  const response = await fetch("http://localhost:3000/api/laboAndEqui");

  const result = await response.json();

  return result;
};
