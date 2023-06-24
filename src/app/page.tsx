import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Header />
      <main className="container grow">page</main>
      <Footer />
    </>
  );
};

export default page;
