import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

function CallToAction() {
  return (
    <div className="relative my-20 isolate overflow-hidden bg-gray-500 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center max-w-2xl  lg:max-w-none">
          <div className="max-w-xl lg:max-w-lg ">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Take the first step towards career clarity</h2>
            <p className="mt-4 text-lg leading-8 text-center text-gray-300">
                Discover your best-fit career with the world’s most-advanced career assessment
            </p>
            <div className="mt-6 flex  gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Take first demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction;