import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="h-screen w-screen flex items-center flex-col justify-center italics">
              loading...
            </div>
          }
        >
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
