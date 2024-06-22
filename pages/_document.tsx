import NextDocument, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";

type DocumentType = React.FC & {
	getInitialProps: (ctx: DocumentContext) => Promise<DocumentInitialProps>;
};

const Document: DocumentType = () => {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
	const initialProps = await NextDocument.getInitialProps(ctx);
	return { ...initialProps };
};

export default Document;
