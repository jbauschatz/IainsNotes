import { ReactNode } from "react";

export function GD({children}: {children: ReactNode}) {
    return <span className="gaelic-inline">
        {children}
    </span>
}