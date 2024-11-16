import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-screen place-items-center pb-20 sm:pb-32 pt-20 sm:pt-[200px]">
        <div className="m-auto text-center ">
          <p className="text-5xl font-black text-bluePallete-900">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-bluePallete-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-bluePallete-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bluePallete-900"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};