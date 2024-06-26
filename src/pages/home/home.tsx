import styles from "./home.module.css";
import { NavigationTab } from "../../components/navigation-tab/navigation-tab";
import { CogButton } from "../../components/cog-button/cog-button";
import { TweetCreator } from "../../components/tweet-creator/tweet-creator";
import { Outlet } from "react-router-dom";

export function Home() {
	return (
		<div className={ styles.container }>
			<nav className={ styles.nav }>
				<NavigationTab to="/home/foryou">
					<span>For you</span>
				</NavigationTab>
				<NavigationTab to="/home/foryou">
					<span>Following</span>
				</NavigationTab>
				<CogButton></CogButton>
			</nav>
			<div className={ styles.content }>
				<TweetCreator></TweetCreator>
				<Outlet></Outlet>
			</div>
		</div>
	);
}