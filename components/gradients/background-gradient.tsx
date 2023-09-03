import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()
  const colors = [
    theme.colors.blue['700'],
    theme.colors.indigo['700'],
    theme.colors.cyan['700'],
    theme.colors.indigo['700'],
  ]

  let fallbackBackground = `radial-gradient(at top left, ${colors[0]} 10%, transparent 50%), radial-gradient(at bottom, ${colors[1]} 10%, transparent 50%), radial-gradient(at bottom left, var(--chakra-colors-indigo-700) 10%, transparent 50%),
        radial-gradient(at top right, ${colors[2]} 30%, transparent 50%), radial-gradient(at bottom right, ${colors[0]} 50%, transparent 80%);`

  let gradientOverlay = `linear-gradient(0deg, var(--chakra-colors-${useColorModeValue(
    'white',
    'black'
  )}) 30%, rgba(0, 0, 0, 0) 50%);`

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.3', '0.5')}
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
