import { Recipe } from "../types";

export function fetchLatestRecipes(data: Recipe[], limit: number) {
  // Sort the data array based on the "created_at" property in descending order
  const sortedData = data.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  // Return the first 10 elements from the sorted data array
  const filteredData = sortedData.slice(0, limit);

  return filteredData;
}
