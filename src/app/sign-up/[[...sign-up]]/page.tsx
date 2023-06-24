import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SignUp } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <>
      <Header />
      <main className="container flex items-center justify-center grow">
        <SignUp />
      </main>
      <Footer />
    </>
  );
};

export default Page;
