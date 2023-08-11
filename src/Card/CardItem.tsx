import React from 'react';
import classes from './CardItem.module.css';
import { Picha } from './Picha.interface';
import { Flex, Spacer } from '@chakra-ui/react'


const CardItem  = (props: Picha) => {
  return (
    <div className={classes.CardItem}>
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <img className={classes.img} src={props.img_path} alt={props.alt} title={props.title}></img>
      <Flex className={classes.CardFootWrapper}>
      <p className={classes.p}>{props.alt}</p>
      <Spacer />
      <span className="material-symbols-outlined" title='В избранное'>favorite</span>
        
      </Flex>
        
     

    </div>





  );
}

export default CardItem;