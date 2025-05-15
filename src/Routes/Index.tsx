import { Fragment, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./AllRoutes";

const Index = () => {

    return (
        <Fragment>
            <Routes>

                {/* HERE WE DEFINE ALL PUBLIC ROUTES */}
                {publicRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <Suspense>
                                {route.component}
                            </Suspense>
                        }
                        key={idx}
                    // exact={true}
                    />
                ))}

            </Routes>
        </Fragment>
    );
}

export default Index;