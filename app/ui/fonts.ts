import { Nanum_Gothic } from 'next/font/google'
import { Nanum_Brush_Script } from 'next/font/google'
import { Lusitana } from 'next/font/google'

export const nanumGothic = Nanum_Gothic({
  weight: ['400', '800'],
  subsets: ['latin']
})

export const nanumBrushScript = Nanum_Brush_Script({
  weight: ['400'],
  subsets: ['latin']
})

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin']
})