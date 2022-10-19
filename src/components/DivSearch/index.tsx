import { Dispatch, SetStateAction } from "react"
import Button, { IButtonProps } from "../Button"
import Input from "../Input"
import { Container } from "./style"
import { motion } from "framer-motion";


interface IPropsDivSearch extends IButtonProps {
    setValue: Dispatch<SetStateAction<string>>
}
const DivSearch = ({setValue, listApi, value}:IPropsDivSearch) => {
    return(
        <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.8}} >
            <Container>
                <Input setValue={setValue} background="orange" color="grey" height={48} width={200} placeholder="Digite o username do github"/>
                <Button listApi={listApi} value={value} />
            </Container>
        </motion.div>
    )
}
export default DivSearch