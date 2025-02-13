import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import { Detailspage } from "../pages/detailspage/detailspage";
import { CategoryPage } from "../pages/categoryPage/categoryPage";
import { MainLayout } from "../layout/mainLayout";
import { ProfilePage } from "../pages/profilePage/profilePage";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="details/:articleID" element={<Detailspage />} />
        <Route path="category/:category" element={<CategoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};
