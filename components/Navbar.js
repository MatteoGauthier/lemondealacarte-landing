import { useState } from "react";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div class="px-4 z-10 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div class="relative flex items-center justify-between">
				<div class="flex items-center">
					<a href="/" aria-label="Company" title="Company" class="inline-flex items-center mr-8">
						<img src="/images/logo.jpg" className="w-8 h-8 rounded-full" alt="" />

						<span class="ml-2 text-xl h-7 whitespace-nowrap overflow-hidden font-bold tracking-wide text-gray-800 uppercase overflow-ellipsis w-full">
							Le Monde à La Carte
						</span>
					</a>
					<ul class=" items-center hidden space-x-8 lg:flex">
						<li>
							<a
								href={process.env.spotifyLink}
								aria-label="Our product"
								title="Our product"
								class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Spotify
							</a>
						</li>
						<li>
							<a
								href={process.env.deezerLink}
								aria-label="Our product"
								title="Our product"
								class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Deezer
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="Product pricing"
								title="Product pricing"
								class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Apple Podcast
							</a>
						</li>
						<li>
							<a
								href="/"
								aria-label="About us"
								title="About us"
								class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
							>
								Google Podcast
							</a>
						</li>
					</ul>
				</div>
				<ul class="items-center hidden space-x-8 lg:flex">
					<li>
						<a
							href={process.env.instagramLink}
							class="inline-flex items-center justify-center w-full h-12 px-6 space-x-1 font-medium  text-black transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
							aria-label="Sign up"
							title="Sign up"
						>
							<img src="/images/insta.svg" className="h-full max-h-6" alt="" />
							<span>Instagram</span>
						</a>
					</li>
				</ul>
				<div class="lg:hidden z-20">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
						onClick={() => setIsMenuOpen(true)}
					>
						<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
							<path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
							<path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
							<path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
						</svg>
					</button>
					{isMenuOpen && (
						<div class="absolute top-0 left-0 w-full">
							<div class="p-5 bg-white border rounded shadow-sm">
								<div class="flex items-center justify-between mb-4">
									<div>
										<a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
											<img src="/images/logo.jpg" className="w-8 h-8 rounded-full" alt="" />

											<span class="ml-2 text-xl whitespace-nowrap overflow-hidden font-bold overflow-ellipsis tracking-wide text-gray-800 uppercase">
												Le Monde à La Carte
											</span>
										</a>
									</div>
									<div>
										<button
											aria-label="Close Menu"
											title="Close Menu"
											class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
											onClick={() => setIsMenuOpen(false)}
										>
											<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
												<path
													fill="currentColor"
													d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
												/>
											</svg>
										</button>
									</div>
								</div>
								<nav>
									<ul class="space-y-4">
										<li>
											<a
												href={process.env.spotifyLink}
												aria-label="Our product"
												title="Our product"
												class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Spotify
											</a>
										</li>
										<li>
											<a
												href={process.env.deezerLink}
												aria-label="Our product"
												title="Our product"
												class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Deezer
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="Product pricing"
												title="Product pricing"
												class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Apple Podcast
											</a>
										</li>
										<li>
											<a
												href="/"
												aria-label="About us"
												title="About us"
												class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
											>
												Google Podcast
											</a>
										</li>

										<li>
											<a
												href={process.env.instagramLink}
												class="inline-flex items-center justify-center w-full h-12 px-6 space-x-1 font-medium  text-black transition duration-200 rounded shadow-md focus:shadow-outline focus:outline-none"
												aria-label="Sign up"
												title="Sign up"
											>
												<img src="/images/insta.svg" className="h-full max-h-6" alt="" />
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