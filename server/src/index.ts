import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express, { json } from 'express'

import { hourStringToMinutes } from './utils/convertTime/hourStringToMinutes'
import { minutesToHourString } from './utils/convertTime/minutesToHourString'

const app = express()
app.use(json())
app.use(cors())

const prisma = new PrismaClient()

app.get('/games', async (_, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  })
  res.json(games)
})

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id

  const { discord, hourEnd, hourStart, name, useVoiceChannel, weekDays, yearPlaying } = req.body

  const ad = await prisma.ad.create({
    data: {
      gameId,
      discord,
      hourEnd: hourStringToMinutes(hourEnd),
      hourStart: hourStringToMinutes(hourStart),
      name,
      useVoiceChannel,
      weekDays: weekDays.join(','),
      yearPlaying,
    },
  })

  res.status(201).json(ad)
})

app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id

  const ads = await prisma.ad.findMany({
    where: { gameId },
    select: {
      id: true,
      name: true,
      hourStart: true,
      hourEnd: true,
      weekDays: true,
      yearPlaying: true,
      useVoiceChannel: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  const adsFormatted = ads.map((ad) => ({
    ...ad,
    weekDays: ad.weekDays.split(','),
    hourStart: minutesToHourString(ad.hourStart),
    hourEnd: minutesToHourString(ad.hourEnd),
  }))

  res.json(adsFormatted)
})

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id

  const ad = await prisma.ad.findUniqueOrThrow({
    where: { id: adId },
    select: {
      discord: true,
    },
  })

  res.json({ discord: ad.discord })
})

app.listen(3333, () => {
  console.log('Server is running on port 3333')
})
