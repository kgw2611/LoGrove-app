import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hansung.logrove',
  appName: 'Logrove',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
  },
};

export default config;