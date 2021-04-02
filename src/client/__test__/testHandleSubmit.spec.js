import "babel-polyfill"

import { handleSubmit } from '../js/formHandler'
import { post } from '../js/formHandler'

describe('client test', () => {
    test('test handleSubmit function', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('test post function', () => {
        expect(post).toBeDefined();
    });
 
});
