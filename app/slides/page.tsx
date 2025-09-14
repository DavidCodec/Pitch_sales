'use client'

import { useState, useRef, useMemo, useEffect } from 'react'
import { DeckControls } from '@src/components/DeckControls'
import { TimerWrapper } from '@src/components/TimerWrapper'
import { Logo } from '@src/components/Logo'
import { FadeTransition } from '@src/components/SlideTransition'
import { useSlideAnimations } from '@src/hooks/useSlideAnimations'
import {
	Portada,
	// Resumen,
	// Problema,
	Dolencia1,
	Dolencia2,
	Actividades1,
	VideoPanel,
	Evolucion1,
	Evolucion2,
	Evolucion3,
	// ResumenProblema,
	// Solucion,
	// Mercado,
	// Negocio,
	// Traccion,
	// Roadmap,
	// Riesgos,
	// Equipo,
	CTA,
} from '@src/slides/index'

const slides = [
	// Slide 1: Portada
	{
		id: 'portada',
		component: Portada,
	},

	// Slide 2: Dolencia 1
	{
		id: 'dolencia1',
		component: Dolencia1,
	},

	// Slide 3: Dolencia 2
	{
		id: 'dolencia2',
		component: Dolencia2,
	},

	// Slide 4: Actividades 1
	{
		id: 'actividades1',
		component: Actividades1,
	},

	// Slide 6: SolHub 1
	{
		id: 'videopanel',
		component: VideoPanel,
	},

	// Slide 9: Evolucion 1
	{
		id: 'evolucion1',
		component: Evolucion1,
	},

	// Slide 10: Evolucion 2
	{
		id: 'evolucion2',
		component: Evolucion2,
	},

	// Slide 11: Evolucion 3
	{
		id: 'evolucion3',
		component: Evolucion3,
	},

	// // Slide 2: Resumen Ejecutivo
	// {
	// 	id: 'resumen',
	// 	component: ResumenProblema,
	// },

	// // Slide 4: Solución
	// {
	// 	id: 'solucion',
	// 	component: Solucion,
	// },

	// // Slide 6: Mercado
	// {
	// 	id: 'mercado',
	// 	component: Mercado,
	// },

	// // Slide 8: Negocio
	// {
	// 	id: 'negocio',
	// 	component: Negocio,
	// },

	// // Slide 9: Tracción
	// {
	// 	id: 'traccion',
	// 	component: Traccion,
	// },

	// // Slide 10: Roadmap
	// {
	// 	id: 'roadmap',
	// 	component: Roadmap,
	// },

	// // Slide 11: Riesgos
	// {
	// 	id: 'riesgos',
	// 	component: Riesgos,
	// },

	// // Slide 12: Equipo
	// {
	// 	id: 'equipo',
	// 	component: Equipo,
	// },

	// Slide 13: CTA
	{
		id: 'cta',
		component: CTA,
	},
]

export default function SlidesPage() {
	const [slideActual, setSlideActual] = useState(0)
	const [mostrarInteractividad, setMostrarInteractividad] = useState(false)
	const [timerIniciado, setTimerIniciado] = useState(false)
	const previousSlideRef = useRef(0)

	const totalSlides = slides.length
	const { getTransitionDirection } = useSlideAnimations()

	const cambiarSlide = (nuevoSlide: number) => {
		if (nuevoSlide >= 0 && nuevoSlide < totalSlides) {
			// Actualizar slide inmediatamente para transición fluida
			previousSlideRef.current = slideActual
			setSlideActual(nuevoSlide)
		}
	}

	const toggleInteractividad = () => {
		setMostrarInteractividad(!mostrarInteractividad)
	}

	// Efecto para iniciar el timer automáticamente cuando se pasa del slide 0 al slide 1
	useEffect(() => {
		if (slideActual === 1) {
			setTimerIniciado(true)
		} else if (slideActual === 0) {
			// Resetear el estado cuando volvemos a la portada para permitir reinicio automático
			setTimerIniciado(false)
		}
	}, [slideActual])

	// Obtener la dirección de la transición
	const direction = getTransitionDirection(previousSlideRef.current, slideActual)

	// Memoizar el timer para evitar re-renders innecesarios
	const timerComponent = useMemo(
		() => (
			<TimerWrapper
				defaultDuration={3 * 60} // 3 minutos por defecto
				autoStart={timerIniciado}
				onTimeUp={() => {
					// Opcional: mostrar notificación cuando se agote el tiempo
					console.log('Tiempo del pitch agotado')
				}}
			/>
		),
		[timerIniciado],
	)

	return (
		<div className="h-screen w-screen overflow-hidden">
			<DeckControls
				slideActual={slideActual}
				totalSlides={totalSlides}
				onCambiarSlide={cambiarSlide}
				onToggleInteractividad={toggleInteractividad}
				participantes={0}
			/>

			<div className="h-full w-full overflow-hidden relative">
				<FadeTransition slideIndex={slideActual} direction={direction} className="w-full h-full">
					{(() => {
						const SlideComponent = slides[slideActual].component
						return <SlideComponent />
					})()}
				</FadeTransition>
			</div>

			{/* Logo en esquina inferior izquierda */}
			<Logo />

			{/* Timer en esquina inferior derecha */}
			{timerComponent}
		</div>
	)
}
