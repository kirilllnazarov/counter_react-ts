import React, { ChangeEvent, useState } from "react";
import s from "./CounerSettings.module.css";
import { UniversalButton } from "../UniversalComponent/UniversalButton";
import { CounterSettingsInputsPanel } from "./CounterSettingsInputsPanel/CounterSettingsInputsPanel";

type Type = {
	defaultStartValue: number;
	startValue: number;
	maxValue: number;
	setVisibleFalse: () => void;
	setStartValue: (value: number) => void;
	setMaxValue: (value: number) => void;
};

export const CounerSettings = (props: Type) => {
	const { defaultStartValue, startValue, maxValue, setVisibleFalse, setStartValue, setMaxValue } = props;

	const [errorMax, setMaxError] = useState<boolean>(false);

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
			setMaxError(false);
		}
	};

	const addNewSettings = () => {
		if (maxValue) {
			setVisibleFalse();
		} else if (maxValue <= defaultStartValue) {
			setMaxError(true);
		}
	};

	return (
		<div className={s.settings}>
			<CounterSettingsInputsPanel
				errorMax={errorMax}
				startValue={startValue}
				maxValue={maxValue}
				addStartValue={addStartValue}
				addMaxValue={addMaxValue}
			/>
			<div className={s.error}>{errorMax ? "Enter max value!" : ""}</div>
			<div className={s.buttonPanel}>
				<UniversalButton onClick={addNewSettings} disabled={maxValue ? false : true}>
					set
				</UniversalButton>
			</div>
		</div>
	);
};
