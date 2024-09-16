const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <a href="/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="FlowBite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Flowbite</a></li>
                <li><a href="#" className="hover:underline">Tailwind CSS</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Github</a></li>
                <li><a href="#" className="hover:underline">Discord</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">© 2023 Flowbite™. All Rights Reserved.</span>
          <div className="flex space-x-5">
            <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">Facebook</span></a>
            <a href="#" className="text-gray-500 hover:text-gray-900"><span className="sr-only">Discord</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
