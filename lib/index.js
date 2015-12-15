if (process.env.BROWSER) {
    require('./scss/main.scss');
}

import React from 'react';
import {render} from 'react-dom';

import Lunar from './components/Lunar';

const rootElement = document.getElementById('app');

render(
    <Lunar />,
    rootElement
);
