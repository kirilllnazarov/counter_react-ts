import React, { ChangeEvent } from "react";
import { UniversalButton } from "../UniversalComponent/UniversalButton";
import s from "./CounerSettings.module.css";
import { CounterSettingsInputsPanelMemo } from "./CounterSettingsInputsPanel/CounterSettingsInputsPanel";

type Type = {
	startValue: number;
	maxValue: number;
	errorMax: boolean;
	addStartValue: (event: ChangeEvent<HTMLInputElement>) => void;
	addMaxValue: (event: ChangeEvent<HTMLInputElement>) => void;
	addNewSettings: () => void;
};

export const CounerSettings = (props: Type) => {
	const { startValue, maxValue, errorMax, addStartValue, addMaxValue, addNewSettings } = props;
	console.log('COUNTER settings rendered');

	return (
		<div className={s.settings}>
			<CounterSettingsInputsPanelMemo
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

export const CounerSettingsMemo = React.memo(CounerSettings)