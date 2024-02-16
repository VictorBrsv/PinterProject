export type User = {
  id: number;
  name: string;
  email: string;
  message?: string;
  image: string;
};

export type UserId = User["id"];
