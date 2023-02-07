import './App.scss';
import { Home } from './Pages/Home/Home';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

export function App() {
  return (
    <> 
      <Home/>
    </>
  );
}

AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false, 
  debounceDelay: 50, 
  throttleDelay: 99,   

  offset: 120, 
  delay: 0, 
  duration: 1000, 
  easing: 'ease', 
  once: true, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 
});