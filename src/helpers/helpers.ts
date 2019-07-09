const handlePadStart = (number: number): string =>
  number.toString().padStart(2, '0');

export const handleDate = (date: string): string => {
  const dateObject = new Date(date);
  const day = handlePadStart(dateObject.getDate());
  const month = handlePadStart(dateObject.getMonth() + 1);
  const year = handlePadStart(dateObject.getFullYear());

  return `${day}/${month}/${year}`;
};

export const handleFullDate = (date: string): string => {
  const dateObject = new Date(date);
  const day = handlePadStart(dateObject.getDate());
  const hour = handlePadStart(dateObject.getHours());
  const minutes = handlePadStart(dateObject.getMinutes());
  const month = handlePadStart(dateObject.getMonth() + 1);
  const year = handlePadStart(dateObject.getFullYear());

  return `${day}/${month}/${year} às ${hour}:${minutes}hs`;
};

export const decode = (text: string): string => {
  const textReplaced = text.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });

  return textReplaced
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};

export const handleLimitCharacters = (phrase: string, limit = 60): string => {
  if (phrase.length > limit) {
    return `${phrase.substring(0, limit)}...`;
  } else {
    return phrase;
  }
};

export const removeAccents = (phrase: string): string =>
  phrase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const handleAttributes = (attributes: string[], node: HTMLElement) => {
  let object = {};

  for (let item of attributes) {
    const attribute = item.toLocaleLowerCase();

    const value = String(node.getAttribute(`${attribute}`));

    if (value && value !== 'null') {
      object = Object.assign({}, object, {
        [item]: value
      });
    }
  }

  return object;
};

export const getRandomItem = (list: any[]) =>
  list[Math.floor(Math.random() * list.length)];
