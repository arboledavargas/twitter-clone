import { Outlet } from "react-router-dom";
import { MainMenu } from "../../components/main-menu/main-menu";
import styles from "./root.module.css";

export function Root() {
	return (
			<div className={styles.main_container}>
				<div className={styles.centered_layout_container}>
					<MainMenu></MainMenu>
					<Outlet></Outlet>
				</div>
			</div>
	);
}
