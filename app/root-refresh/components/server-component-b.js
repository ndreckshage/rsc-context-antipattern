import FooUpdate from './foo-update'

export default async function ServerComponentB() {
  const {foo} = await (await fetch('http://localhost:3000/api/foo')).json();

  return <FooUpdate foo={foo} />
}