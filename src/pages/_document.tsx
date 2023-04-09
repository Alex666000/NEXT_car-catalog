import {Html, Head, Main, NextScript} from "next/document";


// самый самый корневой файл
// делаются настройки html, структура приложения SEO...
export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            {/*тут инициализируется main и скрипты*/}
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
