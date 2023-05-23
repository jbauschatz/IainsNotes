
import {Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Example } from '../component/example/example';
import { Examples } from '../component/example/examples';
import { GD } from '../component/inline/inline-helper-gd';

/**
 * Page for the idiom "is fheàrr le (prefers)"
 */
export function IdiomPrefersIsFhearrLe() {
    return <Container>
        <Row>
            <h1>Is fheàrr le (prefers)</h1>
            <p>This idiom combines the verb <GD>is</GD> (to be), with the comparative adjective <GD>fheàrr</GD> (better) (comparative form of <GD>màth</GD> (good)),
                and the preposition{' '}
                <LinkContainer to="/grammar/preposition/le(with)"><a>
                    <GD>le</GD> (with, by)
                </a></LinkContainer>, to mean preferring something.
            </p>
            <p>
                <Example
                    gaelic="Is fheàrr le Anna tì"
                    english="Anna prefers tea"
                    englishLiteral='Tea is better with Anna'
                ></Example>
            </p>
            <p>
                <ol>
                    <li>Begin with some form of <GD>is</GD>, for example <GD><strong>is</strong></GD></li>
                    <li>Next is the comparative adjective <GD><strong>fheàrr</strong></GD></li>
                    <li>Next is the preposition <GD><strong>le</strong></GD></li>
                    <li>Next is the subject doing the preferring, for example <GD><strong>Anna</strong></GD></li>
                    <li>Next is the object of the preference, for example <GD><strong>tì</strong></GD></li>
                </ol>
            </p>
            <p>Note that <GD>is</GD> is commonly abbreviated to <GD>'s</GD>.</p>
            
            <h2>Examples</h2>
            <p>
                <Examples>
                    <Example
                        gaelic="'S fheàrr le Anna tì"
                        english="Anna prefers tea"
                        englishLiteral='Tea is better with Anna'
                    ></Example>
                    <Example
                        gaelic="Chan fheàrr le Calum cofaidh"
                        english="Calum does not prefer coffee"
                        englishLiteral='Coffee is not better with Calum'
                    ></Example>
                    <Example
                        gaelic="Am b' fheàrr le Màiri mise?"
                        english="Would Màiri prefer me?"
                        englishLiteral='Would I be better with Màiri?'
                    ></Example>
                </Examples>
            </p>

            <h2>Pronoun Examples</h2>
            <p>
                When the subject doing the preferring is a pronoun, the pronominal form of{' '}
                <LinkContainer to="/grammar/preposition/le(with)"><a>
                    <GD>le</GD> (with, by)
                </a></LinkContainer> should be used.
            </p>
            <p>
                <Examples>
                    <Example
                        gaelic="'S fheàrr leam tì"
                        english="I prefer tea"
                        englishLiteral='Tea is better with me'
                    ></Example>
                    <Example
                        gaelic="Chan fheàrr leatha cofaidh"
                        english="She doesn't prefer coffee"
                        englishLiteral='Coffee is not better with her'
                    ></Example>
                    <Example
                        gaelic="Am b' fheàrr leotha mise?"
                        english="Would they prefer me?"
                        englishLiteral='Would I be better with them?'
                    ></Example>
                </Examples>
            </p>
        </Row>
    </Container>
}