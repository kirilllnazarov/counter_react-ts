import React from "react";
import s from "./ControlPanel.module.css";
import { UniversalButton } from "../../UniversalComponent/UniversalButton";

type Type = {
	defaultStartValue: number;
	maxCountValue: number;
	startCounterValue: number;
	incValue: () => void;
	resetValue: () => void;
	setVisibleTrue: () => void;
};
export const ControlPanel = (props: Type) => {
	const { defaultStartValue, maxCountValue, startCounterValue, incValue, resetValue, setVisibleTrue } = props;

	const incHandler = () => {
		incValue();
	};
	const resetHandler = () => {
		resetValue();
	};
	const settingsHandler = () => {
		setVisibleTrue();
	};

	return (
		<div className={s.controlPanel}>
			<UniversalButton onClick={incHandler} disabled={startCounterValue !== maxCountValue ? false : true}>
				inc
			</UniversalButton>
			<UniversalButton onClick={resetHandler} disabled={maxCountValue > defaultStartValue ? false : true}>
				rst
			</UniversalButton>
			<UniversalButton onClick={settingsHandler}>set</UniversalButton>
		</div>
	);
};
