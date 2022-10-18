import { Container, IStyleInput} from "./style"

interface IInputProps extends IStyleInput {
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
}
const Input = ({background, color, height, width, placeholder, setValue}:IInputProps) => {
return(
  <Container background={background} color={color} height={height} width={width} placeholder={placeholder} onChange={(e)=> setValue(e.target.value)}/>
)
}
export default Input
