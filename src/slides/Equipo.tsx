import { Slide, ContenidoSlide } from '@src/components/Slide'
import { Card, CardHeader, CardTitle, CardContent } from '@src/components/ui/card'

export function Equipo() {
  return (
    <Slide>
				<ContenidoSlide titulo="Nuestro Equipo">
					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<Card className="bg-blue-50 border-blue-200">
								<CardHeader>
									<CardTitle className="text-blue-900 flex items-center">👨‍💼 - Eugenio Andreone</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-blue-700 space-y-1">
										<p>
											<strong>7 años</strong> en transformación digital y automatización
										</p>
										<p>Experto en Make, n8n, Google Cloud y App Script</p>
										<p>Desarrollo web y eCommerce (Shopify, Magento)</p>
										<p>CRM, análisis de datos y optimización de procesos</p>
										{/* <p>Enfoque en eficiencia, escalabilidad y resultados medibles</p> */}
									</div>
								</CardContent>
							</Card>

							<Card className="bg-green-50 border-green-200">
								<CardHeader>
									<CardTitle className="text-green-900 flex items-center">👨‍💻 - Jesús Freites</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-green-700 space-y-1">
										<p>
											<strong>4 años</strong> en desarrollo web
										</p>
										<p>Desarrollo web con React, JavaScript y Tailwind</p>
										<p>Manejo en Siebel, Oracle y SQL</p>
										<p>Experiencia en hosting, integraciones y optimización de flujos</p>
									</div>
								</CardContent>
							</Card>
						</div>

						<div className="space-y-6">
							<Card className="bg-purple-50 border-purple-200">
								<CardHeader>
									<CardTitle className="text-purple-900 flex items-center">
										👨‍⚕️ Asesor Médico - Dra. Lorena Villareal
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-purple-700 space-y-1">
										<p>
											<strong>Patólogo certificado</strong>, 15+ años experiencia
										</p>
										<p>Miembro activo de Conspat</p>
										<p>Validación médica del producto</p>
										<p>Red de contactos en el sector salud</p>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-orange-50 border-orange-200">
								<CardHeader>
									<CardTitle className="text-orange-900 flex items-center">
										💼 Director Administrativo - Francisco Vivas
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="text-sm text-orange-700 space-y-1">
										<p>Supervisión administrativa y coordinación contable</p>
										<p>Revisión legal y fortalecimiento institucional</p>
										<p>Gestión financiera con visión estratégica</p>
										<p>Impulso de la integración entre el ámbito clínico y empresarial</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>

					<div className="mt-8">
						<Card className="bg-gradient-to-r from-gray-100 to-gray-200">
							<CardHeader>
								<CardTitle className="text-gray-900">🎯 Partners Estratégicos</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid md:grid-cols-3 gap-4 text-center">
									<div>
										<div className="font-bold text-gray-700">Conspat</div>
										<div className="text-sm text-gray-600">Validación médica y acceso al mercado</div>
									</div>
									<div>
										<div className="font-bold text-gray-700">Visitas a Laboratorios</div>
										<div className="text-sm text-gray-600">Demostracion y feedback en vivo</div>
									</div>
									<div>
										<div className="font-bold text-gray-700">Docuware</div>
										<div className="text-sm text-gray-600">Software de Gestión Documental</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</ContenidoSlide>
			</Slide>
  )
}