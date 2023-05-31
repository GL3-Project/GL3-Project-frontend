import { useMutation } from 'react-query';
import { useSignIn } from 'react-auth-kit';
import { LoginDTO, User } from '../types';
import axios from '@/lib/axios';
import { useNotificationStore } from '@/stores/notifications';

type LoginResponse = {
  token: string;
  user: User;
};
async function handleUserLogin(data: LoginResponse, signIn: any) {
  const { token, user } = data;
  const JWT_VALIDITY_LENGTH = 1440; // 31 days
  return signIn(
    {
      token,
      expiresIn: JWT_VALIDITY_LENGTH,
      tokenType: 'Bearer',
      authState: user,
    },
  );
}
export const loginWithEmailAndPassword = (data: LoginDTO): Promise<LoginResponse> => axios.post('login', data);

type UseLoginOptions = {
  onSuccessfulLogin: () => void;
};

export const useLoginMutation = ({ onSuccessfulLogin }: UseLoginOptions) => {
  const signIn = useSignIn();
  const { addNotification } = useNotificationStore();
  return useMutation({
    onSuccess: async (data: LoginResponse) => {
      await handleUserLogin(data, signIn);
      addNotification({
        type: 'success',
        title: 'Welcome back!',
      });
      onSuccessfulLogin();
    },
    mutationFn: loginWithEmailAndPassword,
  });
};
