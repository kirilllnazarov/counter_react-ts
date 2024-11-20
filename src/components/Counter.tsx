import React, { useState, useEffect } from "react";
import s from "./Counter.module.css";
import { CounterDisplay } from "./CounterDisplay/CounterDisplay";
import { CounerSettings } from "./CounerSettings/CounerSettings";

export const Counter = () => {
	const defaultStartValue = 0;
	const defaultMaxValue = 333;

	const [visibleSettings, setVisibleSettings] = useState(false);
	const [startValue, setStartValue] = useState<number>(defaultStartValue);
	const [maxValue, setMaxValue] = useState<number>(defaultMaxValue);

	const setVisibleTrue = () => {
		setVisibleSettings(true);
	};
	const setVisibleFalse = () => {
		setVisibleSettings(false);
	};

	useEffect(() => {
		getStartFromLocalStorage();
		getMaxFromLocalStorage();
	}, []);

	useEffect(() => {
		addStartToLocalStorage();
	}, [startValue]);

	useEffect(() => {
		addMaxToLocalStorage();
	}, [maxValue]);

	const addStartToLocalStorage = () => {
		localStorage.setItem("lastStartCountValue", JSON.stringify(startValue));
	};

	const addMaxToLocalStorage = () => {
		localStorage.setItem("lastMaxCountValue", JSON.stringify(maxValue));
	};

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

	return (
		<div className={s.counterMain}>
			{visibleSettings ? (
				<CounerSettings
					defaultStartValue={defaultStartValue}
					setVisibleFalse={setVisibleFalse}
					startValue={startValue}
					maxValue={maxValue}
					setStartValue={setStartValue}
					setMaxValue={setMaxValue}
				/>
			) : (
				<CounterDisplay
					defaultStartValue={defaultStartValue}
					defaultMaxValue={defaultMaxValue}
					setStartValue={setStartValue}
					setMaxValue={setMaxValue}
					setVisibleTrue={setVisibleTrue}
					startCounterValue={startValue}
					maxCounterValue={maxValue}
				/>
			)}
		</div>
	);
};
