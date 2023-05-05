import FooDisplay from './foo-display';

export default async function ServerComponentA() {
  const {foo} = await (await fetch('http://localhost:3000/api/foo')).json();
  
  return <FooDisplay foo={foo} />
}