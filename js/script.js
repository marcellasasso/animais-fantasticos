import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import InitAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import InitFuncionamento from './modules/funcionamento.js';
import InitFetchAnimais from './modules/fetch-animais.js';
import InitFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollsuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollsuave.init();

initAnimacaoScroll();
InitAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
InitFuncionamento();
InitFetchAnimais();
InitFetchBitcoin();
