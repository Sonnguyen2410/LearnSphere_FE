import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCJoFDj_0QC113oXEglqawaRx_p6aj65L4yuLN_52cJ7ZIsSBwJOLuDBdEOjZO4FGAYbIdjFRiTlh8P2s0viUatzxsXtdGT_HsugoXIhqhwVN_Dw3tV9dDK8jwLYtcCNANCSZMe4LpwBeZ_9u6z_nbGgFvzsUsVhmefvWWra3Gr3YxrVvyeFBabLR6ZaLPdihuammwZ1Kx-7DMoW1tlYifLN7bf0t5jAQwLgAkqx_v0jfzWhkcx2DbATA';

const stats = [
  { icon: 'collections_bookmark', label: 'Tổng bài học', value: '128', hint: '+4 trong tháng này', tone: 'text-[#24dfba]' },
  { icon: 'person_check', label: 'Lượt học đang hoạt động', value: '14.2k', hint: '+12% so với năm trước', tone: 'text-[#24dfba]' },
  { icon: 'insights', label: 'Tiến độ trung bình', value: '68%', hint: '', tone: 'text-[#ffc080]', progress: 68 },
  { icon: 'workspace_premium', label: 'Điểm hoàn thành', value: '42.8k', hint: 'Top 5% học viên', tone: 'text-[#24dfba]' },
];

const lessons = [
  {
    title: 'Giới thiệu về Large Language Models',
    course: 'Mastering Generative AI',
    instructor: 'Jane Doe',
    students: '2,405',
    level: 'Nâng cao',
    rating: '4.8',
    status: 'Đã xuất bản',
    statusClass: 'border-[#24dfba]/20 bg-[#24dfba]/10 text-[#24dfba]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOpbOhuUjpOJlfa8J3w-osLO1Ek5dmvB6nf8tMCA73IRxllx6tKr2yaG1SrxWeXMqNiC57Pw9znqxvjmw8fffjNhBgMC2JIY1ZHGgtiXcYZJgY42NNnef9qwrlyvgQIG_WFtkDTYEaSzUFkcEY_Jq7EYr1mbNlHYhp1R2t6Kc7mEV2oOjnMnDZlOJ6CCmDxGZIJLrIC9YKuQKFXg6wF31w2DzjK4ysNdKEJpHfG3k7m-nZljqYb6e79g',
  },
  {
    title: 'Pipeline MLOps cơ bản',
    course: 'MLOps Engineering',
    instructor: 'Bob Smith',
    students: '1,892',
    level: 'Chuyên sâu',
    rating: '4.9',
    status: 'Đã xuất bản',
    statusClass: 'border-[#24dfba]/20 bg-[#24dfba]/10 text-[#24dfba]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzv4zIKqufs1M4LvIBf8RGM8_l0UCX4mP49pvGb8EyhbhWkkjY1wCyr1FSBV7T1cqaC7VJ-MQ19H7lbCgEqw6VZWhHyNS18K_-QMSvOb5T5sdIRs7CWYtQKPW6bkf_pTY3f4zbyoL0lhp3auTNQa3J95KHq06uycNKwK4hFbWUegVWDUfk85SCgXjpFQugmLA0rVFYa7_cZDo8BMStogfa4BnJ3IJ3_dcFBowCcjTStc34_oYPtdr0nQ',
  },
  {
    title: 'Thiết kế Data Lake',
    course: 'Data Lake Architecture',
    instructor: 'Alice Lee',
    students: '0',
    level: 'Trung cấp',
    rating: '4.5',
    status: 'Bản nháp',
    statusClass: 'border-[#8b90a0]/20 bg-[#8b90a0]/10 text-[#8b90a0]',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPvc2InoExJ_HJiloqWNrAiiKjd0SXkH0G0u9AQ9v6mT7tTzLVKXnztNAbHrNENhXQevriQ0rDJAafZ8CBtN8QOxsBPfLBE8CAZ9W6CYO_ZAhex3ooyEkQARHWYDsLs6ZqEtOYs62cn_I1WtyR6jfB0wN0EOHQB5Fa7Mj6kSouOrUNXo5ob6ymJYyBsVyRKVyJoCyxIzd2Mc67Sbw1yhVN8f4k23SiJCw-_Sqcq2XB6SWEKWIPaxpNlw',
  },
];

const sideLinks = [
  { icon: 'auto_stories', label: 'Bài học của tôi', href: '/lesson-management', active: true },
  { icon: 'school', label: 'Danh mục khóa học', href: '/courses', active: false },
  { icon: 'quiz', label: 'Quản lý quiz', href: '/question-builder', active: false },
  { icon: 'group', label: 'Nhóm học viên', href: '#', active: false },
];

export function LessonManagementPage() {
  return (
    <div className="min-h-screen bg-[#0d131f] text-[#dde2f4]">
      <header className="sticky top-0 z-50 border-b border-[#414754] bg-[#0d131f]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-8">
            <a className="text-[24px] font-bold text-[#adc7ff]" href="/dashboard">
              LearnSphere
            </a>
            <nav className="hidden gap-6 md:flex">
              <a className="border-b-2 border-[#adc7ff] pb-1 text-[16px] font-bold text-[#adc7ff]" href="/lesson-management">
                Quản lý bài học
              </a>
              <a className="text-[16px] font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="/courses">
                Danh mục khóa học
              </a>
              <a className="text-[16px] font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="#">
                Chấm điểm
              </a>
              <a className="text-[16px] font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="#">
                Tài nguyên
              </a>
            </nav>
          </div>
          <UserAvatarMenu name="Alex Rivera" role="Quản trị viên" avatarSrc={avatarSrc} />
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:px-8">
        <aside className="w-full shrink-0 space-y-6 md:w-64">
          <div className="rounded-xl border border-white/5 bg-[#161f2e]/80 p-4 backdrop-blur">
            <p className="px-4 py-2 font-mono text-[12px] uppercase tracking-wider text-[#8b90a0]">Quản lý nội dung</p>
            <div className="space-y-2">
              {sideLinks.map((item) => (
                <a
                  key={item.label}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                    item.active
                      ? 'border border-[#adc7ff]/20 bg-[#4a8eff]/10 text-[#adc7ff]'
                      : 'text-[#c1c6d7] hover:bg-[#2f3542] hover:text-[#dde2f4]'
                  }`}
                  href={item.href}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-mono text-[14px] font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#24dfba]/30 bg-[#161f2e]/80 p-4 shadow-[inset_0_0_25px_rgba(173,199,255,0.15)]">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#24dfba]" style={{ fontVariationSettings: '"FILL" 1' }}>
                neurology
              </span>
              <p className="font-mono text-[14px] font-medium text-[#24dfba]">Gợi ý Sphere AI</p>
            </div>
            <p className="font-mono text-[12px] leading-relaxed text-[#c1c6d7]">
              Đang phân tích hiệu suất học viên. 3 bài học có mức tương tác giảm 15% trong tuần này.
            </p>
            <button className="mt-4 w-full rounded-lg bg-[#24dfba] py-2 font-mono text-[14px] font-medium text-[#00382c] transition-all hover:brightness-110" type="button">
              Xem phân tích
            </button>
          </div>
        </aside>

        <section className="flex-1 space-y-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#161f2e]/80 p-6 backdrop-blur">
                <div className="absolute -bottom-4 -right-4 text-[#dde2f4] opacity-5 transition-transform duration-500 group-hover:scale-110">
                  <span className="material-symbols-outlined text-[96px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                    {stat.icon}
                  </span>
                </div>
                <p className="mb-1 font-mono text-[14px] text-[#c1c6d7]">{stat.label}</p>
                <h2 className="text-[32px] font-semibold leading-10">{stat.value}</h2>
                {stat.progress ? (
                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[#2f3542]">
                    <div className="h-full rounded-full bg-[#ffc080]" style={{ width: `${stat.progress}%` }} />
                  </div>
                ) : (
                  <div className={`mt-2 flex items-center gap-1 ${stat.tone}`}>
                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                    <span className="font-mono text-[12px]">{stat.hint}</span>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-[32px] font-semibold leading-10 text-[#dde2f4]">Quản lý bài học</h1>
              <p className="text-[16px] leading-6 text-[#c1c6d7]">Quản lý nội dung, trạng thái xuất bản và tài nguyên của các bài học LearnSphere.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-[#adc7ff] px-6 py-3 font-mono text-[14px] font-bold text-[#00285b] shadow-lg shadow-[#adc7ff]/20 transition-all active:scale-95 hover:brightness-110" type="button">
              <span className="material-symbols-outlined">add</span>
              Thêm bài học mới
            </button>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/5 bg-[#161f2e]/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#414754] bg-[#1a202c]">
                    {['Tên bài học', 'Giảng viên', 'Học viên', 'Trạng thái', 'Thao tác'].map((heading, index) => (
                      <th key={heading} className={`px-6 py-4 font-mono text-[12px] uppercase tracking-widest text-[#8b90a0] ${index > 1 ? 'text-center' : ''} ${index === 4 ? 'text-right' : ''}`}>
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#414754]/30">
                  {lessons.map((lesson) => (
                    <tr key={lesson.title} className="group transition-colors hover:bg-[#2f3542]/20">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 shrink-0 overflow-hidden rounded border border-[#414754] bg-[#2f3542]">
                            <img className="h-full w-full object-cover" src={lesson.image} alt={lesson.title} />
                          </div>
                          <div>
                            <a className="text-[16px] font-semibold text-[#dde2f4] transition-colors hover:text-[#adc7ff]" href="/lesson-detail">
                              {lesson.title}
                            </a>
                            <p className="font-mono text-[12px] text-[#8b90a0]">
                              {lesson.course} · Mức độ: {lesson.level} · {lesson.rating} sao
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4a8eff] font-mono text-[10px] text-[#00285b]">
                            {lesson.instructor.split(' ').map((part) => part[0]).join('')}
                          </div>
                          <span className="font-mono text-[14px]">{lesson.instructor}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center font-mono text-[14px]">{lesson.students}</td>
                      <td className="px-6 py-5 text-center">
                        <span className={`inline-flex rounded-full border px-2.5 py-0.5 text-[12px] font-medium ${lesson.statusClass}`}>
                          {lesson.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-3 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                          {[
                            { icon: 'visibility', title: 'Xem trước', tone: 'hover:text-[#adc7ff]' },
                            { icon: 'edit', title: 'Chỉnh sửa', tone: 'hover:text-[#ffc080]' },
                            { icon: 'delete', title: 'Xóa', tone: 'hover:text-[#ffb4ab]' },
                          ].map((action) => (
                            <button key={action.icon} className={`rounded-lg p-2 text-[#c1c6d7] transition-colors hover:bg-[#2f3542] ${action.tone}`} type="button" title={action.title}>
                              <span className="material-symbols-outlined text-[20px]">{action.icon}</span>
                            </button>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between border-t border-[#414754] bg-[#1a202c]/50 px-6 py-4">
              <p className="font-mono text-[12px] text-[#8b90a0]">Hiển thị 3 trên 128 bài học</p>
              <div className="flex gap-2">
                <button className="rounded border border-[#414754] p-2 opacity-50" type="button" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="rounded border border-[#414754] p-2 transition-colors hover:bg-[#2f3542]" type="button">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="group rounded-xl border border-white/5 bg-[#161f2e]/80 p-8 transition-all hover:border-[#24dfba]/50">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-lg bg-[#24dfba]/10 p-3 text-[#24dfba]">
                  <span className="material-symbols-outlined text-[32px]">video_library</span>
                </div>
                <span className="material-symbols-outlined text-[#8b90a0] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
              <h2 className="mb-2 text-[24px] font-semibold">Tài nguyên bài học</h2>
              <p className="mb-6 text-[16px] leading-6 text-[#c1c6d7]">Cập nhật transcript video, tải tài liệu học tập và quản lý tóm tắt do AI tạo cho từng học phần.</p>
              <div className="flex gap-4">
                <div className="-space-x-2">
                  {['Vid', 'PDF', 'MP3'].map((item, index) => (
                    <span key={item} className={`inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#0d131f] font-mono text-[10px] ${index === 0 ? 'bg-[#adc7ff] text-[#002e68]' : index === 1 ? 'bg-[#ffc080] text-[#4a2800]' : 'bg-[#24dfba] text-[#00382c]'}`}>
                      {item}
                    </span>
                  ))}
                </div>
                <span className="self-center font-mono text-[12px] text-[#8b90a0]">244 tệp</span>
              </div>
            </article>

            <a className="group rounded-xl border border-white/5 bg-[#161f2e]/80 p-8 transition-all hover:border-[#ffc080]/50" href="/question-builder">
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-lg bg-[#ffc080]/10 p-3 text-[#ffc080]">
                  <span className="material-symbols-outlined text-[32px]">quiz</span>
                </div>
                <span className="material-symbols-outlined text-[#8b90a0] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
              <h2 className="mb-2 text-[24px] font-semibold">Ngân hàng câu hỏi</h2>
              <p className="mb-6 text-[16px] leading-6 text-[#c1c6d7]">Chỉnh logic quiz, đặt ngưỡng đạt và xem hiệu quả chấm điểm tự động trên toàn hệ thống.</p>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[14px] font-medium text-[#ffc080]">82% tỉ lệ đạt</span>
                <div className="h-1 w-24 overflow-hidden rounded-full bg-[#2f3542]">
                  <div className="h-full w-[82%] bg-[#ffc080]" />
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#414754] bg-[#080e1a] px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-[24px] font-semibold text-[#dde2f4]">LearnSphere</h2>
            <p className="font-mono text-[12px] text-[#c1c6d7]">© 2024 Nền tảng LearnSphere. Mọi quyền được bảo lưu.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 font-mono text-[12px] text-[#c1c6d7]">
            <a className="transition-colors hover:text-[#24dfba]" href="#">Về chúng tôi</a>
            <a className="transition-colors hover:text-[#24dfba]" href="#">Chính sách bảo mật</a>
            <a className="transition-colors hover:text-[#24dfba]" href="#">Hạ tầng</a>
            <a className="transition-colors hover:text-[#24dfba]" href="#">Liên hệ hỗ trợ</a>
          </nav>
        </div>
      </footer>
      <SphereAIButton />
    </div>
  );
}
