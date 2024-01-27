export default function Content() {
  return (
    <>
      <div
        className="bg-white flex flex-col self-stretch items-stretch my-auto w-full max-md:mt-10 px-10"
        style={{ border: "1px solid #eeedf2" }}
      >
        <header className="header text-zinc-900 text-3xl font-bold leading-10 grow shrink basis-auto">
          Create a team project
        </header>
        <div className="flex items-stretch justify-between gap-2.5">
          <div className="text-zinc-900 text-sm leading-6 grow whitespace-nowrap my-auto">
            Accessible to
          </div>
          <a href="..." className="link">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c21d8bd7509b460552fe27605fb760a4d0db5fb2fbe674b81cb21cf3d0512cd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
              className="aspect-[2.04] object-contain object-center w-[71px] justify-end items-center shadow-sm shrink-0"
              alt=""
            />
          </a>
        </div>
        <form className="form">
          <div className="shadow-sm bg-violet-200 flex items-stretch gap-4 mt-6 pl-6 pr-12 py-5 rounded-md max-md:max-w-full max-md:flex-wrap max-md:px-5">
            <div className="card bg-white text-xl font-bold leading-8 justify-center items-center rounded shadow-sm grow pt-6 pb-12 px-16 max-md:px-5">
              Blank
            </div>
            <div className="card flex flex-col items-stretch py-6 flex-1">
              <div className="flex flex-col items-stretch px-11 max-md:px-5">
                <div className="text-red-300 text-center text-xl font-bold leading-8">
                  Templates
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e0d75df62a8a2b5be427f88b0dbe46a5e80a79687d026e5224f2336581ad5c1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
                  className="aspect-square object-contain object-center w-[23px] ml-6 mt-6 max-md:ml-2.5"
                  alt=""
                />
              </div>
              <div className="text-neutral-300 text-xs leading-5 mt-2.5 self-start max-md:ml-2.5">
                R8
              </div>
            </div>
            <div className="card flex flex-col items-stretch pt-6 pb-2.5 px-7 flex-1 max-md:px-5">
              <div className="text-zinc-900 text-center text-xl font-bold leading-7">
                You describe <br /> Al designs
              </div>
              <div className="text-neutral-300 text-xs leading-4 justify-center items-stretch shadow-sm bg-white pl-10 pr-5 py-2.5 rounded-2xl max-md:pl-5">
                Text-2-Design
              </div>
              <div className="text-white text-center text-xs leading-4 whitespace-nowrap justify-center items-stretch shadow-sm bg-gray-700 self-center mt-1.5 px-3 py-1.5 rounded">
                Coming soon
              </div>
            </div>
            <div className="card flex flex-col items-stretch pl-5 pr-12 py-5 rounded-md flex-1 max-md:px-5">
              <div className="text-indigo-500 text-xl font-bold leading-8 self-center">
                Import
              </div>
              <div className="text-neutral-300 text-center text-sm leading-6 whitespace-nowrap mt-1.5">
                an existing app
              </div>
              <div className="flex items-stretch justify-between gap-2 mt-2.5 pr-3.5">
                <div className="text-zinc-400 text-center text-sm leading-6 whitespace-nowrap shadow-sm bg-white aspect-[1.29] items-stretch pt-7 pb-1 px-2.5 rounded-md">
                  Tt Q
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc38281f16c1a394996ffd97e96035d98aa91b32ca7db81a9b68f92fa1864a4a?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
                  className="aspect-[1.22] object-contain object-center w-[49px] shrink-0 self-start"
                  alt=""
                />
              </div>
            </div>
            <div className="card flex flex-col items-stretch whitespace-nowrap px-11 py-6 flex-1 max-md:px-5">
              <div className="text-orange-300 text-xl font-bold leading-8">
                Duplicate
              </div>
              <div className="text-neutral-300 text-sm leading-6 mt-1.5">
                a Visily project
              </div>
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba17792d8cec85843dc71f3a6ea46767a652b572530cd8750a03101764ea764?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
                className="aspect-[1.28] object-contain object-center w-[45px] mt-3.5 self-end"
                alt=""
              />
            </div>
          </div>
        </form>
        <div className="flex w-full items-stretch justify-between gap-5 mt-14 pr-8 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
          <header className="header text-zinc-900 text-3xl font-bold leading-10 grow shrink basis-auto">
            Project list
          </header>
          <div className="flex items-stretch justify-between gap-4">
            <div className="card text-zinc-900 text-center text-sm leading-6 whitespace-nowrap justify-center items-stretch border shadow-sm bg-white grow px-4 py-3 rounded-md border-solid border-gray-600 self-start">
              Last modified v
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d2980fee0e1ed082353d892208fda8cc43bc7938f226eca7dea1b84b502deee?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
              className="aspect-[1.89] object-contain object-center w-[66px] justify-center items-end shadow-sm shrink-0"
              alt=""
            />
          </div>
        </div>
        <div className="card bg-violet-600 flex w-[284px] max-w-full flex-col items-stretch mt-6 py-px">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/671ee9ad7cc94a02e184d3437e9817927d6556b7463da1b2109ae0eb2eb89fd2?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
            className="aspect-[2.13] object-contain object-center w-full"
            alt=""
          />
          <div className="card bg-white flex flex-col text-sm pl-3.5 pr-20 pt-5 pb-2.5 rounded-sm items-start max-md:pr-5">
            <div className="text-zinc-900 leading-[171%] whitespace-nowrap">
              Welcome to Visily
            </div>
            <div className="text-gray-600 leading-[171%] mt-3.5">
              2 days ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
