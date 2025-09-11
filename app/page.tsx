import Link from 'next/link'
import { Button } from '@src/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@src/components/ui/card'
import { Play, Presentation } from 'lucide-react'

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			<div className="container mx-auto px-4 py-16">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
						<Presentation className="w-12 h-12 text-primary-foreground" />
					</div>
					<h1 className="text-5xl font-bold text-gray-900 mb-4"> Solpat/Solhub </h1>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
						Inteligencia Artificial Personalizada para Laboratorios Patológicos
					</p>
				</div>
				{/* Main Actions */}
				<div className="flex justify-center items-center gap-8 max-w-4xl mx-auto mb-16">
					<Card className="hover:shadow-lg transition-shadow">
						<CardHeader className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<Play className="w-8 h-8 text-green-600" />
							</div>
							<CardTitle>Comenzar Presentación</CardTitle>
						</CardHeader>
						<CardContent className="text-center">
							<p className="text-gray-600 mb-6"> Inicia la presentación interactiva del pitch de Solpat/Solhub </p>
							<Link href="/slides">
								<Button size="lg" className="w-full">
									Iniciar Pitch
								</Button>
							</Link>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
