import { CheckCircle, Clock, TrendingUp, Map } from 'lucide-react'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function SolHub3() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col p-6">
			<SlideTitle title="Capítulo 3: La fórmula SolHub" gradientColor="from-green-400 to-blue-400" />

			{/* Contenido principal - 2x2 grid con cuadros del mismo tamaño */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
				{/* MVP Validado */}
				<AnimatedCard
					delay={0.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={0.4}>
						<CheckCircle className="w-20 h-20 text-green-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={0.6}>
						<h3 className="text-2xl font-bold text-white">MVP Validado</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Resultados */}
				<AnimatedCard
					delay={0.4}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={0.6}>
						<Clock className="w-20 h-20 text-blue-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={0.8}>
						<h3 className="text-2xl font-bold text-white">Resultados</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Modelo de Negocio */}
				<AnimatedCard
					delay={0.6}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={0.8}>
						<TrendingUp className="w-20 h-20 text-purple-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={1.0}>
						<h3 className="text-2xl font-bold text-white">Modelo de Negocio</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Roadmap */}
				<AnimatedCard
					delay={0.8}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={1.0}>
						<Map className="w-20 h-20 text-orange-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={1.2}>
						<h3 className="text-2xl font-bold text-white">Roadmap</h3>
					</AnimatedText>
				</AnimatedCard>
			</div>

			{/* Resumen final */}
			<AnimatedText delay={1.4} className="max-w-4xl mx-auto">
				<AnimatedCard
					delay={1.6}
					className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
				>
					<div className="flex items-center justify-center mb-3">
						<AnimatedIcon delay={1.8}>
							<CheckCircle className="w-8 h-8 text-white mr-2" />
						</AnimatedIcon>
						<AnimatedText delay={2.0}>
							<h3 className="text-xl font-bold text-white text-center">Listos para Escalar</h3>
						</AnimatedText>
					</div>
					<AnimatedText delay={2.2}>
						<p className="text-white text-xl text-center leading-relaxed">
							Nuestro MVP, validado en laboratorios reales, redujo los tiempos de atención y liberó hasta
							<span className="text-green-400 font-bold"> 2,600 horas de trabajo al año</span>. Más que números,
							significó <span className="text-blue-400 font-bold">menos esperas, menos errores y más confianza</span>.
						</p>
					</AnimatedText>
				</AnimatedCard>
			</AnimatedText>

			{/* Elementos decorativos */}
			<div className="absolute top-20 right-20 w-16 h-16 bg-green-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
