import { AuthProvider } from 'react-auth-kit';

type AuthConfigTypes = {
    authType : 'cookie' | 'localstorage',
    authName : string,
    cookieDomain : string,
    cookieSecure :boolean,
};

const authConfig : AuthConfigTypes = {
    authType: 'cookie',
    authName: '_auth',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
};

type AuthProviderProps = {
    children: React.ReactNode;
};
export default function AuthenticationProvider({ children } : AuthProviderProps) {
    return (
        <AuthProvider {...authConfig}>
            {children}
        </AuthProvider>
    );
}
