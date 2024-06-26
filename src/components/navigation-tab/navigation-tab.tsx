import React from "react";
import styles from "./navigation-tab.module.css";
import { NavLink } from "react-router-dom";

type props = {
	children: React.ReactNode,
	to: string
}

export function NavigationTab({ children, to }: props){
	return (
		<NavLink to={ to } className={ styles.navigationTab }>
			{ children }
		</NavLink>
	)
}