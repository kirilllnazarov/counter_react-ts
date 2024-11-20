import s from "./CounterDisplay.module.css";
import { ChangeCountValueDisplay } from "./ChangeCountValueDisplay/ChangeCountValueDisplay";
import { ControlPanel } from "./ControlPanel/ControlPanel";

type Type = {
	setStartValue: (value: number) => void;
	setMaxValue: (value: number) => void;
	setVisibleTrue: () => void;
	defaultStartValue: number;
	defaultMaxValue: number;
	startCounterValue: number;
	maxCounterValue: number;
};

export const CounterDisplay = (props: Type) => {
	const { setStartValue, setMaxValue, setVisibleTrue, defaultStartValue, startCounterValue, maxCounterValue } = props;

	const incValue = () => {
		if (startCounterValue < maxCounterValue) {
			setStartValue(startCounterValue + 1);
		}
	};

	const resetValue = () => {
		setStartValue(defaultStartValue);
		setMaxValue(defaultStartValue);
	};

	return (
		<div className={s.display}>
			<ChangeCountValueDisplay value={startCounterValue} maxCountValue={maxCounterValue} />
			<ControlPanel
				defaultStartValue={defaultStartValue}
				maxCountValue={maxCounterValue}
				startCounterValue={startCounterValue}
				incValue={incValue}
				resetValue={resetValue}
				setVisibleTrue={setVisibleTrue}
			/>
		</div>
	);
};
