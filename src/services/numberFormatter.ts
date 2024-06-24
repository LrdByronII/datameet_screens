const numberFormatter = (value: number): string =>
  value ? `${Math.trunc(value).toLocaleString()}` : "";

export default numberFormatter;
