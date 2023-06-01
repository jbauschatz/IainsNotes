
import {Container, Row} from 'react-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';
import { buildIdiomPath } from '../page-util';
import { NavItem } from '../component/navigation/nav-item';
import { NavList } from '../component/navigation/nav-list';
import { IdiomIamInMyNavItem } from './idiom-i-am-in-my';
import { IdiomItIsInMeNavItem } from './idiom-it-is-in-me';
import { PrepositionAirInlineNav } from '../grammar/preposition/preposition-air';
import { IdiomIAmNavItem } from './idiom-i-am';

export const IDIOM_THE_NAME_THAT_IS_ON_RESOURCE_PATH = buildIdiomPath('s_e_iain_an_tainm');

export function IdiomTheNameThatIsOnNavItem() {
    return <NavItem to={IDIOM_THE_NAME_THAT_IS_ON_RESOURCE_PATH}>
        'S e Iain an t-ainm a th' orm (Iain is the name that is on me)
    </NavItem>
}

/**
 * Page for the idiom "'S e ... an t-ainm a th' air ..." (... is the name that is on ...)
 */
export function IdiomTheNameThatIsOn() {
    return <Container>
        <Row>
            <h1>'S e Iain an t-ainm a th' orm (Iain is the name that is on me)</h1>
            <p>
                In this idiom you say what the name of something is using <PrepositionAirInlineNav/> to say that the name is <em>on</em> it.
            </p>
            <p>
                <Example
                    gaelic="'S e Calum an t-ainm a th' air a' chat"
                    english="The cat's name is Calum"
                    englishLiteral="Calum is the name that is on the cat"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with <GD><strong>'s e</strong></GD> (because you are equating two nouns)</li>
                    <li>Next is the name being given, for example <GD><strong>Calum</strong></GD></li>
                    <li>Next is <GD><strong>an t-ainm</strong></GD> (the name)</li>
                    <li>Next is <GD><strong>a th' air</strong></GD> (that is on)</li>
                    <li>Next is the entity being named, for example <GD><strong>a' chat</strong></GD> (the cat)</li>
                </ol>
            </p>
            
            <h2>Pronoun Examples</h2>
            <p>
                When the entity being named is a pronoun, the pronoun form of <PrepositionAirInlineNav/> should be used.
                <Examples>
                    <Example
                        gaelic="'S e Iain an t-ainm a th' orm"
                        english="Iain is my name"
                        englishLiteral="Iain is the name that is on me"
                    ></Example>
                    <Example
                        gaelic="'S e Anna an t-ainm a th' ort"
                        english="Anna is your name"
                        englishLiteral="Anna is the name that is on you"
                    ></Example>
                    <Example
                        gaelic="'S e Calum an t-ainm a th' air"
                        english="Calum is his name"
                        englishLiteral="Calum is the name that is on him"
                    ></Example>
                </Examples>
            </p>
            
            <h2>Asking a Question</h2>
            <p>
                Ask someone their name in this format using <GD>dè</GD> (what).
                <Examples>
                    <Example
                        gaelic="Dè an t-ainm a th' ort?"
                        english="What is your name?"
                        englishLiteral="What is the name that is on you?"
                    ></Example>
                    <Example
                        gaelic="Dè an t-ainm a th' oirbh?"
                        english="What is your name?"
                        englishLiteral="What is the name that is on you?"
                    ></Example>
                    <Example
                        gaelic="Dè na h-ainmean a th' oirbh?"
                        english="What are your names?"
                        englishLiteral="What are the names that are on you?"
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
                    <IdiomItIsInMeNavItem/>
                </NavList>
            </p>
        </Row>
    </Container>
}