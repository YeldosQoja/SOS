export interface User {
  id: number;
  name: string;
  surname: string;
  phone: string;
  address: string;
  latitude: number | null;
  longitute: number | null;
  user_role: string;
  car_number: number | null;
  email_verified_at: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export type UserPreview = Pick<User, 'name' | 'surname' | 'phone' | 'address'>;
export type UserDTO = Omit<
  User,
  'latitude' | 'longitute' | 'user_role' | 'car_number' | 'email_verified_at'
>;
