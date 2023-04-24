export type TUserLogin = {
  email: string;
  password: string;
};

export type TUserRegistration = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  phone: string;
  password: string;
};

export type TUser = {
  firstName: string;
  lastName: string;
  phone: string;
  mobilePhone: string;
  companyName: string;
  email: string;
  role: string;
};
