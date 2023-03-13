
export function Example({gaelic, english, englishLiteral}: {gaelic: string, english: string, englishLiteral? : string}) {
    return <span>
        {/* Emphasise the Gaelic */}
        <span className="gaelic">
            <strong>{gaelic}</strong>
        </span>
        <br/>

        {/* English translation */}
        {english}

        {/* Include the "literally" annotation if it is provided */}
        {englishLiteral && <span className="text-muted">
            <br/>
            (lit. "{englishLiteral}")
        </span>}
    </span>
}