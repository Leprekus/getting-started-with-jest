function filterByTerm (input, str){
    const filtered = str === '' ? 'No Search Term Provided' :
    input.filter(x => x.url.toLowerCase().includes(str.toLowerCase()))
    return filtered.length ? filtered : 'No Match'
}

describe('Filter function', () => {
    test('It should filter by search term \'link\'', () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }      
        ]
        const output = [{ id: 3, url: "https://www.link3.dev" }]
        expect(filterByTerm(input, 'link')).toEqual(output)

        expect(filterByTerm(input, 'LINK')).toEqual(output)

    });
    test('It should return "No search Term Provided" with empty string', () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }      
        ]
        const output = 'No Search Term Provided'
        expect(filterByTerm(input, '')).toEqual(output)
    });
    test('It should return "No Match" with empty search term', () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }      
        ]
        const output = 'No Match'
        expect(filterByTerm(input, 'a')).toEqual(output)
    });
});