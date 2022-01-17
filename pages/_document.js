import Document, { Html, Head, Main, NextScript } from "next/document";




class MyDocument extends Document {

    render() {

        return (

            <Html lang="en">
                <Head>
                    <title>Yan Paing Oo - Freelance Web Developer</title>
                    <meta name="title" content="Yan Paing Oo Developer" />
                    <meta name="description" content="Freelance web developer" />
                    <meta name="keywords" content="yanpaingoo,YanPaingOo,Yan Paing Oo,php,laravel, react,web,website,freelance,developer,development,html,css,javascript,nextjs" />
                    <meta property="og:title" content="Freelance web developer" />
                    <meta property="og:description" content="Freelance web developer" />
                    <meta property="og:url" content="https://yanpaingoo.dev/" />
                    <meta property="og:type" content="website" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="language" content="English" />
                    <meta name="author" content="YanPaingOo" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Licorice&family=Readex+Pro:wght@300&family=Source+Sans+Pro:wght@300;400&display=swap"
                        rel="stylesheet" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
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