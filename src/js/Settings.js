/* eslint-disable no-underscore-dangle */
export default class Settings {
  constructor(...settings) {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.userSettings = new Map(settings.map((setting) => Object.entries(setting)[0]));
    this._settings = new Map();

    for (const [key, value] of [...this.defaultSettings.entries()]) {
      if (this.userSettings.has(key)) this._settings.set(key, this.userSettings.get(key));
      else this._settings.set(key, value);
    }
  }

  get settings() {
    return this._settings;
  }
}
