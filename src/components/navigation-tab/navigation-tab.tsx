import React from "react";
import styles from "./navigation-tab.module.css";

type props = {
	children: React.ReactNode
}

export function NavigationTab({ children }: props){
	return (
		<button className={ styles.navigationTab }>
			{ children }
		</button>
	)
}