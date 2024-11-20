import React, { ChangeEvent } from "react";
import s from "./UniversalInput.module.css";

type Type = {
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: number;
	title: string;
	error?: boolean;
};

export const UniversalInput = (props: Type) => {
	const { onChange, title, value, error } = props;
	return (
		<>
			<div className={s.input}>
				<label>{title}</label>
				<input className={error ? s.error : ""} type={"number"} value={value} onChange={onChange} />
			</div>
		</>
	);
};
