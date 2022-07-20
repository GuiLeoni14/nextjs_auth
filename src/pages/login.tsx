import { FormLogin } from '../components/FormLogin';
import { Wrapper } from '../components/Wrapper';
import { signIn, useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const [error, setError] = useState('');
    const router = useRouter();
    const { data: session } = useSession();
    const handleULogin = async (email: string, password: string) => {
        if (!email || !password) {
            alert('Preencha os campos');
        }
        const response = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });
        console.log(response);
        if (!response?.ok) {
            setError('Usuário o senha inválidos');
            return;
        }
        const redirect = router.query.redirect || '/';
        router.push(redirect as string);
    };
    return (
        <Wrapper>
            <FormLogin onLogin={handleULogin} errorMessage={error} />
        </Wrapper>
    );
}
