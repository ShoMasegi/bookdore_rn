const _baseUrl = 'https://bookdore.herokuapp.com';
const cards = endpoint('/cards');

function endpoint(path) {
    return _baseUrl + path + '.json';
}

export default {
    cards
}