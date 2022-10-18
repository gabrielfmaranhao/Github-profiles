import { Container } from "./style";
import { AiOutlineSearch } from "react-icons/ai"


export interface IButtonProps {
  value: string
  listApi: (string:any) => Promise<void>
}

const Button = ({ value, listApi}: IButtonProps) => {
  return (
    <Container onClick={() => listApi(value)}>
      <AiOutlineSearch size={28}/>
    </Container>
)};
export default Button;
