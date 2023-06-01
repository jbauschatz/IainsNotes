
import {Container, Row} from 'react-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';
import { buildIdiomPath } from '../page-util';
import { NavItem } from '../component/navigation/nav-item';
import { PrepositionAnnInlineNav } from '../grammar/preposition/preposition-ann';
import { NavList } from '../component/navigation/nav-list';
import { IdiomIamInMyNavItem } from './idiom-i-am-in-my';
import { IdiomIAmNavItem } from './idiom-i-am';

export const IDIOM_IT_IS_IN_ME_RESOURCE_PATH = buildIdiomPath('s_e_tidsear_a_th_annam');

export function IdiomItIsInMeNavItem() {
    return <NavItem to={IDIOM_IT_IS_IN_ME_RESOURCE_PATH}>
        'S e tidsear a th' annam (It's a teacher that's in me)
    </NavItem>
}

/**
 * Page for the idiom "'S e ... a th' ann an (identity or occupation)"
 * Literally "It is a ... that is in me"
 */
export function IdiomItIsInMe() {
    return <Container>
        <Row>
            <h1>'S e tidsear a th' annam (It's a teacher that's in me)</h1>
            <p>One idiom for expressing something's identity or occupation combines <GD>'s e</GD> with <PrepositionAnnInlineNav/>.
                For example rather than saying you <em>are</em> a teacher, you say it's a teacher that is <em>in</em> you.
            </p>
            <p>
                <Example
                    gaelic="'S e tidsear a th' ann an Anna"
                    english="Anna is a teacher"
                    englishLiteral="It's a teacher that's in Anna"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with <GD><strong>'s e</strong></GD> (because you are equating two nouns)</li>
                    <li>Next is the noun representing the identity or occupation, for example <GD><strong>tidsear</strong></GD></li>
                    <li>Next is <GD><strong>a th'</strong></GD> or <GD><strong>a bh'</strong></GD> depending on present or past tense</li>
                    <li>Next is <GD><strong>ann an</strong></GD> or <GD><strong>ann am</strong></GD></li>
                    <li>Finally comes the entity being described, for example <GD><strong>Anna</strong></GD></li>
                </ol>

                Note that this places the emphasis on the identity or occupation, because that comes first in the sentence (ie, "It's <em>a teacher</em> that's in Anna").
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="'S e tidsear a th' ann an Anna"
                        english="Anna is a teacher"
                        englishLiteral="It's a teacher that's in Anna"
                    ></Example>
                    <Example
                        gaelic="'S e amadan a bh' ann an Iain"
                        english="Iain was an idiot"
                        englishLiteral="It's an idiot that was in Iain"
                    ></Example>
                </Examples>
            </p>

            <p>
                Remember that <GD>ann an</GD> changes to <GD>ann am</GD> before a word beginning with b, f, m, or p - and that applies in this construction as usual.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="'S e peantair a th' ann am Flòraidh"
                        english="Flora is a painter"
                        englishLiteral="It's a painter that's in Flora"
                    ></Example>
                    <Example
                        gaelic="'S e feòladair a th' ann am Mìcheal"
                        english="Michael is a butcher"
                        englishLiteral="It's a butcher that's in Michael"
                    ></Example>
                </Examples>
            </p>

            <h2>Pronoun Examples</h2>
            <p>
                When describing a pronoun, use the pronoun form of <PrepositionAnnInlineNav/> - for example <GD>annam</GD> or <GD>annad</GD>.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="'S e tidsear a th' annam"
                        english="I'm a teacher"
                        englishLiteral="It's a teacher that's in me"
                    ></Example>
                    <Example
                        gaelic="'S e amadan a th' annad"
                        english="You're an idiot"
                        englishLiteral="It's an idiot that's in you"
                    ></Example>
                    <Example
                        gaelic="'S e cupa a th' ann"
                        english="It's a cup"
                        englishLiteral="It's a cup that's in it"
                    ></Example>
                    <Example
                        gaelic="'S e taigh dearg a th' ann"
                        english="It's a red house"
                        englishLiteral="It's a red house that's in it"
                    ></Example>
                </Examples>
            </p>
            
            <h2>Related Idioms</h2>
            <p>
                Here are some other ways to express similar concepts.
            </p>
            <p>
                <NavList>
                    <IdiomIAmNavItem/>
                    <IdiomIamInMyNavItem/>
                </NavList>
            </p>
        </Row>
    </Container>
}