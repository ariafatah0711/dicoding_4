import Home from '../pages/home';
import Dashboard from '../pages/user/dashboard';
('../pages/dashboard');
import Add from '../pages/user/add-story';
import Account from '../pages/user/account';
import Setting from '../pages/user/setting';

const routes = {
  '/': Home,
  '/user/dashboard.html': Dashboard,
  '/user/add-story.html': Add,
  '/user/account.html': Account,
  '/user/setting.html': Setting,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header-app');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer-app');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
