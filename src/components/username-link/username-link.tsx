import styles from "./username-link.module.css";

export function UserNameLink({ children }:{ children: React.ReactNode }){
	return <span className={ styles.usernamelink }>{ children }</span>
}