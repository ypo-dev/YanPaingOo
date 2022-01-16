import Document, { Html, Head, Main, NextScript } from "next/document";




class MyDocument extends Document {

    render() {

        return (

            <Html lang="en">
                <Head>
                    <meta name="YanPaingOo" content="YanPaingOo Developer" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                    
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Licorice&family=Readex+Pro:wght@300&family=Source+Sans+Pro:wght@300;400&display=swap"
                        rel="stylesheet" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com"  />
                    <link href="https://fonts.googleapis.com/css2?family=Overpass:wght@300&display=swap" rel="stylesheet" />


                </Head>
                <body>

                    <Main />
                    <NextScript />
                </body>

            </Html>
        )


    }
}

export default MyDocument;