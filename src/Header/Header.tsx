import classes from "./Header.module.css"
import { HStack } from '@chakra-ui/react'

const Header = () => {
    return (

        <HStack className={classes.Header} spacing='40px'>
            <a className={classes.a}>Главная</a>
            <a className={classes.a}>Мем-справочник</a>

        </HStack>


    );
}

export default Header