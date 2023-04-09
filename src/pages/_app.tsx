import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// менее корневой файл - будет открывать наш самый главный компонент  который будем передавать Component
// и тут мы делаем обертки: return <Component {...pageProps} /> -- провайдеры типа редакса...Тут делаются...
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
