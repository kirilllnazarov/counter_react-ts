import React, { useState } from "react";
import s from "./Counter.module.css";
import { CounterDisplay } from "./CounterDisplay/CounterDisplay";
import { CounerSettings } from "./CounerSettings/CounerSettings";

export const Counter = () => {
	const defaultStartValue = 0;
	
	const [visibleSettings, setVisibleSettings] = useState(false);
	const [startValue, setStartValue] = useState<number>(defaultStartValue);
	const [maxValue, setMaxValue] = useState<number>(defaultStartValue);

	const setVisibleTrue = () => {
		setVisibleSettings(true);
	};
	const setVisibleFalse = () => {
		setVisibleSettings(false);
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
					setStartValue={setStartValue}
					setMaxValue={setMaxValue}
					setVisibleTrue={setVisibleTrue}
					startCounterValue={startValue}
					maxCountValue={maxValue}
				/>
			)}
		</div>
	);
};
