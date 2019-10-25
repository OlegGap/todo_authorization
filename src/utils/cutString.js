export default (string, length) =>
  string.split('').length > length
    ? `${string
        .split('')
        .slice(0, length)
        .join('')}...`
    : string;
