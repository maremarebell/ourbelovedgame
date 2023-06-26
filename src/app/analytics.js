import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-B94P98TLYW');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
