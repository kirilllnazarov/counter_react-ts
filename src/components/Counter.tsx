import s from "./Counter.module.css";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import { CounerSettingsMemo } from "./CounerSettings/CounerSettings";
import { CounterDisplayMemo } from "./CounterDisplay/CounterDisplay";
import { setErrorFalseAC, setErrorTrueAC, setVisibleFalseAC, setVisibleTrueAC, type StateType } from "./counterReducer";

export const defaultStartValue = 0;
const defaultMaxValue = 333;

export const Counter = () => {
	const selectCounter = (state: RootState): StateType => state.counter;
	const state = useAppSelector(selectCounter);
	const dispatch = useAppDispatch();

	const [startValue, setStartValue] = useState<number>(defaultStartValue);
	const [maxValue, setMaxValue] = useState<number>(defaultMaxValue);

	const setVisibleTrue = () => {
		dispatch(setVisibleTrueAC());
	};
	const setVisibleFalse = () => {
		dispatch(setVisibleFalseAC());
	};

	//work with local storage
	useEffect(() => {
		getStartFromLocalStorage();
		getMaxFromLocalStorage();
	}, []);

	useEffect(() => {
		localStorage.setItem("lastStartCountValue", JSON.stringify(startValue));
	}, [startValue]);

	useEffect(() => {
		localStorage.setItem("lastMaxCountValue", JSON.stringify(maxValue));
	}, [maxValue]);

	const getStartFromLocalStorage = () => {
		const startValueAsString = localStorage.getItem("lastStartCountValue");
		if (startValueAsString) {
			setStartValue(JSON.parse(startValueAsString));
		} else {
			setMaxValue(defaultStartValue);
		}
	};
	const getMaxFromLocalStorage = () => {
		const maxValueAsString = localStorage.getItem("lastMaxCountValue");
		if (maxValueAsString) {
			setMaxValue(JSON.parse(maxValueAsString));
		} else {
			setMaxValue(defaultMaxValue);
		}
	};

	// work with counter display component
	const incHandler = () => {
		if (startValue < maxValue) {
			setStartValue(startValue + 1);
		}
	};
	// const incHandlerUseMemo = useMemo(() => {
	// 	return incHandler;
	// }, [startValue, maxValue]);

	const resetHandler = () => {
		setStartValue(defaultStartValue);
		localStorage.clear();
	};
	// const resetHandlerUseMemo= useMemo(() => {
	// 	return resetHandler;
	// }, [startValue]);

	const settingsHandler = () => {
		setStartValue(defaultStartValue);
		setMaxValue(defaultStartValue);
		setVisibleTrue();
	};

	// work with counter settings component
	const addStartValue = (event: ChangeEvent<HTMLInputElement>) => {
		let newStartValue = Number(event.currentTarget.value);

		if (newStartValue >= defaultStartValue) {
			setStartValue(newStartValue);
		}
	};
	const addMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
		let newMaxValue = Number(event.currentTarget.value);

		if (newMaxValue > defaultStartValue) {
			setMaxValue(newMaxValue);
			dispatch(setErrorFalseAC());
		}
	};
	const addNewSettings = () => {
		if (maxValue) {
			setVisibleFalse();
		} else if (maxValue <= defaultStartValue) {
			dispatch(setErrorTrueAC());
		}
	};

	return (
		<div className={s.counterMain}>
			{state.visible ? (
				<CounerSettingsMemo
					startValue={startValue}
					maxValue={maxValue}
					errorMax={state.error}
					addStartValue={addStartValue}
					addMaxValue={addMaxValue}
					addNewSettings={addNewSettings}
				/>
			) : (
				<CounterDisplayMemo
					defaultStartValue={defaultStartValue}
					defaultMaxValue={defaultMaxValue}
					startValue={startValue}
					maxValue={maxValue}
					incHandler={incHandler}
					resetHandler={resetHandler}
					settingsHandler={settingsHandler}
				/>
			)}
		</div>
	);
};
// import React, { useState, useEffect, ChangeEvent, useReducer } from "react";
// import s from "./Counter.module.css";
// import { CounterDisplay } from "./CounterDisplay/CounterDisplay";
// import { CounerSettings } from "./CounerSettings/CounerSettings";
// import { reducer } from "./counterReducer";

// export const Counter = () => {
// 	const defaultStartValue = 0;
// 	const defaultMaxValue = 333;

// 	const [state, dispatch] = useReducer(reducer, { visible: false, error: false });

// 	const [startValue, setStartValue] = useState<number>(defaultStartValue);
// 	const [maxValue, setMaxValue] = useState<number>(defaultMaxValue);

// 	const setVisibleTrue = () => {
// 		dispatch({ type: "SET_VISIBLE_TRUE" });
// 	};
// 	const setVisibleFalse = () => {
// 		dispatch({ type: "SET_VISIBLE_FALSE" });
// 	};

// 	//work with local storage
// 	useEffect(() => {
// 		getStartFromLocalStorage();
// 		getMaxFromLocalStorage();
// 	}, []);

// 	useEffect(() => {
// 		localStorage.setItem("lastStartCountValue", JSON.stringify(startValue));
// 	}, [startValue]);

// 	useEffect(() => {
// 		localStorage.setItem("lastMaxCountValue", JSON.stringify(maxValue));
// 	}, [maxValue]);

// 	const getStartFromLocalStorage = () => {
// 		const startValueAsString = localStorage.getItem("lastStartCountValue");
// 		if (startValueAsString) {
// 			setStartValue(JSON.parse(startValueAsString));
// 		} else {
// 			setMaxValue(defaultStartValue);
// 		}
// 	};
// 	const getMaxFromLocalStorage = () => {
// 		const maxValueAsString = localStorage.getItem("lastMaxCountValue");
// 		if (maxValueAsString) {
// 			setMaxValue(JSON.parse(maxValueAsString));
// 		} else {
// 			setMaxValue(defaultMaxValue);
// 		}
// 	};

// 	// work with counter display component
// 	const incHandler = () => {
// 		if (startValue < maxValue) {
// 			setStartValue(startValue + 1);
// 		}
// 	};
// 	const resetHandler = () => {
// 		setStartValue(defaultStartValue);
// 		localStorage.clear()
// 	};
// 	const settingsHandler = () => {
// 		setStartValue(defaultStartValue);
// 		setMaxValue(defaultStartValue);
// 		setVisibleTrue();
// 	};

// 	// work with counter settings component
// 	const addStartValue = (event: ChangeEvent<HTMLInputElement>) => {
// 		let newStartValue = Number(event.currentTarget.value);

// 		if (newStartValue >= defaultStartValue) {
// 			setStartValue(newStartValue);
// 		}
// 	};
// 	const addMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
// 		let newMaxValue = Number(event.currentTarget.value);

// 		if (newMaxValue > defaultStartValue) {
// 			setMaxValue(newMaxValue);
// 			dispatch({ type: "SET_ERROR_FALSE" });
// 		}
// 	};
// 	const addNewSettings = () => {
// 		if (maxValue) {
// 			setVisibleFalse();
// 		} else if (maxValue <= defaultStartValue) {
// 			dispatch({ type: "SET_ERROR_TRUE" });
// 		}
// 	};

// 	const CounerSettingsMemo = React.memo(CounerSettings)
// 	const CounterDisplayMemo = React.memo(CounterDisplay)

// 	return (
// 		<div className={s.counterMain}>
// 			{state.visible ? (
// 				<CounerSettingsMemo
// 					startValue={startValue}
// 					maxValue={maxValue}
// 					errorMax={state.error}
// 					addStartValue={addStartValue}
// 					addMaxValue={addMaxValue}
// 					addNewSettings={addNewSettings}
// 				/>
// 			) : (
// 				<CounterDisplayMemo
// 					defaultStartValue={defaultStartValue}
// 					defaultMaxValue={defaultMaxValue}
// 					startValue={startValue}
// 					maxValue={maxValue}
// 					incHandler={incHandler}
// 					resetHandler={resetHandler}
// 					settingsHandler={settingsHandler}
// 				/>
// 			)}
// 		</div>
// 	);
// };
