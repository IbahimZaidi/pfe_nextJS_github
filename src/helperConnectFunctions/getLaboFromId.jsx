//localhost:3000/api/laboIdInfo/5
export const getLaboFromId = async (id) => {
  const response = await fetch(`http://localhost:3000/api/laboIdInfo/${id}`);

  const result = await response.json();

  return result.laboIdInfo[0];
};
