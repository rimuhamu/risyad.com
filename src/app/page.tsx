import { Certifications } from '@/components/Certifications';
import { TechStack } from '@/components/TechStack';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='mx-auto pt-6 pb-12 max-w-[40rem] space-y-12 sm:py-10'>
      <TechStack />
      <Certifications />
    </div>
  );
}
