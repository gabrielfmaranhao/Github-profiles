import { useState } from "react";
import Title from "./components/Title";
import axios from "axios";
import Card, { IData } from "./components/Card";
import Global from "./styles";
import DivSearch from "./components/DivSearch";
import { Container } from "./styles/styles.app";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [value, setValue] = useState<string>("");
  const [card, setCard] = useState<IData[]>([]);
  const [repost, setRepost] = useState<object[]>([]);
  const requests = axios.create({
    baseURL : "https://api.github.com/users",
  });
  async function listApi (string:any) {
    await requests.get(`/${string}`).then((response) => (setCard([response.data]), toast.success("Perfil encontrado"))).catch((error)=> console.log(error));
    await requests.get(`/${string}/repos`).then((response) => setRepost(response.data)).catch((error)=>(console.log(error), toast.error("Perfil não encontrado")));
  }
  return (
    <Container>
      <Global/>
      <Title text={"GitHub profiles"}/>
      <DivSearch setValue={setValue} listApi={listApi} value={value}/>
      {card.map((item:IData)=> <Card key={item.id} bio={item.bio} avatar_url={item.avatar_url} followers={item.followers} login={item.login} public_repos={item.public_repos} repost={repost}/> )}
      <ToastContainer position="top-center" theme="dark"/>
    </Container>
  );
}

export default App;
