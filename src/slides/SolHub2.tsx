import { Home, Stethoscope, FileText, Users, BarChart3, Play } from 'lucide-react'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function SolHub2() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col p-6">
			<SlideTitle title="Capítulo 3: La fórmula SolHub" gradientColor="from-green-400 to-blue-400" />

			{/* Contenido principal - 2x3 grid con cuadros del mismo tamaño */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
				{/* Módulo Inicio */}
				<AnimatedCard
					delay={0.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
				>
					<AnimatedIcon delay={0.4}>
						<Home className="w-16 h-16 text-blue-400 mb-3" />
					</AnimatedIcon>
					<AnimatedText delay={0.6}>
						<h3 className="text-xl font-bold text-white">Inicio</h3>
					</AnimatedText>
					<AnimatedText delay={0.8}>
						<p className="text-blue-300 text-lg mt-2">Ingresos, casos y tendencias en tiempo real</p>
					</AnimatedText>
				</AnimatedCard>

				{/* Módulo Clínico */}
				<AnimatedCard
					delay={0.4}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
				>
					<AnimatedIcon delay={0.6}>
						<Stethoscope className="w-16 h-16 text-green-400 mb-3" />
					</AnimatedIcon>
					<AnimatedText delay={0.8}>
						<h3 className="text-xl font-bold text-white">Clínico</h3>
					</AnimatedText>
					<AnimatedText delay={1.0}>
						<p className="text-green-300 text-lg mt-2">Gestiona pacientes y casos</p>
					</AnimatedText>
				</AnimatedCard>

				{/* Módulo Casos */}
				<AnimatedCard
					delay={0.6}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
				>
					<AnimatedIcon delay={0.8}>
						<FileText className="w-16 h-16 text-purple-400 mb-3" />
					</AnimatedIcon>
					<AnimatedText delay={1.0}>
						<h3 className="text-xl font-bold text-white">Casos</h3>
					</AnimatedText>
					<AnimatedText delay={1.2}>
						<p className="text-purple-300 text-lg mt-2">Ver, filtrar y generar informes detallados</p>
					</AnimatedText>
				</AnimatedCard>

				{/* Resumen final */}
				<AnimatedText delay={1.4} className="max-w-4xl mx-auto col-span-3">
					<AnimatedCard
						delay={1.6}
						className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
					>
						<div className="flex items-center justify-center mb-3">
							<AnimatedIcon delay={1.8}>
								<Play className="w-8 h-8 text-white mr-2" />
							</AnimatedIcon>
							<AnimatedText delay={2.0}>
								<h3 className="text-xl font-bold text-white text-center">Módulos Clave</h3>
							</AnimatedText>
						</div>
						<AnimatedText delay={2.2}>
							<p className="text-white text-xl text-center leading-relaxed">
								La plataforma cuenta con <span className="text-green-400 font-bold">módulos clave</span> que cubren
								desde el registro hasta el análisis, con un{' '}
								<span className="text-blue-400 font-bold">módulo de reportes</span> que exporta PDFs.
							</p>
						</AnimatedText>
					</AnimatedCard>
				</AnimatedText>

				{/* Módulo Pacientes */}
				<AnimatedCard
					delay={1.8}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
				>
					<AnimatedIcon delay={2.0}>
						<Users className="w-16 h-16 text-orange-400 mb-3" />
					</AnimatedIcon>
					<AnimatedText delay={2.2}>
						<h3 className="text-xl font-bold text-white">Pacientes</h3>
					</AnimatedText>
					<AnimatedText delay={2.4}>
						<p className="text-orange-300 text-lg mt-2">Busca información completa</p>
					</AnimatedText>
				</AnimatedCard>

				{/* Módulo Análisis */}
				<AnimatedCard
					delay={2.0}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
				>
					<AnimatedIcon delay={2.2}>
						<BarChart3 className="w-16 h-16 text-yellow-400 mb-3" />
					</AnimatedIcon>
					<AnimatedText delay={2.4}>
						<h3 className="text-xl font-bold text-white">Análisis</h3>
					</AnimatedText>
					<AnimatedText delay={2.6}>
						<p className="text-yellow-300 text-lg mt-2">Métricas e indicadores interactivos</p>
					</AnimatedText>
				</AnimatedCard>

				{/* Video Demo */}
				<AnimatedCard
					delay={2.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
				>
					<AnimatedIcon delay={2.4}>
						<Play className="w-16 h-16 text-red-400 mb-3" />
					</AnimatedIcon>
					<AnimatedText delay={2.6}>
						<h3 className="text-xl font-bold text-white">Demo</h3>
					</AnimatedText>
					<AnimatedText delay={2.8}>
						<p className="text-red-300 text-lg mt-2">Tour completo de la plataforma</p>
					</AnimatedText>
				</AnimatedCard>
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-20 right-20 w-16 h-16 bg-green-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
