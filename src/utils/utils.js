export const isEmpty = (data) => {
  if (Array.isArray(data)) {
    return !data.length;
  }
  return Object.entries(data).length === 0 && data.constructor === Object;
};
