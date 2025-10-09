import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';

const techStack = [
  {
    label: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    label: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    label: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    label: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    label: 'Tailwind CSS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    label: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    label: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
  {
    label: 'Kubernetes',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
  },
  {
    label: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    label: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    label: 'Prisma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
  },
  {
    label: 'Kotlin',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
  },
  {
    label: 'Java',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  },
  {
    label: 'Spring Boot',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
  },
  {
    label: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    label: 'Golang',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  },
  {
    label: 'Android',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg',
  },
  {
    label: 'Express.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  },
  {
    label: 'Postman',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
  },
  {
    label: 'OpenAPI',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-plain.svg',
  },
  {
    label: 'Github',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
];

export function TechStack() {
  return (
    <section>
      <SectionHeader
        heading='Tech stack'
        text='The tech stack I use for my personal and client work:'
      />

      <ul className='flex flex-wrap items-center gap-2.5'>
        {techStack.map((item) => (
          <li
            className='inline-flex items-center gap-2 px-2.5 h-6 bg-
             rounded-full outline-none font-[450] text-xs text-secondary'
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
