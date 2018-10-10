import React from 'react';
import Button from '@material-ui/core/Button'

const MyButton = (props) => {
    return (
        <Button
        //   href="google.com"
        variant="contained"
        size="small"
        style={{
            background:props.bck,
            color:props.color
        }}
        onClick={props.onClick}
        >
            {props.text}
        </Button>
    );
};

export default MyButton;