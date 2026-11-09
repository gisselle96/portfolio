import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { SiteBackground } from "@/components/SiteBackground";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  LOCALE_KEY,
  PreferencesProvider,
  THEME_KEY,
} from "@/providers/PreferencesProvider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e4eaef" },
    { media: "(prefers-color-scheme: dark)", color: "#12181e" },
  ],
};

// Apply theme/locale before paint; keep SSR text on defaults to avoid hydration mismatch.
const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_KEY}');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.style.colorScheme=t;document.cookie='${THEME_KEY}='+t+';path=/;max-age=31536000;samesite=lax';var l=localStorage.getItem('${LOCALE_KEY}');if(l==='en'||l==='es'){r.lang=l;document.cookie='${LOCALE_KEY}='+l+';path=/;max-age=31536000;samesite=lax'}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased font-sans",
        roboto.variable,
        robotoMono.variable,
      )}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="site-shell relative flex min-h-full flex-col font-sans">
        <PreferencesProvider>
          <SiteBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            {children}
          </div>
        </PreferencesProvider>
      </body>
    </html>
  );
}
