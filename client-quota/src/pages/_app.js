// _app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 합니다.
// 언제 사용 ? .jsx 파일에서 글로벌하게 React나 Next.js 엘리먼트를 컨트롤하고 싶을 때 쓰면 됩니다.
// 주요 사용 목적 : 모든 컴포넌트에 공통으로 적용할 속성 관리
// _app은 로직, 전역 스타일 등 컴포넌트에 공통 데이터를 다룬다. 

import Footer from '@/components/common/Footer';
import Header from '@/components/common/header';
import styled from 'styled-components';
import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '@/contexts/AuthContext';

export default function App({ Component, pageProps }) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <AppContainer>
          <Header></Header>
          <MainContent>
            <Component {...pageProps} />
          </MainContent>
          <Footer></Footer>
        </AppContainer>
      </GoogleOAuthProvider>
    </AuthProvider>
    
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
`;
