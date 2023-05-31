import * as React from 'react';

// import { ROLES } from '@features/profile/types/User';
import { useAuthUser } from 'react-auth-kit';

type ROLES = 'admin' | 'user';
export const useAuthorization = () => {
    const auth = useAuthUser();
    const user = auth();

    if (!user) {
        throw Error('User does not exist!');
    }

    const checkAccess = React.useCallback(
        ({ allowedRoles }: { allowedRoles: ROLES[] }) => {
            if (allowedRoles && allowedRoles.length > 0) {
                return allowedRoles?.includes(user.role);
            }

            return true;
        },
        [user.role],
    );

    return { checkAccess, role: user.role };
};

type AuthorizationProps = {
    forbiddenFallback?: React.ReactNode;
    children: React.ReactNode;
} & (
    | {
    allowedRoles: ROLES[];
    policyCheck?: never;
}
    | {
    allowedRoles?: never;
    policyCheck: boolean;
}
    );

export function Authorization({
                                  policyCheck, allowedRoles, forbiddenFallback = null, children,
                              }: AuthorizationProps) {
    const { checkAccess } = useAuthorization();

    let canAccess = false;

    if (allowedRoles) {
        canAccess = checkAccess({ allowedRoles });
    }

    if (typeof policyCheck !== 'undefined') {
        canAccess = policyCheck;
    }

    return <>{canAccess ? children : forbiddenFallback}</>;
}
Authorization.defaultProps = {
    forbiddenFallback: null,
};
