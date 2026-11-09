import type { Metadata, Viewport } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { SiteBackground } from "@/components/SiteBackground";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { PreferencesProvider } from "@/providers/PreferencesProvider";
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

const themeInitScript = `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.style.colorScheme=t;var l=localStorage.getItem('portfolio-locale');if(l==='en'||l==='es'){r.lang=l}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
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
