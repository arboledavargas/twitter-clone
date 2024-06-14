import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./text-button.module.css";

type props = {
	children: React.ReactNode;
}

export function TextButton({ children }: props){
	return <button className={style.button}>
		<FontAwesomeIcon icon={faEarthAmericas} />
		{children}
	</button>
}