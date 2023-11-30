"use client";
import { usePathname } from "next/navigation";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const ActiveTapContext = createContext<string | undefined>(undefined);
export const useActiveTap = () => {
  const value = useContext(ActiveTapContext);
  if (value === undefined) throw new Error("Missing AppProvider");
  return value;
};

type Props = {
  children: ReactNode;
};

export function AppProvider(props: Props) {
  const [activeTab, setActiveTab] = useState("/");
  const pathname = usePathname();

  // define side-effects for the this slice
  useEffect(() => {
    if (pathname === "/") setActiveTab("home");
    else if (pathname.includes("library")) setActiveTab("library");
    else if (pathname.includes("plan")) setActiveTab("plan");
    else if (pathname.includes("tools")) setActiveTab("tools");
  }, [pathname]);

  // inject inital values and funtions to be used within this slice
  return (
    <ActiveTapContext.Provider value={activeTab}>
      {props.children}
    </ActiveTapContext.Provider>
  );
}
