export const formatCurrency = function (amount: string | number) {
  const number = typeof amount === "string" ? parseFloat(amount) : amount;
  return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};
