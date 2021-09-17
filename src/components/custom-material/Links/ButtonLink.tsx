import { Button } from "@material-ui/core";
import { Component, ReactElement } from "react"
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
    path?: string,
    icon: any,
    content: string,
    color?: string,
    inMenu?: boolean,
    disabled?: boolean,
    newLink?: boolean,
}

const NewLink = ({...props}) => {
    return (<Link target='_blank' to={props.path} style={{textDecoration: 'none'}} onClick={(e) => {
        if (props.disabled) {
            e.preventDefault();
        }
    }}>
        {props.btn}
    </Link>)
}

const StayLink = ({...props}) => {
    return (<Link to={props.path} style={{textDecoration: 'none'}} onClick={(e) => {
        if (props.disabled) {
            e.preventDefault();
        }
    }}>
        {props.btn}
    </Link>)
}


const ButtonLink = ({...props}: ButtonLinkProps) => {
    const btn = (
        <Button disabled={props.disabled} startIcon={props.icon}>
            {props.content}
        </Button>);
    const btnMenu = (
        <Button color='primary' style={{backgroundColor: ''}} disabled={props.disabled} startIcon={props.icon}>
            {props.content}
        </Button>
    );

    if (props.newLink) {
        if (props.inMenu) {
            return (<NewLink path={props.path} btn={btnMenu}/>);
        }
        else {
            return (<NewLink path={props.path} btn={btn}/>);
        }
    }
    else {
        if (props.inMenu) {
            return (<StayLink path={props.path} btn={btnMenu}/>)
        }
        return (<StayLink path={props.path} btn={btn}/>)
    }
}

export default ButtonLink;