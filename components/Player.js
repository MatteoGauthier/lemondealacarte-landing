import { useState } from "react";
import Image from "next/image"
import clsx from "clsx";
const Player = () => {
	const [tooltip, setTooltip] = useState(false);

	return (
		<div className="flex flex-col items-center justify-start px-4 mt-8 space-x-0 md:px-0 md:space-x-6 md:flex-row">
			<div className="h-64 mb-2 rounded-lg shadow md:mb-0">
				<div className="relative z-0 w-64 h-64 transition-shadow duration-300 rounded-lg hover:shadow-xl">
					<Image quality={100} height={256} width={256} src="/images/logo.jpg" alt="logo of the podcast" className="rounded-lg " />
					<div
						href="/"
						aria-label="Play Video"
						onClick={() => setTooltip(!tooltip)}
						className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 bg-gray-900 bg-opacity-0 rounded-lg opacity-0 cursor-pointer group hover:opacity-100 hover:bg-opacity-10"
					>
						<div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
							<svg className="w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
								<path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col ">
				<div className="flex flex-col">
					<h1 className="mt-3 text-3xl font-bold text-gray-900">Le Monde à La Carte</h1>
					<p className="mt-2 text-cool-gray-600">
						Découvrez votre planète sans changer d’hémisphère. Une émission culturelle créée par des étudiants
						bordelais. Votre petite dose de culture générale.
					</p>
				</div>
				<div className="flex mt-4 space-x-2">
					<a
						className={clsx(
							"flex items-center ring-opacity-0 transition-all duration-300 ring-2 ring-blue-500 p-1 space-x-2 border border-gray-200 rounded-md",
							tooltip && "ring-opacity-100"
						)}
						href={process.env.spotifyLink}
					>
						<Image src="/images/Spotify_Icon_RGB_Green.png" height={24} width={24} className="w-6 h-6" alt="spotify listen to" />
						<span>Écouter sur Spotify</span>
					</a>
					<a
						className={clsx(
							"flex items-center ring-opacity-0 transition-all duration-300 ring-2 ring-blue-500 p-1 space-x-2 border border-gray-200 rounded-md",
							tooltip && "ring-opacity-100"
						)}
						href={process.env.deezerLink}
					>
						<Image src="/images/EQ.svg" height={24} width={24} className="w-6 h-6" alt="Deezer listen to" />
						<span>Écouter sur Deezer</span>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Player;
