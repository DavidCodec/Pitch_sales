// import { Card, CardHeader, CardTitle, CardContent } from '@src/components/ui/card'
import {Globe, Phone, Instagram} from 'lucide-react'
import Particles from '@src/components/ui/Particles'
import { AnimatedText, AnimatedCard, AnimatedIcon } from '@src/components/AnimatedElements'

export function CTA() {
	return (
		<div className="bg-gradient-to-br from-indigo-900/90 to-purple-900/90 w-screen h-screen flex flex-col items-center justify-center">
			<Particles />
			<div className="text-center text-white space-y-8">
				<AnimatedText delay={0.2}>
					<h1 className="text-white font-sans text-6xl font-bold">¡Únete a Solware! 🚀</h1>
				</AnimatedText>

				<AnimatedText delay={0.4}>
					<p className="text-2xl text-white/90 max-w-4xl mx-auto">
						Transformemos la gestión administrativa de laboratorios en Venezuela
					</p>
				</AnimatedText>

				{/* Página Web */}
				<AnimatedText delay={0.6} className="mt-8">
					<AnimatedCard
						delay={0.8}
						className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 max-w-md mx-auto"
					>
						<AnimatedText delay={1.0}>
							<h3 className="text-2xl font-bold text-white mb-4 text-center">Solware Agency</h3>
						</AnimatedText>
						<div className="space-y-3">
							<AnimatedText delay={1.2}>
								<div className="flex items-center justify-left gap-2">
									<AnimatedIcon delay={1.4}>
										<Globe className="size-3" />
									</AnimatedIcon>
									<a
										href="https://www.solware.agency"
										target="_blank"
										rel="noopener noreferrer"
										className="text-white hover:text-green-300 transition-colors text-lg"
									>
										solware.agency
									</a>
								</div>
							</AnimatedText>
							<AnimatedText delay={1.4}>
								<div className="flex items-center justify-left gap-2">
									<AnimatedIcon delay={1.6}>
										<Phone className="size-3" />
									</AnimatedIcon>
									<a
										href="tel:+584129974533"
										target="_self"
										rel="noopener noreferrer"
										className="text-white hover:text-green-300 transition-colors text-lg"
									>
										+58 412-997-4533
									</a>
								</div>
							</AnimatedText>
							<AnimatedText delay={1.6}>
								<div className="flex items-center justify-left gap-2">
									<AnimatedIcon delay={1.8}>
										<Instagram className="size-3" />
									</AnimatedIcon>
									<a
										href="https://www.instagram.com/solware_"
										target="_self"
										rel="noopener noreferrer"
										className="text-white hover:text-green-300 transition-colors text-lg"
									>
										@solware_
									</a>
								</div>
							</AnimatedText>
						</div>
						<AnimatedText delay={1.8}>
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
						</AnimatedText>
					</AnimatedCard>
				</AnimatedText>

				<AnimatedText delay={2.0}>
					<div className="mt-12 text-xl italic">Juntos podemos modernizar la gestión de laboratorios en Venezuela</div>
				</AnimatedText>
			</div>
		</div>
	)
}
