import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/font.css";
import "@/styles/globals.css";
import { HostnameProvider } from "@/Components/Provider/HostnameProvider";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <HostnameProvider>
        <Component {...pageProps} />
      </HostnameProvider>
    </DarkModeProvider>
  );
}
