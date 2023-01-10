export const formatApiResponse = (res) => {
  return JSON.parse(res.replace(/(NaN)/g, null));
};
