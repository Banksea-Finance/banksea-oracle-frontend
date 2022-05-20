import { scales } from '../../types'
import { ButtonVariant, buttonVariant } from './types'

export const scaleVariants = {
  [scales.S]: {
    height: '32px',
    fontSize: '14px',
    padding: '0 14px'
  },
  [scales.M]: {
    height: '40px',
    padding: '0 14px',
    fontSize: '16px'
  },
  [scales.L]: {
    height: '50px',
    padding: '0 18px',
    fontSize: '18px'
  }
}

export const styleVariants: Record<ButtonVariant, any> = {
  [buttonVariant.primary]: {
    color: 'textContrary'
  },
  [buttonVariant.primaryContrary]: {
    color: 'textContrary',
  },
  [buttonVariant.secondary]: {
    borderColor: 'primary',
    color: 'textContrary',
    ':disabled': {
      backgroundColor: 'transparent',
    },
  },
  [buttonVariant.tertiary]: {
    boxShadow: 'none',
    color: 'white',
    border: '1px #cdcdcd solid',
  },
  [buttonVariant.subtle]: {
    color: 'white',
    boxShadow: 'none',
  },
  [buttonVariant.danger]: {
    color: 'white',
  },
  [buttonVariant.success]: {
    color: 'white',
  },
  [buttonVariant.disabled]: {
    color: 'white',
  },
  [buttonVariant.warning]: {
    color: 'white',
  },
  [buttonVariant.text]: {
    backgroundColor: 'transparent',
    color: 'primary',
    boxShadow: 'none',
  },
  [buttonVariant.outlined]: {
    color: 'primary'
  }
}
