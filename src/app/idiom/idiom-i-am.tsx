
import {Container, Row} from 'react-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';
import { buildIdiomPath } from '../page-util';
import { NavItem } from '../component/navigation/nav-item';
import { NavList } from '../component/navigation/nav-list';
import { IdiomIamInMyNavItem } from './idiom-i-am-in-my';
import { IdiomItIsInMeNavItem } from './idiom-it-is-in-me';
import { IdiomTheNameThatIsOn, IdiomTheNameThatIsOnNavItem } from './idiom-the-name-that-is-on-me';

export const IDIOM_I_AM_RESOURCE_PATH = buildIdiomPath('is_mise_iain)');

export function IdiomIAmNavItem() {
    return <NavItem to={IDIOM_I_AM_RESOURCE_PATH}>
        Is mise Iain (I am Iain)
    </NavItem>
}

/**
 * Page for the idiom "Is mise ..." (unchangeable or permanent identity)
 */
export function IdiomIAm() {
    return <Container>
        <Row>
            <h1>Is mise Iain (I am Iain)</h1>
            <p>
                This idiom expresses a permanent or unchangeable identity, for example someone's name, gender expression or ethnicity.
            </p>
            <p>
                <Example
                    gaelic="Is Anna boireannach"
                    english="Anna is a woman"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with <GD><strong>is</strong></GD> (because you are equating two nouns)</li>
                    <li>Next is the noun you are expressing the identity of, for example <GD><strong>Anna</strong></GD></li>
                    <li>Finally comes the noun representing their identity, for example <GD><strong>boireannach</strong></GD></li>
                </ol>
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="Is Anna Spàinnteach"
                        english="Anna is a Spaniard"
                    ></Example>
                    <Example
                        gaelic="Is mise boirreanach"
                        english="I am a woman"
                    ></Example>
                    <Example
                        gaelic="'S mise balach"
                        english="I am a boy"
                    ></Example>
                    <Example
                        gaelic="An tusa Calum?"
                        english="Are you Calum?"
                    ></Example>
                    <Example
                        gaelic="Cha tusa an rìgh"
                        english="You are not the king"
                    ></Example>
                </Examples>
            </p>
            
            <h2>Related Idioms</h2>
            <p>
                Here are some other ways to express similar concepts.
            </p>
            <p>
                <NavList>
                    <IdiomTheNameThatIsOnNavItem/>
                    <IdiomItIsInMeNavItem/>
                    <IdiomIamInMyNavItem/>
                </NavList>
            </p>
        </Row>
    </Container>
}