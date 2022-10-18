import { Dispatch, SetStateAction } from "react"
import Button, { IButtonProps } from "../Button"
import Input from "../Input"
import { Container } from "./style"


//(string: any) => Promise<void>
interface IPropsDivSearch extends IButtonProps {
    setValue: Dispatch<SetStateAction<string>>
}
const DivSearch = ({setValue, listApi, value}:IPropsDivSearch) => {
    return(
        <Container>
            <Input setValue={setValue} background="orange" color="grey" height={48} width={200} placeholder="Digite o username do github"/>
            <Button listApi={listApi} value={value} />
        </Container>
    )
}
export default DivSearch