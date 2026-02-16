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


<Card company = "Amazon" img="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" time="5 Days Ago," position="Senior UI/UX Designer" avalability="Senior Level" payof="$120/hr" location="Banglore/India"/>

        <Card company="Flipcart" img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWzGxiYGlEM-IzG4PWRrn875F0LOcXLulhQ&s" time="1 Day Ago," position="Senior Developer" avalability="fulltime" payof="$100/hr" location="Punjab/India"/>

        <Card company="Myntra" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2aVKHUduja9219ut8P9CFqhpJMjIk5dqog&s" time=" 4 Days Ago," position="Seo Executive" avalability="fulltime" payof="$110/hr" location="Banglore/India"/>

        <Card company="Saragarhi securities" img ="https://media.licdn.com/dms/image/v2/D4E0BAQF8NJEyu9NKfA/company-logo_200_200/company-logo_200_200/0/1694771928281?e=2147483647&v=beta&t=jSsKGrzEG07_q4JBfpiqTWIEVoJIByCJRFAAMLhedv8" time="7 Days Ago," position="Field Officer" avalability="fulltime" payof="$150/hr"location="Punjab/India"/>

        <Card company="Meesho" img="https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg?impolicy=website&width=1600&height=900" time="2 Days Ago," position="Telecaller" avalability="fulltime" payof="$150/hr" location="Haryana/India"/>

        <Card company="Blinkit" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjBgWsrhwRuIESGkEdGkw_F3ocQGsY_8HZFQ&s" time="6 Days Ago," position="Delivery Partner" avalability="fulltime" payof="$130/hr" location="Delhi/India"/ >