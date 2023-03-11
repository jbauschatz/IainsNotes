
import {Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';

/**
 * Page for the idiom "Tha mi nam ... (occupation)"
 * Literally "I am in my ..."
 */
export function IdiomIAmInMy() {
    return <Container>
        <Row>
            <h1>Tha mi nam thidsear (I am in my teacher)</h1>
            <p>This idiom combines <GD>bi</GD> with a possessive form of {' '}
                <LinkContainer to="/grammar/preposition/ann(in)"><a>
                    <GD>ann</GD> (in)
                </a></LinkContainer> to express your current job or occupation.
                For example rather than saying you <em>are</em> a teacher, you say that you are <em>in your teacher</em>.
            </p>
            <p>
                <ol>
                    <li>Begin with some form of <GD><strong>bi</strong></GD>, for example <GD><strong>tha</strong></GD></li>
                    <li>Next is the entity being described, for example <GD><strong>mi</strong></GD></li>
                    <li>Next is the possessive form of <GD><strong>ann</strong></GD>, for example <GD><strong>nam</strong></GD></li>
                    <li>Next is the noun representing the occupation, for example <GD><strong>thidsear</strong></GD></li>
                </ol>
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha mi nam dhràibhear-tacsaidh"
                        english="I am a taxi driver"
                        englishLiteral="I am in my taxi driver"
                    ></Example>
                    <Example
                        gaelic="Tha mi nam shaighdear"
                        english="I am a soldier"
                        englishLiteral="I am in my soldier"
                    ></Example>
                    <Example
                        gaelic="Tha thu nad thidsear"
                        english="You are a teacher"
                        englishLiteral="You are in your teacher"
                    ></Example>
                    <Example
                        gaelic="Tha Anna na h-innleadair"
                        english="Anna is an engineer"
                        englishLiteral="Anna is in her engineer"
                    ></Example>
                    <Example
                        gaelic="Tha Calum na innleadair"
                        english="Calum is an engineer"
                        englishLiteral="Calum is in his engineer"
                    ></Example>
                </Examples>
            </p>
            
            <h2>Related Idioms</h2>
            <p>
                Here are some other ways to express similar concepts.
            </p>
            <p>
                <ul>
                    <li>
                        <LinkContainer to="/idiom/ItIsInMe">
                            <a>'S e tidsear a th' annam (It's a teacher that is in me)</a>
                        </LinkContainer>
                    </li>
                </ul>
            </p>
        </Row>
    </Container>
}