// TODO: write your code here
import Settings from './Settings';

const settings = new Settings();
settings.userSettings.set('theme', 'light');
// eslint-disable-next-line no-console
console.log(settings.settings);
