import { createStore, combineReducers } from '@reduxjs/toolkit';
import types from "./types";

const createClaim = (name: string, amount: number): object => (
  {
    type: types.CREATE_CLAIM,
    payload: {
      name,
      amount
    }
  }
);