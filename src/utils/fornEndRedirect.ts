export const frontEndRedirect = (redirectTo?: string) => {
    if (typeof window === 'undefined') return null;
    const new_path = redirectTo || encodeURI(window.location.pathname);
    window.location.href = `${process.env.NEXT_PUBLIC_LOGIN_URI}/?redirect=${new_path}`;
    return null;
};
