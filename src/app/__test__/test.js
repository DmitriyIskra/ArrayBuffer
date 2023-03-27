import ArrayBufferConverter from '../converter';
const arrayBufferConverter = new ArrayBufferConverter();

test('test str', () => {
    arrayBufferConverter.load();

    expect(arrayBufferConverter.str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})