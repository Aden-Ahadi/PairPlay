import CardStack from "./card-stack";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Interactive Card Stack
      </h1>
      <div className="w-full max-w-md">
        <CardStack />
      </div>
    </main>
  );
}
