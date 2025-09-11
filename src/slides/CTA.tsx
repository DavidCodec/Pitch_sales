import { Card, CardHeader, CardTitle, CardContent } from '@src/components/ui/card'

export function CTA() {
	return (
		<div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 w-screen h-screen flex flex-col items-center justify-center">
			<div className="text-center text-white space-y-8">
				<h1 className="text-white font-sans text-6xl font-bold">¡Únete a Solware!</h1>

				<p className="text-2xl text-white/90 max-w-4xl mx-auto">
					Transformemos la gestión administrativa de laboratorios en Venezuela
				</p>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
					<Card className="bg-white/10 backdrop-blur border-white/20">
						<CardHeader>
							<CardTitle className="text-white">💰 Serie Seed: $100K USD</CardTitle>
						</CardHeader>
						<CardContent className="text-white/90 space-y-2">
							<p>• Valoración: $500K pre-money</p>
							<p>• Runway: 12 meses hasta Serie A</p>
							<p>• Uso: 60% desarrollo, 25% ventas, 15% operaciones</p>
						</CardContent>
					</Card>

					<Card className="bg-white/10 backdrop-blur border-white/20">
						<CardHeader>
							<CardTitle className="text-white">🎯 Lo que Ofrecemos</CardTitle>
						</CardHeader>
						<CardContent className="text-white/90 space-y-2">
							<p>• Mercado validado con Conspat</p>
							<p>• Producto MVP funcional</p>
							<p>• Equipo técnico especializado</p>
							<p>• Impacto en eficiencia operativa</p>
						</CardContent>
					</Card>
				</div>

				<div className="mt-12">
					<h3 className="text-2xl font-semibold mb-4">📅 Próximos Pasos</h3>
					<div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto text-sm">
						{/* <div className="bg-white/10 p-4 rounded-lg">
								<div className="font-semibold">1. Demo</div>
								<div className="text-white/80">Producto en vivo</div>
							</div> */}
						<div className="bg-white/10 p-4 rounded-lg">
							<div className="font-semibold">1. Validación</div>
							<div className="text-white/80">Casos de uso reales</div>
						</div>
						<div className="bg-white/10 p-4 rounded-lg">
							<div className="font-semibold">2. Referencias</div>
							<div className="text-white/80">Conspat y clientes</div>
						</div>
						<div className="bg-white/10 p-4 rounded-lg">
							<div className="font-semibold">3. Términos</div>
							<div className="text-white/80">Inversión detallados</div>
						</div>
						<div className="bg-white/10 p-4 rounded-lg">
							<div className="font-semibold">4. Cierre</div>
							<div className="text-white/80">Partnership estratégico</div>
						</div>
					</div>
				</div>

				<div className="mt-12 text-xl italic">Juntos podemos modernizar la gestión de laboratorios en Venezuela</div>
			</div>
		</div>
	)
}
