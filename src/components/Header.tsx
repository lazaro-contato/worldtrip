import {Flex, Img} from '@chakra-ui/react'
import Logo from '../../public/assets/images/Logo.png'

export const Header = (): JSX.Element => {
  return (
    <Flex bg="light.900" h={100} justify="center" align="center">
      <Img src={Logo.src} alt="Logo" height={45} />
    </Flex>
  )
}
