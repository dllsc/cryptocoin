export const formatCurrency = function (amount: string) {
  return (
    "$" +
    parseFloat(amount)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,")
  );
};