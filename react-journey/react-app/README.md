# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

import { useEffect , useState } from "react";
import Userform from "./components/UserForm";

function App (){
  const [ users , setUsers] = useState([]);

  useEffect (()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(data => setUsers(data))
  },[])

  const addUsers = (newUsers) =>{
    setUsers(prevUsers => [...prevUsers, newUsers]);
  };

  return(
    <div>
      <h2>Users list</h2>

    <Userform onAddUsers = {addUsers}/>

    {users.map(user =>{
      <p key={user.id}>{user.name}</p>
    })}

    </div>
  )

}

export default App is code m hum ne .then use kia tha pr ab hum "try and catch" ka use krege dono ki functionality same h but try and catch code ki readability bda deta hai ye jo code h isme .then use hua h  