import { Children, ReactNode } from "react";

export function Examples({children}: {children: ReactNode}) {
    const arrayChildren = Children.toArray(children);

    return <ul>
        {Children.map(arrayChildren, (child, index) => {
            return <li>
                {child}
            </li>
        })}
    </ul>
}