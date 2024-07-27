import { useState, useEffect } from "react";
import styles from "./dateSelect.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from 'luxon';

enum months {
	'January' = 0,
	'February' ,
	'March' ,
	'April', 
	'May' ,
	'June' ,
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
} 

export function DateSelect({ onChange }:{ onChange: (date: Date) => void }){

	const [now] = useState(new Date());

	const [month, setMonth] = useState<number | undefined>(now.getMonth());
	const [day, setDay] = useState<number | undefined>(now.getDate());
	const [year, setYear] = useState<number | undefined>(now.getFullYear());
	const [currentYear] = useState((new Date()).getFullYear());

	useEffect(() => {
		if(day && year && month){
			const newDate = DateTime.fromObject({ day: day, month: month, year: year });
	
			if(newDate.isValid){
				onChange(newDate.toJSDate());
			}
		}
	}, [month, day, year]);

	return <div className={styles.date_select}>
		<div className={styles.select_button}>
			<label htmlFor="month">Month</label>
			<select name="month" value={month} onChange={(event) => setMonth(parseInt(event.target.value))} className={styles.select}>
				{Array.from({ length: 12 }).map((m, i) => <option value={i} key={i}>{ months[ i ] }</option>)}
			</select>
			<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
		</div>
		<div className={styles.select_button}>
			<label htmlFor="day">Day</label>
			<select name="day" value={day} onChange={(event) => setDay(parseInt(event.target.value))} className={styles.select}>
				{Array.from({ length: 31 }, (x, i) => i).map((d, i) => <option value={d+1} key={i}>{d+1}</option>)}
			</select>
			<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
		</div>
		<div className={styles.select_button}>
			<label htmlFor="year">Year</label>
			<select name="year" value={year} onChange={(event) => setYear(parseInt(event.target.value))} className={styles.select}>
				{Array.from({ length: 100 }, (x, i) => i).map((d, i) => <option value={currentYear - (i+1)} key={i}>{currentYear - (i+1)}</option>)}
			</select>
			<FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
		</div>
	</div>
}