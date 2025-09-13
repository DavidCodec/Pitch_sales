// import { Card, CardHeader, CardTitle, CardContent } from '@src/components/ui/card'
import {Globe, Phone, Instagram} from 'lucide-react'

export function CTA() {
	return (
		<div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 w-screen h-screen flex flex-col items-center justify-center">
			<div className="text-center text-white space-y-8">
				<h1 className="text-white font-sans text-6xl font-bold">¡Únete a Solware! 🚀</h1>

				<p className="text-2xl text-white/90 max-w-4xl mx-auto">
					Transformemos la gestión administrativa de laboratorios en Venezuela
				</p>

				{/* Página Web */}
				<div className="mt-8">
					<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-md mx-auto">
						<h3 className="text-2xl font-bold text-white mb-4 text-center">Solware Agency</h3>
						<div className="space-y-3">
							<div className="flex items-center justify-left gap-2">
								<span className=""><Globe className='size-3'/></span>
								<a
									href="https://www.solware.agency"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-green-300 transition-colors text-lg"
								>
									solware.agency
								</a>
							</div>
							<div className="flex items-center justify-left gap-2">
								<span className=""><Phone className='size-3'/></span>
								<a
									href="tel:+584129974533"
									target="_self"
									rel="noopener noreferrer"
									className="text-white hover:text-green-300 transition-colors text-lg"
								>
									+58 412-997-4533
								</a>
							</div>
							<div className="flex items-center justify-left gap-2">
								<span className=""><Instagram className='size-3'/></span>
								<a
									href="https://www.instagram.com/solware_"
									target="_self"
									rel="noopener noreferrer"
									className="text-white hover:text-green-300 transition-colors text-lg"
								>
									@solware_
								</a>
							</div>
						</div>
						<div className="flex items-center justify-center space-x-3 mt-4">
							<a
								href="https://calendar.app.google/EYruMbWpJwJ82gHr6"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:bg-purple-600 transition-colors text-lg bg-purple-500 p-2 px-4 rounded-md"
							>
								Agendar Cita
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 text-xl italic">Juntos podemos modernizar la gestión de laboratorios en Venezuela</div>
			</div>
		</div>
	)
}
