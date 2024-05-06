
const Demo1 = () => {
  return (
 <>
    {/* <div>
        <div>
  <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <span class="text-gray-500 sm:text-sm">$</span>
    </div>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00"/>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
        </div>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-base text-gray-600">
      Not a member?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
//     </div> */}

  <div className="bg-slate-100  h-40 p-3 mt-20 flex flex-row" >
<div class="flex flex-row bg-slate-300 w-2/5 p-3 ml-1">
  <div>  <button class="bg-white hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10 ml-10">
  Button
</button></div>
  <div>  <button class="bg-black text-slate-50 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-10 ml-10">
   Button
 </button></div>
</div>
<div className="bg-slate-300 w-2/5  p-3 ml-20" >
<button data-ripple-light="true" data-dialog-target="dialog"
  class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
  Open Dialog
</button>
<div data-dialog-backdrop="dialog" data-dialog-backdrop-close="true"
  class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
  <div data-dialog="dialog"
    class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
    <div
      class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
      Its a simple dialog.
    </div>
    <div
      class="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
      The key to more success is to have a lot of pillows. Put it this way, it took me
      twenty five years to get these plants, twenty five years of blood sweat and tears, and
      I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
      luv.
    </div>
    <div class="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
      <button data-ripple-dark="true" data-dialog-close="true"
        class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Cancel
      </button>
      <button data-ripple-light="true" data-dialog-close="true"
        class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Confirm
      </button>
    </div>
  </div>
</div>  
</div>
<div className="w-2/5 p-3 m-10 ml-10">
<button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
   Show right drawer
   </button>
   
<div id="drawer-right-example" class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-right-label">
    <h5 id="drawer-right-label" class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>Right drawer</h5>
   <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Close menu</span>
   </button>
   <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" class="text-blue-600 underline font-medium dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
   <div class="grid grid-cols-2 gap-4">
      <a href="#" class="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
      <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></a>
   </div>
</div>

</div>

</div>

<div className="flex flex-row mt-20 ">

  <div class="flex flex-col items-center justify-center w-1/3 bg-slate-100 mr-10 ml-10">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg w-1/3 mb-20">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="h-24">
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 h-24">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 h-24">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 h-24">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 h-24">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="h-24">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 bg-slate-400 h-2/3 w-1/3 ml-10 mr-10">
    <a href="#" >
        <img class="rounded-t-lg w-full" src="data:image/png;base64,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" alt="sdfghj" />
    </a>
    <div class=" h-80 w-full p-10">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>



</div>

<div>
  
<div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
    <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png" class="dark:hidden h-[426px] md:h-[654px]" alt=""/>
        <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png" class="hidden dark:block h-[426px] md:h-[654px]" alt=""/>
    </div>
</div>

</div>

 </>

)
}

export default Demo1

