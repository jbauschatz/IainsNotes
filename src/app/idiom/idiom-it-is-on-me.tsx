
import {Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';

/**
 * Page for the idiom "Tha ... orm (condition or mood)"
 * Literally "... is on me"
 */
export function IdiomItOnInMe() {
    return <Container>
        <Row>
            <h1>Tha an t-acras orm (The hunger is upon me)</h1>
            <p>
                When you experience a certain condition (like hunger, thirst, anger or fear), you are considered to <em>have</em> that condition.
            </p>
            <p>
                Use the preposition{' '}
                <LinkContainer to="/grammar/preposition/air(on)"><a>
                    <GD>air</GD> (on)
                </a></LinkContainer>{' '}
                to convey this as being <em>upon</em> you.
            </p>
            <p>
                <Example
                    gaelic="Tha an t-acras air Anna"
                    english="Anna is hungry"
                    englishLiteral="Anna has the hunger, the hunger is upon Anna"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with some form of <GD><strong>bi</strong></GD> as the main verb, for example <GD><strong>tha</strong></GD></li>
                    <li>Next is the noun representing the condition or mood, for example <GD><strong>an t-acras</strong></GD> (the hunger)</li>
                    <li>Next is <GD><strong>air</strong></GD> to apply this mood to the entity</li>
                    <li>Finally comes the entity being described, for example <GD><strong>Anna</strong></GD></li>
                </ol>
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha an t-acras aig Anna"
                        english="Anna is hungry"
                        englishLiteral="The hunger is upon Anna"
                    ></Example>
                    <Example
                        gaelic="Tha am pathadh aig Calum"
                        english="Calum is thirsty"
                        englishLiteral="The thirst is upon Calum"
                    ></Example>
                    <Example
                        gaelic="Bha fearg air a' chat"
                        english="The cat was angry"
                        englishLiteral="Anger was on the cat"
                    ></Example>
                    <Example
                        gaelic="Tha iongnadh air na h-Albannaich"
                        english="The Scots are surprised"
                        englishLiteral="A surprise is on the Scots"
                    ></Example>
                </Examples>
            </p>
            
            <h2>Pronoun Examples</h2>
            <p>
                When describing a pronoun, use the pronoun form of <LinkContainer to="/grammar/preposition/air(on)"><a>
                    <GD>air</GD> (on)
                </a></LinkContainer> - for example <GD>orm</GD> or <GD>ort</GD>.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha an cnatan orm"
                        english="I have a cold"
                        englishLiteral="The cold is upon me"
                    ></Example>
                    <Example
                        gaelic="Tha an t-eagal orra"
                        english="They are scared"
                        englishLiteral="The fear is upon them"
                    ></Example>
                </Examples>
            </p>

            <h2>List of Conditions or Moods</h2>
            <p>
                Here are some of the nouns used to represent conditions or moods.
            </p>
            <p>
                <ul>
                    <li>
                        <GD><strong>an t-acras</strong></GD> - the hunger (ie hungry)
                    </li>
                    <li>
                        <GD><strong>am pathadh</strong></GD> - the thirst (ie thirsty)
                    </li>
                    <li>
                        <GD><strong>cnatan, an cnatan</strong></GD> - a cold, the cold (ie sick)
                    </li>
                    <li>
                        <GD><strong>fearg, an fhearg</strong></GD> - anger, the anger (ie angry)
                    </li>
                    <li>
                        <GD><strong>bus</strong></GD> - grimace, pouting lips (ie sulking)
                    </li>
                    <li>
                        <GD><strong>iongnadh</strong></GD> - surprise (ie surprised)
                    </li>
                </ul>
            </p>
            
            <h2>References</h2>
            <p>
                <ul>
                    <li>
                        <a href="https://speakgaelic.scot/level/food-drink/topic/feumalachdan-bidh/section/tha-an-t-acras-orm/" target="_blank" rel="noopener noreferrer">
                            Speak Gaelic
                        </a>
                    </li>
                </ul>
            </p>
        </Row>
    </Container>
}