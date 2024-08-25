'use client'
import { useRouter , usePathname } from "next/navigation";
import { useEffect } from "react";

export const AuthenticationGuard = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
            if (sessionStorage.getItem('isStaked') === "true") {
                if (pathname === "/stake") {
                    router.push("/dashboard");
                }
            } else if (sessionStorage.getItem('isStaked') === "false") {
                if (pathname !== "/stake") {
                    router.push("/stake");
                }
            }

            if (localStorage.getItem('walletConnected') === 'true') {
                if (pathname === "/signup") {
                    router.push("/dashboard");
                } 
            } else if (localStorage.getItem('walletConnected') === 'false') {
                if (pathname !== "/signup" && pathname !== "/stake") {
                    router.push("/signup");
                }
        }
    }, [pathname, router]);

    return <>{children}</>;
}