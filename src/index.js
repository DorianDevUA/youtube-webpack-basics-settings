import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';
import logo from './images/logocorel_new_23.01.21_mini.png';

const refs = {
  imageContainer: document.querySelector('.js-imageContainer'),
};

const image = new Image();
image.src = logo;
image.width = 100;
image.height = 100;
refs.imageContainer.append(image);

console.log(mult(2, 8));
console.log(sum(3, 4));
