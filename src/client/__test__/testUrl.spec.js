
import { validURL } from '../js/checkURL'

var validURLTest = "https://google.com/" ; 
var unValidURLTest = "12345" ;

describe('test checkurl functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        // TODO: write your logic here
        var res = validURL(validURLTest);
        expect(res).toBeDefined();
    })

    test('Testing the checkUrl function return false for invalid url', () => {
        var res = validURL(unValidURLTest);
        expect(res).toBe(false);
        
    })

    test('Testing the checkUrl function return true for valid url', () => {

        var res = validURL(validURLTest);
        expect(res).toBe(true);
    })
})
