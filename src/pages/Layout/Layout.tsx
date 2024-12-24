import { Outlet } from "react-router-dom";
import style from './Layout.module.scss'

function Layout() {
  return (
    <div>
      <header className={style.header}>
        <a href="https://telegram.org/">
        
        </a>
        <a className={style.donwload} href="https://telegram.org/dl?tme=d1e558fc410233c5f2_18074541396030044524">DOWNLOAD</a>
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
