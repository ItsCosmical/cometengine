import GUI from './containers/gui.jsx';
import AppStateHOC from './lib/app-state-hoc.jsx';
import GuiReducer, {guiInitialState, guiMiddleware, initEmbedded, initFullScreen, initPlayer} from './reducers/gui';
import LocalesReducer, {localesInitialState, initLocale} from './reducers/locales';
import {ScratchPaintReducer} from 'scratch-paint';
import {setFullScreen, setPlayer} from './reducers/mode';
import {remixProject} from './reducers/project-state';
import {setAppElement} from 'react-modal';
// --- COMET ENGINE: TB3 THEME INJECTOR ---
const tb3Style = document.createElement('style');
tb3Style.textContent = `
    /* Force Terminal Colors */
    body, .blocklySvg, .blocklyMainBackground, [class*="gui_page-wrapper"] {
        background-color: #000000 !important;
        fill: #000000 !important;
    }
    /* Matrix Green Text & Blocks */
    .blocklyPath {
        fill: #000000 !important;
        stroke: #00ff41 !important;
        stroke-width: 1.5px !important;
    }
    .blocklyText, * {
        fill: #00ff41 !important;
        color: #00ff41 !important;
        font-family: 'Courier New', monospace !important;
        text-shadow: 0 0 5px #00ff41;
    }
    /* Darken Menus */
    [class*="gui_menu-bar"], [class*="asset-panel"] {
        background-color: #050505 !important;
        border: 1px solid #00ff41 !important;
    }
`;
document.head.appendChild(tb3Style);


const guiReducers = {
    locales: LocalesReducer,
    scratchGui: GuiReducer,
    scratchPaint: ScratchPaintReducer
};

export {
    GUI as default,
    AppStateHOC,
    setAppElement,
    guiReducers,
    guiInitialState,
    guiMiddleware,
    initEmbedded,
    initPlayer,
    initFullScreen,
    initLocale,
    localesInitialState,
    remixProject,
    setFullScreen,
    setPlayer
};
