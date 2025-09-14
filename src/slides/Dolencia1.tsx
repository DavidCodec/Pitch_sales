import { AlertTriangle, Clock, DollarSign, FileText } from 'lucide-react'
import { SlideTitle } from '@src/components/SlideTitle'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function Dolencia1() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col p-6">
			<SlideTitle title="Costos ocultos" gradientColor="from-green-400 to-blue-400" />

			{/* Estadística principal - centrada y prominente */}
			<AnimatedText delay={0.2} className="text-center mb-8">
				<AnimatedCard delay={0.4} className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/30 shadow-2xl max-w-4xl mx-auto">
					<div className="flex items-center justify-center mb-4">
						<AnimatedIcon delay={0.6}>
							<AlertTriangle className="w-16 h-16 text-red-400 mr-4" />
						</AnimatedIcon>
						<AnimatedText delay={0.8}>
							<h2 className="text-4xl font-bold text-white">La Realidad Cruda</h2>
						</AnimatedText>
					</div>
					<AnimatedText delay={1.0}>
						<p className="text-2xl text-white leading-relaxed">
							<span className="text-6xl font-black text-red-400">8 de cada 10</span>
							<br />
							<span className="text-xl">laboratorios en Venezuela</span>
							<br />
							<span className="text-2xl font-semibold text-yellow-300">siguen sin una base de datos</span>
						</p>
					</AnimatedText>
				</AnimatedCard>
			</AnimatedText>

			{/* Problemas identificados - en fila horizontal */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<AnimatedCard delay={1.2} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
					<div className="flex flex-col items-center text-center">
						<AnimatedIcon delay={1.4}>
							<FileText className="w-16 h-16 text-yellow-400 mb-4" />
						</AnimatedIcon>
						<AnimatedText delay={1.6}>
							<h3 className="text-2xl font-bold text-white mb-4">Procesos Manuales</h3>
						</AnimatedText>
						<AnimatedText delay={1.8}>
							<p className="text-white/90 text-lg">
								<span className="text-4xl font-black text-yellow-400">95%</span>
								<br />
								<span className="text-base"> Lentos, inseguros y costosos</span>
							</p>
						</AnimatedText>
						<div className="mt-4 w-full h-1 bg-yellow-400/50 rounded-full"></div>
					</div>
				</AnimatedCard>

				<AnimatedCard delay={1.4} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
					<div className="flex flex-col items-center text-center">
						<AnimatedIcon delay={1.6}>
							<Clock className="w-16 h-16 text-orange-400 mb-4" />
						</AnimatedIcon>
						<AnimatedText delay={1.8}>
							<h3 className="text-2xl font-bold text-white mb-4">Pérdida de Tiempo</h3>
						</AnimatedText>
						<AnimatedText delay={2.0}>
							<p className="text-white/90 text-lg">
								<span className="text-4xl font-black text-orange-400">1,800 - 2,600</span>
								<br />
								<span className="text-base">horas de trabajo perdidas al año</span>
							</p>
						</AnimatedText>
						<div className="mt-4 w-full h-1 bg-orange-400/50 rounded-full"></div>
					</div>
				</AnimatedCard>

				<AnimatedCard delay={1.6} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
					<div className="flex flex-col items-center text-center">
						<AnimatedIcon delay={1.8}>
							<DollarSign className="w-16 h-16 text-red-400 mb-4" />
						</AnimatedIcon>
						<AnimatedText delay={2.0}>
							<h3 className="text-2xl font-bold text-white mb-4">Pérdida Económica</h3>
						</AnimatedText>
						<AnimatedText delay={2.2}>
							<p className="text-white/90 text-lg">
								<span className="text-4xl font-black text-red-400">$4,500 - $6,500</span>
								<br />
								<span className="text-base">dólares tirados a la basura</span>
							</p>
						</AnimatedText>
						<div className="mt-4 w-full h-1 bg-red-400/50 rounded-full"></div>
					</div>
				</AnimatedCard>
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-10 left-10 w-20 h-20 bg-pink-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/2 left-5 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
