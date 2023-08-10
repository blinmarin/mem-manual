import "./Header.css"
import { HStack } from '@chakra-ui/react'

const Header = () => {
    return (

        <HStack className='Header' spacing='40px'>
            <a>Главная</a>
            <a>Мем-справочник</a>

        </HStack>


    );
}

export default Header