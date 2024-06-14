import { withAuthenticationRequired } from "@auth0/auth0-react";

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <p>On redirecting</p>
      </div>
    ),
  });

  return <Component />;
};