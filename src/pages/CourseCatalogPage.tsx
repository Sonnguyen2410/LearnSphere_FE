import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAK3DeXFfcU7eoLcYm0J-P0geFc_1SNB3sOpbZdSgXNGYGNkWLvpydHgoO3teNd6SCKCfYzJzNrs1AB7P8Pu74X-3istluRsHM1oPvbEs2nLPM2cHWOxHmwakxXKAZY99rZGG-p9kypULkAvH9bkTxwS1EgNluYqYhNlGpql2gZkqIWaOYk5FWOQvYjhFI2VJivahYgEOwamgFB5MZtSI9a-fovv-ztHAlZ1TjPwNnEgpB773mBUptA6A';

const featuredImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAO1Fp_uuz3v0lnkTd_oXOJu4fcWU0qJbPzLLvhHm38Uqt3jmTd69qnuqA4ru7hSjdm0-jLM7tNdG-sCYHf-6f3__4IWPE4SF_fDOtpj54T49gIvbsyibRFNMpIAn4ue-Q0qkjy2E-jDdXdZJGMal1IaI-6m-I08v5KFZzT5Ck0NhfV-y3lUKwPrf5HN0v1ewrOB4QA7VDAQ1YwxG6FJHwB2rUKBOT2M0g4OXqURFarhPmiNEhXeKoj9A';

const courses = [
  {
    title: 'AWS Cloud Foundations',
    description: 'Lộ trình nhập môn toàn diện về Amazon Web Services, bảo mật và khả năng mở rộng.',
    difficulty: 'Cơ bản',
    icon: 'trending_up',
    badgeClass: 'text-[#ffb86f]',
    duration: '8h 45m',
    progress: 65,
    action: 'Tiếp tục',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3VGd4gAzlG6MwwfoIgUae7ig6OW-MUxkR6fGyEsruDoC5HWlRYKa-kVG43egm-OP2baHQ-K0_bKnqoVJHLnpxoGoLnaMfuS6rcW0K5sYEbh_C24_mhSkwRrherduD_6mYprHKlGmM5SUW8beq-6AQ6OtzchLuKiZy8qsQzf7Y9EQQiqOrn3fMtsnlfWh4mdeINQzaqoOf_TcYR6PNzK5tSvjCsKBqJPNmWH9TmWygqdANLa4QAZtmMA',
  },
  {
    title: 'MLOps Engineering',
    description: 'Triển khai và quản lý workflow machine learning ở quy mô lớn bằng các công cụ CI/CD chuyên nghiệp.',
    difficulty: 'Nâng cao',
    icon: 'bolt',
    badgeClass: 'text-[#53fcd5]',
    duration: '15h 20m',
    action: 'Tìm hiểu',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAThDS0CUpTm-b7OsTTrYa_y6tpnwZhXmkAKyLDf3So-dCQjWUsZTCTTW0aHQCVRlrOydW4HIvuBC-qdtigl8gedLBVmXQf3hHE_woHaSelNGq6_iZtz6dl8fxz4cZXRb3D1TC5W2M2UE2zdxLdJgOlp685dqvNyc-xIdlcHeLCswDuLyhy8O4AuFg1-3XxJ_yEzPMH3oBNFYcAbYHxjg2E_EiInhMYTTVkCaTdi2grUdJ3kYkY3WX6hQ',
  },
  {
    title: 'Deep Learning for CV',
    description: 'Khám phá Convolutional Neural Networks và các kiến trúc computer vision hiện đại cho ứng dụng thực tế.',
    difficulty: 'Trung cấp',
    icon: 'psychology',
    badgeClass: 'text-[#adc7ff]',
    duration: '22h 10m',
    action: 'Tìm hiểu',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDr0UXSC0Hp7ydZlnnVExrN6JBRMTtDLNieWnmjvQ-BT2fGnZ_mt27ECpeNdl4LaY040Q37-cPKqoN9f-STg_NxcJD-sIL_1Zqn_kz9rlSeE_yu0CFmOzvF6YAWnlcU6r_hAbZeKIMkfqc9NcsoYT959B8Q13Nw5bRP5K6KuEuW2E3uakwQwv4swECw-xgxEMv8YdK-oURhifcHN8zyVMd1Lvo_Ag2xVIa1q8PmZZdsQA6Q3K0q6BD1Yw',
  },
  {
    title: 'Data Lake Architecture',
    description: 'Nắm vững chiến lược lưu trữ và xử lý big data trên các nền tảng cloud hiện đại.',
    difficulty: 'Cơ bản',
    icon: 'trending_up',
    badgeClass: 'text-[#ffb86f]',
    duration: '6h 30m',
    action: 'Tìm hiểu',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuFMbekGdo1xLe7kr_f1-jwDkW73IVsYEevF1v-TwQB-Zm2CCRy3j_m1Gc07jhKS_vvRZX3Iq6v5XtlZe_4eHJWvfftdBA2T42TDzoG7W5Kbus-3yC4NorbHnW6gMw96XYD20vPAuqVKP1F8DnJ5xHMzRJaRYD6hXP4NA-il9E4frd-dbiVHXIcDXzaSt_Z4Vkv1b36Ru8NPioBeYmhFpzcbvmJXIJ667CJWlYaZ2EA0v4HL-E-1aIPQ',
  },
];

const filters = [
  { title: 'Độ khó', options: ['Cơ bản', 'Trung cấp', 'Nâng cao'] },
  { title: 'Chủ đề', options: ['Machine Learning', 'Data Science', 'Cloud Infrastructure'], checked: 'Machine Learning' },
];

export function CourseCatalogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d131f] text-[#dde2f4] selection:bg-[#4a8eff] selection:text-[#00285b]">
      <header className="sticky top-0 z-50 flex h-16 items-center border-b border-white/5 bg-[#161c28] shadow-sm">
        <div className="flex w-full items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <a className="text-[24px] font-bold text-[#adc7ff]" href="/dashboard">
              LearnSphere
            </a>
            <nav className="ml-4 hidden items-center gap-6 md:flex">
              <a className="border-b-2 border-[#adc7ff] pb-1 text-[16px] font-bold text-[#adc7ff]" href="/courses">
                Khóa học
              </a>
              {[
                { label: 'Chấm điểm', href: '#' },
                { label: 'Tài nguyên', href: '#' },
              ].map((item) => (
                <a key={item.label} className="text-[16px] font-medium text-[#c1c6d7] transition-colors hover:text-[#dde2f4]" href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8b90a0]">search</span>
              <input
                className="w-64 rounded-full border border-[#414754] bg-[#080e1a] py-1.5 pl-10 pr-4 font-mono text-[14px] text-[#dde2f4] outline-none transition-all placeholder:text-[#8b90a0] focus:border-transparent focus:ring-2 focus:ring-[#adc7ff]"
                placeholder="Tìm khóa học..."
                type="text"
              />
            </div>
            <UserAvatarMenu name="Alex Rivera" role="Học viên" avatarSrc={avatarSrc} />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="px-4 py-6 md:px-8">
          <div className="group relative aspect-[21/12] overflow-hidden rounded-xl border border-white/5 bg-[#242a37] md:aspect-[3/1]">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d131f] via-[#0d131f]/80 to-transparent" />
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredImage})` }}
            />
            <div className="relative z-20 flex h-full max-w-2xl flex-col justify-center px-5 py-8 md:px-12">
              <span className="mb-4 inline-flex w-fit items-center rounded-full border border-[#24dfba]/20 bg-[#24dfba]/10 px-3 py-1 font-mono text-[12px] font-medium text-[#24dfba]">
                <span className="material-symbols-outlined mr-1 text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                  star
                </span>
                KHÓA HỌC NỔI BẬT
              </span>
              <h1 className="mb-4 max-w-xl text-[32px] font-bold leading-tight text-[#dde2f4] md:text-[48px]">
                Mastering Generative AI for Enterprise
              </h1>
              <p className="mb-6 max-w-xl text-[16px] leading-6 text-[#c1c6d7] md:text-[18px] md:leading-7">
                Học cách triển khai Large Language Models an toàn trên hạ tầng AWS bằng Bedrock và SageMaker, dành cho kiến trúc sư và developer.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a className="flex items-center gap-2 rounded-lg bg-[#adc7ff] px-6 py-3 font-mono text-[14px] font-bold text-[#002e68] transition-all hover:shadow-[0_0_20px_rgba(173,199,255,0.4)]" href="/lesson-detail">
                  Bắt đầu học
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <div className="flex items-center gap-2 text-[#8b90a0]">
                  <span className="material-symbols-outlined">schedule</span>
                  <span className="font-mono text-[14px]">12 tuần</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-6 px-4 py-6 md:px-8">
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-24 rounded-xl border border-white/5 bg-[#161c28] p-6">
              <h2 className="mb-6 text-[24px] font-semibold text-[#dde2f4]">Bộ lọc</h2>
              <div className="space-y-6">
                {filters.map((filter) => (
                  <div key={filter.title}>
                    <p className="mb-4 font-mono text-[14px] font-medium uppercase tracking-wider text-[#8b90a0]">{filter.title}</p>
                    <div className="space-y-3">
                      {filter.options.map((option) => (
                        <label key={option} className="group flex cursor-pointer items-center gap-3">
                          <input
                            className="h-5 w-5 rounded border-[#414754] bg-[#0d131f] text-[#adc7ff] focus:ring-[#adc7ff] focus:ring-offset-0"
                            defaultChecked={filter.checked === option}
                            type="checkbox"
                          />
                          <span className={`text-[16px] transition-colors group-hover:text-[#dde2f4] ${filter.checked === option ? 'text-[#adc7ff]' : 'text-[#c1c6d7]'}`}>
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <p className="mb-4 font-mono text-[14px] font-medium uppercase tracking-wider text-[#8b90a0]">Thời lượng</p>
                  <input className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[#2f3542] accent-[#adc7ff]" max="24" min="1" type="range" defaultValue="12" />
                  <div className="mt-2 flex justify-between">
                    <span className="font-mono text-[12px] text-[#8b90a0]">1 tuần</span>
                    <span className="font-mono text-[12px] text-[#adc7ff]">Tối đa 12 tuần</span>
                  </div>
                </div>
              </div>
              <button className="mt-8 w-full rounded-lg border border-[#adc7ff] py-3 font-mono text-[14px] font-bold text-[#adc7ff] transition-colors active:scale-95 hover:bg-[#adc7ff]/5" type="button">
                Xóa bộ lọc
              </button>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-[32px] font-semibold text-[#dde2f4]">Khóa học Hiện có</h2>
              <label className="flex w-fit items-center gap-2 rounded-lg border border-white/5 bg-[#161c28] px-4 py-2 text-[#c1c6d7]">
                <span className="font-mono text-[14px]">Sắp xếp theo:</span>
                <select className="cursor-pointer border-none bg-transparent font-mono text-[14px] font-bold text-[#dde2f4] focus:ring-0">
                  <option>Phổ biến nhất</option>
                  <option>Mới nhất</option>
                  <option>Độ khó: thấp đến cao</option>
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <a
                  key={course.title}
                  className="group flex h-full flex-col rounded-xl border border-white/5 bg-[#1a202c] p-4 transition-all hover:border-[#adc7ff]/30"
                  href="/lesson-detail"
                >
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${course.image})` }}
                    />
                    <div className="absolute left-2 top-2">
                      <span className={`flex items-center gap-1 rounded bg-[#0d131f]/90 px-2 py-1 font-mono text-[12px] font-bold backdrop-blur-sm ${course.badgeClass}`}>
                        <span className="material-symbols-outlined text-[14px]">{course.icon}</span>
                        {course.difficulty}
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 text-[24px] font-semibold leading-8 text-[#dde2f4] transition-colors group-hover:text-[#adc7ff]">{course.title}</h3>
                  <p className="mb-4 line-clamp-2 flex-grow text-[16px] leading-6 text-[#c1c6d7]">{course.description}</p>
                  {'progress' in course && typeof course.progress === 'number' && (
                    <div className="mb-6">
                      <div className="mb-1.5 flex justify-between font-mono text-[12px]">
                        <span className="text-[#ffc080]">Tiến độ khóa học</span>
                        <span className="text-[#ffc080]">{course.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#2f3542]">
                        <div className="h-full rounded-full bg-[#ffc080]" style={{ width: `${course.progress}%` }} />
                      </div>
                    </div>
                  )}
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[#8b90a0]">
                      <span className="material-symbols-outlined text-[18px]">timer</span>
                      <span className="font-mono text-[12px]">{course.duration}</span>
                    </div>
                    <span
                      className={`rounded px-4 py-2 font-mono text-[14px] font-bold transition-all ${
                        course.action === 'Tiếp tục'
                          ? 'bg-[#4a8eff] text-[#00285b] group-hover:brightness-110'
                          : 'border border-[#adc7ff] text-[#adc7ff] group-hover:bg-[#adc7ff]/5'
                      }`}
                    >
                      {course.action}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 font-mono text-[14px] font-medium text-[#adc7ff] transition-all active:scale-95 hover:underline" type="button">
                Tải thêm khóa học
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <SphereAIButton />

      <footer className="mt-12 border-t border-white/5 bg-[#080e1a] py-12">
        <div className="flex w-full flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-[24px] font-bold text-[#dde2f4]">LearnSphere</span>
            <p className="font-mono text-[12px] text-[#8b90a0]">© 2024 LearnSphere. Vận hành bởi Amazon Web Services.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {['Về chúng tôi', 'Điều khoản dịch vụ', 'Chính sách bảo mật', 'Liên hệ hỗ trợ', 'AWS Academy'].map((item) => (
              <a key={item} className="font-mono text-[12px] text-[#8b90a0] transition-colors hover:text-[#adc7ff]" href="#">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined cursor-pointer text-[#c1c6d7] transition-colors hover:text-[#adc7ff]">language</span>
            <span className="material-symbols-outlined cursor-pointer text-[#c1c6d7] transition-colors hover:text-[#adc7ff]">dark_mode</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
