import type { NextPage } from 'next';
import {
  AuthenticationContainer,
  Container,
  Content,
  Header,
  LoginButton, QuickCreationContainer, QuickCreationContent, QuickCreationTitle, SignupButton,
  WelcomeContainer,
  WelcomeSubtitle,
  WelcomeTitle
} from './styles';

import Image from 'next/image';
import logoSvg from '../assets/images/logo.svg';

const Home: NextPage = () => {
  return (
    <Container>
      <Header>
        <Image src={logoSvg} alt="Invitu" />
        <AuthenticationContainer>
          <LoginButton type='button' onClick={() => {}}>Log in</LoginButton>
          <SignupButton type="button" onClick={() => {}}>Sign up</SignupButton>
        </AuthenticationContainer>
      </Header>
      <Content>
        <WelcomeContainer>
          <WelcomeTitle>
            Invite your friends and Celebrate
          </WelcomeTitle>
          <WelcomeSubtitle>
          InvitU is a platform for creating virtual invitations, connecting, confirming
            and remembering your celebrations.
          </WelcomeSubtitle>
        </WelcomeContainer>
        <QuickCreationContainer>
          <QuickCreationTitle>Quick Creation</QuickCreationTitle>
          <QuickCreationContent>
            <div />
            <div />
            <div />
            <div />
          </QuickCreationContent>
        </QuickCreationContainer>
      </Content>
    </Container>
  )
}

export default Home
