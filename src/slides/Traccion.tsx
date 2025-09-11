import { Slide, ContenidoSlide } from '@src/components/Slide'
import { Badge } from '@src/components/ui/badge'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function Traccion() {
	const datosTraccion = [
		{ mes: 'Ene', usuarios: 5, casos: 120 },
		{ mes: 'Feb', usuarios: 8, casos: 180 },
		{ mes: 'Mar', usuarios: 12, casos: 280 },
		{ mes: 'Abr', usuarios: 15, casos: 350 },
		{ mes: 'May', usuarios: 18, casos: 420 },
		{ mes: 'Jun', usuarios: 22, casos: 500 },
	]
	return (
		<Slide>
			<ContenidoSlide titulo="Tracción y Validación">
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xl font-semibold mb-4">MVP Validado en Conspat</h3>
						<div className="grid grid-cols-2 gap-4 mb-6">
							<div className="text-center p-4 bg-green-50 rounded-lg">
								<div className="text-3xl font-bold text-green-600">18</div>
								<div className="text-sm text-green-700">Meses de aliados</div>
							</div>
							<div className="text-center p-4 bg-blue-50 rounded-lg">
								<div className="text-3xl font-bold text-blue-600">130-200 horas</div>
								<div className="text-sm text-blue-700">Reducción tiempo tareas</div>
							</div>
						</div>

						<h3 className="text-xl font-semibold mb-4">Pipeline Comercial</h3>
						<div className="space-y-3">
							<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
								<span>Laboratorios interesados</span>
								<Badge>5 en lista de espera</Badge>
							</div>
							<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
								<span>Pipeline Q1 2025</span>
								<Badge variant="outline">$180K USD</Badge>
							</div>
							<div className="flex justify-between items-center p-3 bg-gray-50 rounded">
								<span>Demos programadas</span>
								<Badge>12 en enero</Badge>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4">Crecimiento de Usuarios</h3>
						<ResponsiveContainer width="100%" height={250}>
							<BarChart data={datosTraccion}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="mes" />
								<YAxis />
								<Tooltip />
								<Bar dataKey="usuarios" fill="#8884d8" name="Usuarios" />
								<Bar dataKey="casos" fill="#82ca9d" name="Casos" />
							</BarChart>
						</ResponsiveContainer>

						<div className="mt-6">
							<h3 className="text-xl font-semibold mb-4">Objetivos 12 Meses</h3>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>ARR (Annual Recurring Revenue):</span>
									<span className="font-medium">$360K</span>
								</div>
								<div className="flex justify-between">
									<span>Usuarios en plataforma:</span>
									<span className="font-medium">10</span>
								</div>
								<div className="flex justify-between">
									<span>Expansión geográfica:</span>
									<span className="font-medium">Regional</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ContenidoSlide>
		</Slide>
	)
}
