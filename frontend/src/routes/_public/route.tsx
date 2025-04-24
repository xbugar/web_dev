import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
        <div className="flex p-2 flex-col items-start gap-2.5">
            <div className="flex items-center p-4 self-stretch justify-between">
                <div className="justify-center text-white text-3xl font-bold font-serif leading-loose">gradia.</div>
                <div className="w-28 text-center justify-center text-Primary-Text-White text-xs font-serif">Write it down, make it happen.</div>
            </div>

            <div className="self-stretch p-4 inline-flex justify-between items-center">
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    </>
  )
}
