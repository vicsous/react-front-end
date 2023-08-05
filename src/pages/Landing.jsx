import { NavLink } from "react-router-dom";

export default function Landing() {
    return(
    <section className="bg-gray-800 text-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">Save your
          <span className="text-violet-400"> notes </span> here. For free. Forever.
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
        <div className="flex flex-wrap justify-center">
          <NavLink to='/signup' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Join us</NavLink>
          <NavLink to='/login'className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Log in</NavLink>
        </div>
      </div>
    </section>
  )}