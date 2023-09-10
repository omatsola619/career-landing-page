import { FaGraduationCap, FaAward, FaUserGraduate, FaUserMd, FaUserTie, FaLaptopCode } from 'react-icons/fa';

const features = [
  {
    name: 'Help Students',
    description:
      'Enable students to identify their best-fit career with our world-class career assessment and personalised guidance.',
    icon: FaGraduationCap,
  },
  {
    name: 'Virtual guidance',
    description:
      'Empower students to learn all about the professional world with virtual career simulations, exhaustive career library, career blogs and vlogs.',
    icon: FaUserMd,
  },
  {
    name: 'Career path',
    description:
      'Pave student’s way to their dream college with our end-to-end college application guidance, scholarship drive and corporate internship program.',
    icon: FaAward,
  },
  {
    name: 'Career guidance',
    description:
      'Enable schools in creating a career guidance ecosystem in sync with the vision of New Education Policy',
    icon: FaUserGraduate,
  },
  {
    name: 'Empowering teachers',
    description:
      'Empower educators to become International Certified Career Coaches and build a career in career guidance & counselling',
    icon: FaUserTie,
  },
  {
    name: 'Technology driven',
    description:
      'Revolutionary assessment platform and technology driven career guidance solutions for educators to boost their career guidance & counselling practice',
    icon: FaLaptopCode,
  },
]

function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-4xl">
            We are shaping the Career Guidance Landscape
          </p>
          <p className="mt-6 text-lg leading-8 dark:text-white text-gray-600">
            Comprehensive career guidance solutions for students, <br /> parents, educators and schools
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-lg font-semibold leading-7 dark:text-white text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg leading-7 dark:text-white text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features;