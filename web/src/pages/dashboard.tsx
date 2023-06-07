import { useContext, useEffect } from 'react';

import { api } from '@/services/apiClient';
import { AuthContext } from '@/contexts/AuthContext';
import { withSSRAuth } from '@/utils/withSSRAuth';
import { setupApiClient } from '@/services/api';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return <h1>Página de Dashboard: {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get('/me');  

  return {
    props: {},
  };
});
