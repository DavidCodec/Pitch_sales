import { Slide, ContenidoSlide } from '@src/components/Slide'
import { Palette, ChartPie, Trophy, Bot, Smartphone, Settings } from 'lucide-react'
import { Card, CardContent } from '@src/components/ui/card'
import { Badge } from '@src/components/ui/badge'

export function Competencia() {
	return (
		<Slide>
			<ContenidoSlide titulo="Análisis de Competencia">
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xl font-semibold mb-4">Nuestras Ventajas Únicas</h3>
						<div className="space-y-4">
							{[
								{
									icon: Palette,
									titulo: 'Hiper Personalización',
									desc: 'Se adapta a procesos del cliente, no al revés',
								},
								{ icon: ChartPie, titulo: 'Metricas', desc: 'Metricas personalizables en tiempo real' },
								{
									icon: Trophy,
									titulo: 'Validación Conspat',
									desc: 'MVP validado en entorno real con resultados medibles',
								},
								{
									icon: Bot,
									titulo: 'IA Local y Segura',
									desc: 'Sin retención de datos, entrenada con casos reales',
								},
								{
									icon: Smartphone,
									titulo: 'Multiplataforma',
									desc: 'Conectate desde cualquier dispositivo',
								},
								{
									icon: Settings,
									titulo: 'Automatizaciones',
									desc: 'Generacion y envio automatico de informes clinicos',
								},
							].map((ventaja, index) => {
								const IconComponent = ventaja.icon
								return (
									<div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
										<div className="text-blue-600">
											<IconComponent size={24} />
										</div>
										<div>
											<h4 className="font-semibold">{ventaja.titulo}</h4>
											<p className="text-sm text-gray-600">{ventaja.desc}</p>
										</div>
									</div>
								)
							})}
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4">Competidores Identificados</h3>
						<div className="space-y-3">
							<Card className="border-red-200">
								<CardContent className="p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Galac (VE)</span>
										<Badge variant="destructive">Licencia anual</Badge>
									</div>
									<p className="text-sm text-gray-600">Accesible pero no clínico, sin personalización</p>
								</CardContent>
							</Card>

							<Card className="border-orange-200">
								<CardContent className="p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">ZkyMed (Latam)</span>
										<Badge variant="secondary">$50-100/mes</Badge>
									</div>
									<p className="text-sm text-gray-600">SaaS modular, enfoque genérico</p>
								</CardContent>
							</Card>

							<Card className="border-yellow-200">
								<CardContent className="p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Jedy Health (VE)</span>
										<Badge variant="outline">$15-175/mes</Badge>
									</div>
									<p className="text-sm text-gray-600">Suscripción escalada, sin IA especializada</p>
								</CardContent>
							</Card>

							<Card className="border-blue-200">
								<CardContent className="p-4">
									<div className="flex justify-between items-center mb-2">
										<span className="font-medium">Clinic to Cloud (INT)</span>
										<Badge variant="outline">$499/mes</Badge>
									</div>
									<p className="text-sm text-gray-600">Alto costo, sin adaptación local</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</ContenidoSlide>
		</Slide>
	)
}
