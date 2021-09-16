import { Button } from "@material-ui/core";
import { Component, ReactElement } from "react"
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
    path: string,
    icon: ReactElement,
    content: string,
    color: string
}

const ButtonLink = ({...props}: any) => {
    return (
        <Link to={props.path} style={{textDecoration: 'none'}} onClick={(e) => {
            if (props.disabled) {
                e.preventDefault();
            }
        }}>
            <Button disabled={props.disabled} {...props} style={{backgroundColor: ''}} startIcon={props.icon}>
                {props.content}
            </Button>
        </Link>
    )
}

export default ButtonLink;