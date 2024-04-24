const listaSpesa = [
    'pane',
    'pizza',
    'pasta',
    'latte',
    'biscotti',
    'acqua',
    'sale'
];

const listElement = document.querySelector('ul');

// for (let i = 0; i < listaSpesa.length; i++) {
//     const element = listaSpesa[i];
//     console.log(element)
// }

let i = 0;
while (i < listaSpesa.length) {
    const element = listaSpesa[i];
    console.log(element)
    i++
}
