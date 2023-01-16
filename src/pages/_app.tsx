import { type AppType } from "next/app";
import { type Session } from "next-auth";
import "react-toastify/dist/ReactToastify.min.css";
import { SessionProvider } from "next-auth/react";
// import { api } from "../utils/api";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import { api } from "../utils/api";

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ToastContainer />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
