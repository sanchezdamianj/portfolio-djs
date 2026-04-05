import { motion } from 'framer-motion';

interface SkeletonProps {
  className?: string;
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', lines = 1 }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-zinc-800 rounded-md"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export const SectionSkeleton: React.FC = () => {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="container-custom">
        {/* Header skeleton */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Skeleton className="w-8 h-4" />
            <Skeleton className="w-4 h-4" />
            <Skeleton className="w-24 h-4" />
          </div>
          <Skeleton className="w-64 h-10" />
          <div className="mt-4 h-px w-20 bg-zinc-800 rounded-full" />
        </div>

        {/* Content skeleton */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-6">
            <div className="card p-8">
              <Skeleton className="w-20 h-4 mb-6" />
              <Skeleton lines={4} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card p-5">
                  <Skeleton className="w-12 h-8 mx-auto mb-2 rounded" />
                  <Skeleton className="w-16 h-3 mx-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <Skeleton className="w-48 h-6 mb-6" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-5">
                <Skeleton className="w-32 h-4 mb-4" />
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Skeleton key={j} className="w-16 h-6 rounded-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero skeleton
export const HeroSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text side */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <Skeleton className="w-48 h-6 mx-auto lg:mx-0" />
            <Skeleton className="w-full max-w-md h-12 mx-auto lg:mx-0" />
            <Skeleton className="w-full max-w-lg h-20 mx-auto lg:mx-0" />
            <div className="flex gap-4 justify-center lg:justify-start">
              <Skeleton className="w-32 h-12 rounded-lg" />
              <Skeleton className="w-32 h-12 rounded-lg" />
            </div>
          </div>

          {/* Image side */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 rounded-2xl bg-zinc-800 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Experience skeleton
export const ExperienceSkeleton: React.FC = () => {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="mb-16">
          <Skeleton className="w-48 h-6 mb-4" />
          <Skeleton className="w-64 h-10" />
        </div>
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 animate-pulse flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <Skeleton className="w-48 h-5" />
                  <Skeleton className="w-32 h-4" />
                  <Skeleton lines={2} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects skeleton
export const ProjectsSkeleton: React.FC = () => {
  return (
    <div className="section-padding bg-zinc-900">
      <div className="container-custom">
        <div className="mb-16">
          <Skeleton className="w-48 h-6 mb-4" />
          <Skeleton className="w-64 h-10" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card p-6">
              <Skeleton className="w-32 h-5 mb-4" />
              <Skeleton lines={3} className="mb-4" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} className="w-16 h-5 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Education skeleton
export const EducationSkeleton: React.FC = () => {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="container-custom">
        <div className="mb-16">
          <Skeleton className="w-48 h-6 mb-4" />
          <Skeleton className="w-64 h-10" />
        </div>
        <div className="card p-8 max-w-2xl">
          <Skeleton className="w-48 h-6 mb-4" />
          <Skeleton className="w-64 h-4 mb-2" />
          <Skeleton className="w-32 h-4" />
        </div>
      </div>
    </div>
  );
};

// Approach skeleton
export const ApproachSkeleton: React.FC = () => {
  return (
    <div className="section-padding bg-zinc-900">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <Skeleton className="w-48 h-6 mx-auto mb-4" />
          <Skeleton className="w-96 h-10 mx-auto mb-4" />
          <Skeleton className="w-64 h-4 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card p-8">
              <Skeleton className="w-12 h-12 rounded-lg mb-4" />
              <Skeleton className="w-24 h-5 mb-4" />
              <Skeleton lines={3} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
