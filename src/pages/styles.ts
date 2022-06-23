import { styled } from '../styles';
import { pixelToRem } from '../utils/pixelToRem';

export const Container = styled('div', {
  height: '100%',
  maxWidth: pixelToRem(1120),
  margin: '0 auto'
})

export const Header = styled('header', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: pixelToRem(10, 0)
})

export const AuthenticationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 20
})

export const LoginButton = styled('button', {
  padding: pixelToRem(12, 22),
  borderRadius: 96,
  border: 'none',
  fontSize: pixelToRem(16),
  cursor: 'pointer',
  fontFamily: '$default'
})

export const SignupButton = styled('button', {
  padding: pixelToRem(12, 22),
  borderRadius: 96,
  border: 'none',
  fontSize: pixelToRem(16),
  backgroundColor: '$primaryColor',
  cursor: 'pointer',
  fontFamily: '$default'
})

export const Content = styled('main', {
  
})

export const WelcomeContainer = styled('div', {
  marginTop: pixelToRem(100),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const WelcomeTitle = styled('h1', {
  width: pixelToRem(400),
  fontSize: pixelToRem(42),
  lineHeight: pixelToRem(50),
  fontWeight: '$bold',
  textAlign: 'center',
  marginBottom: pixelToRem(8)
})

export const WelcomeSubtitle = styled('span', {
  width: pixelToRem(516),
  fontSize: pixelToRem(16),
  textAlign: 'center'
})

export const QuickCreationContainer = styled('div', {
  marginTop: pixelToRem(128),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const QuickCreationTitle = styled('h2', {
  fontSize: pixelToRem(24),
  marginBottom: pixelToRem(36)
})

export const QuickCreationContent = styled('div', {
  width: '100%',
  height: pixelToRem(256),
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: 32,
  
  '& > div': {
    width: '100%',
    backgroundColor: '#11141A',
    borderRadius: '100%'
  }
})