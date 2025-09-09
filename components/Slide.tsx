'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SlideProps {
  children: ReactNode
  className?: string
  variante?: 'denso' | 'visual' | 'titulo'
  fondo?: string
}

export function Slide({ children, className, variante = 'denso', fondo }: SlideProps) {
  const variantes = {
    denso: 'p-12 text-left',
    visual: 'p-8 text-center flex flex-col items-center justify-center',
    titulo: 'p-16 text-center flex flex-col items-center justify-center'
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'w-full h-full min-h-screen flex flex-col',
        'aspect-video max-w-7xl mx-auto',
        variantes[variante],
        fondo && `bg-gradient-to-br ${fondo}`,
        className
      )}
      style={{ aspectRatio: '16/9' }}
    >
      {children}
    </motion.div>
  )
}

interface TituloSlideProps {
  children: ReactNode
  subtitulo?: string
  className?: string
}

export function TituloSlide({ children, subtitulo, className }: TituloSlideProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <h1 className="text-6xl font-bold text-primary leading-tight">
        {children}
      </h1>
      {subtitulo && (
        <p className="text-2xl text-muted-foreground max-w-4xl">
          {subtitulo}
        </p>
      )}
    </div>
  )
}

interface ContenidoSlideProps {
  titulo: string
  children: ReactNode
  className?: string
}

export function ContenidoSlide({ titulo, children, className }: ContenidoSlideProps) {
  return (
    <div className={cn('space-y-8', className)}>
      <h2 className="text-4xl font-bold text-primary border-b-2 border-primary pb-4">
        {titulo}
      </h2>
      <div className="text-xl leading-relaxed">
        {children}
      </div>
    </div>
  )
}

interface ListaSlideProps {
  items: string[]
  className?: string
}

export function ListaSlide({ items, className }: ListaSlideProps) {
  return (
    <ul className={cn('space-y-4', className)}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start space-x-4 text-lg"
        >
          <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
            {index + 1}
          </span>
          <span className="leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}