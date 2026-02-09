import { useEffect , useState } from "react";
import Userform from "./components/UserForm";

function app (){
  const [ users , setUsers] = useState([]);

  useEffect (()=>{
    fetch("https://jsonplaceholder")
  })
}