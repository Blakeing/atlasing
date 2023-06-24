import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SignIn } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <>
      <Header />
      <main className="container flex items-center justify-center grow">
        <SignIn />
      </main>
      <Footer />
    </>
  );
};

export default Page;
