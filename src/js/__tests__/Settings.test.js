import Settings from '../Settings';

const settings = new Settings();

test('The Settings class should contain the default settings', () => {
  const testDefSettings = new Map();
  testDefSettings.set('theme', 'dark');
  testDefSettings.set('music', 'trance');
  testDefSettings.set('difficulty', 'easy');
  expect(settings.defaultSettings).toEqual(testDefSettings);
});

settings.userSettings.set('theme', 'light');

test('The Settings class can contain user settings', () => {
  const testUserSettings = new Map();
  testUserSettings.set('theme', 'light');
  expect(settings.userSettings).toEqual(testUserSettings);
});

test('Settings getter should return user settings and not overridden default settings', () => {
  const testSettings = new Map();
  testSettings.set('theme', 'light');
  testSettings.set('music', 'trance');
  testSettings.set('difficulty', 'easy');
  expect(settings.settings).toEqual(testSettings);
});
