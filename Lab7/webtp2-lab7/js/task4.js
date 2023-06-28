import {
    createComponent, button, table, tr, td, h1, div
} from './dejavu.js';

const people = createComponent(({useState, useRender}) => () => {
    const [getBasket, setBasket] = useState([]);
    const productList = ['Брюки', 'Сорочка', 'Шорти', 'Туфлі'];

    const onOrder = (productName) => () => {
        let basketItems = getBasket().slice();
        let orderedProduct = basketItems.find(({name}) => name === productName);

         if(orderedProduct)
             orderedProduct.quantity += 1;
         else
             basketItems.push({name: productName, quantity: 1});

        setBasket(basketItems);
    };
    return useRender(() =>
        div({id: 'rootDiv'})(
            h1()('Список товарів: '),
            table()(
                ...productList.map(product =>
                    tr()(
                        td()(product),
                        td()(
                            button({onclick: onOrder(product)})('Замовити')
                        )
                    )
                )
            ),
            getBasket().length > 0
                ? div()(
                    h1()('Кошик: '),
                    table()(
                        tr()(
                            td()('Товар'),
                            td()('Кількість')
                        ),
                        ...getBasket().map(({name, quantity}) =>
                            tr()(
                                td()(name),
                                td()(quantity)
                            )
                        )
                    )
                ) : ''
        )
    );
});

document.getElementById('root').append(people());
