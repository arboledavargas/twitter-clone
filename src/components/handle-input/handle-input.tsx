import styles from './handle-input.module.css'

export function HandleInput({ onChange }:{ onChange: (text: string) => void }){
	return <div className={styles.textinput}>
			<input type="text" onChange={(event) => onChange(event.target.value)}></input>
		</div>
}