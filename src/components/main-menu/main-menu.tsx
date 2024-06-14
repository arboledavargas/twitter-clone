import styles from "./main-menu.module.css";
import { MenuButton } from "../menu-button/menu-button";
import {
	faBars,
	faBell,
	faBookmark,
	faEllipsis,
	faEnvelope,
	faHouse,
	faMagnifyingGlass,
	faTerminal,
	faUser,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ActionButton } from "../action-button/action-button";
import { AccountButton } from "../account-button/account-button";

export function MainMenu() {
	return (
		<nav className={styles.side}>
			<ul className={styles.menu}>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faHouse} />
					<span>Home</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<span>Explore</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faBell} />
					<span>Notifications</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faEnvelope} />
					<span>Messages</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faTerminal} />
					<span>Grok</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faBars} />
					<span>Lists</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faBookmark} />
					<span>Bookmarks</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faUserGroup} />
					<span>Communities</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faXTwitter} />
					<span>Premium</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faUser} />
					<span>Profile</span>
				</MenuButton>
				<MenuButton to="/home">
					<FontAwesomeIcon icon={faEllipsis} />
					<span>More</span>
				</MenuButton>
			</ul>
			<ActionButton></ActionButton>
			<AccountButton></AccountButton>
		</nav>
	);
}
