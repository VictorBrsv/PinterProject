import axios from "axios";
import type { User } from "../features/users/types/User";
import { AuthAuthoriza, AuthReg } from "../features/auth/types/AuthState";

export const registrationAxios = async (value: AuthReg): Promise<User> => {
  const { data }: { data: User } = await axios.post("/api/auth/registration", {
    data: value,
  });
  return data;
};

export const authorizationAxios = async (
  value: AuthAuthoriza,
): Promise<User> => {
  const { data }: { data: User } = await axios.post("/api/auth/authorization", {
    data: value,
  });
  return data;
};

export const checkAuthAxios = async (): Promise<User> => {
  const { data }: { data: User } = await axios.get("/api/auth/check");
  return data;
};

export const logOutAxios = async (): Promise<void> => {
  try {
    await axios.post("/api/auth/logout");
  } catch (error) {
    console.log(error);
  }
};
