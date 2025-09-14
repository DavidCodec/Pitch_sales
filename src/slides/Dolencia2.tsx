import { Heart, Shield, AlertCircle, FileX, Users } from 'lucide-react'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function Dolencia2() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col p-6">
			<SlideTitle title="Capítulo 1: Situación Actual" gradientColor="from-green-400 to-blue-400" />

			{/* Contenido principal - 2x2 grid con cuadros del mismo tamaño */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
				{/* Riesgo de Vida */}
				<AnimatedCard delay={0.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<AnimatedIcon delay={0.4}>
						<Heart className="w-16 h-16 text-red-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={0.6}>
						<h3 className="text-2xl font-bold text-white">Riesgo de Vida</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Pérdida de Datos */}
				<AnimatedCard delay={0.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<AnimatedIcon delay={0.6}>
						<FileX className="w-16 h-16 text-orange-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={0.8}>
						<h3 className="text-2xl font-bold text-white">Pérdida de Datos</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Riesgo Legal */}
				<AnimatedCard delay={0.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<AnimatedIcon delay={0.8}>
						<Shield className="w-16 h-16 text-yellow-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={1.0}>
						<h3 className="text-2xl font-bold text-white">Riesgo Legal</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Impacto en el Personal */}
				<AnimatedCard delay={0.8} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<AnimatedIcon delay={1.0}>
						<Users className="w-16 h-16 text-purple-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={1.2}>
						<h3 className="text-2xl font-bold text-white">Impacto en el Personal</h3>
					</AnimatedText>
				</AnimatedCard>
			</div>

			{/* Resumen final */}
			<AnimatedText delay={1.4} className="max-w-4xl mx-auto">
				<AnimatedCard delay={1.6} className="bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
					<div className="flex items-center justify-center mb-3">
						<AnimatedIcon delay={1.8}>
							<AlertCircle className="w-8 h-8 text-white mr-2" />
						</AnimatedIcon>
						<AnimatedText delay={2.0}>
							<h3 className="text-xl font-bold text-white text-center">En Resumen</h3>
						</AnimatedText>
					</div>
					<AnimatedText delay={2.2}>
						<p className="text-white text-xl text-center leading-relaxed">
							Los laboratorios que no se digitalizan
							<span className="text-red-400 font-bold"> pierden dinero</span>,
							<span className="text-red-400 font-bold"> arriesgan vidas</span>,
							<span className="text-yellow-400 font-bold"> desgastan a su personal</span> y
							<span className="text-purple-400 font-bold"> ponen en juego su credibilidad</span>.
						</p>
					</AnimatedText>
					<AnimatedText delay={2.4}>
						<div className="mt-4 flex items-center justify-center space-x-4">
							<span className="text-orange-300 text-xl">❌ No hay copia</span>
							<span className="text-orange-300 text-xl">❌ No hay respaldo</span>
						</div>
					</AnimatedText>
				</AnimatedCard>
			</AnimatedText>

			{/* Elementos decorativos */}
			<div className="absolute top-20 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-20 left-20 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
