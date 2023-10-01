import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
// const Lista = (props: any) => {
//   const items = [
//     {
//       id: 1,
//       name: 'Adrian',
//       height: 178,
//     },
//     {
//       id: 2,
//       name: 'Allan',
//       height: 170,
//     }
//   ];
//   const itemsElements=items.map((person:any)=>{
//     return <li key={`ordered-personsList-item-${person.id}`}>{person.name} tiene una estatura de {person.height}cm</li> 
//   })
//   return <div>
//     <ol>
//       {itemsElements}
//     </ol>
//     <ul>
//       {
//         items.map((person:any)=>{
//           if(false){
//             return <li key={`ordered-personsList-item-${person.id}`}>{person.name} tiene una estatura de {person.height}cm</li> 
//           }else{
//             return 'HOLA'
//           }

//         })
//       }
//     </ul>
//   </div>
// }

// const App2 = ({ name, children }: { name: string, children: any }) => {
//   const yaComi: boolean = true;
//   if (yaComi) {
//     return <div>Ya no tengo hambre</div>;
//   } else {
//     return <div>Tengo mucha hambre</div>;
//   }
//   return <div>
//     HOLA {name}
//     {children}
//   </div>
// }

// function App1() {
//   const [counter, setCounter] = useState(0);
//   setTimeout(() => {
//     setCounter(counter + 1);
//     console.log("HOLA");
//   }, 1000);

//   return (
//     <>
//       counter {counter} <br />
//       {
//         counter < 5 ?
//           <p>
//             Cargando
//           </p>
//           :
//           <App2 name={'Adrian'}>
//             <h2>JI JI JI</h2>
//           </App2>
//       }
//       {
//         counter > 2
//         &&
//         <h1>
//           JUAS JUAS
//         </h1>
//       }
//       <Lista/>
//     </>
//   )
// }

const App = () => {
  return (
    <div>
      <Header>
        <h1 className=''>
          Home
        </h1>
      </Header>
    </div>
  );
}
export default App
