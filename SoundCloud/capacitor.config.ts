import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SoundCloud',
  webDir: 'www',
  //CONFIG SERVER
    server: {
    androidScheme: 'http',  // Cambia a HTTP en lugar de HTTPS
    cleartext: true,  // Permite cleartext (HTTP)
    allowNavigation: ["107.20.197.243 "]
  },
    // Configuración específica para Android
  android: {
    allowMixedContent: true  // Permite contenido mixto (HTTPS + HTTP)
  }
};

export default config;
