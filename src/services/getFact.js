const RANDOM_CAT_FACT = "https://catfact.ninja/fact";

export const getRandomFact = () => {
  return fetch(RANDOM_CAT_FACT)
    .then((response) => response.json())
    .then((data) => {
      return data.fact;
    })
    .catch((error) => {
      console.error("Error fetching cat fact:", error);
      return null;
    });
};
