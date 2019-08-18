import { AvatarAPIInterface } from './avatar.interface';

export interface UserAPIInterface {
  userId: number;
  name: string;
  firstName: string;
  lastName: string;
  nicename: string;
  slug: string;
  description: string;
  avatar: AvatarAPIInterface;
}
