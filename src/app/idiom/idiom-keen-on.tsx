
import {Container, Row} from 'react-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';
import { NavItem } from '../component/navigation/nav-item';
import { buildIdiomPath } from '../page-util';
import { PrepositionAirInlineNav } from '../grammar/preposition/preposition-air';

export const IDIOM_KEEN_ON_RESOURCE_PATH = buildIdiomPath('deidheil_air');

export function IdiomKeenOnNavItem() {
    return <NavItem to={IDIOM_KEEN_ON_RESOURCE_PATH}>
        dèidheil air (keen on)
    </NavItem>
}

/**
 * Page for the idiom "dèidheil air (keen on)"
 */
export function IdiomKeenOn() {
    return <Container>
        <Row>
            <h1>dèidheil air (keen on)</h1>
            <p>This idiom combines the adjective <GD>dèidheil</GD> (desirous of, eager for, fond of, keen on), 
            with the prepostion <PrepositionAirInlineNav/>, to mean keen on or fond of something.
            </p>
            <p>
                <Example
                    gaelic="Tha Anna dèidheil air ceòl"
                    english="Anna is keen on music"
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with some form of <GD>bi</GD>, for example <GD><strong>tha</strong></GD></li>
                    <li>Next is the subject, for example <GD><strong>Anna</strong></GD></li>
                    <li>Next is the adjective <GD><strong>dèidheil</strong></GD></li>
                    <li>Next is the preposition <GD><strong>air</strong></GD></li>
                    <li>Next is the object of the desire, for example <GD><strong>ceòl</strong></GD></li>
                </ol>
            </p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha mi dèidheil air Calum"
                        english="I am keen on Calum"
                    ></Example>
                    <Example
                        gaelic="Bha iad dèidheil air buntàta"
                        english="They were keen on a potato"
                    ></Example>
                    <Example
                        gaelic="Bidh mi dèidheil air leann"
                        english="I will be keen on a beer"
                    ></Example>
                </Examples>
            </p>

            <h2>Pronoun Examples</h2>
            <p>
                When the object being desired is a pronoun, the pronominal form of <PrepositionAirInlineNav/> should be used.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="Tha Anna dèidheil orra"
                        english="Anna is keen on them"
                    ></Example>
                    <Example
                        gaelic="Tha i dèidheil air"
                        english="She is keen on him"
                    ></Example>
                    <Example
                        gaelic="Tha e dèidheil orm"
                        english="He is keen on me"
                    ></Example>
                </Examples>
            </p>
        </Row>
    </Container>
}