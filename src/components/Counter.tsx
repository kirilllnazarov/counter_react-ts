import React, { useState, useEffect, ChangeEvent, useReducer } from "react";
import s from "./Counter.module.css";
import { CounterDisplay } from "./CounterDisplay/CounterDisplay";
import { CounerSettings } from "./CounerSettings/CounerSettings";
import { reducer } from "./reducer";

export const Counter = () => {
	const defaultStartValue = 0;
	const defaultMaxValue = 333;

	const [state, dispatch] = useReducer(reducer, { visible: false, error: false });

	const [startValue, setStartValue] = useState<number>(defaultStartValue);
	const [maxValue, setMaxValue] = useState<number>(defaultMaxValue);

	const setVisibleTrue = () => {
		dispatch({ type: "SET_VISIBLE_TRUE" });
	};
	const setVisibleFalse = () => {
		dispatch({ type: "SET_VISIBLE_FALSE" });
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
	const resetHandler = () => {
		setStartValue(defaultStartValue);
	};
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
			dispatch({ type: "SET_ERROR_FALSE" });
		}
	};
	const addNewSettings = () => {
		if (maxValue) {
			setVisibleFalse();
		} else if (maxValue <= defaultStartValue) {
			dispatch({ type: "SET_ERROR_TRUE" });
		}
	};

	return (
		<div className={s.counterMain}>
			{state.visible ? (
				<CounerSettings
					startValue={startValue}
					maxValue={maxValue}
					errorMax={state.error}
					addStartValue={addStartValue}
					addMaxValue={addMaxValue}
					addNewSettings={addNewSettings}
				/>
			) : (
				<CounterDisplay
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
// import React, { useState, useEffect, ChangeEvent } from "react";
// import s from "./Counter.module.css";
// import { CounterDisplay } from "./CounterDisplay/CounterDisplay";
// import { CounerSettings } from "./CounerSettings/CounerSettings";

// export const Counter = () => {
// 	const defaultStartValue = 0;
// 	const defaultMaxValue = 333;

// 	const [visibleSettings, setVisibleSettings] = useState(false);
// 	const [startValue, setStartValue] = useState<number>(defaultStartValue);
// 	const [maxValue, setMaxValue] = useState<number>(defaultMaxValue);
// 	const [errorMax, setMaxError] = useState<boolean>(false);

// 	const setVisibleTrue = () => {
// 		setVisibleSettings(true);
// 	};
// 	const setVisibleFalse = () => {
// 		setVisibleSettings(false);
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
// 		setMaxValue(defaultMaxValue);
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
// 			setMaxError(false);
// 		}
// 	};
// 	const addNewSettings = () => {
// 		if (maxValue) {
// 			setVisibleFalse();
// 		} else if (maxValue <= defaultStartValue) {
// 			setMaxError(true);
// 		}
// 	};

// 	return (
// 		<div className={s.counterMain}>
// 			{visibleSettings ? (
// 				<CounerSettings
// 					startValue={startValue}
// 					maxValue={maxValue}
// 					errorMax={errorMax}
// 					addStartValue={addStartValue}
// 					addMaxValue={addMaxValue}
// 					addNewSettings={addNewSettings}
// 				/>
// 			) : (
// 				<CounterDisplay
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
