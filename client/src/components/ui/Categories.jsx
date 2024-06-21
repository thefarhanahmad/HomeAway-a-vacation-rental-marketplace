import React from 'react';

const Categories = () => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container grid gap-3 px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          <h1 className="text-2xl font-bold tracking-tight ">Explore Places</h1>
        </div>
        <div className="flex w-full items-center justify-between ">
          <div className="grid w-fit gap-2 transition-all duration-200 hover:scale-105 sm:w-[22%]">
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <HomeIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-center text-lg font-semibold tracking-tight">
              Homes
            </h3>
          </div>
          <div className="grid w-fit gap-2 transition-all duration-200 hover:scale-105 sm:w-[22%]">
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <BuildingIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-center text-lg font-semibold tracking-tight">
              Apartments
            </h3>
          </div>
          <div className="grid w-fit gap-2 transition-all duration-200 hover:scale-105 sm:w-[22%]">
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <HotelIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-center text-lg font-semibold tracking-tight">
              Hotels
            </h3>
          </div>
          <div className="grid w-fit gap-2 transition-all duration-200 hover:scale-105 sm:w-[22%]">
            <div className="flex items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <MenuIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-center text-lg font-semibold tracking-tight">
              Restaurants
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function HotelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 22v-6.57" />
      <path d="M12 11h.01" />
      <path d="M12 7h.01" />
      <path d="M14 15.43V22" />
      <path d="M15 16a5 5 0 0 0-6 0" />
      <path d="M16 11h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M8 7h.01" />
      <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default Categories;
