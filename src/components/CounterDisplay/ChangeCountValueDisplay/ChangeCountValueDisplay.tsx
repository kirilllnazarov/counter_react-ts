import React from "react";
import s from "./ChangeCountValueDisplay.module.css";

type Type = {
	value: number;
	maxCountValue: number;
};
export const ChangeCountValueDisplay = (props: Type) => {
	const { value, maxCountValue } = props;

	return <div className={value < maxCountValue ? s.valueDisplay : s.maxValueDisplay}>{value}</div>;
};
