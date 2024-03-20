import { rpc } from '../rpc/app';

export default async function Home() {
  const response = await rpc.hello();
  if (response.status === 200) {
    return (
      <div>
        <p>Server side - {response.body}</p>
      </div>
    );
  }
  return (
    <div>
      <p>Server side - Error</p>
    </div>
  );
}
