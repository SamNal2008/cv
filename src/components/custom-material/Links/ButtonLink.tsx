import { Button } from "@material-ui/core";
import { Component, ReactElement } from "react"
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
    path: string,
    icon: ReactElement,
    content: string,
    color: string
}

const NewLink = ({...props}) => {
    return (<Link target='_blank' to={props.path} style={{backgroundColor: '', textDecoration: 'none'}} onClick={(e) => {
        if (props.disabled) {
            e.preventDefault();
        }
    }}>
        {props.btn}
    </Link>)
}

const StayLink = ({...props}) => {
    return (<Link to={props.path} style={{backgroundColor: '', textDecoration: 'none'}} onClick={(e) => {
        if (props.disabled) {
            e.preventDefault();
        }
    }}>
        {props.btn}
    </Link>)
}

const ButtonLink = ({...props}: any) => {
    const btn = (
        <Button disabled={props.disabled} {...props} style={{backgroundColor: ''}} startIcon={props.icon}>
            {props.content}
        </Button>);

    return (
        <div>
            { props.newLink ?
                (props.inMenu ? <NewLink path={props.path}>{btn}</NewLink> : <NewLink path={props.path}>{btn}</NewLink>) :
                (props.inMenu ? <StayLink>{btn}</StayLink> : <StayLink>{btn}</StayLink>)
            }
        </div>
    )
}

export default ButtonLink;