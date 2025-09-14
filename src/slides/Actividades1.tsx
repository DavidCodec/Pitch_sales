import { FileText, Search, Clock, Users } from 'lucide-react'

export function Actividades1() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col justify-center items-center p-8">
			{/* Título del capítulo */}
			<div className="text-center mb-8">
				<h1 className="text-5xl font-bold text-white mb-4">Capítulo 2: Actividades</h1>
				<div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
			</div>

			{/* Pregunta introductoria */}
			<div className="text-center mb-10">
				<div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-400/30 shadow-xl max-w-4xl mx-auto">
					<h3 className="text-4xl font-bold text-white mb-4">¿De dónde vienen las pérdidas?</h3>
					<p className="text-2xl text-orange-200">
						De las actividades que realizan <span className="text-orange-400 font-semibold">todos los días</span>
					</p>
				</div>
			</div>

			{/* Contenido principal - 2x2 grid con cuadros del mismo tamaño */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Procesos Manuales */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<FileText className="w-20 h-20 text-blue-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Procesos Manuales</h3>
					<div className="mt-4 flex items-center justify-center">
						<div className="flex space-x-2">
							<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
							<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
							<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
						</div>
						<span className="text-blue-300 text-sm ml-3">Repetición constante</span>
					</div>
				</div>

				{/* Búsqueda Ineficiente */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<Search className="w-20 h-20 text-red-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Búsqueda Ineficiente</h3>
					<div className="mt-4 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
						<p className="text-red-200 text-base font-bold">En una urgencia, esto puede ser fatal</p>
					</div>
				</div>

				{/* Tiempo Perdido */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<Clock className="w-20 h-20 text-yellow-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Tiempo Perdido</h3>
					<div className="mt-4">
						<div className="text-4xl font-black text-yellow-400 mb-2">⏰</div>
						<p className="text-yellow-300 text-sm">Minutos → Horas → Días perdidos</p>
					</div>
				</div>

				{/* Impacto en el Equipo */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<Users className="w-20 h-20 text-purple-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Impacto en el Equipo</h3>
					<div className="mt-4 flex justify-center">
						<div className="flex space-x-1">
							<div className="w-2 h-8 bg-purple-400 rounded-full animate-pulse"></div>
							<div
								className="w-2 h-6 bg-purple-400 rounded-full animate-pulse"
								style={{ animationDelay: '0.1s' }}
							></div>
							<div
								className="w-2 h-4 bg-purple-400 rounded-full animate-pulse"
								style={{ animationDelay: '0.2s' }}
							></div>
						</div>
					</div>
				</div>
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-10 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 left-5 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
