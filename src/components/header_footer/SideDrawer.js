import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {

    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-100
        })
        props.onClose(false);
    }


    return (
        <div>
            <Drawer
                anchor="right"
                open = {props.open}
                onClose={()=>props.onClose(false)}
            >
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('Highlight')}>История</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('Music')}>Музыка</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('Tour')}>Тур</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('Pricing')}>Команда</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>scrollToElement('Guess')}>Угадай Мелодию</ListItem>
            </List>
            </Drawer>
        </div>
    );
};

export default SideDrawer;