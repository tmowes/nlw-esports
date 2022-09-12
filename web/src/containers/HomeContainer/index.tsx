/* eslint-disable sonarjs/no-duplicate-string */
import { Button, Flex, Grid, Heading, Image, Text } from '@chakra-ui/react'
import { MagnifyingGlassPlus } from 'phosphor-react'

import logoSvg from '../../assets/logo.svg'
import img1 from '../../assets/games/image1.png'
import img2 from '../../assets/games/image2.png'
import img3 from '../../assets/games/image3.png'
import img4 from '../../assets/games/image4.png'
import img5 from '../../assets/games/image5.png'
import img6 from '../../assets/games/image6.png'

const gamesImages = [
  {
    name: 'League of Legends',
    ads: '4 anúncios',
    image: img1,
  },
  {
    name: 'Apex Legends',
    ads: '4 anúncios',
    image: img2,
  },
  {
    name: 'Counter Strike',
    ads: '4 anúncios',
    image: img3,
  },
  {
    name: 'World of Warcraft',
    ads: '4 anúncios',
    image: img4,
  },
  {
    name: 'Dota 2',
    ads: '4 anúncios',
    image: img5,
  },
  {
    name: 'Fortnite',
    ads: '4 anúncios',
    image: img6,
  },
]

export function HomeContainer() {
  return (
    <Flex align="center" maxW={1334} mx="auto" direction="column" my="20">
      <Image src={logoSvg} alt="_" />
      <Heading fontSize="6xl" mt="20" fontWeight="black" color="white">
        Seu{' '}
        <Text as="span" bgClip="text" bgGradient="linear(to-r, #9572FC -10%, #43E7AD, #E1D55D 110%)">
          duo
        </Text>{' '}
        está aqui.
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" columnGap="6" mt="16">
        {gamesImages.map(({ image, name, ads }) => (
          <a href="/" key={String(name)}>
            <Flex position="relative" overflow="hidden" borderRadius={8}>
              <Image src={image} />
              <Flex
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bgGradient="linear(to-b, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) 66%)"
                direction="column"
                p="4"
                pt="16"
              >
                <Heading fontSize="15px">{name}</Heading>
                <Text fontSize="smaller" color="gray.400" mt="1">
                  {ads}
                </Text>
              </Flex>
            </Flex>
          </a>
        ))}
      </Grid>
      <Flex
        mt="20"
        w="100%"
        bgGradient="linear(to-r, #9572FC -10%, #43E7AD, #E1D55D 110%)"
        borderRadius={8}
        pt="1"
      >
        <Flex borderRadius={6} p={4} w="100%" align="center" justify="space-between" bg="content">
          <Flex direction="column">
            <Heading fontSize="2xl" fontWeight="black">
              Não encontrou seu duo?
            </Heading>
            <Text color="gray.400" mt="2">
              Publique um anúncio para encontrar novos players!
            </Text>
          </Flex>
          <Button
            colorScheme="purple"
            leftIcon={<MagnifyingGlassPlus size={24} weight="bold" color="white" />}
          >
            Publicar anúncio
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
