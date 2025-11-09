import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import TechnicalCapabilities from '@/components/TechnicalCapabilities'
import ProjectApproach from '@/components/ProjectApproach'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <ServiceCards />
      <TechnicalCapabilities />
      <ProjectApproach />
      <ChatWidget />
    </div>
  );
}