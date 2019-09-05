import { emailValidator } from './email';
import { passwordValidator } from './password';

export const handleValidators = (type: string, value: string): boolean => {
  switch (type) {
    case 'email':
      return emailValidator(value);

    case 'password':
      return passwordValidator(value);

    default:
      return true;
  }
};
