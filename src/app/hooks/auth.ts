import { useMutation } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';

import { message } from 'antd';

import { useAppDispatch, useAppSelector } from '/src/store/hook';

import { signIn, signOut } from '/src/store/auth/auth';

import { fetchLogin } from '/src/app/services/client';
import { AxiosError } from 'axios';

export const useAuth = () => {
  // getting data auth from store
  const auth = useAppSelector((state) => state.auth);

  // setup for connect to store
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  // process sign in
  const signin = useMutation({
    mutationFn: fetchLogin,
    onSuccess: (response) => {
      if (response) {
        dispatch(signIn(response.data.user));
        navigate('/dashboard');
      }
    },
    onError: (error: AxiosError<{ response_message: string }>) => {
      let errMessage: string;

      if (error.response) {
        // Request made and server responded
        errMessage = error?.response?.data?.response_message;
      } else if (error.request) {
        errMessage = 'The request was made but no response was received';
      } else {
        errMessage = 'Something happened in setting up the request';
      }

      message.error(errMessage);
    },
  });

  const signout = () => {
    dispatch(signOut());
    navigate('/');
  };

  return {
    auth,
    signin,

    signout,
  };
};
