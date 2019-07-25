export interface InputInterface {
  name: string;
  label?: string;
  type: 'text' | 'search';
  value: string;
  handleChange: any;
  placeholder: any;
  errorMessage: any;
  isValid: boolean;
}
