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
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />

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
