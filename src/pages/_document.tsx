import {Html, Head, Main, NextScript} from "next/document";


// самый самый корневой файл
// делаются настройки html, структура приложения SEO...
export default function Document() {
    return (
        <Html lang="en">
            <Head lang={'en'}/>
            <body>
            {/*тут инициализируется main и скрипты*/}
            {/* Main - это app.tsx */}
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
