import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {
    return (
        <div>
            <Drawer
                anchor="right"
                open = {props.open}
                onClose={()=>props.onClose(false)}
            >
            <List component="nav">
                <ListItem button onClick={()=>console.log('Featured')}>Music</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>console.log('Featured')}>Tour</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>console.log('Featured')}>Band</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>console.log('Featured')}>Pricing</ListItem>
            </List>
            <List component="nav">
                <ListItem button onClick={()=>console.log('Featured')}>Contacts</ListItem>
            </List>
            </Drawer>
        </div>
    );
};

export default SideDrawer;