import { ReactNode } from "react";
import { LinkContainer } from "react-router-bootstrap";

export function NavItem({children, to} : {children: ReactNode, to: string}) {
    return <LinkContainer to={to}>
        <a>{children}</a>
    </LinkContainer>;
}