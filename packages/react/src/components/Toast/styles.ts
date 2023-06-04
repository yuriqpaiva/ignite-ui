import { ToastContainer } from 'react-toastify'
import { styled } from '../../styles'

export const StyledToastContainer = styled(ToastContainer, {
  '.Toastify__toast-container': {},

  '.Toastify__toast': {
    backgroundColor: '$gray800',
    border: '1px solid $colors$gray600',
    boxShadow: 'none',
    position: 'relative',
    width: 360,
    height: 82,
  },

  '.Toastify__toast-body': {},
})

export const ToastContent = styled('div', {
  marginTop: -3,

  strong: {
    fontWeight: '$bold',
    color: '$white',
    fontSize: '$xl',
    marginBottom: '$1',
    display: 'block',
  },
  small: {
    color: '$gray200',
    fontSize: '$sm',
  },

  button: {
    position: 'absolute',
    cursor: 'pointer',
    background: 'transparent',
    top: '$1',
    border: 'none',
    right: 0,
    lineHeight: 0,
    svg: {
      color: '$gray400',
      backgroundColor: 'transparent',
    },
  },
})
