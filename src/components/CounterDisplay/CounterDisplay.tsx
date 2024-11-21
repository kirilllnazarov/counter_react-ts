import s from "./CounterDisplay.module.css";
import { ChangeCountValueDisplay } from "./ChangeCountValueDisplay/ChangeCountValueDisplay";
import { ControlPanel } from "./ControlPanel/ControlPanel";

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

	return (
		<div className={s.display}>
			<ChangeCountValueDisplay value={startValue} maxCountValue={maxValue} />
			<ControlPanel
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
