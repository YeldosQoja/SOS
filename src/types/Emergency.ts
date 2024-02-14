import {Location} from './Location';

export type EmergencyRequest = {
  user_id: number;
  address: string;
  phone: string;
  description: string;
} & Location;

export type EmergencyApplication = {
  id: string;
  applicant_id: number;
  address: string;
  applicant_phone: string;
  description: string;
  updated_at: string | null;
  created_at: string | null;
} & Location;
