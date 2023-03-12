import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GD } from "../../component/inline/inline-helper-gd";
import { PronounTable } from "../../component/pronoun-table";

export function PrepositionAnn(props: {}) {

    return <Container>
        <h1>ann (in)</h1>

        <h2>Pronominal Forms</h2>
        <p>
            When combining with a pronoun (ie <GD>thu</GD>), rather than using both words separately (ie <GD>"ann an thu"</GD>), a special
            form is used which combines <GD>ann</GD> with the pronoun, for example <GD>annad</GD> (in you). A full table of these forms is shown below.
        </p>
        <p>
            <PronounTable
                thirdMS="ann"
                thirdMSEnglish="in him"
                thirdFS="innte"
                thirdFSEnglish="in her"
                secondS="annad"
                secondSEnglish="in you"
                firstS="annam"
                firstSEnglish="in me"
                thirdP="annta"
                thirdPEnglish="in them"
                secondP="annaibh"
                secondPEnglish="in you (pl)"
                firstP="annainn"
                firstPEnglish="in us"
            ></PronounTable>
        </p>
        
        <h2>Emphatic Forms</h2>
        <p>Each of the pronominal forms above has a special form for added emphasis, for example <GD>agadsa</GD> (in <em>you</em>).</p>
        <p>
            <PronounTable
                thirdMS="annsan"
                thirdMSEnglish="in him"
                thirdFS="inntese"
                thirdFSEnglish="in her"
                secondS="annadsa"
                secondSEnglish="in you"
                firstS="annamsa"
                firstSEnglish="in me"
                thirdP="anntasan"
                thirdPEnglish="in them"
                secondP="annaibh"
                secondPEnglish="in you (pl)"
                firstP="annainn"
                firstPEnglish="in us"
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
                <li>
                    <LinkContainer to="/idiom/IAmInMy">
                        <a>Tha mi nam thidsear (I am in my teacher)</a>
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/idiom/ItIsInMe">
                        <a>'S e tidsear a th' annam (It's a teacher that is in me)</a>
                    </LinkContainer>
                </li>
            </ul>
        </p>

        <h2>References</h2>
        <p>
            <ul>
                <li>
                    <a href="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Ann_(preposition)" target="_blank" rel="noopener noreferrer">
                        Scottish Gaelic Grammar Wiki
                    </a>
                </li>
            </ul>
        </p>
    </Container>
}