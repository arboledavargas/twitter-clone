import styles from './circlel-button-transparent.module.css'

export function CircleButtonTransparent({ children, count }:{ children: React.ReactNode, count: number }){
	return <div className={ styles.action_button }>
		<button className={ styles.icon }>{ children }</button>
		<span className={ styles.text }>{ count }</span>
	</div>
}