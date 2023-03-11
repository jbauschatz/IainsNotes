import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GD } from "../../component/inline/inline-helper-gd";
import { PronounTable } from "../../component/pronoun-table";

export function PrepositionAir(props: {}) {

    return <Container>
        <h1>air (on)</h1>

        <h2>Pronominal Forms</h2>
        <p>
            When combining with a pronoun (ie <GD>thu</GD>), rather than using both words separately (ie <GD>"air thu"</GD>), a special
            form is used which combines <GD>air</GD> with the pronoun, for example <GD>ort</GD> (on you). A full table of these forms is shown below.
        </p>
        <p>
            <PronounTable
                thirdMS="air"
                thirdMSEnglish="on him"
                thirdFS="oirre"
                thirdFSEnglish="on her"
                secondS="ort"
                secondSEnglish="on you"
                firstS="orm"
                firstSEnglish="on me"
                thirdP="orra"
                thirdPEnglish="on them"
                secondP="oirbh"
                secondPEnglish="on you (pl)"
                firstP="oirnn"
                firstPEnglish="on us"
            ></PronounTable>
        </p>
        
        <h2>Emphatic Forms</h2>
        <p>Each of the pronominal forms above has a special form for added emphasis, for example <GD>ortsa</GD> (on <em>you</em>).</p>
        <p>
            <PronounTable
                thirdMS="airsan"
                thirdMSEnglish="on him"
                thirdFS="oirrese"
                thirdFSEnglish="on her"
                secondS="ortsa"
                secondSEnglish="on you"
                firstS="ormsa"
                firstSEnglish="on me"
                thirdP="orrasan"
                thirdPEnglish="on them"
                secondP="oirbhse"
                secondPEnglish="on you (pl)"
                firstP="oirnne"
                firstPEnglish="on us"
            ></PronounTable>
        </p>

        <h2>Related Idioms</h2>
        <p>
            <ul>
                <li>
                    <LinkContainer to="/idiom/ItIsOnMe">
                        <a>Tha an t-acras orm (The hunger is upon me)</a>
                    </LinkContainer>
                </li>
            </ul>
        </p>

        <h2>References</h2>
        <p>
            <ul>
                <li>
                    <a href="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Air_(preposition)" target="_blank" rel="noopener noreferrer">
                        Scottish Gaelic Grammar Wiki
                    </a>
                </li>
            </ul>
        </p>
    </Container>
}