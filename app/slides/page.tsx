'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DeckControls } from '@src/components/DeckControls'
import { PanelInteractividad } from '@src/components/PanelInteractividad'
import { Timer } from '@src/components/Timer'
import { generarCodigoSesion } from '@src/lib/utils'
import {
	Portada,
	Resumen,
	Problema,
	Solucion,
	Arquitectura,
	Mercado,
	Competencia,
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
		component: Resumen,
	},

	// Slide 3: Problema
	{
		id: 'problema',
		component: Problema,
	},

	// Slide 4: Solución
	{
		id: 'solucion',
		component: Solucion,
	},

	// Slide 5: Arquitectura
	{
		id: 'arquitectura',
		component: Arquitectura,
	},

	// Slide 6: Mercado
	{
		id: 'mercado',
		component: Mercado,
	},

	// Slide 7: Competencia
	{
		id: 'competencia',
		component: Competencia,
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
	const [codigoSesion] = useState(() => generarCodigoSesion())

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

			<PanelInteractividad
				codigoSesion={codigoSesion}
				visible={mostrarInteractividad}
				onCerrar={() => setMostrarInteractividad(false)}
			/>

			{/* Timer en esquina inferior derecha */}
			<Timer
				defaultDuration={15 * 60} // 15 minutos por defecto
				onTimeUp={() => {
					// Opcional: mostrar notificación cuando se agote el tiempo
					console.log('Tiempo del pitch agotado')
				}}
			/>
		</div>
	)
}
