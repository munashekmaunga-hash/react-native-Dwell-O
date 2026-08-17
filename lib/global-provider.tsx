import React, { createContext, useContext, useState } from "react";
import images from "../constants/image";

// 1. We define exactly what a Dwello User looks like
interface User {
  firstName: string;
  fullName: string;
  university: string;
  location: string;
  avatar: any;
}

interface GlobalContextType {
  user: User | null;
  isLogged: boolean;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  // 2. We set the dynamic user data here.
  // Later, this will be connected to your login database!
  const [user, setUser] = useState<User | null>({
    firstName: "Munashe",
    fullName: "Munashe Maunga",
    university: "Curtin University",
    location: "Perth, Australia",
    avatar: images.avatar,
  });

  return (
      <GlobalContext.Provider value={{ user, isLogged: !!user }}>
        {children}
      </GlobalContext.Provider>
  );
};

// 3. This is the hook we will use on your screens to grab the user data
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};