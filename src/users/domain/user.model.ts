export type Address = {
  address: string;
  city: string;
  postalCode: string;
  state: string;
};

export type Company = {
  name: string;
  title: string;
  address: Address;
  department: string;
};

export type Hair = {
  color: string;
  style: string;
};
export type User = {
  id: number;
  address: Address;
  age: number;
  birthDate: string;
  bloodGroup: string;
  domain: string;
  ein: string;
  email: string;
  eyeColor: string;
  firstName: string;
  gender: "male" | "female";
  height: number;
  image: string;
  ip: string;
  lastName: string;
  macAddress: string;
  maidenName: string;
  password: string;
  phone: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
};
