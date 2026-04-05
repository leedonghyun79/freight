import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "프로텍스 특수운송 | 무진동 특수운송",
  description: "프로텍스 특수운송은 반도체, 의료기기, 항공우주 자산을 위해 자체 무진동 특수운송 차량과 전문 엔지니어 팀을 보유한 국내 전문 기업입니다. 가장 안전한 정밀 운송 솔루션을 제공합니다.",
  keywords: "프로텍스, 특수운송, 무진동운송, 무진동 특수운송, 장비이전, 데이터센터이전, 의료기기운송, 반도체장비운송, 정밀장비운송, 항온항습운송",
  openGraph: {
    title: "프로텍스 특수운송 | 무진동 특수운송 전문 솔루션",
    description: "반도체·의료기기 등 초정밀 자산을 위한 자체 무진동 특수운송 전문 기업.\n전문 엔지니어 팀이 제공하는 가장 안전한 맞춤형 정밀 운송 솔루션을 경험하세요.",
    url: "https://xn--2o2bo3ogka6rr6n9os3kcc0g.com", // Adjust to actual production domain if known
    siteName: "프로텍스",
    images: [
      {
        url: "/images/메인트럭사진.jpg", // A high-quality representative image
        width: 1200,
        height: 630,
        alt: "프로텍스 무진동 특수운송 차량",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "프로텍스 특수운송 | 무진동 특수운송 전문",
    description: "반도체·의료기기 등 정밀 자산을 위한 자체 무진동 특수운송 시스템.\n전문 엔지니어 팀의 완벽한 기술력으로 가장 안전한 운송 솔루션을 제공합니다.",
    images: ["/images/메인트럭사진.jpg"],
  },
  alternates: {
    canonical: "https://xn--2o2bo3ogka6rr6n9os3kcc0g.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google16f32476075c014d",
    other: {
      "naver-site-verification": "9fb14d979b6887f82d9b1f32b8ab25b8",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-inter" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "프로텍스",
                "url": "https://xn--2o2bo3ogka6rr6n9os3kcc0g.com"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "프로텍스",
                "url": "https://xn--2o2bo3ogka6rr6n9os3kcc0g.com",
                "logo": "https://xn--2o2bo3ogka6rr6n9os3kcc0g.com/images/로고_c.png",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "평택시",
                  "addressRegion": "경기도",
                  "addressCountry": "KR"
                }
              }
            ])
          }}
        />
        {children}
      </body>
    </html>
  );
}
