// Import modules
import './form';
import './submit';

// Import CSS files
import '../css/index.css';

// Import Bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// Import database
import { initdb, getDb, postDb } from './database';


window.addEventListener('load', function() {
  initdb();
  
  // Add images on load
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});