export default function Home() {
  return (
    <main className="min-h-screen bg-ebatec-dark">
      {/* Navbar Temporal */}
      <nav className="bg-ebatec-dark/95 backdrop-blur-md sticky top-0 z-40 border-b border-ebatec-gold-base/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-ebatec-gold-base">EBATEC</h1>
          <p className="text-gray-400">🚀 Sitio en construcción</p>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
        <div className="text-center space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Soluciones integrales en <span className="text-ebatec-gold-base">parques y espacios</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Del diseño a la instalación: experiencia que llega donde está tu proyecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="btn-gold">
              Solicitar cotización
            </button>
            <button className="btn-gold-outline">
              Ver catálogo
            </button>
          </div>
        </div>
      </section>

      {/* Footer Temporal */}
      <footer className="bg-ebatec-dark border-t border-ebatec-gold-base/20 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>EBATEC © 2024 | Todos los derechos reservados</p>
          <p className="text-sm mt-2">📞 316 761 8752 | ventas@ebatec.co</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/573167618752?text=Hola%20EBATEC%2C%20me%20gustaría%20solicitar%20una%20cotización"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center z-50 transition-all duration-300 hover:scale-110 shadow-lg"
        title="Enviar mensaje por WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.125 7.751L2.513 22l8.332-2.187c2.236 1.214 4.75 1.855 7.297 1.855h.005c5.395 0 9.799-4.383 9.799-9.774 0-2.611-.674-5.194-1.953-7.46-1.278-2.266-3.115-4.287-5.372-5.726-2.257-1.44-4.842-2.205-7.533-2.205z"/>
        </svg>
      </a>
    </main>
  )
}