import { Link, Button } from "@material-ui/core"
import { Component, ReactElement } from "react"

interface ButtonLinkProps {
    path: string,
    icon: ReactElement,
    content: string
}

const ButtonLink = ({...props}: any) => {
    return (
        <Link href={props.path}>
            <Button {...props} style={{backgroundColor: ''}} startIcon={props.icon}>
                {props.content}
            </Button>
        </Link>
    )
}

export default ButtonLink;