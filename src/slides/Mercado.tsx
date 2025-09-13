import { Slide, ContenidoSlide } from '@src/components/Slide'
import { ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

export function Mercado() {
	const datosMercado = [
		{ nombre: 'Laboratorios Patológicos', valor: 39, color: '#db2777' },
		{ nombre: 'Centros Diagnóstico', valor: 141, color: '#9333ea' },
		{ nombre: 'Clínicas Generales', valor: 1200, color: '#3b82f6' },
	]
	return (
		<Slide>
			<ContenidoSlide titulo="Mercado y Oportunidad">
				<div className="grid md:grid-cols-2 gap-8">
					<div>
						<h3 className="text-xl font-semibold mb-4">Mercado Venezolano (Data Scraper)</h3>
						<div className="space-y-4">
							<div className="flex items-center justify-between p-3 bg-pink-50 rounded">
								<span className="font-medium text-pink-600">Laboratorios Patológicos</span>
								<span className="text-xl font-bold text-pink-600">≈39</span>
							</div>
							<div className="flex items-center justify-between p-3 bg-purple-50 rounded">
								<span className="font-medium text-purple-600">Centros Diagnóstico</span>
								<span className="text-xl font-bold text-purple-600">≈141</span>
							</div>
							<div className="flex items-center justify-between p-3 bg-blue-50 rounded">
								<span className="font-medium text-blue-600">Clínicas Generales</span>
								<span className="text-xl font-bold text-blue-600">≈1.200</span>
							</div>
						</div>

						<div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
							<h4 className="font-semibold text-purple-900 mb-2">Mercado LATAM Salud Digital</h4>
							<div className="space-y-1 text-sm">
								<div className="flex justify-between">
									<span>2024:</span>
									<span className="font-medium">$17,036.5M</span>
								</div>
								<div className="flex justify-between">
									<span>Crecimiento:</span>
									<span className="font-medium">23.2% anual</span>
								</div>
								<div className="flex justify-between">
									<span>Período:</span>
									<span className="font-medium text-purple-600">2025-2030</span>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-semibold mb-4">Distribución del Mercado</h3>
						<ResponsiveContainer width="100%" height={300}>
							<PieChart>
								<Pie
									data={datosMercado}
									cx="50%"
									cy="50%"
									labelLine={false}
									label={({ nombre, valor }) => `${nombre}: ${valor}`}
									outerRadius={80}
									fill="#8884d8"
									dataKey="valor"
								>
									{datosMercado.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={entry.color} />
									))}
								</Pie>
								<Tooltip formatter={(value) => [`${value}`, 'Cantidad']} />
							</PieChart>
						</ResponsiveContainer>
					</div>
				</div>

				<div className="mt-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
					<h3 className="text-xl font-semibold text-green-900 mb-4">Estrategia de Segmentación</h3>
					<div className="grid md:grid-cols-3 gap-4 text-sm">
						<div>
							<h4 className="font-semibold text-green-800 mb-2">🎯 Nicho Inicial</h4>
							<p className="text-green-700">Laboratorios patológicos (39) - dolor crítico en demora de informes</p>
						</div>
						<div>
							<h4 className="font-semibold text-green-800 mb-2">📈 Expansión</h4>
							<p className="text-green-700">Centros de diagnóstico (141) - misma problemática operativa</p>
						</div>
						<div>
							<h4 className="font-semibold text-green-800 mb-2">🌎 Regional</h4>
							<p className="text-green-700">Clínicas generales (1.200) - mercado ampliado una vez validado</p>
						</div>
					</div>
				</div>
			</ContenidoSlide>
		</Slide>
	)
}
