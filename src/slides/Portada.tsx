import Particles from '@src/components/ui/Particles'
import { CodeXml } from 'lucide-react'

export function Portada() {
	return (
		<div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 w-screen h-screen">
			<Particles />
			<div className="flex flex-col items-center translate-y-[140%]">
				<div>
					<h1 className="text-blue-100 text-center font-bold text-6xl font-sans flex items-center justify-center gap-2">
						{' '}
						<CodeXml className="w-20 h-20 stroke-2" /> Solware
					</h1>
				</div>
				<p className="text-white/90 text-center text-xl font-semibold">
					Sistema Administrativo Web para Laboratorios y Clínicas
				</p>
				<div className="text-white/90 text-xl font-semibold">
					Centralizando gestión de pacientes, casos, pagos y reportes en una sola plataforma
				</div>
				<div className="mt-8 text-white/70 text-lg italic">Eugenio Andreone y Jesús Freites - Caracas, 2025</div>
			</div>
		</div>
	)
}
