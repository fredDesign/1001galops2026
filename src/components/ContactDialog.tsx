import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const experiences = ["Balade à cheval", "Yoga équestre", "Événement / Team building", "Carte cadeau"]

export function ContactDialog() {
  const [selected, setSelected] = React.useState<string>("")
  const [submitted, setSubmitted] = React.useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-terra hover:bg-terra-deep text-cream rounded-full px-8 text-[12px] uppercase tracking-[0.2em] font-semibold border-0"
        >
          Réserver maintenant
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-cream border-forest/15 text-forest max-w-md rounded-3xl p-8">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl leading-tight tracking-tight">
            Réservez votre<br/>
            <span className="font-editorial italic text-terra font-light">expérience.</span>
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="mt-6 flex flex-col items-center gap-4 py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="#f5f1e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-forest font-semibold text-lg">Message envoyé !</p>
            <p className="text-forest/70 text-sm leading-relaxed">
              On revient vers vous sous 24h, du lundi au dimanche.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex gap-2 flex-wrap">
              {experiences.map((xp) => (
                <button
                  key={xp}
                  type="button"
                  onClick={() => setSelected(xp)}
                  className="focus:outline-none"
                  aria-pressed={selected === xp}
                >
                  <Badge
                    variant={selected === xp ? "default" : "outline"}
                    className={
                      selected === xp
                        ? "bg-terra text-cream border-terra cursor-pointer rounded-full px-3 py-1"
                        : "border-forest/20 text-forest/70 cursor-pointer hover:border-terra hover:text-terra rounded-full px-3 py-1 transition-colors"
                    }
                  >
                    {xp}
                  </Badge>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Input
                required
                name="prenom"
                placeholder="Prénom"
                className="bg-forest/5 border-forest/15 text-forest placeholder:text-forest/40 rounded-xl focus-visible:ring-terra/40 focus-visible:border-terra"
              />
              <Input
                required
                name="nom"
                placeholder="Nom"
                className="bg-forest/5 border-forest/15 text-forest placeholder:text-forest/40 rounded-xl focus-visible:ring-terra/40 focus-visible:border-terra"
              />
            </div>

            <Input
              required
              type="email"
              name="email"
              placeholder="Votre email"
              className="bg-forest/5 border-forest/15 text-forest placeholder:text-forest/40 rounded-xl focus-visible:ring-terra/40 focus-visible:border-terra"
            />

            <Input
              type="tel"
              name="telephone"
              placeholder="Téléphone (optionnel)"
              className="bg-forest/5 border-forest/15 text-forest placeholder:text-forest/40 rounded-xl focus-visible:ring-terra/40 focus-visible:border-terra"
            />

            <Textarea
              name="message"
              placeholder="Votre message, disponibilités, nombre de personnes…"
              rows={4}
              className="bg-forest/5 border-forest/15 text-forest placeholder:text-forest/40 rounded-xl resize-none focus-visible:ring-terra/40 focus-visible:border-terra"
            />

            <Button
              type="submit"
              size="lg"
              className="bg-terra hover:bg-terra-deep text-cream rounded-full text-[12px] uppercase tracking-[0.2em] font-semibold mt-2 border-0"
            >
              Envoyer ma demande
            </Button>

            <p className="text-center text-[11px] text-forest/50 uppercase tracking-[0.15em]">
              Réponse sous 24h · 7j/7
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
