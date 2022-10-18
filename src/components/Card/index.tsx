import { BoxImgInfo, Container, DivImagem, DivInfo, Divlink } from "./style"

export interface IData {
  avatar_url: string
  bio: string
  login: string
  followers: number
  id?: string
  public_repos: number
  repost: object[]

}
const Card = ({ avatar_url, bio, followers,login, public_repos, repost}:IData) => {
  const filtrar = repost.filter((item:any) => item.stargazers_count > 0).slice(0, 5);
  console.log(filtrar)
  
return(
  <Container>
    <BoxImgInfo>
      <DivImagem>
        <figure>
          <img src={avatar_url} alt={`Avatar do usuário${login}`} />
        </figure>
      </DivImagem>
      <DivInfo>
        <main>
          <h2>{login}</h2>
          {bio === null ? <p>usuário sem bio</p>: <p>{bio}</p>}
        </main>
        <span>Seguidores: {followers}</span>
        <span>Repositórios: {public_repos}</span>
      </DivInfo>  
    </BoxImgInfo>
    <Divlink>
      <h2>Principais Repositórios:</h2>
      <ul>
        {filtrar.map((item:any)=><li key={item.id}>
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.name}</a>
          </li>)}
      </ul>
    </Divlink>
  </Container>
)
}
export default Card