import { lazy, Suspense } from "react";
import SharedLayout from "./common/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router";
import Features from "./CamperComponents/Camper/Features/Features.jsx";
import ReviewsSubPage from "./CamperComponents/Camper/ReviewsSuPage/ReviewsSubPage.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const CamperPage = lazy(() => import("../pages/CamperPage/CamperPage.jsx"));

function App() {
  return (
    <SharedLayout>
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:camperId" element={<CamperPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<ReviewsSubPage />} />
          </Route>
        </Routes>
      </Suspense>
    </SharedLayout>
  );
}

export default App;
