import PixelArtMaker from "@/components/PixelArtMaker";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <nav className="font-pixel flex items-center justify-around w-full h-10 fixed top-3 left-20">
        <div className=" font-bold text-4xl">
          <h1>IKO</h1>
        </div>
        <div>
          <p className="text-2xl uppercase">
            show me what you can create
          </p>
        </div>
      </nav>
      <PixelArtMaker />
    </main>
  );
}
