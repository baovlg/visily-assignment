import { Button } from "@mui/material";

export default function Header() {
  return (
    <form>
      <header
        className="bg-white flex w-full items-center justify-between w-full"
        style={{ border: "1px solid #eeedf2" }}
      >
        <div
          className="flex items-center gap-2 pl-4 py-2"
          style={{ minWidth: "300px", border: "1px solid #eeedf2" }}
        >
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/940db41a0f773c7ceb91aa249671b5cbf7210e8728910f5484af6348acef6f95?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
            className="aspect-[1.02] object-contain object-center w-[46px]  shrink-0"
            alt="Logo"
          />
          <h1
            className="text-zinc-900 text-base leading-7 font-bold"
            aria-role="heading"
            aria-label="Team Name"
          >
            Koon's Team
          </h1>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1bf77cf7cd863af5750f8a8a4af09df3c6078578b62567261588882d36e7a863?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
            className="aspect-square object-contain object-center w-[15px] shrink-0 my-auto"
            alt="Icon"
          />
        </div>

        <div className="flex gap-4 pr-6">
          <div className="flex items-center gap-4 my-auto">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/34407e896a8599703b7ce86824eed71f2938cf0001934c387a7a19b7ca4c2ac1?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
              className="aspect-[1.03] object-contain object-center w-[31px] shrink-0"
              alt="Image 1"
            />
            <div style={{ color: "rgb(238, 237, 242)" }}>|</div>
            <div className="flex items-center gap-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 stroke-current"
              >
                <path
                  d="M3.125 10H16.875"
                  stroke="current"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M10 3.125V16.875"
                  stroke="current"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div className="text-indigo-500 text-sm grow whitespace-nowrap font-semibold">
                <a href="..." role="link" aria-label="Invite members">
                  Invite members
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 my-auto">
            <Button
              className="text-white text-center text-sm whitespace-nowrap justify-center rounded bg-indigo-bold px-3 py-0 font-semibold h-8"
              role="button"
              aria-label="Create project"
              sx={{ textTransform: "none" }}
            >
              + Create project
            </Button>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac7ea0c9832d118f9fbac38ec46e3e709b9fc7f3a542bdc7ecd1629682335545?apiKey=89bdb90e7fdb4d86bb2b9691de5a9df0&"
              className="aspect-square object-contain object-center w-[38px] shrink-0"
              alt="Icon"
            />
          </div>
        </div>
      </header>
    </form>
  );
}
