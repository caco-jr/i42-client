export interface ConfigurationInterface {
  configuration: Config;
}

interface Config extends ColorModeInterface {
  fontSize: string;
}

export interface ColorModeInterface {
  colorMode: 'light' | 'dark';
}
