import fetch from 'node-fetch';
import findFromObj from "./data/findfrom.js";

const mainfn = async (url, fn) => {
    let winfo, winfojson;
    try {
        winfo = await fetch(url)
        winfojson = await winfo.json()
        fn(winfojson)
    } catch (e) {
        fn(winfojson, e)
    }
}

const findList = () => {
    let helpList = [];
    for (let d in findFromObj) {
        helpList.push(`${d} : ${findFromObj[d]['desc']}`)
    }
    return helpList.join(',\n')
}

const findFrom = async (dest, query, fn) => {
    //  if(!findFromObj[dest]) throw Error('No match found')
    if (!findFromObj[dest]) return fn(undefined, new Error(`${dest} is not a valid destination to search with/from. Call the function \`findList\` to log the complete list of available destinations`))
    mainfn(findFromObj[dest]['fn'](query), fn)
}

const getMdn = (query, callback) => {
    let url = `https://developer.mozilla.org/api/v1/search?q=${encodeURIComponent(query)}`;
    mainfn(url, callback)
}

const wordInfo = async (query, fn) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(query)}`;
    mainfn(url, fn)
}
const hpChar = async (query, fn) => {
    let url = `https://potterheadsapi.herokuapp.com/hp/${encodeURIComponent(query)}`;
    mainfn(url, fn)
}

export { findFrom, getMdn, wordInfo, findList }
export default { findFrom, getMdn, wordInfo, findList, hpChar }
// module.exports = { findFrom, getMdn, wordInfo, findList }

