import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GD } from "../../component/inline/inline-helper-gd";
import { PronounTable } from "../../component/pronoun-table";

export function PrepositionAig(props: {}) {

    return <Container>
        <h1>aig (at)</h1>

        <h2>Pronominal Forms</h2>
        <p>
            When combining with a pronoun (ie <GD>thu</GD>), rather than using both words separately (ie <GD>"aig thu"</GD>), a special
            form is used which combines <GD>aig</GD> with the pronoun, for example <GD>agam</GD> (at you). A full table of these forms is shown below.
        </p>
        <p>
            <PronounTable
                thirdMS="aig"
                thirdMSEnglish="at him"
                thirdFS="aice"
                thirdFSEnglish="at her"
                secondS="agad"
                secondSEnglish="at you"
                firstS="agam"
                firstSEnglish="at me"
                thirdP="aca"
                thirdPEnglish="at them"
                secondP="agaibh"
                secondPEnglish="at you (pl)"
                firstP="againn"
                firstPEnglish="at us"
            ></PronounTable>
        </p>
        
        <h2>Emphatic Forms</h2>
        <p>Each of the pronominal forms above has a special form for added emphasis, for example <GD>agadsa</GD> (at <em>you</em>).</p>
        <p>
            <PronounTable
                thirdMS="aigesan"
                thirdMSEnglish="at him"
                thirdFS="aicese"
                thirdFSEnglish="at her"
                secondS="agadsa"
                secondSEnglish="at you"
                firstS="agamsa"
                firstSEnglish="at me"
                thirdP="acasan"
                thirdPEnglish="at them"
                secondP="agaibhse"
                secondPEnglish="at you (pl)"
                firstP="againne"
                firstPEnglish="at us"
            ></PronounTable>
        </p>

        <h2>Related Idioms</h2>
        <p>
            <ul>
                <li>
                    <LinkContainer to="/idiom/ThaGaolAgamOrt">
                        <a>Tha gaol agam ort (My love is upon you)</a>
                    </LinkContainer>
                </li>
            </ul>
        </p>

        <h2>References</h2>
        <p>
            <ul>
                <li>
                    <a href="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Aig_(preposition)" target="_blank" rel="noopener noreferrer">
                        Scottish Gaelic Grammar Wiki
                    </a>
                </li>
            </ul>
        </p>
    </Container>
}