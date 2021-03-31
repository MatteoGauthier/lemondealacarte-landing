import Navbar from "../components/Navbar";
import { useState } from "react";
import Head from "next/head";

import { Team } from "../components/Team";
import Player from "../components/Player";
export default function Home() {
	return (
		<>
			<Head>
				<title>
					Le Monde à La Carte - Podcast sur le voyage et la culture, découvrez votre planète sans changer d'hémisphère
				</title>
			</Head>
			<div>
				<Navbar />
				<div className="z-0 max-w-4xl mx-auto">
					<Player />
					<hr className="px-4 mt-10" />
					<div className="flex flex-col px-4">
						<h2 className="mt-8 text-2xl font-medium">L'équipe derrière les micros</h2>
						<Team />
					</div>
				</div>
			</div>
		</>
	);
}
