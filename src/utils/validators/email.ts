export const emailValidator = (email: string): boolean => {
  const regex = /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@]((([a-zA-Z0-9])|([-])){2,63}[.])+(([a-zA-Z0-9]){2,63})+$/;

  return regex.test(String(email).toLocaleLowerCase());
};
