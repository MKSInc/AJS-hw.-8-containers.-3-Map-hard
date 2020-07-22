export default class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.userSettings = new Map();

    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');
  }

  get settings() {
    const settings = new Map();
    for (const [key, value] of [...this.defaultSettings.entries()]) {
      if (this.userSettings.has(key)) settings.set(key, this.userSettings.get(key));
      else settings.set(key, value);
    }
    return settings;
  }
}
