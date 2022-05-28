import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './styles/style.css';
import './script/component/app-bar.js';
import './script/component/hero-display';
import './script/component/wave-shape.js';
import './script/component/footer.js';
import main from './script/view/main.js';

document.addEventListener('DOMContentLoaded', main);
