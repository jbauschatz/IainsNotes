import { Children, ReactNode } from "react";

export function NavList({children}: {children: ReactNode}) {
    const arrayChildren = Children.toArray(children);

    return <ul>
        {Children.map(arrayChildren, (child, index) => {
            return <li key={index}>
                {child}
            </li>
        })}
    </ul>
}