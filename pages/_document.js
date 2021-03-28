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
