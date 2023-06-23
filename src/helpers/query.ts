export const splitPageURLWithSplitter = (
  value: string,
  splitter: string
): string => {
  return value.split(splitter)[1];
};
