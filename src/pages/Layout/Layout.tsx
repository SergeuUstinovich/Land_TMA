import { Outlet } from "react-router-dom";
import style from './Layout.module.scss'

function Layout() {
  return (
    <div>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
