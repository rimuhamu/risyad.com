import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';

const techStack = [
  {
    label: 'AWS Cloud Practitioner',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    credential:
      'https://www.credly.com/badges/b792dce8-3d5d-47e2-9cf6-ad4c8d34ab16/linked_in_profile',
  },
  {
    label: 'Postman API Expert',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    credential: 'https://badgr.com/public/assertions/cIpelV71Q2OjA1HGV1lDhQ',
  },
  {
    label: 'Mendix Rapid Developer',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mendix/mendix-original.svg',
  },
  {
    label: 'Full Stack Open',
    src: 'https://studies.cs.helsinki.fi/stats/images/fullstackopen.png',
    credential:
      'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/c9ff16ee566abcb1643566835cabfc8f',
  },
];

export function Certifications() {
  return (
    <section>
      <SectionHeader
        heading='Certifications'
        text="A collection of certifications I've earned while learning and exploring different areas of technology:"
      />

      <ul className='flex flex-wrap items-center gap-2.5'>
        {techStack.map((item) => (
          <li
            className='inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-[450] text-xs text-secondary'
            key={item.label}>
            <Image
              src={item.src}
              className='shrink-0 size-4'
              alt={item.label}
              height={16}
              width={16}
            />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
