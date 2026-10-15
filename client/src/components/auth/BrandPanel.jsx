import BarChartIcon from '../icons/BarChartIcon';
import CubeIcon from '../icons/CubeIcon';
import ShieldIcon from '../icons/ShieldIcon';
import SparkleIcon from '../icons/SparkleIcon';
import FeatureItem from './FeatureItem';
import TrustBadge from './TrustBadge';

const FEATURES = [
  {
    icon: BarChartIcon,
    title: 'Real-Time Analytics',
    description: 'Monitor metrics and performance in real-time',
  },
  {
    icon: SparkleIcon,
    title: 'AI-Powered Insights',
    description: 'Discover patterns and predict outcome',
  },
  {
    icon: ShieldIcon,
    title: 'Enterprise Security',
    description: 'Bank-grade security and data governance',
  },
  {
    icon: CubeIcon,
    title: 'Scalable Platform',
    description: 'Build for performance and enterprise',
  },
];

export default function BrandPanel({ description }) {
  return (
    <div className="w-[min(21.25rem,100%)] px-3">
      <h1 className="text-center font-lato text-[1.75rem] font-bold leading-tight text-white">
        Welcome to EDABIP
      </h1>
      <p className="mx-auto mt-3 max-w-[20.625rem] text-center font-lato text-[0.6875rem] leading-[1.35] text-white">
        {description}
      </p>
      <ul className="mt-6 flex flex-col gap-4">
        {FEATURES.map((feature) => (
          <FeatureItem key={feature.title} {...feature} />
        ))}
      </ul>
      <div className="mt-4">
        <TrustBadge label="Trusted by leading Enterprises worldwide" />
      </div>
    </div>
  );
}
