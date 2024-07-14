import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'symbol-news',
  exposes: {
    './Routes': 'apps/symbol-news/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
