export default function BackgroundGradient() {
  return (
    <>
      {/* Upper left gradient */}
      <div className="absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 gradient-1-tr opacity-30 bg-blob-clip sm:w-[72.1875rem]" />
      </div>

      {/* Center gradient */}
      <div className="absolute top-[calc(50%-30rem)] left-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)] sm:left-[calc(50%-30rem)]">
        <div className="relative aspect-[1155/678] w-[72.1875rem] gradient-1-tr opacity-30 bg-blob-clip" />
      </div>

      {/* Lower right gradient */}
      <div className="absolute bottom-0 right-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:right-[calc(50%-30rem)]">
        <div className="relative aspect-[1155/678] w-[72.1875rem] gradient-1-tr opacity-30 bg-blob-clip" />
      </div>
    </>
  );
}
