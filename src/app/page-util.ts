
let idiomPath = '/idiom/';
let grammarPath = '/grammar/';
let prepositionPath = grammarPath + 'preposition/'

export function buildIdiomPath(idiomResourceName: string): string {
    return idiomPath + idiomResourceName;
}

export function buildGrammarPath(grammarResourceName: string): string {
    return grammarPath + grammarResourceName;
}

export function buildPrepositionPath(prepositionResourceName: string): string {
    return prepositionPath + prepositionResourceName;
}