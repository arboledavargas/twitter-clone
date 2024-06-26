import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { MainMenu } from "../../components/main-menu/main-menu";
import styles from "./root.module.css";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { CREATE_USER } from "../../graphql-queries";

export function Root() {
	const { isLoading, isAuthenticated, user } = useAuth0();
	const [createuser, { loading: isCreateUserLoading, data: createUserData, error, called: createUserCalled }] = useMutation(CREATE_USER);

	useEffect(() => {
		if (isAuthenticated && user?.sub) {
			console.log('create user')
			createuser({
				variables: {
					uuid: user.sub
				}
			});
		}
	}, [isAuthenticated, createuser, user]);

	if (isLoading || (createUserCalled && isCreateUserLoading)) {
		return <div>Loading...</div>;
	}

	if(createUserCalled && error){
		console.log(error)
		return null
	}

	if(createUserCalled && !createUserData?.createUser.successfull){
		console.log(createUserData)
		return <div>Something went wrong getting the current user</div>;
	}


	return (
			<div className={styles.main_container}>
				<div className={styles.centered_layout_container}>
					<MainMenu></MainMenu>
					<Outlet></Outlet>
				</div>
			</div>
	);
}
