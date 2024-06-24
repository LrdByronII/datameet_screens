const moneyFormatter = (value: number): string =>
  value ? `$${Math.trunc(value).toLocaleString()}` : "";

export default moneyFormatter;
