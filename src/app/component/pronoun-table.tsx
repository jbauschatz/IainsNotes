import { Table } from "react-bootstrap"

type PronounTableProps = {
    thirdMS: string,
    thirdMSEnglish: string,
    thirdFS: string,
    thirdFSEnglish: string,
    secondS: string,
    secondSEnglish: string,
    firstS: string,
    firstSEnglish: string,
    thirdP: string,
    thirdPEnglish: string,
    secondP: string,
    secondPEnglish: string,
    firstP: string,
    firstPEnglish: string,
}

export function PronounTable(props: PronounTableProps) {
    return <Table bordered size="sm">
        <thead>
            <tr>
                <th></th>
                <th>Singular</th>
                <th>Plural</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1st</th>
                <td>{props.firstS}</td>
                <td>{props.firstP}</td>
            </tr>
            <tr>
                <th>2nd</th>
                <td>{props.secondS}</td>
                <td>{props.secondP}</td>
            </tr>
            <tr>
                <th rowSpan={2}>3rd</th>
                <td>{props.thirdMS}</td>
                <td rowSpan={2}>{props.thirdP}</td>
            </tr>
            <tr>
                <td>{props.thirdFS}</td>
            </tr>
        </tbody>
    </Table>
}