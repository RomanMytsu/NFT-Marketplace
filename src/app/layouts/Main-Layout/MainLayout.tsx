import { Outlet } from "react-router";
import Footer from "@/widgets/footer/Footer";
import Header from "@/widgets/header/Header";
import s from "./MainLayout.module.scss";

export function MainLayout() {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.layout__content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
