import styles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { SignUpWithGoogle } from "../../components/signup-with-google-button/signup-with-google-button";
import { SignUpWithApple } from "../../components/signup-with-apple-button/signup-with-apple-button";
import { HorizontalSeparator } from "../../components/horizontal-separator/horizontal-separator";
import { ActionButtonSmall } from "../../components/action-button-small/action-button-small";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import { BirthDateModal } from "../../components/birth-date-modal/birth-date-modal";
import { useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_CURRENT_USER, CREATE_USER } from "../../graphql-queries";

export function Login(){
	const [ getCurrentUser ] = useLazyQuery(GET_CURRENT_USER);
	const [ createUser ] = useMutation(CREATE_USER);
	const { loginWithPopup, user } = useAuth0();
	const navigate  = useNavigate();
	const [ isNewUser, setIsNewUser ] = useState<boolean>(false);

	function handlerBirthModalComplete(birthDate: Date){

		if(user){
			createUser({
				variables:{
					user: {
						avatarUrl: user.picture,
						birthDate: birthDate.toISOString(),
						email: user.email ?? '',
						name: user.name ?? '',
						location: user.zoneinfo
					}
				}
			}).then(() => {
				navigate("/home/foryou");
			})
		}
	}

	function signUpWithGoogleHandle(){
		loginWithPopup({ authorizationParams: {
			connection: 'google-oauth2',
		} }).then(() => {
			getCurrentUser().then(data => {
				if(!data.data?.currentUser){
					setIsNewUser(true);
				} else {
					navigate("/home/foryou");
				}
			});
		})
	}

	return <div className={styles.login_container}>
		{isNewUser && <BirthDateModal onComplete={handlerBirthModalComplete}/>}
		<div className={styles.main_icon_container}>
			<FontAwesomeIcon icon={faXTwitter} className={styles.main_icon}/>
		</div>
		<div className={styles.login_content}>
			<h1 className={styles.title_1}>Happening now</h1>
			<h2 className={styles.title_2}>Join today.</h2>
			<div className={styles.loginForm}>
				<SignUpWithGoogle onClick={signUpWithGoogleHandle}></SignUpWithGoogle>
				<SignUpWithApple></SignUpWithApple>
				<HorizontalSeparator text="or"></HorizontalSeparator>
				<ActionButtonSmall onClick={() => {}}>Create account</ActionButtonSmall>
				<p className={styles.terms_of_service_paragraph}>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
				<div></div>
				<h3 className={styles.title_3}>Already have an account?</h3>
				<SecondaryButton onClick={() => {}}>Sign in</SecondaryButton>
			</div>
		</div>
		<div className={styles.footer}>
			<a>About</a>
			<a>Download the X app</a>
			<a>Help Center</a>
			<a>Terms of Service</a>
			<a>Privacy Policy</a>
			<a>Cookie Policy</a>
			<a>Accessibility</a>
			<a>Ads info</a>
			<a>Blog</a>
			<a>Careers</a>
			<a>Brand Resources</a>
			<a>Advertising</a>
			<a>Marketing</a>
			<a>X for Business</a>
			<a>Developers</a>
			<a>Directory</a>
			<a>Settings</a>
			<a>© 2024 X Corp.</a>
		</div>
	</div>
}