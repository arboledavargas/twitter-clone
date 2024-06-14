import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu-button.module.css";

type MenuButtonProps = {
	children: ReactNode;
	to: string;
};

export function MenuButton({ children, to }: MenuButtonProps) {
	return (
		<li className={styles.button}>
			<NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? "active" : ""
				}
			>
				{children}
			</NavLink>
		</li>
	);
}
