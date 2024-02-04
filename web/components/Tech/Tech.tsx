import { Section } from '@witekrychlik/ui-components';
import { technologies } from '../../constants';
import TechCard from './TechCard/TechCard';

export default function Tech() {
  return (
    <Section className="min-h-screen">
      <h2
        id="tech"
        className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-12 sm:mb-16 lg:mb-20"
      >
        Technologie:
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {technologies.map((tech, i) => (
          <TechCard key={i} technology={tech} />
        ))}
      </div>
    </Section>
  );
}
