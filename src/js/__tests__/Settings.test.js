import Settings from '../Settings';

test('Settings getter should return user settings and not overridden default settings', () => {
  const commonSettings = new Settings({ theme: 'light' }, { music: 'off' });
  const testSettings = new Map([['theme', 'light'], ['music', 'off'], ['difficulty', 'easy']]);
  expect(commonSettings.settings).toEqual(testSettings);
});
