import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HeroSkeleton, SectionSkeleton, ExperienceSkeleton, ProjectsSkeleton, EducationSkeleton, ApproachSkeleton } from './components/skeletons';
import './index.css';

// Lazy load all sections for code splitting
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Approach = lazy(() => import('./components/Approach'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<ExperienceSkeleton />}>
        <Experience />
      </Suspense>
      
      <Suspense fallback={<ApproachSkeleton />}>
        <Approach />
      </Suspense>
      
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<EducationSkeleton />}>
        <Education />
      </Suspense>
      
      <Footer />
    </div>
  );
}

export default App;
