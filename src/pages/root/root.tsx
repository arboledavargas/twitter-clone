import { Outlet } from "react-router-dom";
import { MainMenu } from "../../components/main-menu/main-menu";
import styles from "./root.module.css";
import { useQuery, useMutation } from "@apollo/client";
import { GET_CURRENT_USER, UPDATE_USER_HANDLE } from "../../graphql-queries";
import { useEffect, useState } from "react";
import { HandleModal } from "../../components/handle-modal/handle-modal";
import { useNavigate } from 'react-router-dom';

export function Root() {

	const { data: currentUser, loading } = useQuery(GET_CURRENT_USER);
	const [ updateUserhandler, { data: updateUserResponse }] = useMutation(UPDATE_USER_HANDLE);
	const [ userWithoutHandle, setUserWithoutHandle ] = useState<boolean>(false);
	const navigate = useNavigate();

	useEffect(() => {

		console.log({currentUser})

		
		if(!loading && !currentUser?.currentUser){
			navigate("/login");
		}
		
		if(!!currentUser?.currentUser && !currentUser?.currentUser.handle){
			setUserWithoutHandle(true);
		}
	}, [currentUser]);

	async function handleModalComplete(handle: string){
		await updateUserhandler({
			variables: {
				handle: handle
			}
		});

		setUserWithoutHandle(false);
	}

	return (
			<div className={styles.main_container}>
				{ userWithoutHandle && <HandleModal onComplete={handleModalComplete}/> }
				<div className={styles.centered_layout_container}>
					<MainMenu></MainMenu>
					<Outlet></Outlet>
				</div>
			</div>
	);
}
