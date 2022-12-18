import { useEffect } from 'react';
import { useAuth } from '/src/app/hooks/auth';

const Logout = () => {
  const { signout } = useAuth();

  useEffect(() => {
    signout();
  }, [signout]);

  return null;
};

export default Logout;
