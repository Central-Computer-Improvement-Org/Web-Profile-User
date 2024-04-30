export const FormatString = (desc, maxLength = 60) => {
  if (desc.length > maxLength) {
    return `${desc.substring(0, maxLength)}...`;
  }
  return desc;
};
