export const isEmpty = (data) => {
  if (Array.isArray(data)) {
    return !data.length;
  }
  return Object.entries(data).length === 0 && data.constructor === Object;
};

export const getColorFromCategory = (allCategories, name) => {
  const category = Object.values(allCategories).find((el) => el.name === name);
  return category?.color;
};