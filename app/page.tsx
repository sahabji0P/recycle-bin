export default function Home() {
  return (
    <div className="flex flex-col mx-4 min-h-[89vh] items-center justify-center">
      <h1 className="text-6xl font-bold mb-2">RECYCLE BIN</h1>
      <h2 className="text-2xl text-center mb-6">
        Your Online Dustbin
      </h2>
      <a href="/home" className="btn btn-warning">
        Get Started
      </a>
    </div>

  )
}
