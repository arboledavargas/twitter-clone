import styles from "./home.module.css";
import { NavigationTab } from "../../components/navigation-tab/navigation-tab";
import { CogButton } from "../../components/cog-button/cog-button";
import { Feed } from "../feed/feed";

export function Home() {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<NavigationTab>
					<span>For you</span>
				</NavigationTab>
				<NavigationTab>
					<span>Following</span>
				</NavigationTab>
				<CogButton></CogButton>
			</nav>
			<Feed></Feed>
		</div>
	);
}