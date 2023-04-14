import { createContext, useContext, useState } from 'react';

// Initial State for user state
const initialState = {
  first: 'Jon',
  last: 'ho',
};

// Schema for user state
type UserState = typeof initialState;

// Schema for context
interface ContextType {
  user: typeof initialState;
  setUser: React.Dispatch<React.SetStateAction<UserState>>;
}

// Create Context
const context = createContext<ContextType | null>(null);

// Schema for children in context component
interface Props {
  children: React.ReactNode;
}

export const UseContextComponent = ({ children }: Props) => {
  const [user, setUser] = useState<UserState>(initialState);

  // ctx will follow schema of context type
  const ctx: ContextType = {
    user: user,
    setUser: setUser,
  };

  return <context.Provider value={ctx}>{children}</context.Provider>;
};

// Export as useContext
export const useGlobalUserContext = () => useContext(context);

export default UseContextComponent;
