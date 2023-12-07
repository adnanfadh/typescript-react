import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import CustomHookComponent from './CustomHookComponent';
import UseContextComponent from './UseContextComponent';
import UseEffectComponent from './UseEffectComponent';
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import UseStateComponent from './UseStateComponent';

import TestComponent from './InterfacePropsComponent';
// import PromisePool from "@supercharge/promise-pool";
// import { GetPokemon, GetPokemonList } from "./GetPokemon"
// import { TextField } from './TextField';

const Heading2:React.FC<{ title: string }> = ({ title }) => (<h2>{title}</h2>)


function Heading({ title }: {title: string}) {
  return <h2>{title}</h2>
}
function HeadingWithElement({ title }: {title: ReactNode}) {
  return <h2>{title}</h2>
}

const Dialog = ({header, children}: { header?: () => ReactNode; children: () => ReactNode}) => {
  return (
    <div>
      {header && <div><strong>{header?.()}</strong></div>}
      {children()}
    </div>
  )
}

function List <ListItem>({ items, render }: { items: ListItem[]; render: (item: ListItem) => ReactNode}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}

type ListCompotnent = <ListItems>({
  items,
  render,
}: { 
  items: ListItems[]; 
  render: (item: ListItems) => ReactNode;
}) => ReactElement;

const List2: ListCompotnent = ({ items, render}) => (
  <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
)

export interface Tamu {
	NamaLengkap: string;
	JumlahHadir: string;
	Kehadiran:   string;
	id:          number;
}


const App: React.FC = () =>{
  const [data, setData] = useState<Tamu[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((d: Tamu[]) => setData(d));
  },[])

//   useEffect(() => {
//     async function getData() {
//         const list = await GetPokemonList();

//         const { results } = await PromisePool
//         .withConcurrency(2)
//         .for(list.results)
//         .process( async data => {
//             return await GetPokemon(data.url)
//         })
//         console.log(results.map(p => p.name))
//     }
//     getData();
// }, [])

  return (
    <div>
      <List2 
        items={data} //
        render={(item: Tamu) => `nama tamu :  ${item.NamaLengkap}`}
      />
      <List2 
        items={[1,2,3,4,5]} //
        render={(item: number) => `Number is ${item}`}
      />
      <List 
        items={['a','b','aa','bb','ab']} //
        render={(item: string) => `string is ${item}`}
      />
      <Dialog header={() => <span>Ini Header</span>}>
        {() => "ini content tapi dari function"}
      </Dialog>

      <HeadingWithElement title={<strong>Testing functional component Element</strong>} />
      <Heading2 title="Testing functional component 2" />
      <Heading title="Testing functional component" />
      {/* <TextField text='Hello' person ={{ firstName: "", lastName: ""}} handelChange={e => {e.preventDefault}}/> */}
      <h1>Interface Props</h1>
      <TestComponent /> 
      <h1>Custom Hook</h1>
      <CustomHookComponent /> 
      <h1>Use Ref</h1>
      <UseRefComponent/>
      <h1>Use Reducer</h1>
      <UseReducerComponent/>
      <h1>Use Context</h1>
      <UseContextComponent/>
      <h1>Use Effect</h1>
      <UseEffectComponent/>
      <h1>useState</h1>
      <UseStateComponent/>
    </div>
  );
}

export default App;
