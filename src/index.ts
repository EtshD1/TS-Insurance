import { createStore, combineReducers } from '@reduxjs/toolkit';
import types from "./types";

// Action Creators
const createClaim = (name: string, amount: number): object => (
  {
    type: types.CREATE_CLAIM,
    payload: {
      name,
      amount
    }
  }
);

const createPolicy = (name: string): object => ({
  type: types.CREATE_POLICY,
  paylord: {
    name: name,
    amount: 20
  }
});

const deletePolicy = (name: string): object => ({
  type: types.CREATE_POLICY,
  paylord: {
    name: name
  }
});

// Reducers
const claimsHistory = (history: Array<object>, action: { type: string, payload: object }): Array<object> => {
  if (action.type === types.CREATE_CLAIM) {
    return [...history, action.payload];
  }
  return history
};