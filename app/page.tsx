import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Play, Users, QrCode, Presentation } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Presentation className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Solpat/Solhub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Inteligencia Artificial Personalizada para Laboratorios Patológicos
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Revolucionando diagnósticos médicos con IA que aprende de cada patólogo, 
            reduciendo errores en 40% y acelerando reportes en 60%
          </p>
        </div>

        {/* Main Actions */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle>Comenzar Presentación</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Inicia la presentación interactiva del pitch de Solpat/Solhub
              </p>
              <Link href="/slides">
                <Button size="lg" className="w-full">
                  Iniciar Pitch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle>Modo Presentador</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Accede al panel de control con notas y herramientas de moderación
              </p>
              <Link href="/presentador">
                <Button variant="outline" size="lg" className="w-full">
                  Panel Presentador
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Audience Participation */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-900">Participación de la Audiencia</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-purple-700 mb-6">
                La audiencia puede unirse con el código de sesión para participar en tiempo real
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/audiencia/DEMO">
                  <Button variant="outline" size="lg">
                    Vista Audiencia (Demo)
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg">
                    Ver Demo Producto
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
