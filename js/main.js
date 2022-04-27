import { inizializeNavigation } from './navigation.js';
import { inizializeBookmarkToggling } from './bookmark.js';
import { inizializeCardToggling } from './answers.js';
import { inizializeLogout } from './logout.js';

/* Card Bookmark Toggle */
inizializeBookmarkToggling();

/* Card Answer Toggle */
inizializeCardToggling();

/* Navigation */
inizializeNavigation();

/* LogoutButton */
inizializeLogout();
