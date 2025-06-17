export function PageLoading() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-2">
      <div className="flex h-screen items-center justify-center">
        <div className="relative inline-flex">
          <div className="h-8 w-8 bg-black dark:bg-white"></div>
          <div className="absolute top-0 left-0 h-8 w-8 animate-ping bg-black dark:bg-white"></div>
          <div className="absolute top-0 left-0 h-8 w-8 animate-pulse bg-black dark:bg-white"></div>
        </div>
      </div>
    </div>
  );
}
