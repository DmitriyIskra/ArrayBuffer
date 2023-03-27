import getBuffer from './emulator';

export default class ArrayBufferConverter {
    constructor() {
        this.str = null;
    }


    toString(buffer) {
        let arr = [];
        
        let view = new Uint16Array(buffer);
        
        for (let i = 0; i < view.length; i += 1) {
            arr[i] = String.fromCharCode(view[i]);
        }
        
        this.str = arr.join('');
    }
    
    load() {
        const buffer = getBuffer();

        this.toString(buffer);
    }
}