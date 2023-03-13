
import {Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';

/**
 * Page for the idiom "Tha mi nam ... (stative verb)"
 * Literally "I am in my ..."
 */
export function IdiomStativeVerb() {
    return <Container>
        <Row>
            <h1>Tha mi nam chadal (I am in my sleeping)</h1>
            <p>This idiom combines <GD>bi</GD> with a possessive form of {' '}
                <LinkContainer to="/grammar/preposition/ann(in)"><a>
                    <GD>ann</GD> (in)
                </a></LinkContainer> and the verbal noun to express a state of activity.
            </p>
            <p>
                <Example
                    gaelic="Tha calum na chadal"
                    english="Calum is asleep"
                    englishLiteral="Calum is in his sleeping"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with some form of <GD><strong>bi</strong></GD>, for example <GD><strong>tha</strong></GD></li>
                    <li>Next is the entity being described, for example <GD><strong>Calum</strong></GD></li>
                    <li>Next is the possessive form of <GD><strong>ann</strong></GD>, for example <GD><strong>na</strong></GD> (in his)</li>
                    <li>Next is the verbal noun representing the action, for example <GD><strong>cadal</strong></GD> (which is lenited after <GD>na</GD>)</li>
                </ol>
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha mi nam chadal"
                        english="I am asleep"
                        englishLiteral="I am in my sleeping"
                    ></Example>
                    <Example
                        gaelic="Bha mi nam dhùisg"
                        english="I was awake"
                        englishLiteral="I was in my waking"
                    ></Example>
                </Examples>
            </p>
            
            <h2>References</h2>
            <p>
                <ul>
                    <li>
                        <a href="https://speakgaelic.scot/level/pastimes/topic/air-splaoid-no-aig-fois/" target="_blank" rel="noopener noreferrer">
                            Speak Gaelic - Hobbies
                        </a>
                    </li>
                    <li>
                        <a href="https://gaelicgrammar.org/~gaelic/mediawiki/index.php/Statives" target="_blank" rel="noopener noreferrer">
                            Scottish Gaelic Grammar Wiki - Statives
                        </a>
                    </li>
                    <li>
                        <a href="http://www.akerbeltz.org/index.php?title=Stative_Verbs_or_How_to_run_in_suspended_animation" target="_blank" rel="noopener noreferrer">
                            Akerbeltz - Stative Verbs or How to run in suspended animation
                        </a>
                    </li>
                </ul>
            </p>
        </Row>
    </Container>
}