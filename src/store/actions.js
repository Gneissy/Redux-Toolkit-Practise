// importing dependencies
import { createAction } from "@reduxjs/toolkit";

// This is manually created action, like before.
// app/reset might be everything i want, just needs to be unique. 
export const reset = createAction("app/reset");
