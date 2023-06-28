import {
    createComponent, button, div, textInput, getRandomInt, rangeArray
} from './dejavu.js';

const circles = createComponent(({useState, useRender}) => () => {
    const [getCount, setCount] = useState(1);

    const onchange = ({target}) => setCount(parseInt(target.value));

    const onclick = () => {
        if(getCount() > 0)
            rangeArray(getCount()).forEach(() => appendCircle());
    };
    const appendCircle = () =>
        document.getElementById('canvas')
            .append(createCircle(getRandomInt(10, 50)));

    const createCircle = (radius) =>
        div({
            onclick: ({target}) => target.remove(),
            style: `
                width: ${2*radius}px;
                height: ${2*radius}px;
                top: ${getRandomInt(0, 400 - 2 - 2*radius)}px;
                left: ${getRandomInt(0, 400 - 2 - 2*radius)}px;
            `
        })();

    const canvas = div({id: 'canvas'})();

    return useRender(() =>
        div({id: 'container'})(
            button({onclick})('Побудувати!'),
            textInput({onchange, value: getCount()})(),
            canvas
        )
    );
});

document.getElementById('root').append(circles());
