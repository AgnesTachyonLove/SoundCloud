import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'SoundCloud',
  webDir: 'www',
  //CONFIG SERVER
    server: {
    androidScheme: 'http',  // Cambia a HTTP en lugar de HTTPS
    cleartext: true,  // Permite cleartext (HTTP)
    allowNavigation: ["balanceador-1719586101.us-east-1.elb.amazonaws.com"]
  },
    // Configuración específica para Android
  android: {
    allowMixedContent: true  // Permite contenido mixto (HTTPS + HTTP)
  }
};

export default config;
