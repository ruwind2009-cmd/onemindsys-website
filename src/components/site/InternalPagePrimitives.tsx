type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function InternalPageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="internal-page__header">
      {eyebrow ? <div className="internal-page__eyebrow">{eyebrow}</div> : null}
      <h1 className="internal-page__title">{title}</h1>
      {description ? <p className="internal-page__description">{description}</p> : null}
    </header>
  )
}

export function InternalSectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="internal-section__header">
      {eyebrow ? <div className="internal-page__eyebrow">{eyebrow}</div> : null}
      <h2 className="internal-section__title">{title}</h2>
      {description ? <p className="internal-section__description">{description}</p> : null}
    </div>
  )
}
