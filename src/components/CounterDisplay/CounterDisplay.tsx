import React, { useEffect, useState } from "react";
import s from "./CounterDisplay.module.css";
import { ChangeCountValueDisplay } from "./ChangeCountValueDisplay/ChangeCountValueDisplay";
import { ControlPanel } from "./ControlPanel/ControlPanel";

type Type = {
	setStartValue: (value: number) => void;
	setMaxValue: (value: number) => void;
	setVisibleTrue: () => void;
	defaultStartValue: number;
	startCounterValue: number;
	maxCountValue: number;
};

export const CounterDisplay = (props: Type) => {
	const { setStartValue, setMaxValue, setVisibleTrue, defaultStartValue, startCounterValue, maxCountValue } = props;

	const incValue = () => {
		if (startCounterValue < maxCountValue) {
			setStartValue(startCounterValue + 1);
		}
	};

	const resetValue = () => {
		setStartValue(defaultStartValue);
		setMaxValue(defaultStartValue);
	};

	useEffect(() => {addToLocalStorage()}, [startCounterValue])
	useEffect(() => {getFromLocalStorage()}, [])
	
	const addToLocalStorage =()=>{
		localStorage.setItem('lastCountValue', JSON.stringify(startCounterValue))
	}
	const getFromLocalStorage =()=>{
		const valueAsString = localStorage.getItem("lastCountValue");
		if (valueAsString) {
			setStartValue(JSON.parse(valueAsString));
		}
	}

	return (
		<div className={s.display}>
			<ChangeCountValueDisplay value={startCounterValue} maxCountValue={maxCountValue} />
			<ControlPanel
				defaultStartValue={defaultStartValue}
				maxCountValue={maxCountValue}
				startCounterValue={startCounterValue}
				incValue={incValue}
				resetValue={resetValue}
				setVisibleTrue={setVisibleTrue}
			/>
		</div>
	);
};
