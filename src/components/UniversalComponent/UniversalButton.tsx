import React, { ButtonHTMLAttributes } from "react";
import s from "./UniversalButton.module.css";

type Type = ButtonHTMLAttributes<HTMLButtonElement>;
export const UniversalButton = ({ onClick, children, ...rest }: Type) => {
	return (
		<button className={`${s.button} ${rest.disabled ? s.disabled : ''}`} onClick={onClick}>
			{children}
		</button>
	);
};
