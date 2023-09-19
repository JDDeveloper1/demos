// import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider attribute="class">

    // </ThemeProvider>
    <>
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;
