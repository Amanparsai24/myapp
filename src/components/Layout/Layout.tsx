import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props: any) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const currentPath = window.location.pathname;

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [currentPath]);

    return (
        <>
            <div className={`g-sidenav-show bg-gray-100  ${isSidebarOpen ? 'g-sidenav-pinned' : ''}`} >
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                    <Header toggleSidebar={toggleSidebar} />
                    <div className="container-fluid py-4">
                        {props.component}
                        <Footer />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;
