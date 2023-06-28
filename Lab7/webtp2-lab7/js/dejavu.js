const createElement = (tagName, { ...initProps } = {}) => {
    return ({ ...props } = {}) => {
        return (...children) => {
            let elem = document.createElement(tagName);

            [initProps, props].forEach(props =>
                Object.entries(props)
                    .forEach(([key, value]) => elem[key] = value)
            );

            if (children)
                children.forEach(child => elem.append(child));

            return elem;
        }
    }
}

export const button = createElement('button');
export const div = createElement('div');
export const span = createElement('span');
export const radio = createElement('input', { type: 'radio' });
export const label = createElement('label');
export const table = createElement('table');
export const tr = createElement('tr');
export const td = createElement('td');
export const img = createElement('img');
export const checkbox = createElement('input', { type: 'checkbox' });
export const textInput = createElement('input', { type: 'text' });
export const buttonInput = createElement('input', { type: 'button' });
export const numberInput = createElement('input', { type: 'number' });
export const passwordInput = createElement('input', { type: 'password' });
export const range = createElement('input', { type: 'range' });
export const textarea = createElement('textarea');
export const h1 = createElement('h1');
export const row = (props) => (...children) =>
        table()(tr(props)(...children));


export function createComponent(funcWithHooks) {
    return (function() {
        let state = {};

        Object.defineProperty(state, 'afterRender', { value: [] });
        const useAfterRender = (func) => state.afterRender.push(func);

        const useRender = (contentFunc) => {
            let wrapperId = getUUID();
            let wrapper = div({id: wrapperId})();

            Object.defineProperty(state, 'render', {
                value: () => {
                    wrapper.innerHTML = '';
                    wrapper.append(contentFunc());
                    state.afterRender.forEach(f => f());
                }
            });

            wrapper.append(contentFunc());
            return wrapper;
        }

        const useState = (initValue) => {
            const key = getUUID();
            state[key] = initValue;

            return [
                () => state[key],
                (value) => {
                    state[key] = value;
                    state.render();
                }
            ];
        }

        return funcWithHooks({
            useState, useRender, useAfterRender
        });
    })();
}
export const getUUID = () => _UUID.generate();

var _UUID = (function() {
    var self = {};
    var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
    self.generate = function() {
        var d0 = Math.random()*0xffffffff|0;
        var d1 = Math.random()*0xffffffff|0;
        var d2 = Math.random()*0xffffffff|0;
        var d3 = Math.random()*0xffffffff|0;
        return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
            lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
            lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
            lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
    }
    return self;
})();

export let getBoolString = value => value ? ' ' : '';

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const rangeArray = (n) => [...Array(n).keys()];

export const getStyleString = (style) => style.forEach();

