import { Shield, FileX, AlertCircle, RotateCcw, TrendingDown } from 'lucide-react'

export function Actividades2() {
	return (
		<div className="bg-gradient-to-br from-indigo-900 to-indigo-950 w-screen h-screen flex flex-col justify-center items-center p-6">
			{/* Título del capítulo */}
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-white mb-4">Capítulo 2: Actividades</h1>
				<div className="w-32 h-1 bg-gradient-to-r from-red-400 to-purple-400 mx-auto rounded-full"></div>
			</div>

			{/* Contenido principal - 2x2 grid con cuadros del mismo tamaño */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
				{/* Almacenamiento Físico */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<FileX className="w-20 h-20 text-orange-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Almacenamiento Físico</h3>
				</div>

				{/* Riesgos Legales */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<Shield className="w-20 h-20 text-red-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Riesgos Legales</h3>
				</div>

				{/* Ciclo Repetitivo */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<RotateCcw className="w-20 h-20 text-yellow-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Ciclo Repetitivo</h3>
				</div>

				{/* Falta de Control */}
				<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 flex flex-col items-center justify-center text-center h-48">
					<TrendingDown className="w-20 h-20 text-purple-400 mb-4" />
					<h3 className="text-2xl font-bold text-white">Falta de Control</h3>
				</div>
			</div>

			{/* Resumen final */}
			<div className="max-w-4xl mx-auto">
				<div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
					<div className="flex items-center justify-center mb-3">
						<AlertCircle className="w-8 h-8 text-white mr-2 animate-pulse" />
						<h3 className="text-xl font-bold text-white text-center">El Resultado</h3>
					</div>
					<p className="text-white text-xl text-center leading-relaxed">
						Miles de horas perdidas al año, procesos ineficientes, riesgos legales y
						<span className="text-red-400 font-bold"> falta total de control</span> sobre las operaciones del
						laboratorio.
					</p>
					<div className="mt-2 p-2 bg-red-500/20 rounded-lg border border-red-400/30">
						<p className="text-red-200 text-base font-semibold text-center">Se arriesga su reputación y su carrera</p>
					</div>
				</div>
			</div>

			{/* Elementos decorativos */}
			<div className="absolute top-20 right-20 w-16 h-16 bg-red-400/20 rounded-full animate-ping"></div>
			<div className="absolute bottom-20 left-20 w-20 h-20 bg-purple-400/20 rounded-full animate-pulse"></div>
			<div className="absolute top-1/3 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
		</div>
	)
}
