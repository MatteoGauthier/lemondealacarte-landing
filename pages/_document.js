import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						type="application/rss+xml"
						rel="alternate"
						title="Le Monde à La Carte"
						href="https://anchor.fm/s/53ca1838/podcast/rss"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
					<title>
						Le Monde à La Carte - Podcast sur le voyage et la culture, découvrez votre planète sans changer d'hémisphère
					</title>
					<meta
						name="description"
						content="Découvrez votre planète sans changer d’hémisphère. Une émission culturelle créée par des étudiants
						bordelais. Votre petite dose de culture générale."
					/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-9R7K00797N"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-9R7K00797N');
        `,
						}}
					></script>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: `
                        
                        
{
   "@context": "https://schema.org/",
   "@type": "PodcastEpisode",
   "url": "https://lemondealacarte.vercel.app/",
   "name": "LE Rwanda, entre histoire et modernité",
   "datePublished": "2020-03-28",
   "timeRequired": "PT15M",
   "description": "Le Rwanda n’est pas le premier pays auquel on pense pour un voyage en Afrique. Pour beaucoup, il évoque le génocide. Mais cette tragédie a eu lieu, il y a plus de 20 ans. Aujourd’hui, du pire endroit sur terre, le Rwanda est devenu l’un des pays les plus sûrs d’Afrique.",
   "associatedMedia": {
     "@type": "MediaObject",
     "contentUrl": "https://lemondealacarte.vercel.app/images/logo.jpg"
   },
   "partOfSeries": {
     "@type": "PodcastSeries",
     "name": "Le Monde à La Carte",
     "url": "https://lemondealacarte.vercel.app/"
   }
 }
}
    `,
						}}
					></script>

					<meta name="twitter:card" content="player" />
					<meta name="twitter:site" content="@MatteoGauthier" />
					<meta name="twitter:title" content="Le Rwanda, entre histoire et modernité" />
					<meta
						name="twitter:description"
						content="Le Rwanda n’est pas le premier pays auquel on pense pour un voyage en Afrique. Pour beaucoup, il évoque le génocide. Mais cette tragédie a eu lieu, il y a plus de 20 ans. Aujourd’hui, du pire endroit sur terre, le Rwanda est devenu l’un des pays les plus sûrs d’Afrique."
					/>
					<meta name="twitter:image" content="https://lemondealacarte.vercel.app/images/logo.jpg" />
					<meta name="twitter:player" content="https://lemondealacarte.vercel.app/" />
				</Head>
				<body className="bg-opacity-50 bg-pink-50">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
