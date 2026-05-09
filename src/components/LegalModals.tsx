import * as React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-forest-deep text-sm uppercase tracking-[0.15em] mb-2">{title}</h3>
      <div className="text-forest/80 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  )
}

function MentionsLegales() {
  return (
    <>
      <Section title="Éditeur du site">
        <p>1001 Galops — entreprise individuelle</p>
        <p>Fondatrice : Scheherazade BRACHT</p>
        <p>78520 Follainville-Dennemont, France</p>
        <p>Tél. : +33 6 78 53 64 30</p>
        <p>Email : contact@1001galops.fr</p>
        <p>SIRET : 888 386 620 00015</p>
      </Section>
      <Section title="Hébergement">
        <p>Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, CA 94104, USA.</p>
      </Section>
      <Section title="Directrice de la publication">
        <p>Scheherazade BRACHT</p>
      </Section>
      <Section title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur ce site (textes, images, logos, vidéos) est la propriété exclusive
          de 1001 Galops, sauf mention contraire. Toute reproduction, même partielle, est interdite sans
          autorisation écrite préalable.
        </p>
      </Section>
      <Section title="Responsabilité">
        <p>
          1001 Galops s'efforce de maintenir des informations exactes et à jour. Cependant, nous ne pouvons
          garantir l'exactitude, la complétude ou l'actualité des informations diffusées sur ce site.
        </p>
      </Section>
      <Section title="Cookies">
        <p>
          Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie
          publicitaire ou de traçage n'est déposé sans votre consentement.
        </p>
      </Section>
    </>
  )
}

function CGV() {
  return (
    <>
      <Section title="Objet">
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
          1001 Galops (ci-après « le Prestataire ») et toute personne physique ou morale souhaitant réserver
          une prestation équestre (ci-après « le Client »).
        </p>
      </Section>
      <Section title="Prestations proposées">
        <p>Le Prestataire propose :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Balades à cheval (groupe, duo privatisé, balades à thème)</li>
          <li>Sessions de yoga équestre</li>
          <li>Événements privatisés (EVJF, EVG, demande en mariage, anniversaires)</li>
        </ul>
      </Section>
      <Section title="Réservation et confirmation">
        <p>
          Toute réservation est définitive à réception d'un acompte de 30 % du montant total. La réservation
          est confirmée par email. Le solde est dû le jour de la prestation, avant le départ.
        </p>
      </Section>
      <Section title="Tarifs">
        <p>
          Les tarifs sont indiqués en euros TTC sur le site et peuvent être modifiés à tout moment. Le tarif
          applicable est celui en vigueur à la date de confirmation de la réservation.
        </p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Balade groupe : 70 € / personne (60 € à partir de 2)</li>
          <li>Balade DUO privatisée : 150 € pour 2</li>
          <li>Yoga équestre et événements : sur devis</li>
        </ul>
      </Section>
      <Section title="Responsabilité et sécurité">
        <p>
          Le Client s'engage à respecter les consignes de sécurité données par le Prestataire. Les mineurs
          doivent être accompagnés d'un responsable légal. 1001 Galops est couverte par une assurance
          responsabilité civile professionnelle.
        </p>
        <p>
          La pratique équestre comporte des risques inhérents. Le Client déclare être informé de ces risques
          et en accepte la responsabilité.
        </p>
      </Section>
    </>
  )
}

function Confidentialite() {
  return (
    <>
      <Section title="Responsable du traitement">
        <p>1001 Galops — Scheherazade BRACHT</p>
        <p>78440 Drocourt, France</p>
        <p>contact@1001galops.fr</p>
      </Section>
      <Section title="Données collectées">
        <p>Dans le cadre de vos réservations et demandes de contact, nous collectons :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Numéro de téléphone (optionnel)</li>
          <li>Informations relatives à la prestation souhaitée</li>
        </ul>
      </Section>
      <Section title="Finalités du traitement">
        <p>Vos données sont utilisées pour :</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Répondre à vos demandes de contact et de réservation</li>
          <li>Gérer la relation client et les paiements</li>
          <li>Vous envoyer des informations sur nos prestations (avec votre accord)</li>
        </ul>
      </Section>
      <Section title="Base légale">
        <p>
          Le traitement de vos données repose sur votre consentement (formulaire de contact) et sur
          l'exécution du contrat (réservation).
        </p>
      </Section>
      <Section title="Durée de conservation">
        <p>
          Vos données sont conservées 3 ans à compter du dernier contact, conformément aux obligations légales
          françaises.
        </p>
      </Section>
      <Section title="Vos droits">
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de
          portabilité et d'opposition au traitement de vos données. Pour exercer ces droits, écrivez à :
          <strong> contact@1001galops.fr</strong>
        </p>
        <p>
          En cas de réclamation non résolue, vous pouvez saisir la CNIL (Commission Nationale de l'Informatique
          et des Libertés) sur <strong>cnil.fr</strong>.
        </p>
      </Section>
      <Section title="Sécurité">
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
          données contre tout accès non autorisé, perte ou divulgation.
        </p>
      </Section>
      <Section title="Cookies">
        <p>
          Ce site n'utilise que des cookies techniques indispensables à son fonctionnement. Aucun cookie
          tiers à des fins publicitaires n'est déposé.
        </p>
      </Section>
    </>
  )
}

const modals = [
  {
    label: "Mentions légales",
    title: "Mentions légales",
    content: <MentionsLegales />,
  },
  {
    label: "CGV",
    title: "Conditions Générales de Vente",
    content: <CGV />,
  },
  {
    label: "Confidentialité",
    title: "Politique de confidentialité",
    content: <Confidentialite />,
  },
]

export function LegalModals() {
  return (
    <nav className="flex gap-6" aria-label="Liens légaux">
      {modals.map(({ label, title, content }) => (
        <Dialog key={label}>
          <DialogTrigger asChild>
            <button className="text-[12px] text-sand/50 hover:text-cream transition-colors cursor-pointer bg-transparent border-0 p-0">
              {label}
            </button>
          </DialogTrigger>
          <DialogContent className="bg-cream border-forest/15 text-forest sm:max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8">
            <DialogHeader className="mb-2">
              <DialogTitle className="font-display text-2xl leading-tight tracking-tight text-forest-deep">
                {title}
              </DialogTitle>
            </DialogHeader>
            <div className="mt-4">{content}</div>
          </DialogContent>
        </Dialog>
      ))}
    </nav>
  )
}
