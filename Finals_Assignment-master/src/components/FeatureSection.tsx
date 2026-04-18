import '../styles/FeatureSection.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '',
    title: 'React & TypeScript',
    description: 'Building type-safe, component-driven UIs with modern React patterns.',
  },
  {
    icon: '',
    title: 'UI/UX Design',
    description: 'Crafting clean, accessible interfaces with attention to detail.',
  },
  {
    icon: '',
    title: 'Performance',
    description: 'Optimizing load times and runtime performance for every project.',
  },
]

export default function FeatureSection() {
  return (
    <section className="features">
      <h2 className="features-heading">What I Bring</h2>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
