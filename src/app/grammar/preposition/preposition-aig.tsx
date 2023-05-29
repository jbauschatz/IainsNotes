import { Container } from "react-bootstrap";
import { GD } from "../../component/inline/inline-helper-gd";
import { PronounTable } from "../../component/pronoun-table";
import { buildPrepositionPath } from "../../page-util";
import { NavItem } from "../../component/navigation/nav-item";
import { NavList } from "../../component/navigation/nav-list";
import { IdiomMyLoveIsOnNavItem } from "../../idiom/idiom-my-love-on-you";
import { ExternalLink } from "../../component/navigation/external-link";

export const PREPOSITION_AIG_RESOURCE_PATH = buildPrepositionPath('aig(at)');

export function PrepositionAigNavItem() {
    return <NavItem to={PREPOSITION_AIG_RESOURCE_PATH}>
        aig (at)
    </NavItem>
}

export function PrepositionAigInlineNav() {
    return <NavItem to={PREPOSITION_AIG_RESOURCE_PATH}>
        <GD>aig</GD> (at)
    </NavItem>
}

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
            <NavList>
                <IdiomMyLoveIsOnNavItem/>
            </NavList>
        </p>

        <h2>References</h2>
        <p>
            <NavList>
                <ExternalLink to="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Aig_(preposition)">
                    Scottish Gaelic Grammar Wiki - Aig (preposition)
                </ExternalLink>
            </NavList>
        </p>
    </Container>
}