import React, {useState} from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			{/* Main Container */}
			<nav className="fixed z-20 bg-cream w-full">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						{/* Desktop Version */}
						<div className="flex items items-center px-10 md:px-20 justify-center w-full">
							{/* Logo Section
							<div className="flex justify-center items-center flex-shrink-0 ml-10">
								<h1 className="font-Pacifico text-xl cursor-pointer">
									Annisa & Rivaldi
								</h1>
							</div> */}

							{/* Links Section */}
							<div className="block md:block">
								<div className="flex item-baseline space-x-2 md:space-x-4">
									<a
										href="#home"
										className="cursor-pointer hover:text-blue-300 font-Inter font-semibold px-1 md:px-3 py-2 text-sm md:text-md">HOME</a>
									<a
										href="#invitation"
										className="cursor-pointer hover:text-blue-300 font-Inter font-semibold px-1 md:px-3 py-2 text-sm md:text-md">INVITATION</a>
									<a
										href="#location"
										className="cursor-pointer hover:text-blue-300 font-Inter font-semibold px-1 md:px-3 py-2 text-sm md:text-md">LOCATION</a>
									<a
										href="#gallery"
										className="cursor-pointer hover:text-blue-300 font-Inter font-semibold px-1 md:px-3 py-2 text-sm md:text-md">GALLERY</a>
									<a
										href="#pray"
										className="cursor-pointer hover:text-blue-300 font-Inter font-semibold px-1 md:px-3 py-2 text-sm md:text-md">DOA</a>
									<a
										href="#rsvp"
										className="cursor-pointer hover:text-blue-300 font-Inter font-semibold px-1 md:px-3 py-2 text-sm md:text-md">RSVP</a>
								</div>
							</div>
						</div>

						{/* Mobile Version */}
						{/* <div className="mr-14 hidden md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outilne-none focus:ring-white" 
								aria-controls="mobile-menu"
								aria-expanded="false"><span className="sr-only"> Open Main Menu</span>
								{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16">
										</path>
								</svg>) : (<svg 
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none" viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12">
										</path>
								</svg>)
								}
							</button>
						</div> */}
					</div>
				</div>
					{/* small size: mobile div start */}
					{/* <Transition
						show={isOpen} 
						enter="transition ease-out duration-300 transform"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="transition ease-in duration-120 transform"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						{(ref) => (
							<div className="md:hidden" id="mobile-menu">
								<div ref={ref} className="bg-cream mx-4 mr-7 pt-4 pb-4 space-y-1">
									<Link
										href="/home"
										activeClass="Home"
										to="home"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-200 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">HOME</Link>
									<Link
										href="/gallery"
										activeClass="Gallery"
										to="gallery"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-200 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">GALLERY</Link>
									<Link
										href="/location"
										activeClass="Location"
										to="location"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-200 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">LOCATION</Link>
									<Link
										href="/rsvp"
										activeClass="Rsvp"
										to="rsvp"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-blue-200 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">RSVP</Link>
								</div>
							</div>
						)}
					</Transition> */}
			</nav>
		</div>
	)
}