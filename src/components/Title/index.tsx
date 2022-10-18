import { Container } from "./style"

const Title = ({text}:any) => {
  return(
    <Container size={40} color="grey">
      <h1>{text}</h1>
    </Container>
  )
}

export default Title