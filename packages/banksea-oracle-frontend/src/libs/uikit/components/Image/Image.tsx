import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import observerOptions from './options'
import Wrapper from './Wrapper'
import { ImageProps } from './types'

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
`

const DefaultPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Image: React.FC<ImageProps> = ({ src, alt, placeholder, ...otherProps }) => {
  const imgRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = (imgRef.current as unknown) as HTMLImageElement
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting } = entry
        if (isIntersecting) {
          observer.disconnect()
        }
      })
    }, observerOptions)
    observer.observe(img)

    return () => {
      observer.disconnect()
    }
  }, [src])

  return (
    <Wrapper ref={imgRef} {...otherProps}>
      <StyledImage width={'0'} height={'0'} src={src} onLoad={() => setIsLoaded(true)} style={{ display: 'none' }} />
      {isLoaded ? <StyledImage src={src} alt={alt} /> : (placeholder || <DefaultPlaceholder />)}
      {/*{isLoaded ? <StyledImage src={src} alt={alt} /> : (placeholder || <DefaultPlaceholder />)}*/}
    </Wrapper>
  )
}

export default Image
