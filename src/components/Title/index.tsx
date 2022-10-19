import { Container } from "./style"
import { motion } from "framer-motion"
const Title = ({text}:any) => {
  return(
    <motion.div initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{ duration: 0.8}} >
    <Container size={40} color="grey">
      <h1>{text}</h1>
    </Container>
    </motion.div>
  )
}

export default Title