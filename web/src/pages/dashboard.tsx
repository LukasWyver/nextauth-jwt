import { useContext, useEffect } from 'react';

import { api } from '@/services/apiClient';
import { AuthContext } from '@/contexts/AuthContext';
import { withSSRAuth } from '@/utils/withSSRAuth';
import { setupApiClient } from '@/services/api';
import { Can } from '@/components/Can';
import Link from 'next/link';

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api
      .get('/me')
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Página de Dashboard: {user?.email}</h1>

      <button onClick={signOut}>Sign out</button>
      <br/>

      <Can permissions={['metrics.list']}>
        <Link href="/metrics">Métricas</Link>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {},
  };
});
