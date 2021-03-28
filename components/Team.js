export const Team = () => {
	return (
		<div className="my-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
			<div className="grid grid-cols-2 gap-5 mx-auto md:gap-10 lg:grid-cols-4 lg:max-w-screen-lg">
				<div className="flex flex-col items-center text-center md:text-left md:items-stretch">
					<img className="object-cover w-24 h-24 rounded-full shadow" src="/images/vanon.jpg" alt="Person" />
					<div className="flex flex-col justify-center mt-2">
						<p className="text-lg font-bold">Vanon Borget</p>
						<p className="mb-4 text-xs text-gray-500">Présentateur</p>
						{/* <p className="text-sm tracking-wide text-gray-500">
							Pommy ipsum bent as a nine bob note naff off biscuits nowt, a cuppa unhand me sir hadn't done it in
							donkey's years sod's law.
						</p> */}
					</div>
				</div>
				<div className="flex flex-col items-center text-center md:text-left md:items-stretch">
					<img className="object-cover w-24 h-24 rounded-full shadow" src="/images/clement.jpg" alt="Person" />
					<div className="flex flex-col justify-center mt-2">
						<p className="text-lg font-bold">Clément Calles</p>
						<p className="mb-4 text-xs text-gray-500">Chroniqueur, Ingé son</p>
						{/* <p className="text-sm tracking-wide text-gray-500">
							Secondary fermentation degrees plato units of bitterness, cask conditioned ale ibu real ale pint glass
							craft beer. krausen goblet grainy ibu.
						</p> */}
					</div>
				</div>
				<div className="flex flex-col items-center text-center md:text-left md:items-stretch">
					<img className="object-cover w-24 h-24 rounded-full shadow" src="/images/candice.jpg" alt="Person" />
					<div className="flex flex-col justify-center mt-2">
						<p className="text-lg font-bold">Candice Fradet</p>
						<p className="mb-4 text-xs text-gray-500">Chroniqueuse</p>
						{/* <p className="text-sm tracking-wide text-gray-500">
							I just closed my eyes and in a nanosecond I cured myself from this ridiculous model of disease, addiction
							and obsession.
						</p> */}
					</div>
				</div>
				<div className="flex flex-col items-center text-center md:text-left md:items-stretch">
					<img className="object-cover w-24 h-24 rounded-full shadow" src="/images/matteo.jpg" alt="Person" />
					<div className="flex flex-col justify-center mt-2">
						<p className="text-lg font-bold">Mattèo Gauthier</p>
						<p className="mb-4 text-xs text-gray-500">Chroniqueur</p>
						{/* <p className="text-sm tracking-wide text-gray-500">
							Est Schlitz shoreditch fashion axe. Messenger bag cupidatat Williamsburg sustainable aliqua, umami shabby
							chic artisan duis pickled.
						</p> */}
					</div>
				</div>
			</div>
		</div>
	);
};
