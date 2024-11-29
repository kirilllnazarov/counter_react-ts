import s from "./CounterDisplay.module.css";
import { ChangeCountValueDisplayMemo } from "./ChangeCountValueDisplay/ChangeCountValueDisplay";
import { ControlPanelMemo } from "./ControlPanel/ControlPanel";
import React from "react";

type Type = {
	incHandler: () => void;
	resetHandler: () => void;
	settingsHandler: () => void;
	defaultStartValue: number;
	defaultMaxValue: number;
	startValue: number;
	maxValue: number;
};

export const CounterDisplay = (props: Type) => {
	const { incHandler, resetHandler, settingsHandler, defaultStartValue, defaultMaxValue, startValue, maxValue } = props;
	console.log('COUNTER DISPLAY rendered');

	return (
		<div className={s.display}>
			<ChangeCountValueDisplayMemo value={startValue} maxCountValue={maxValue} />
			<ControlPanelMemo
				defaultStartValue={defaultStartValue}
				maxCountValue={maxValue}
				startCounterValue={startValue}
				incHandler={incHandler}
				resetHandler={resetHandler}
				settingsHandler={settingsHandler}
			/>
		</div>
	);
};

export const CounterDisplayMemo = React.memo(CounterDisplay)
