
export default function NavBar() {
    return (
        <>
<footer className="bg-[#f5f5f5] bg-opacity-75 mt-96">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">MCMGH-SCHOOL</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                  <ul class="text-black font-medium">
                  <li class="mb-4">
                          <a href="https://youtu.be/7z_EwP7AXaw?si=ItG5-D0davh05yAS" className="hover:underline ">BugsCoderIT</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://github.com/monim2022" className="hover:underline ">Github</a>
                      </li>
                    
                      <li>
                          <a href="https://www.linkedin.com/in/monim-mia" className="hover:underline">LinkdIN</a>
                      </li>
                  </ul>
              </div>

              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                  <ul class= "text-gray-900 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">FlowBite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
                  <ul className="text-black font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                  
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                 
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900ms-5">
                  
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 ms-5">
                  
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900ms-5">
                  
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>
</>

)}
