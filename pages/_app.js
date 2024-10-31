// pages/_app.js
import '../styles/globals.css'; // Certifique-se de que o caminho está correto

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
