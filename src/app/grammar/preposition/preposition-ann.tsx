import { Container } from "react-bootstrap";
import { GD } from "../../component/inline/inline-helper-gd";
import { PronounTable } from "../../component/pronoun-table";
import { buildPrepositionPath } from "../../page-util";
import { NavItem } from "../../component/navigation/nav-item";
import { IdiomIamInMyNavItem } from "../../idiom/idiom-i-am-in-my";
import { IdiomStativeVerbNavItem } from "../../idiom/idiom-stative-verb";
import { IdiomItIsInMeNavItem } from "../../idiom/idiom-it-is-in-me";
import { NavList } from "../../component/navigation/nav-list";
import { ExternalLink } from "../../component/navigation/external-link";

export const PREPOSITION_ANN_RESOURCE_PATH = buildPrepositionPath('ann(in)');

export function PrepositionAnnNavItem() {
    return <NavItem to={PREPOSITION_ANN_RESOURCE_PATH}>
        ann (in)
    </NavItem>
}

export function PrepositionAnnInlineNav() {
    return <NavItem to={PREPOSITION_ANN_RESOURCE_PATH}>
        <GD>ann</GD> (in)
    </NavItem>
}

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
            <NavList>
                <IdiomStativeVerbNavItem/>
                <IdiomIamInMyNavItem/>
                <IdiomItIsInMeNavItem/>
            </NavList>
        </p>

        <h2>References</h2>
        <p>
            <NavList>
                <ExternalLink to="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Ann_(preposition)">
                    Scottish Gaelic Grammar Wiki - Ann (preposition)
                </ExternalLink>
            </NavList>
        </p>
    </Container>
}