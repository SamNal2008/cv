import { Link, Button } from "@material-ui/core"
import { Component, ReactElement } from "react"

interface ButtonLinkProps {
    path: string,
    icon: ReactElement,
    content: string,
    color: string
}

const ButtonLink = ({...props}: any) => {
    return (
        <Link href={props.path} onClick={(e) => {
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