import { Button } from '@witekrychlik/ui-components';

export default async function Index() {
  return (
    <div className="bg-slate-600 h-screen grid-flow-col-dense">
      <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded cursor-pointer text-lg">
        Click me
      </button>
      <Button variant="default">Button</Button>
    </div>
  );
}
