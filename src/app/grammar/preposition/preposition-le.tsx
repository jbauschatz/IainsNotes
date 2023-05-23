import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GD } from "../../component/inline/inline-helper-gd";
import { PronounTable } from "../../component/pronoun-table";

export function PrepositionLe(props: {}) {

    return <Container>
        <h1>le (with, by)</h1>
        <p>
            This preposition means with or sometimes by.
        </p>

        <h2>Pronominal Forms</h2>
        <p>
            When combining with a pronoun (ie <GD>thu</GD>), rather than using both words separately (ie <GD>"le thu"</GD>), a special
            form is used which combines <GD>le</GD> with the pronoun, for example <GD>leat</GD> (with you). A full table of these forms is shown below.
        </p>
        <p>
            <PronounTable
                thirdMS="leis"
                thirdMSEnglish="with him"
                thirdFS="leatha"
                thirdFSEnglish="with her"
                secondS="leat"
                secondSEnglish="with you"
                firstS="leam"
                firstSEnglish="with me"
                thirdP="leotha"
                thirdPEnglish="with them"
                secondP="leibh"
                secondPEnglish="with you (pl)"
                firstP="leinn"
                firstPEnglish="with us"
            ></PronounTable>
        </p>
        
        <h2>Emphatic Forms</h2>
        <p>Each of the pronominal forms above has a special form for added emphasis, for example <GD>leat-sa</GD> (with <em>you</em>).</p>
        <p>
            <PronounTable
                thirdMS="leis-san"
                thirdMSEnglish="with him"
                thirdFS="leatha-se"
                thirdFSEnglish="with her"
                secondS="leat-sa"
                secondSEnglish="with you"
                firstS="leam-sa"
                firstSEnglish="with me"
                thirdP="leotha-san"
                thirdPEnglish="with them"
                secondP="leibh-se"
                secondPEnglish="with you (pl)"
                firstP="leinn-ne"
                firstPEnglish="with us"
            ></PronounTable>
        </p>

        <h2>Related Idioms</h2>
        <p>
            <ul>
                <li>
                    <LinkContainer to="/idiom/IsFhearrLePrefers">
                        <a>is fheàrr le (prefers)</a>
                    </LinkContainer>
                </li>
            </ul>
        </p>

        <h2>References</h2>
        <p>
            <ul>
                <li>
                    <a href="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Le_(preposition)" target="_blank" rel="noopener noreferrer">
                        Scottish Gaelic Grammar Wiki - le (preposition)
                    </a>
                </li>
            </ul>
        </p>
    </Container>
}