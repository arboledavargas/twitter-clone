import { useState } from "react";
import styles from "./dateSelect.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export function DateSelect(){

	const [month, setMonth] = useState<string | undefined>();
	const [day, setDay] = useState<string | undefined>();
	const [year, setYear] = useState<string | undefined>();
	const [currentYear] = useState((new Date()).getFullYear());


	return <div className={styles.date_select}>
		<div className={styles.select_button}>
			<label htmlFor="month">Month</label>
			<select name="month" value={month} onChange={(event) => setMonth(event.target.value)} className={styles.select}>
				{['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, i) => <option value={i} key={i}>{m}</option>)}
			</select>
			<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
		</div>
		<div className={styles.select_button}>
			<label htmlFor="day">Day</label>
			<select name="day" value={day} onChange={(event) => setDay(event.target.value)} className={styles.select}>
				{Array.from({ length: 31 }, (x, i) => i).map((d, i) => <option value={d+1} key={i}>{d+1}</option>)}
			</select>
			<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
		</div>
		<div className={styles.select_button}>
			<label htmlFor="year">Year</label>
			<select name="year" value={day} onChange={(event) => setYear(event.target.value)} className={styles.select}>
				{Array.from({ length: 100 }, (x, i) => i).map((d, i) => <option value={currentYear - (i+1)} key={i}>{currentYear - (i+1)}</option>)}
			</select>
			<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
		</div>
	</div>
}