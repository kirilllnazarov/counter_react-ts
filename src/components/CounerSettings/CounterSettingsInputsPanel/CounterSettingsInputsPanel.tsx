import React, { ChangeEvent } from "react";
import s from "./CounterSettingsInputsPanel.module.css";
import { UniversalInput } from "../../UniversalComponent/UniversalInput";

type Type = {
	startValue: number;
	maxValue: number;
	errorMax: boolean;
	addStartValue: (event: ChangeEvent<HTMLInputElement>) => void;
	addMaxValue: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const CounterSettingsInputsPanel = (props: Type) => {
	const { startValue, maxValue, errorMax, addStartValue, addMaxValue } = props;

	return (
		<div className={s.inputsPanel}>
			<UniversalInput title={"Start value:"} value={startValue} onChange={addStartValue} />
			<UniversalInput error={errorMax} title={"Max value:"} value={maxValue} onChange={addMaxValue} />
		</div>
	);
};
