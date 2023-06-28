import {
    createComponent, div, textarea, button
} from './dejavu.js';

let lilCrud = createComponent(({useState, useRender, useAfterRender}) => () => {
    const [getActiveTextarea, setActiveTextarea] = useState(-1);
    const [getTexts, setTexts] = useState([
        'Клас визначає абстрактні характеристики деякої сутності, включно з характеристиками самої сутності ' +
        '(її атрибутами або властивостями) та діями, які вона здатна виконувати ' +
        '(її поведінкою, методами або можливостями).',
        'Окремий екземпляр класу (створюється після запуску програми та ініціалізації полів класу).',
        'Клас може мати «підкласи», спеціалізовані, розширені версії надкласу. ' +
        'Можуть навіть утворюватись цілі дерева успадкування.'
    ].map((text, id) => ({ id, text })));

    useAfterRender(() => document.getElementsByTagName('textarea')[0]?.focus());

    const onEdit = (id) => () => setActiveTextarea(id);
    const onDelete = (identifier) =>
        () => setTexts(getTexts().filter(({ id }) => id !== identifier));
    const onChange = (identifier) => ({target}) => {
        let texts = getTexts().slice();
        texts.find(({id}) => id === identifier).text = target.value;
        setTexts(texts);
    };

    return useRender(() =>
        div({id: 'containerTask3'})(
            ...getTexts().map(({ id, text }) => {
                return div({className: 'crudUnit'})(
                    button({className: 'deleteButton', onclick: onDelete(id)})(),
                    button({className: 'editButton', onclick: onEdit(id)})(),
                    getActiveTextarea() === id
                        ? textarea({
                            value: text, className: 'crudUnitText',
                            onchange: onChange(id), onblur: () => setActiveTextarea()
                        })()
                        : div({className: 'crudUnitText'})(text)
                );
            })
        )
    );
});

document.getElementById('root').append(lilCrud());
