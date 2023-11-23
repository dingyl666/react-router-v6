import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Invoices from "./pages/Invoices";
import Expenses from "./pages/Expenses";
import Invoice from "./pages/Invoices/components/Invoice";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route path="expenses" element={<Expenses />} />
                  <Route path="invoices" element={<Invoices />}>
                      {/*
                      索引路由
                      由index代替path
                      索引路由是父路由的默认子路由。
                      当父路由匹配但其他子路由都不匹配时，索引路由匹配。
                      */}
                      <Route
                          index
                          element={
                              <main style={{ padding: "1rem" }}>
                                  <p>Select an invoice</p>
                              </main>
                          }
                      />
                      <Route path=":invoiceId" element={<Invoice />} />
                  </Route>
                  <Route
                      path="*"
                      element={
                          <main style={{ padding: "1rem" }}>
                              <p>There's nothing here!</p>
                          </main>
                      }
                  />
              </Route>
          </Routes>
      </BrowserRouter>
  </>,
)
