import { createStore, combineReducers } from '@reduxjs/toolkit';
import types from "./types";

interface InsuranceActions {
  type: string;
  payload: any
}
// Action Creators
const createClaim = (name: string, amount: number): InsuranceActions => {
  if (amount > 40) {
    return {
      type: types.CREATE_CLAIM,
      payload: {
        name,
        amount: 40
      }
    }
  }
  return {
    type: types.CREATE_CLAIM,
    payload: {
      name,
      amount
    }
  }
};

const createPolicy = (name: string): InsuranceActions => ({
  type: types.CREATE_POLICY,
  payload: {
    name: name,
    amount: 20
  }
});

const deletePolicy = (name: string): InsuranceActions => ({
  type: types.DELTE_POLICY,
  payload: {
    name: name
  }
});

// Reducers
const claimsHistory = (history: Array<object> = [], action: InsuranceActions): Array<object> => {
  if (action.type === types.CREATE_CLAIM) {
    return [...history, action.payload];
  }
  return history
};

const accounting = (wallet: number = 100, action: InsuranceActions): number => {
  if (action.type === types.CREATE_CLAIM) {
    return wallet - action.payload.amount;
  } else if (action.type === types.CREATE_POLICY) {
    return wallet + action.payload.amount;
  }
  return wallet;
}

const policies = (policyList: Array<object> = [], action: InsuranceActions): Array<object> => {
  if (action.type === types.CREATE_POLICY) {
    return [...policyList, action.payload.name];
  } else if (action.type === types.DELTE_POLICY) {
    return policyList.filter(poilcy => poilcy != action.payload.name);
  } else {
    return policyList;
  }
}

// Company setup
const reducers = combineReducers({
  accounting,
  claimsHistory,
  policies
});

const store = createStore(reducers);

store.dispatch(createPolicy('Alex'));