import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ItemsProvider } from "@/contexts/ItemsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ItemsProvider>
        <Component {...pageProps} />
      </ItemsProvider>
    </>
  );
}
