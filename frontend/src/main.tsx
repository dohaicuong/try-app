import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RelayProvider } from './providers/relay'
import { ThemeProvider } from './providers/theme'
import { SnackbarProvider } from 'notistack'

import { ErrorBoundary } from 'react-error-boundary'
import { AppErrorBoundary } from './components/AppErrorBoundary'
import { AppSuspense } from './components/AppSuspense'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RelayProvider>
        <ThemeProvider>
          <SnackbarProvider>
            <ErrorBoundary fallback={<AppErrorBoundary />}>
              <Suspense fallback={<AppSuspense />}>
                <Routes>
                  <Route path='/' element={<Home />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </SnackbarProvider>
        </ThemeProvider>
      </RelayProvider>
    </BrowserRouter>
  </React.StrictMode>
)
