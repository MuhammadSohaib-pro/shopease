import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Main from "./layout/Main";
import NotFound from "./views/not_found/NotFound";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => {
            switch (route.layout) {
              case "main":
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <Main>
                        <route.component />
                      </Main>
                    }
                  />
                );
              // Add more layouts here as needed like this:
              // case "auth":
              //   return (
              //     <Route
              //       key={route.path}
              //       path={route.path}
              //       element={
              //         <Auth>
              //           <route.component />
              //         </Auth>
              //       }
              //     />
              //   );
              default:
                return null;
            }
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
