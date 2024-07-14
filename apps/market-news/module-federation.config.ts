import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'market-news',
  exposes: {
    './Routes': 'apps/market-news/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
