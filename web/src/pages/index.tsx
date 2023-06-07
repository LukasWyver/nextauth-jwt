import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { withSSRGuest } from '@/utils/withSSRGuest';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <section className="mt-5 flex flex-1 items-center justify-center">
      <form className="block max-w-xs space-y-2.5" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
          className="block rounded bg-zinc-800 px-2.5 py-1.5 text-zinc-100 outline-sky-500"
        />

        <input
          type="password"
          value={password}
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          className="block rounded bg-zinc-800 px-2.5 py-1.5 text-zinc-100 outline-sky-500"
        />

        <button
          type="submit"
          className="w-full rounded bg-sky-500 px-2.5 py-1.5 text-base font-light lowercase"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}

export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {
      
    },    
  };
});
