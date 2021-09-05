let findFrom = {
    mdn: {
        fn: (q, ...args) => { return `https://developer.mozilla.org/api/v1/search?q=${encodeURIComponent(q)}` },
        desc: "Search from mdn"
    },
    word: {
        fn: (q, ...args) => { return `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(q)}` },
        desc: "Search for a word"
    },
    hpChar: {
        fn: (q, ...args) => { return `https://potterheadsapi.herokuapp.com/hp/${encodeURIComponent(q)}` },
        desc: "Search a Harry Potter Character"
    }
}

export default findFrom;