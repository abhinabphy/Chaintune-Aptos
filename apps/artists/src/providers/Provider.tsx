import {AuthenticationGuard} from "./AuthGaurd";

interface CustomAppProps {
    children?: React.ReactNode;
}

const Provider = ({ children }: CustomAppProps) => {
    return (
            <AuthenticationGuard>
                {/* <ToastContainer /> */}
                {children}
            </AuthenticationGuard>
    );
};

export default Provider;