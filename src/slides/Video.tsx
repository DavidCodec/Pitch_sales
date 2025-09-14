// import { SlideTitle } from '@src/components/SlideTitle'
import { useRef, useEffect } from 'react'

export function VideoPanel() {
	const videoRef = useRef<HTMLVideoElement>(null)

	useEffect(() => {
		const video = videoRef.current
		if (video) {
			// Iniciar el video cuando el componente se monta (slide visible)
			video.play().catch(console.error)
		}

		// Cleanup: pausar el video cuando el componente se desmonta
		return () => {
			if (video) {
				video.pause()
				video.currentTime = 0 // Resetear al inicio
			}
		}
	}, [])

	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col justify-center p-6 relative">
			{/* <SlideTitle title="La fórmula SolHub" gradientColor="from-green-400 to-blue-400" /> */}

			{/* Video de demostración */}
			<div className="flex items-center justify-center z-50">
				<div className="relative w-full max-w-7xl">
					<video
						ref={videoRef}
						className="w-full h-auto rounded-lg shadow-2xl border-2 border-white/20"
						loop
						muted
						playsInline
						preload="metadata"
					>
						<source src="/video.mp4" type="video/mp4" />
						Tu navegador no soporta el elemento de video.
					</video>
					<div className="absolute bottom-2 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
						<h3 className="text-white text-lg font-semibold mb-2">Demostración en vivo de SolHub</h3>
					</div>
				</div>
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-20 right-20 w-16 h-16 bg-green-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
