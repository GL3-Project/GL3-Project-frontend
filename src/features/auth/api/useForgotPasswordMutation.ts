import { useMutation } from 'react-query';
import { ForgotPasswordDTO } from '../types';
import axios from '@/lib/axios';
import { useNotificationStore } from '@/stores/notifications';

export const postForgotPassword = (data: ForgotPasswordDTO): Promise<null> => axios.post('forgotPassword', data);

type UseForgotPasswordOptions = {
  onSuccess: () => void;
};

export const useForgotPasswordMutation = ({ onSuccess }: UseForgotPasswordOptions) => {
  const { addNotification } = useNotificationStore();
  return useMutation({
    onSuccess: async () => {
      addNotification({
        type: 'success',
        title: 'Check your email for a link to reset your password.',
      });
      onSuccess();
    },
    mutationFn: postForgotPassword,
  });
};
