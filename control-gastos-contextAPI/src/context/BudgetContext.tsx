import { useReducer, createContext, ReactNode } from "react";
import {
  BudgetAction,
  BudgetReducer,
  BudgetState,
  initialState,
} from "../reducer/budget-reducer";

type BudgetContextPops = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetAction>;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextPops>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(BudgetReducer, initialState);
  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
