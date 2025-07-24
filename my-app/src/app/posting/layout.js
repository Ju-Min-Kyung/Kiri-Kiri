// app/layout.js
// import './globals.css'; // 전역 css (Tailwind or custom)
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: '게시물 작성 앱',
    description: '사진과 텍스트 업로드 예제',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* 공통 헤더 넣을 수도 있음 */}
                <main>{children}</main>
                {/* 공통 푸터나 모달 컴포넌트도 위치시킬 수 있음 */}
            </body>
        </html>
    );
}
