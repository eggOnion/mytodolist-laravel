import { Link } from '@inertiajs/react';

import "../../css/header.css";

function Header() {

    return (
        <header className="my-header">
            <div className='my-account'>
                {/* <Link href={route('login')}>Log in</Link>
                <Link href={route('register')}>Register</Link>
                <Link href={route('dashboard')}>Dashboard</Link> */}
                {/* <nav>
                    {auth.user ? (
                        <Link href={route('dashboard')}>Dashboard</Link>
                    ) : (
                        <div>
                            <Link href={route('login')}>Log in</Link>
                            <Link href={route('register')}>Register</Link>
                        </div>
                    )}
                </nav> */}
                {/* <nav className="-mx-3 flex flex-1 justify-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </nav> */}
            </div>
        </header>
    );
}

export default Header;
