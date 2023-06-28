import {
    createComponent, rangeArray, table, td, tr, div
} from './dejavu.js';
let canvas = createComponent(({ useState, useRender }) => () => {
    const [getChosenColor, setChosenColor] = useState(-1);
    const colors = [
        '#8B0000', '#FF4500', '#FFFF00',
        '#00ab00', '#00ff00', '#00FFFF',
        '#2f2fff', '#00008B', '#414141'
    ];

    const onColorClick = ({ target }) => {
        if (target.tagName != 'TD') return;
        setChosenColor(getClickedCellIndex(target));
    };

    const getClickedCellIndex = (target) => Array
        .from(document.getElementById('tableTask1').getElementsByTagName('td'))
        .map((cell, i) => [cell, i])
        .find(([cell, i]) => cell === target)[1];

    const onCanvasClick = ({ target }) => {
        if (target.tagName != 'TD') return;
        target.style.backgroundColor = colors[getChosenColor()];
    };

    const canvas =
        table({id: 'tableTask2', onclick: onCanvasClick})(
            ...rangeArray(20).map(() =>
                tr()(
                    ...rangeArray(40).map(() =>
                        td()()
                    )
                )
            )
        );

    return useRender(() =>
        div({id: 'containerTask1'})(
            table({id: 'tableTask1', onclick: onColorClick})(
                ...rangeArray(3).map(i =>
                    tr()(
                        ...rangeArray(3).map(j => 3*i+j).map(index =>
                            td({
                                className: getChosenColor() === index ? 'active' : '',
                                style: `background-color: ${colors[index]};`
                            })()
                        )
                    )
                )
            ),
            canvas
        )
    );
});

document.getElementById('root').append(canvas());
