import { useSession } from 'next-auth/react';
import React from 'react';
import { frontEndRedirect } from '../../utils/fornEndRedirect';

export function PrivateComponent({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    if (!session && status === 'unauthenticated') {
        return frontEndRedirect();
    }
    if (!session) {
        return <p>Você não está autenticado</p>;
    }
    return <>{children}</>;
}
