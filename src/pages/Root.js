import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> {/* Outlet component marks the place where the child routes should be rendered. */}
      </main>
    </>
  );
}

export default RootLayout;
