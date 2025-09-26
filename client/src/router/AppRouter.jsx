import { BrowserRouter, Route, Routes } from "react-router";

import {
  About,
  Login,
  NotFound,
  RootLayout,
  Dashboard,
  Profile,
  ProductManagement,
} from "../pages";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="settings" element={<h1>settings</h1>} />
          <Route path="help" element={<h1>help</h1>} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
