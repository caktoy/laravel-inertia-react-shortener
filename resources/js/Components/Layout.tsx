import React, { FC } from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePage } from "@inertiajs/inertia-react";

interface Props {
    title?: string,
}

const Layout: FC<Props> = ({ children, title, ...props }) => {
    const { appName } = usePage().props;
    
    return (
        <div>
            <Helmet titleTemplate={`%s${appName}`} title={title ? `${title} :: ` : String(appName)} />
            <Navbar />
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
                {children}
            </div>

            <ToastContainer
                hideProgressBar={true}
                closeOnClick />
        </div>
    );
}

export default Layout;
