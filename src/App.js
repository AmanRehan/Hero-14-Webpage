import * as React from "react";

export default function App() {
  return (
    <main className="bg-custom-color flex flex-col px-5">
      <header className="self-center flex ml-0 w-full max-w-[969px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap">
        <h1 className="text-white text-center text-2xl font-bold tracking-tight self-center w-[114px] my-auto">Startup 3</h1>
        <nav className="self-center flex w-[503px] max-w-full items-start justify-between gap-5 my-auto max-md:flex-wrap max-md:justify-center">
          <a href="#" className="text-white text-lg font-medium leading-7 opacity-30 self-center my-auto">Overview</a>
          <a href="#" className="text-white text-lg font-medium leading-7 self-center my-auto">Prices</a>
          <a href="#" className="text-white text-lg font-medium leading-7 self-center my-auto">Blog</a>
          <a href="#" className="text-white text-lg font-medium leading-7 self-center my-auto">Feedback</a>
          <div className="self-center flex flex-col my-auto">
            <button className="bg-pink-600 self-stretch flex w-[120px] max-w-full grow flex-col px-5 py-3.5 rounded-[100px]">
              <span className="text-white text-center text-lg font-medium leading-7 self-center -mt-px">Purchase</span>
            </button>
          </div>
        </nav>
      </header>
      <section className="self-center ml-0 w-full max-w-[976px] my-20 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full">
            <div className="flex flex-col my-auto max-md:mt-12">
              <h2 className="text-white text-6xl font-bold leading-[70px] tracking-tighter max-md:text-4xl">Generate Awesome Web Pages</h2>
              <p className="text-white text-2xl font-medium leading-8 w-[363px] max-w-full mt-7">The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks.</p>
              <div className="flex w-[157px] max-w-full grow flex-col mt-14">
                <button className="bg-pink-600 self-stretch flex w-full grow flex-col px-5 py-5 rounded-[100px]">
                  <span className="text-white text-center text-lg font-medium leading-7 self-center -mt-px">Learn More</span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[64%] ml-[8%] max-md:w-full">
            <div className="bg-white flex grow flex-col w-full m-auto px-5 py-10 rounded-xl max-md:max-w-full max-md:mt-12">
              <div className="self-center flex w-[398px] max-w-full flex-col mt-5 mb-2.5">
                <h2 className="text-violet-950 text-center text-5xl font-bold leading-[52px] tracking-tight self-center">Sign Up Now</h2>
                <div className="flex w-[398px] max-w-full flex-col ml-0.5 mt-9">
                  <input type="email" className="text-slate-900 text-opacity-40 text-lg font-medium leading-7 self-stretch border-[color:var(--colors-grey,#EBEAED)] w-full grow pt-5 pb-5 px-5 rounded-[100px] border-2 border-solid" placeholder="Your email" />
                </div>
                <div className="flex w-[398px] max-w-full flex-col ml-0.5 mt-5">
                  <input type="password" className="text-slate-900 text-opacity-40 text-lg font-medium leading-7 self-stretch border-[color:var(--colors-grey,#EBEAED)] w-full grow pt-4 pb-4 px-5 rounded-[100px] border-2 border-solid" placeholder="Your password" />
                </div>
                <div className="flex w-[398px] max-w-full items-start gap-3.5 ml-0.5 mt-8">
                <input id="default-checkbox" type="checkbox" value="" class="accent-teal-400 w-5 h-5 border-teal-300 rounded"/>
                <label for="default-checkbox" class="ml-2 text-md font-medium text-black dark:text-gray-400">I agree to the Terms of Service.</label>
                </div>
                <div className="flex w-[398px] max-w-full flex-col ml-0.5 mt-8">
                <button className="bg-indigo-700 self-stretch flex w-full grow flex-col px-5 py-4 rounded-[100px]">
                    <span className="text-white text-center text-lg font-medium leading-7 self-center -mb-0.5">Sign In</span>
                  </button>
                </div>
                <div className="self-stretch flex items-start justify-between gap-3.5 mr-px mt-7 max-md:justify-center">
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1f044b0-b6ca-4613-b678-3063fb759617?apiKey=5bd7741516314841aa9c11fa0245edef&"className="aspect-[72] object-cover object-center w-36 bg-blend-normal self-center shrink-0 my-auto border-2 border-solid border-gray-200" />
                  <div className="text-slate-900 text-opacity-40 text-center text-base leading-7 opacity-90 self-center my-auto">or</div>
                  <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/06a5b971-562d-4f74-94af-4d102c103fd8?apiKey=5bd7741516314841aa9c11fa0245edef&"className="aspect-[72] object-cover object-center w-36 bg-blend-normal self-center shrink-0 my-auto border-2 border-solid border-gray-200" />
                </div>
                <div className="flex w-[398px] max-w-full flex-col ml-0.5 mt-7">
                  <button className="bg-sky-500 self-stretch flex w-full grow flex-col px-5 py-4 rounded-[100px]">
                    <span className="text-white text-center text-lg font-medium leading-7 self-center -mb-0.5">Login via Twitter</span>
                  </button>
                </div>
                <div className="flex justify-center w-[3000px] max-w-full items-start gap-3 ml-1.5 mt-9">
  <span className="text-slate-900 text-opacity-40 text-center text-lg font-medium leading-7 self-stretch w-[231px]">Do you have an Account?</span>
  <a href="#" className="text-teal-400 text-lg font-medium leading-7 self-stretch">Sign In</a>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}