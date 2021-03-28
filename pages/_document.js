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