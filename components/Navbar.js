import { useState } from "react";
import Image from "next/image"

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className="z-10 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div className="relative flex items-center justify-between">
				<div className="flex items-center">
					<a href="/" aria-label="Company" title="Company" className="inline-flex items-center mr-8">
						<Image src="/images/logo.jpg" height={32} width={32} className="w-8 h-8 rounded-full" alt="Logo element" />

						<span className="w-full ml-2 overflow-hidden text-xl font-bold tracking-wide text-gray-800 uppercase h-7 whitespace-nowrap overflow-ellipsis">
							Le Monde à La Carte
						</span>
					</a>
					<ul className="items-center hidden space-x-8  lg:flex">
						<li>
							<a
								href={process.env.spotifyLink}
								aria-label="Our product"
								title="Our product"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Spotify
							</a>
						</li>
						<li>
							<a
								href={process.env.deezerLink}
								aria-label="Our product"
								title="Our product"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Deezer
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="Product pricing"
								title="Product pricing"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Apple Podcast
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="About us"
								title="About us"
								className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Google Podcast
							</a>
						</li>
					</ul>
				</div>
				<ul className="items-center hidden space-x-8 lg:flex">
					<li>
						<a
							href={process.env.instagramLink}
							className="inline-flex items-center justify-center w-full h-12 px-6 space-x-1 font-medium text-black transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
							aria-label="Sign up"
							title="Sign up"
						>
							<Image src="/images/insta.svg" alt="Instagram icon" height={24} width={24} className="h-full max-h-6" alt="" />
							<span>Instagram</span>
						</a>
					</li>
				</ul>
				<div className="z-20 lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
							<path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
							<path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
							<path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
						</svg>
					</button>
					{isMenuOpen && (
						<div className="absolute top-0 left-0 w-full">
							<div className="p-5 bg-white border rounded shadow-sm">
								<div className="flex items-center justify-between mb-4">
									<div>
										<a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
											<Image height={32} width={32} src="/images/logo.jpg" className="w-8 h-8 rounded-full" alt="" />

											<span className="ml-2 overflow-hidden text-xl font-bold tracking-wide text-gray-800 uppercase whitespace-nowrap overflow-ellipsis">
												Le Monde à La Carte
											</span>
										</a>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg className="w-5 text-gray-600" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul className="space-y-4">
										<li>
											<a
												href={process.env.spotifyLink}
												aria-label="Our product"
												title="Our product"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Spotify
											</a>
										</li>
										<li>
											<a
												href={process.env.deezerLink}
												aria-label="Our product"
												title="Our product"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Deezer
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="Product pricing"
												title="Product pricing"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Apple Podcast
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="About us"
												title="About us"
												className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Google Podcast
											</a>
										</li>

										<li>
											<a
												href={process.env.instagramLink}
												className="inline-flex items-center justify-center w-full h-12 px-6 space-x-1 font-medium text-black transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
												aria-label="Sign up"
												title="Sign up"
											>
												<Image src="/images/insta.svg" height={24} width={24} className="h-full max-h-6" alt="" />
												<span>Instagram</span>
											</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
