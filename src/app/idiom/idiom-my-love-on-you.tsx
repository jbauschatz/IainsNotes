
import {Container, Row} from 'react-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';
import { buildIdiomPath } from '../page-util';
import { NavItem } from '../component/navigation/nav-item';
import { PrepositionAigInlineNav } from '../grammar/preposition/preposition-aig';
import { PrepositionAirInlineNav } from '../grammar/preposition/preposition-air';

export const IDIOM_MY_LOVE_IS_ON_RESOURCE_PATH = buildIdiomPath('tha_gaol_agam_air');

export function IdiomMyLoveIsOnNavItem() {
    return <NavItem to={IDIOM_MY_LOVE_IS_ON_RESOURCE_PATH}>
        Tha gaol agam ort (My love is on you)
    </NavItem>
}

/**
 * Page for the idiom "Tha ... agam ort (feeling, emotion)"
 * Literally "My ... is on you"
 */
export function IdiomMyLoveIsOn() {
    return <Container>
        <Row>
            <h1>Tha gaol agam ort (My love is on you)</h1>
            <p>
                This idiom combines <GD>bi</GD>, possession via the preposition <PrepositionAigInlineNav/>,
                and the preposition <PrepositionAirInlineNav/>, to apply an emotion or feeling from one entity to another.
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
                        gaelic="Tha gaol aig Iain air tì"
                        english="Iain loves tea"
                        englishLiteral="Iain's love is on tea"
                    ></Example>
                </Examples>
            </p>

            <h2>Pronoun Examples</h2>
            <p>
                When either entity is a pronoun, the pronominal form of <PrepositionAigInlineNav/> or <PrepositionAirInlineNav/> should
                be used, respectively.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha gaol aca oirnn"
                        english="They love us"
                        englishLiteral="Their love is on us"
                    ></Example>
                    <Example
                        gaelic="Bha gaol aig Calum air"
                        english="Calum loved it"
                        englishLiteral="Calum's love was on it"
                    ></Example>
                    <Example
                        gaelic="Bha gaol againn air an fhilm"
                        english="We loved the film"
                        englishLiteral="Our love was on the film"
                    ></Example>
                </Examples>
            </p>

            <h2>Other Examples</h2>
            <p>
                Here are some other emotions, feelings, or effects that this grammatical structure applies to.
            </p>

            <h3>
                gràdh (love)
            </h3>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha gràdh aig Iain air cofaidh"
                        english="Iain loves coffee"
                        englishLiteral="Iain's love is on coffee"
                    ></Example>
                    <Example
                        gaelic="Tha gràdh aig Iain air càise"
                        english="Iain loves cheese"
                        englishLiteral="Iain's love is on cheese"
                    ></Example>
                </Examples>
            </p>
            
            <h3>
                gràin (hatred)
            </h3>
            <p>
                <Examples>
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
            
            <h3>
                cuimhne (memory)
            </h3>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha cuimhne agam ort"
                        english="I remember you"
                        englishLiteral="My memory is on you"
                    ></Example>
                    <Example
                        gaelic="A bheil cuimhne agad orm"
                        english="Do you remember me?"
                        englishLiteral="Is your memory on me?"
                    ></Example>
                </Examples>
            </p>
            
            <h3>
                feum (need)
            </h3>
            <p>
                <Examples>
                    <Example
                        gaelic="Cha bhi feum agad air ad-ghrèine"
                        english="You will not need a sun-hat"
                        englishLiteral="Your need will not be on a sun hat"
                    ></Example>
                </Examples>
            </p>
        </Row>
    </Container>
}