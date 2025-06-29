import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      {/* <Header /> */}
      <main className="font-plus-jakarta-sans bg-light-grey min-h-screen w-full">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
})
