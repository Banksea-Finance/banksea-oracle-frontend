import React from 'react'

export type SvgProps = {
  color?: string
}

export const CloseSvg: React.FC<SvgProps> = ({ color = '#666' }) => (
  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.80005L13 13.8" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 1.80005L1 13.8" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SuccessSvg: React.FC<SvgProps> = ({ color = '#50E6B4' }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 30.8001C24.2843 30.8001 31 24.0844 31 15.8001C31 7.51584 24.2843 0.800049 16 0.800049C7.71573 0.800049 1 7.51584 1 15.8001C1 24.0844 7.71573 30.8001 16 30.8001Z" stroke={color} strokeMiterlimit="10" />
    <path d="M7.65991 16.29L13.27 21.8L24.3401 9.80005" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ErrorSvg: React.FC<SvgProps> = ({ color = '#F5466E' }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 30.8C24.2843 30.8 31 24.0843 31 15.8C31 7.51578 24.2843 0.800049 16 0.800049C7.71573 0.800049 1 7.51578 1 15.8C1 24.0843 7.71573 30.8 16 30.8Z" stroke="#F5466E" strokeMiterlimit="10" />
    <path d="M10 9.80005L22 21.8" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 9.80005L10 21.8" stroke={color} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const WarningSvg: React.FC<SvgProps> = ({ color = '#F0A055' }) => (
  <svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3401 1.76029L1.22994 27.9303C0.489945 29.2103 1.40986 30.8003 2.88986 30.8003H33.1101C34.5801 30.8003 35.51 29.2003 34.77 27.9303L19.6599 1.76029C18.9199 0.480293 17.0801 0.480293 16.3401 1.76029Z" stroke={color} strokeMiterlimit="10" />
    <path d="M18 27.3003C17.17 27.3003 16.5 26.6303 16.5 25.8003C16.5 24.9703 17.17 24.3003 18 24.3003C18.83 24.3003 19.5 24.9703 19.5 25.8003C19.5 26.6303 18.83 27.3003 18 27.3003Z" fill={color} />
    <path d="M18 8.44019V21.6403" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const InfoSvg: React.FC<SvgProps> = ({ color = '#7846F5' }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 30.8C24.2843 30.8 31 24.0843 31 15.8C31 7.51578 24.2843 0.800049 16 0.800049C7.71573 0.800049 1 7.51578 1 15.8C1 24.0843 7.71573 30.8 16 30.8Z" stroke={color} strokeMiterlimit="10" />
    <path d="M16 5.92004C16.83 5.92004 17.5 6.59004 17.5 7.42004C17.5 8.25004 16.83 8.92004 16 8.92004C15.17 8.92004 14.5 8.25004 14.5 7.42004C14.5 6.59004 15.17 5.92004 16 5.92004Z" fill={color} />
    <path d="M17 10.6801H15V25.6801H17V10.6801Z" fill={color} />
    <path d="M17.0015 12.6818V10.6818H13.0015V12.6818H17.0015Z" fill={color} />
    <path d="M19.0015 25.6816V23.6816H13.0015V25.6816H19.0015Z" fill={color} />
  </svg>
)
