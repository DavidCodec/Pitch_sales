import { Database, Users, Shield, TrendingUp } from 'lucide-react'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function SolHub1() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col p-6">
			<SlideTitle title="Capítulo 3: La fórmula SolHub" gradientColor="from-green-400 to-blue-400" />

			{/* Contenido principal - 2x2 grid con cuadros del mismo tamaño */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
				{/* Problema */}
				<AnimatedCard
					delay={0.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={0.4}>
						<Database className="w-20 h-20 text-red-400 mb-4" />
					</AnimatedIcon> 
					<AnimatedText delay={0.6}>
						<h3 className="text-2xl font-bold text-white">El Problema</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Solución */}
				<AnimatedCard
					delay={0.4}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={0.6}>
						<Shield className="w-20 h-20 text-green-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={0.8}>
						<h3 className="text-2xl font-bold text-white">Nuestra Solución</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Beneficios */}
				<AnimatedCard
					delay={0.6}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={0.8}>
						<Users className="w-20 h-20 text-blue-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={1.0}>
						<h3 className="text-2xl font-bold text-white">Beneficios</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Mercado */}
				<AnimatedCard
					delay={0.8}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48"
				>
					<AnimatedIcon delay={1.0}>
						<TrendingUp className="w-20 h-20 text-purple-400 mb-4" />
					</AnimatedIcon>
					<AnimatedText delay={1.2}>
						<h3 className="text-2xl font-bold text-white">Nuestro Mercado</h3>
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
							<Shield className="w-8 h-8 text-white mr-2" />
						</AnimatedIcon>
						<AnimatedText delay={2.0}>
							<h3 className="text-xl font-bold text-white text-center">La Fórmula SolHub</h3>
						</AnimatedText>
					</div>
					<AnimatedText delay={2.2}>
						<p className="text-white text-xl text-center leading-relaxed">
							En un país donde <span className="text-red-400 font-bold">8 de cada 10 laboratorios</span> carecen de base
							de datos,
							<span className="text-green-400 font-bold"> SolHub digitaliza</span> todo el flujo de trabajo, desde el
							registro de pacientes hasta el análisis de rentabilidad.
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
