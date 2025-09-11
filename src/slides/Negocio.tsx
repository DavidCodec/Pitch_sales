import { Slide, ContenidoSlide } from '@src/components/Slide'
import { Card, CardHeader, CardTitle, CardContent } from '@src/components/ui/card'
import { Badge } from '@src/components/ui/badge'

export function Negocio() {
  return (
    <Slide>
				<ContenidoSlide titulo="Modelo de Negocio">
					<div className="grid md:grid-cols-3 gap-6">
						<Card className="bg-blue-50 border-blue-200">
							<CardHeader>
								<CardTitle className="text-blue-900">💰 Setup Inicial</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-3xl font-bold text-blue-600 mb-2">$1K-6K</div>
								<ul className="text-sm text-blue-700 space-y-1">
									<li>• Implementación completa</li>
									<li>• Migración de datos</li>
									<li>• Entrenamiento equipo</li>
									<li>• Personalización</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-green-50 border-green-200">
							<CardHeader>
								<CardTitle className="text-green-900">📅 SaaS Mensual</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-3xl font-bold text-green-600 mb-2">$150-500</div>
								<ul className="text-sm text-green-700 space-y-1">
									<li>• Basado en usuarios</li>
									<li>• Actualizaciones automáticas</li>
									<li>• Soporte continuo</li>
									<li>• Backup y seguridad</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="bg-purple-50 border-purple-200">
							<CardHeader>
								<CardTitle className="text-purple-900">🤖 Módulo IA</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="text-3xl font-bold text-purple-600 mb-2">+$100</div>
								<ul className="text-sm text-purple-700 space-y-1">
									<li>• SolIA opcional</li>
									<li>• Entrenamiento personalizado</li>
									<li>• Soporte especializado</li>
									<li>• Actualizaciones IA</li>
								</ul>
							</CardContent>
						</Card>
					</div>

					<div className="mt-8 grid md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-xl font-semibold mb-4">Planes de Suscripción</h3>
							<div className="space-y-4">
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Plan 1 (10 usuarios)</span>
										<span className="text-lg font-bold">$150/mes</span>
									</div>
									<div className="text-sm text-gray-600">Setup: $1,000-1,200</div>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Plan 2 (50 usuarios)</span>
										<span className="text-lg font-bold">$250/mes</span>
									</div>
									<div className="text-sm text-gray-600">Setup: $2,000-2,500</div>
								</div>
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Plan 3 (100 usuarios)</span>
										<span className="text-lg font-bold">$500/mes</span>
									</div>
									<div className="text-sm text-gray-600">Setup: $4,000-6,000</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-xl font-semibold mb-4">Servicios Adicionales</h3>
							<div className="space-y-3">
								<div className="flex items-center justify-between p-3 bg-blue-50 rounded">
									<span>Asesoramiento</span>
									<Badge>$100/mes</Badge>
								</div>
								<div className="flex items-center justify-between p-3 bg-green-50 rounded">
									<span>Desarrollo Web</span>
									<Badge>$1,200</Badge>
								</div>
								<div className="flex items-center justify-between p-3 bg-purple-50 rounded">
									<span>Agentes IA</span>
									<Badge>$100/mes</Badge>
								</div>
								<div className="flex items-center justify-between p-3 bg-orange-50 rounded">
									<span>Automatizaciones</span>
									<Badge>$500</Badge>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
						<h3 className="text-xl font-semibold text-green-900 mb-4">Propuesta de Valor</h3>
						<div className="grid md:grid-cols-3 gap-4 text-sm">
							<div>
								<h4 className="font-semibold text-green-800 mb-2">💡 Costo-Beneficio</h4>
								<p className="text-green-700">~$0.69 USD por caso procesado en un año</p>
							</div>
							<div>
								<h4 className="font-semibold text-green-800 mb-2">⚡ ROI Rápido</h4>
								<p className="text-green-700">Reducción 75% tiempo tareas (2 min → 30 seg)</p>
							</div>
							<div>
								<h4 className="font-semibold text-green-800 mb-2">🔄 Modelo Recurrente</h4>
								<p className="text-green-700">Suscripción mensual con actualizaciones continuas</p>
							</div>
						</div>
					</div> */}
				</ContenidoSlide>
			</Slide>
  )
}