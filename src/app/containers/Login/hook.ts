import { useQuery } from '@tanstack/react-query';

import { fetchCaptcha } from '/src/app/services/client';

export const useCaptcha = () => {
  return useQuery(['captcha'], fetchCaptcha, {
    refetchOnWindowFocus: false, // prevent refetch automatically
  });
};
