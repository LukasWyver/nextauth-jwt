import { withSSRAuth } from '@/utils/withSSRAuth';
import { setupApiClient } from '@/services/api';
import Link from 'next/link';


export default function Metrics() {
  return (
    <>
      <h1>Métricas</h1>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);
  const response = await apiClient.get('/me');

  return {
    props: {},
  };
}, {
    permissions: ['metrics.list'],
    roles: ['administrator']
});
