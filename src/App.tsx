import { lazy, Suspense } from "react";
import "./styles/global/App.scss";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./pages/Layout/Layout"));
const CardLink = lazy(() => import("./pages/CardLink/CardLink"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<CardLink />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
