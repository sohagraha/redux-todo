import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const statusChanged = (status) => ({
    type: STATUSCHANGED,
    payload: status,
});

export const colorChanged = (color, changeType) => ({
    type: COLORCHANGED,
    payload: { color, changeType },
});