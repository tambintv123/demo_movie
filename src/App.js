import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import { renderRoutes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}

          {/* Rediredt to admin/dashboard */}
          <Route
            path="admin"
            element={<Navigate replace to="/admin/dashboard" />}
          />
          {/* Page not found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
