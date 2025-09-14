import { FileText, Search, Clock, Users } from 'lucide-react'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function Actividades1() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col p-6">
			<SlideTitle title="La trampa de lo manual" gradientColor="from-green-400 to-blue-400" />

			{/* Pregunta introductoria */}
			<AnimatedText delay={0.2} className="text-center mb-10">
				<AnimatedCard
					delay={0.4}
					className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-400/30 shadow-xl max-w-4xl mx-auto"
				>
					<AnimatedText delay={0.6}>
						<h3 className="text-4xl font-bold text-white mb-4">¿De dónde vienen las pérdidas?</h3>
					</AnimatedText>
					<AnimatedText delay={0.8}>
						<p className="text-2xl text-orange-200">
							De las actividades que realizan <span className="text-orange-400 font-semibold">todos los días</span>
						</p>
					</AnimatedText>
				</AnimatedCard>
			</AnimatedText>

			{/* Contenido principal - 2x2 grid con cuadros del mismo tamaño */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
				{/* Procesos Manuales */}
				<AnimatedCard
					delay={1.0}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center col-span-1"
				>
					<AnimatedIcon delay={1.2}>
						<FileText className="text-blue-400 mb-4 w-20 h-20" />
					</AnimatedIcon>
					<AnimatedText delay={1.4}>
						<h3 className="text-2xl font-bold text-white">Procesos Manuales</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Búsqueda Ineficiente */}
				<AnimatedCard
					delay={1.2}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center col-span-1"
				>
					<AnimatedIcon delay={1.4}>
						<Search className="text-red-400 mb-4 w-20 h-20" />
					</AnimatedIcon>
					<AnimatedText delay={1.6}>
						<h3 className="text-2xl font-bold text-white">Búsqueda Ineficiente</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Tiempo Perdido */}
				<AnimatedCard
					delay={1.4}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center col-span-1"
				>
					<AnimatedIcon delay={1.6}>
						<Clock className="text-yellow-400 mb-4 w-20 h-20" />
					</AnimatedIcon>
					<AnimatedText delay={1.8}>
						<h3 className="text-2xl font-bold text-white">Tiempo Perdido</h3>
					</AnimatedText>
				</AnimatedCard>

				{/* Impacto en el Equipo */}
				<AnimatedCard
					delay={1.6}
					className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center col-span-1"
				>
					<AnimatedIcon delay={1.8}>
						<Users className="text-purple-400 mb-4 w-20 h-20" />
					</AnimatedIcon>
					<AnimatedText delay={2.0}>
						<h3 className="text-2xl font-bold text-white">Impacto en el Equipo</h3>
					</AnimatedText>
				</AnimatedCard>
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-10 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 left-5 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
