import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import gradient from "@/assets/gradient.webp";

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <div className="bg-bg-lm-primary dark:bg-bg-dm-primary flex flex-col justify-center items-center p-2 h-screen">
            <div className="flex p-2 flex-col gap-2.5 bg-no-repeat bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${gradient})`, borderRadius: ` 25px` }}>
                <div className="flex items-center p-4 self-stretch justify-between">
                    <div className="justify-center text-white text-3xl font-bold font-serif leading-loose">
                        <Link to="/">gradia.</Link>
                    </div>
                    <div className="w-28 text-center justify-center text-white text-xs font-serif">Write it down, make it happen.</div>
                </div>

                <div className="flex text-white self-stretch p-4 h-full justify-center">
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}
