import { ReactNode } from 'react';

export interface ButtonInterface {
  onClick?: any;
  children?: ReactNode;
  style?: any;
  styleType?: 'confirm' | 'outline' | 'basic';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
