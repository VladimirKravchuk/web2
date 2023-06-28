import {
    createComponent, button, div, textInput, rangeArray, table, tr, td, getRandomInt
} from './dejavu.js';

const circles = createComponent(({useState, useRender}) => () => {
    const [getCount, setCount] = useState(1);
    const [getActiveLamps, setActiveLamps] = useState([]);

    const onchange = ({target}) => {
        setCount(Math.abs(parseInt(target.value)));
        setActiveLamps([]);
    };
    const onclick = () => {
        if(getActiveLamps().length === 0)
            setActiveLamps([0]);
        else
            setActiveLamps(
                [...new Set(
                    getActiveLamps()
                        .map(i => [i-1, i+1])
                        .reduce((prev, curr) => prev.concat(curr))
                        .filter(i => (0 <= i && i < getCount()))
                )]
            );
    };

    return useRender(() =>
        div()(
            textInput({onchange, value: getCount()})(),
            button({onclick})('Натиснути!'),
            table({id: 'bulbContainer'})(
                tr()(
                    ...rangeArray(Number.isInteger(getCount()) ? getCount() : 0).map(i =>
                        td({
                            className: getActiveLamps().includes(i) ? 'active' : 'inactive'
                        })()
                    )
                )
            )
        )
    );
});

document.getElementById('root').append(circles());
