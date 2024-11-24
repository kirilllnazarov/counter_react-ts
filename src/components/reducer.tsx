

const SET_VISIBLE_TRUE = "SET_VISIBLE_TRUE";
const SET_VISIBLE_FALSE = "SET_VISIBLE_FALSE";
const SET_ERROR_TRUE = "SET_ERROR_TRUE";
const SET_ERROR_FALSE = "SET_ERROR_FALSE";

export type StateType = {
    visible: boolean;
    error: boolean;
};
export type ActionType = {
    type: string;
};

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case SET_VISIBLE_TRUE:
            return { ...state, visible: true };
        case SET_VISIBLE_FALSE:
            return { ...state, visible: false };
        case SET_ERROR_TRUE:
            return { ...state, error: true };
        case SET_ERROR_FALSE:
            return { ...state, error: false };
        default:
            throw new Error("incorrect action type");
    }
};