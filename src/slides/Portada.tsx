import Particles from '@src/components/ui/Particles'
import { CodeXml, ArrowUp } from 'lucide-react'
import { Qr } from '@src/components/Qr'

export function Portada() {
	return (
		<div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 w-screen h-screen flex items-center justify-center">
			<Particles />
			<div className="flex flex-col items-center">
				<div className="mb-8">
					<h1 className="text-blue-100 text-center font-bold text-7xl font-sans flex items-center justify-center gap-2">
						{' '}
						<CodeXml className="w-20 h-20 stroke-2" /> Solware
					</h1>
				</div>
				<p className="text-white/90 text-center text-4xl font-semibold">
					Sistema Administrativo Web para Laboratorios y Clínicas
				</p>
				<div className="mt-8 mb-8 text-white/80 text-3xl italic">Eugenio Andreone y Jesús Freites - Caracas, 2025</div>
				<Qr />
				<p className="text-white text-3xl font-bold italic flex flex-col items-center justify-center gap-1 mt-3">
					<ArrowUp className="w-6 h-6 animate-bounce" /> Escanea el QR para ver la presentación
				</p>
			</div>
		</div>
	)
}
