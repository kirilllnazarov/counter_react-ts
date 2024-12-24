const initialState: StateType = { visible: false, error: false };

export const counterReducer = (state: StateType = initialState, action: ActionType): StateType => {
	switch (action.type) {
		case "SET_VISIBLE_TRUE":
			return { ...state, visible: true };
		case "SET_VISIBLE_FALSE":
			return { ...state, visible: false };
		case "SET_ERROR_TRUE":
			return { ...state, error: true };
		case "SET_ERROR_FALSE":
			return { ...state, error: false };
		default:
			return state;
	}
};

export type StateType = {
	visible: boolean;
	error: boolean;
};

export const setVisibleTrueAC = () => {
	return {
		type: "SET_VISIBLE_TRUE",
	} as const;
};

export const setVisibleFalseAC = () => {
	return {
		type: "SET_VISIBLE_FALSE",
	} as const;
};

export const setErrorTrueAC = () => {
	return {
		type: "SET_ERROR_TRUE",
	} as const;
};

export const setErrorFalseAC = () => {
	return {
		type: "SET_ERROR_FALSE",
	};
};

type SetVisibleTrueAT = ReturnType<typeof setVisibleTrueAC>;
type SetVisibleFalseAT = ReturnType<typeof setVisibleFalseAC>;
type SetErrorTrueAT = ReturnType<typeof setErrorTrueAC>;
type SetErrorFalseAT = ReturnType<typeof setErrorFalseAC>;

export type ActionType = SetVisibleTrueAT | SetVisibleFalseAT | SetErrorTrueAT | SetErrorFalseAT;
