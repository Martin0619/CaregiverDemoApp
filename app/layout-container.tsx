"use client";
import { FC, ReactNode } from "react";
import Footer from "~/components/footer/footer.component";
import Header from "~/components/header/header.component";
import { useActiveTap } from "~/contexts/app.context";

type Props = {
  children: ReactNode;
};

const RootLayoutContainer: FC<Props> = ({ children }) => {
  const activeTab = useActiveTap();

  return (
    <>
      <Header activeTab={activeTab} />
      {children}
      <Footer activeTab={activeTab} />
    </>
  );
};

export default RootLayoutContainer;
