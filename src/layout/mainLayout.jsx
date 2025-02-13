import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { Navbar } from "../components/navbar/navbar";
import { Main } from "../components/main/main";
import { Footer } from "../components/footer/footer";
import { Grid } from "../components/grid/grid";
import { User } from "../components/user/user";
export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid>
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <Navbar isOpen={isOpen} />
      <User />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Grid>
  );
};
