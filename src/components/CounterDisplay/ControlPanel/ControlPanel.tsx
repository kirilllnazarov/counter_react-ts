import React from "react";
import s from "./ControlPanel.module.css";
import { UniversalButton } from "../../UniversalComponent/UniversalButton";

type Type = {
	defaultStartValue: number;
	maxCountValue: number;
	startCounterValue: number;
	incHandler: () => void;
	resetHandler: () => void;
	settingsHandler: () => void;
};
export const ControlPanel = (props: Type) => {
	const { defaultStartValue, maxCountValue, startCounterValue, incHandler, resetHandler, settingsHandler } = props;

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
