export const getDataApiRoute = async () => {
  const response = await fetch("http://localhost:3000/api");

  const result = await response.json();

  return result;
};
