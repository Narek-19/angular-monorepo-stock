import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'article-details',
  exposes: {
    './Routes': 'apps/article-details/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
