
const MainLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className="h-full flex dark:bg-gray-900">
      <main className="flex-1 h-full overflow-y-auto">
        { children }
      </main>
    </div>
  )
}

export default MainLayout;