import { Card, CardContent, CardHeader, CardTitle } from '@src/components/ui/card'

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Avisos Legales
          </h1>
          <p className="text-xl text-gray-600">
            Información legal y de privacidad para la presentación interactiva
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Aviso de Privacidad</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Esta presentación interactiva de Solpat/Solhub recopila únicamente la información 
                mínima necesaria para facilitar la participación de la audiencia durante el pitch.
              </p>
              
              <h3>Información que recopilamos:</h3>
              <ul>
                <li>Nombre proporcionado voluntariamente para identificación en la sesión</li>
                <li>Preguntas y comentarios enviados durante la presentación</li>
                <li>Votos y reacciones en encuestas interactivas</li>
                <li>Datos técnicos básicos de conexión (dirección IP, navegador)</li>
              </ul>

              <h3>Uso de la información:</h3>
              <ul>
                <li>Facilitar la interactividad durante la presentación</li>
                <li>Moderar preguntas y comentarios</li>
                <li>Generar estadísticas agregadas y anónimas</li>
                <li>Mejorar la experiencia de presentaciones futuras</li>
              </ul>

              <h3>Protección de datos:</h3>
              <ul>
                <li>No se almacenan datos personales sensibles</li>
                <li>La información se elimina automáticamente al finalizar la sesión</li>
                <li>No se comparten datos con terceros</li>
                <li>Conexión segura mediante HTTPS</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Términos de Uso</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Al participar en esta presentación interactiva, usted acepta los siguientes términos:
              </p>

              <h3>Participación:</h3>
              <ul>
                <li>La participación es voluntaria y puede abandonar la sesión en cualquier momento</li>
                <li>Se espera un comportamiento respetuoso y profesional</li>
                <li>Las preguntas y comentarios pueden ser moderados</li>
                <li>No se permite contenido ofensivo, spam o irrelevante</li>
              </ul>

              <h3>Contenido:</h3>
              <ul>
                <li>La información presentada es confidencial y para fines de evaluación</li>
                <li>No está permitido grabar, fotografiar o redistribuir el contenido</li>
                <li>Los datos financieros y proyecciones son estimaciones</li>
                <li>La información puede cambiar sin previo aviso</li>
              </ul>

              <h3>Limitación de responsabilidad:</h3>
              <ul>
                <li>Esta es una presentación con fines informativos únicamente</li>
                <li>No constituye una oferta de inversión o asesoramiento financiero</li>
                <li>Los resultados pasados no garantizan resultados futuros</li>
                <li>Se recomienda consultar con asesores profesionales</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Consentimiento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">
                  Al continuar participando en esta sesión, usted confirma que:
                </h3>
                <ul className="space-y-2 text-blue-800">
                  <li>✓ Ha leído y comprende este aviso de privacidad</li>
                  <li>✓ Acepta los términos de uso establecidos</li>
                  <li>✓ Consiente el procesamiento de sus datos según se describe</li>
                  <li>✓ Entiende que puede retirar su consentimiento en cualquier momento</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Para preguntas sobre privacidad, términos de uso o para ejercer sus derechos 
                de protección de datos, puede contactarnos:
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@solpat.com</p>
                <p><strong>Teléfono:</strong> +52 (55) 1234-5678</p>
                <p><strong>Dirección:</strong> Ciudad de México, México</p>
              </div>

              <p className="mt-4 text-sm text-gray-600">
                Última actualización: Enero 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}