
import {Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';

/**
 * Page for the idiom "Tha ... agam ort (feeling, emotion)"
 * Literally "My ... is on you"
 */
export function IdiomMyLoveOnYou() {
    return <Container>
        <Row>
            <h1>Tha gaol agam ort (My love is on you)</h1>
            <p>This idiom combines <GD>bi</GD>, possession via the preposition{' '}
                <LinkContainer to="/grammar/preposition/aig(at)"><a>
                    <GD>aig</GD> (at)
                </a></LinkContainer>, and the preposition{' '}
                <LinkContainer to="/grammar/preposition/air(on)"><a>
                    <GD>air</GD> (on)
                </a></LinkContainer>, to apply an emotion or feeling from one entity to another.
            </p>
            <p>
                <Example
                    gaelic="Tha gaol aig Anna air Calum"
                    english="Anna loves Calum"
                    englishLiteral="Anna's love is on Calum"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with some form of <GD><strong>bi</strong></GD>, for example <GD><strong>tha</strong></GD></li>
                    <li>Next is the feeling or emotion, for example <GD><strong>gaol</strong></GD> (love)</li>
                    <li>Next is the preposition <GD><strong>aig</strong></GD></li>
                    <li>Next is the entity experiencing the feeling or emotion, for example <GD><strong>Anna</strong></GD></li>
                    <li>Next is the preposition <GD><strong>air</strong></GD></li>
                    <li>Finally the recipient of the feeling or emotion, for example <GD><strong>Calum</strong></GD></li>
                </ol>
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha gaol aig Anna air Calum"
                        english="Anna loves Calum"
                        englishLiteral="Anna's love is on Calum"
                    ></Example>
                </Examples>
                <Examples>
                    <Example
                        gaelic="Tha gràin aig Anna air Calum"
                        english="Anna hates Calum"
                        englishLiteral="Anna's hatred is on Calum"
                    ></Example>
                </Examples>
            </p>

            <h2>Pronoun Examples</h2>
            <p>
                When either entity is a pronoun, the pronominal form of{' '}
                <LinkContainer to="/grammar/preposition/aig(at)"><a>
                    <GD>aig</GD> (at)
                </a></LinkContainer> or {' '}
                <LinkContainer to="/grammar/preposition/air(on)"><a>
                    <GD>air</GD> (on)
                </a></LinkContainer> should be used, respectively.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha gaol aca oirnn"
                        english="They love us"
                        englishLiteral="Their love is on us"
                    ></Example>
                    <Example
                        gaelic="Bha gràin aig Calum air"
                        english="Calum hated it"
                        englishLiteral="Calum's hatered was on it"
                    ></Example>
                    <Example
                        gaelic="Bha gràin againn air an fhilm"
                        english="We hated the film"
                        englishLiteral="Our hatered was on the film"
                    ></Example>
                </Examples>
            </p>
        </Row>
    </Container>
}