/**
 * Application entry point
 */
import analytics from 'universal-ga';

// Load application assets
import 'styles/index.scss';
import 'favicons/favicons.js';
import 'images/images.js';

// ================================
// START YOUR APP HERE
// ================================

if (process.env.NODE_ENV !== 'dev') {
  analytics.initialize('UA-12007772-1');
  analytics.pageview('/');
}
