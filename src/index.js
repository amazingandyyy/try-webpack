// import sum from './sum';
// import './image_viewer';

// const total = sum(533, 4);

// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
    System.import('./image_viewer').then(module => {
        console.log(module.default);
        module.default()
    });
}

document.body.appendChild(button);