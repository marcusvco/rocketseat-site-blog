import { PaintbrushVertical } from "lucide-react"

export function SupportSection() {
  return (
    <section>
      <h2>Sua loja de afiliados, simples, do jeito que deveria ser</h2>
      <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
        <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
          <PaintbrushVertical className="h-6 w-4 text-white" />
        </div>
        <strong>Personalize seu site</strong>
        <p>
          Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a
          sua cara.
        </p>
      </div>
    </section>
  )
}
