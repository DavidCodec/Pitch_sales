'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DeckControls } from '@src/components/DeckControls'
import { Timer } from '@src/components/Timer'
import { Logo } from '@src/components/Logo'
import {
	Portada,
	// Resumen,
	// Problema,
	ResumenProblema,
	Solucion,
	Mercado,
	Negocio,
	Traccion,
	Roadmap,
	Riesgos,
	Equipo,
	CTA,
} from '@src/slides'

const slides = [
	// Slide 1: Portada
	{
		id: 'portada',
		component: Portada,
	},

	// Slide 2: Resumen Ejecutivo
	{
		id: 'resumen',
		component: ResumenProblema,
	},

	// Slide 4: Solución
	{
		id: 'solucion',
		component: Solucion,
	},

	// Slide 6: Mercado
	{
		id: 'mercado',
		component: Mercado,
	},

	// Slide 8: Negocio
	{
		id: 'negocio',
		component: Negocio,
	},

	// Slide 9: Tracción
	{
		id: 'traccion',
		component: Traccion,
	},

	// Slide 10: Roadmap
	{
		id: 'roadmap',
		component: Roadmap,
	},

	// Slide 11: Riesgos
	{
		id: 'riesgos',
		component: Riesgos,
	},

	// Slide 12: Equipo
	{
		id: 'equipo',
		component: Equipo,
	},

	// Slide 13: CTA
	{
		id: 'cta',
		component: CTA,
	},
]

export default function SlidesPage() {
	const [slideActual, setSlideActual] = useState(0)
	const [mostrarInteractividad, setMostrarInteractividad] = useState(false)

	const totalSlides = slides.length

	const cambiarSlide = (nuevoSlide: number) => {
		if (nuevoSlide >= 0 && nuevoSlide < totalSlides) {
			setSlideActual(nuevoSlide)
		}
	}

	const toggleInteractividad = () => {
		setMostrarInteractividad(!mostrarInteractividad)
	}

	return (
		<div className="h-screen w-screen overflow-hidden">
			<DeckControls
				slideActual={slideActual}
				totalSlides={totalSlides}
				onCambiarSlide={cambiarSlide}
				onToggleInteractividad={toggleInteractividad}
				participantes={0}
			/>

			<div className="h-full w-full overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.div key={slideActual} className="h-full w-full">
						{slides[slideActual].component()}
					</motion.div>
				</AnimatePresence>
			</div>

			{/* Logo en esquina inferior izquierda */}
			<Logo />

			{/* Timer en esquina inferior derecha */}
			<Timer
				defaultDuration={3 * 60} // 15 minutos por defecto
				onTimeUp={() => {
					// Opcional: mostrar notificación cuando se agote el tiempo
					console.log('Tiempo del pitch agotado')
				}}
			/>
		</div>
	)
}
