import {
    createComponent, rangeArray, table, td, tr, div
} from './dejavu.js';

const gradient = createComponent(({ useState, useRender }) => () => {
    const [getChosenColors, setChosenColors] = useState([]);
    const colors = [
        '#8B0000', '#FF4500', '#FFFF00',
        '#00ab00', '#00ff00', '#00FFFF',
        '#2f2fff', '#00008B', '#414141'
    ];

    const onclick = (event) => {
        const target = event.target;
        if (target.tagName !== 'TD')
            return;

        const indexOfClicked = getClickedCellIndex(target);

        if (getChosenColors().includes(indexOfClicked))
            setChosenColors(getChosenColors().filter(i => i !== indexOfClicked));
        else
            setChosenColors([...getChosenColors(), indexOfClicked]);
    };

    const getClickedCellIndex = (target) => Array
        .from(document.getElementById('tableTask1').getElementsByTagName('td'))
        .map((cell, i) => [cell, i])
        .find(([cell, i]) => cell === target)[1];
    return useRender(() =>
        div({id: 'containerTask1'})(
            table({id: 'tableTask1', onclick})(
                ...rangeArray(3).map(i =>
                    tr()(
                        ...rangeArray(3).map(j => 3*i+j).map(index =>
                            td({
                                className: getChosenColors().includes(index) ? 'active' : '',
                                style: `background-color: ${colors[index]};`
                            })()
                        )
                    )
                )
            ),
            div({
                id: 'gradientTabTask1',
                style: getChosenColors().length > 1
                    ? `background-image: linear-gradient(${getChosenColors().map(i => colors[i]).join(', ')})`
                    : `background-color: ${colors[getChosenColors()[0]]}`
            })()
        )
    );
});

document.getElementById('root').append(gradient());
