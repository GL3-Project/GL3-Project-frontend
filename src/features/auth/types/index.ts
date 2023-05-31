export type LoginDTO = {
  email: string;
  password: string;
};
export type User = {
  id: number;
  email: string;
  name: string;
  role: string;
};
export type ForgotPasswordDTO = {
  email: string;
};
