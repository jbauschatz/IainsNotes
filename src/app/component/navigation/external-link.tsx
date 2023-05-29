import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

export function ExternalLink({children, to} : {children: ReactNode, to: string}) {
    return <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
        {' '}
        <FontAwesomeIcon icon={faExternalLink} />
    </a>;
}