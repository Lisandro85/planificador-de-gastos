export type BudgetAction = {
  type: "add-budget";
  payload: { budget: number };
};

export type BudgetState = {
  budget: number;
};

export const initialState: BudgetState = {
  budget: 0,
};

export const BudgetReducer = (
  state: BudgetState = initialState,
  action: BudgetAction
) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }
  return state;
};
