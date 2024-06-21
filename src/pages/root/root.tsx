import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { ApolloClientProvider } from "../../components/apollo-provider/apollo-provider";
import { MainMenu } from "../../components/main-menu/main-menu";
import styles from "./root.module.css";

export function Root() {
	const { isLoading, isAuthenticated } = useAuth0();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<ApolloClientProvider>
			<div className={styles.main_container}>
				<div className={styles.centered_layout_container}>
					<MainMenu></MainMenu>
					<Outlet></Outlet>
				</div>
			</div>
		</ApolloClientProvider>
	);
}
