export const handleImageSize = (
  url: string,
  width: number,
  height: number
): string => {
  if (!url) {
    return url;
  }

  const urlSplit = url.split('?');
  const restParams = urlSplit[1].split('&');
  const sizeParam = `fit=${width + 200}%2C${height + 200}`;
  const urlImageTreated = `${urlSplit[0]}?${sizeParam}&${restParams[1]}`;

  return urlImageTreated;
};
