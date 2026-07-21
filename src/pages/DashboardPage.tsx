import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const courses = [
  {
    title: 'Machine Learning Fundamentals',
    author: 'Dr. Sarah Jenkins',
    progress: 68,
    color: 'secondary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhPVE7JzrkSm3vQtPKxkpqyTfhuuwDDA9NzwosNrB831XZDADOzdNOahW3pBeY5TbbxFrLSplXRzCJIckA21SOuKqgwHAn2Vu186ebHSdshy_Xla57_wreZJWAhWgZlsu1tK65yTPoC1EG-OJYT37nAzFw1HcvSwjrwCRsxRu0Nihk_uZFtKqyPVIkEZKvB8FmsZmaXiRQKQZYMz8aZWJWr2bLhQwuhpVF8ak-XP9XaqBeCo6nQJdVLQ',
  },
  {
    title: 'Advanced React Patterns',
    author: 'Marcus Thorne',
    progress: 42,
    color: 'tertiary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB7eztRqn5Dw8WNJA4STacM4onWPgN3wa8E6XQC-vb1tRnM5d8VuxnTTo9Hh7jAKbCof-RuwE-hKSl9HhmGgE6ZN0xbz-oczDdX_DnRJxdnlOosfDZ_-X9Fy6pOTQoyJwoAVO_eOCnDGL6o1VffMd_4IPz6PymFe8TEvs6Fgkh8pvf9h2LFA7odwH2CZMKlitx4wxoC2KWNrL3pSobxukJ-XyBp6_VdDLqiEtpxOctpMPZolTsJQBXsEA',
  },
  {
    title: 'Data Science with Python',
    author: 'Elena Rodriguez',
    progress: 85,
    color: 'secondary',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCA27-liOI2Hav7zOFRTJlryKeR5BsADGpktHSx4IY_yEBBUxVFiLkcua4S3I8eIEKapnID5QaP7Cx2kfhUNTnuRK0fWKzRyYFc35Nwn9pWcvkQ4KsBpDW7BpSgDBEfdKYi8xqjwcBPA1rUezCUtnzuKTijrjRy0N__64C9v-K_SrYKsl1yg3Z03LudOEgiigLbHK-kVi8wOLkdCqW5dN9L2TAJwcDKLnd_rWNGVvaL9Ek6lmJVgoJqaQ',
  },
];

const lessons = [
  {
    title: 'Neural Network Backpropagation',
    course: 'Machine Learning Fundamentals',
    time: '2 giờ trước',
    icon: 'play_circle',
    tone: 'primary',
  },
  {
    title: 'Custom Hooks in React',
    course: 'Advanced React Patterns',
    time: 'Hôm qua',
    icon: 'article',
    tone: 'tertiary',
  },
  {
    title: 'Pandas Dataframes Deep Dive',
    course: 'Data Science with Python',
    time: '3 ngày trước',
    icon: 'terminal',
    tone: 'secondary',
  },
];

const quizzes = [
  {
    title: 'Gradient Descent Quiz',
    due: 'Còn 5 giờ',
    duration: '15 mins',
    button: 'Bắt đầu',
    buttonTone: 'primary',
  },
  {
    title: 'React Performance Audit',
    due: 'Oct 24',
    duration: '30 mins',
    button: 'Xem chi tiết',
    buttonTone: 'muted',
  },
  {
    title: 'NumPy Basics Final',
    due: 'Oct 26',
    duration: '20 mins',
    button: 'Xem chi tiết',
    buttonTone: 'muted',
  },
];

export function DashboardPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d131f] text-[#dde2f4]">
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#414754] bg-[#1a202c] px-4 md:h-20 md:px-8">
        <div className="flex items-center gap-8">
          <h1 className="text-[24px] font-bold text-[#adc7ff]">LearnSphere</h1>
          <div className="hidden w-80 items-center gap-2 rounded-full border border-[#414754] bg-[#161c28] px-4 py-1 md:flex">
            <span className="material-symbols-outlined text-[20px] text-[#c1c6d7]">search</span>
            <input
              className="w-full border-none bg-transparent text-[14px] text-[#dde2f4] placeholder:text-[#8b90a0] focus:ring-0"
              placeholder="Tìm khóa học, bài học..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-[#c1c6d7] transition-colors duration-200 hover:text-[#adc7ff]">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#ffc080]" />
          </button>
          <UserAvatarMenu
            name="Alex Rivera"
            role="Học viên"
            avatarSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAK3DeXFfcU7eoLcYm0J-P0geFc_1SNB3sOpbZdSgXNGYGNkWLvpydHgoO3teNd6SCKCfYzJzNrs1AB7P8Pu74X-3istluRsHM1oPvbEs2nLPM2cHWOxHmwakxXKAZY99rZGG-p9kypULkAvH9bkTxwS1EgNluYqYhNlGpql2gZkqIWaOYk5FWOQvYjhFI2VJivahYgEOwamgFB5MZtSI9a-fovv-ztHAlZ1TjPwNnEgpB773mBUptA6A"
          />
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-[#414754] bg-[#2f3542] md:hidden">
        {[
          { icon: 'dashboard', label: 'Trang chủ', active: true },
          { icon: 'school', label: 'Khóa học', active: false, href: '/courses' },
          { icon: 'auto_awesome', label: 'Lộ trình', active: false },
          { icon: 'settings', label: 'Cài đặt', active: false },
        ].map((item) => (
          <a key={item.label} className={`flex flex-col items-center ${item.active ? 'text-[#adc7ff]' : 'text-[#c1c6d7]'}`} href={'href' in item ? item.href : '#'}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-[10px]">{item.label}</span>
          </a>
        ))}
      </nav>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-64 flex-col border-r border-[#414754] bg-[#161c28] py-6 md:flex">
        <div className="mb-8 px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#adc7ff] text-[#002e68]">
              <span className="material-symbols-outlined text-[20px]">school</span>
            </div>
            <div>
              <h2 className="origin-left scale-75 text-[24px] font-extrabold text-[#adc7ff]">Sphere AI</h2>
              <p className="-mt-1 text-[12px] text-[#8b90a0]">Trợ lý học tập</p>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1">
          {[
            { icon: 'dashboard', label: 'Bảng điều khiển', active: true },
            { icon: 'school', label: 'Khóa học của tôi', active: false, href: '/courses' },
            { icon: 'auto_awesome', label: 'Lộ trình học', active: false },
            { icon: 'auto_stories', label: 'Quản lý bài học', active: false, href: '/lesson-management' },
            { icon: 'monitoring', label: 'Giám sát hệ thống', active: false, href: '/system-monitoring' },
            { icon: 'library_books', label: 'Tài nguyên', active: false },
            { icon: 'settings', label: 'Cài đặt', active: false },
          ].map((item) => (
            <a
              key={item.label}
              className={`mx-2 flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${item.active ? 'bg-[#4a8eff] text-[#00285b]' : 'text-[#c1c6d7] hover:bg-[#2f3542] hover:text-[#dde2f4]'}`}
              href={'href' in item ? item.href : '#'}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-[14px] font-medium">{item.label}</span>
            </a>
          ))}
        </div>

      </aside>

      <main className="min-h-screen pt-16 md:pl-64 pb-24">
        <div className="mx-auto max-w-7xl space-y-12 p-4 md:p-8 lg:px-8 lg:py-8">
          <section>
            <h2 className="text-[32px] font-semibold tracking-[-0.01em] text-[#dde2f4] md:text-[32px]">Chào mừng trở lại, Alex.</h2>
            <p className="text-[16px] leading-6 text-[#c1c6d7]">Bạn đã hoàn thành 75% mục tiêu học tập tuần này. Tiếp tục phát huy nhé!</p>
          </section>

          <section className="space-y-3">
            <div className="flex items-end justify-between">
              <h3 className="text-[24px] font-semibold text-[#adc7ff]">Khóa học của tôi</h3>
              <a className="text-[14px] text-[#24dfba] hover:underline" href="/courses">
                Xem tất cả
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <a
                  key={course.title}
                  className="group rounded-xl border border-[#414754] bg-[#161c28] p-2 transition-all duration-300 hover:border-[#adc7ff]/50"
                  href="/lesson-detail"
                >
                  <div className="relative mb-4 h-40 overflow-hidden rounded-lg">
                    <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={course.image} alt={course.title} />
                    <div className="absolute right-2 top-2 rounded bg-[#2f3542]/80 px-2 py-1 text-[12px] text-[#24dfba] backdrop-blur-md">
                      Tạo bởi AI
                    </div>
                  </div>
                  <div className="space-y-3 px-2 pb-2">
                    <h4 className="truncate text-[24px] font-semibold text-[#dde2f4]">{course.title}</h4>
                    <p className="flex items-center gap-2 text-[14px] text-[#c1c6d7]">
                      <span className="material-symbols-outlined text-[18px]">person</span>
                      {course.author}
                    </p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[12px] text-[#8b90a0]">
                        <span>Tiến độ khóa học</span>
                        <span className={course.color === 'tertiary' ? 'text-[#24dfba]' : 'text-[#ffc080]'}>{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-[#2f3542]">
                        <div
                          className={`h-full rounded-full ${course.color === 'tertiary' ? 'bg-[#00a487]' : 'bg-[#ffc080]'}`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-[#dde2f4]">Bài học gần đây</h3>
              <div className="space-y-3">
                {lessons.map((lesson) => (
                  <a
                    key={lesson.title}
                    className="flex cursor-pointer items-center justify-between rounded-xl border border-[#414754] bg-[#161c28] p-4 transition-colors hover:bg-[#242a37]"
                    href="/lesson-detail"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${lesson.tone === 'tertiary' ? 'bg-[#24dfba]/10 text-[#24dfba]' : lesson.tone === 'secondary' ? 'bg-[#ffc080]/10 text-[#ffc080]' : 'bg-[#adc7ff]/10 text-[#adc7ff]'}`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>{lesson.icon}</span>
                      </div>
                      <div>
                        <p className="text-[14px] text-[#dde2f4]">{lesson.title}</p>
                        <p className="text-[12px] text-[#8b90a0]">{lesson.course}</p>
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-[12px] text-[#8b90a0]">{lesson.time}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[24px] font-semibold text-[#dde2f4]">Bài kiểm tra sắp tới</h3>
              <div className="divide-y divide-[#414754] overflow-hidden rounded-xl border border-[#414754] bg-[#161c28]">
                {quizzes.map((quiz) => (
                  <div key={quiz.title} className="flex items-center justify-between p-5 transition-colors hover:bg-[#333947]">
                    <div className="space-y-1">
                      <p className="text-[14px] text-[#dde2f4]">{quiz.title}</p>
                      <div className="flex items-center gap-4">
                        <span className={`flex items-center gap-1 text-[12px] ${quiz.buttonTone === 'primary' ? 'text-[#ffb4ab]' : 'text-[#c1c6d7]'}`}>
                          <span className="material-symbols-outlined text-[16px]">{quiz.buttonTone === 'primary' ? 'schedule' : 'calendar_today'}</span>
                          {quiz.due}
                        </span>
                        <span className="flex items-center gap-1 text-[12px] text-[#8b90a0]">
                          <span className="material-symbols-outlined text-[16px]">timer</span>
                          {quiz.duration}
                        </span>
                      </div>
                    </div>
                    <a
                      className={`rounded-lg border px-4 py-2 text-[14px] transition-all ${quiz.buttonTone === 'primary' ? 'border-[#adc7ff]/20 bg-[#2f3542] text-[#adc7ff] hover:bg-[#adc7ff] hover:text-[#002e68]' : 'border-[#414754] bg-[#2f3542] text-[#c1c6d7] hover:bg-[#414754]'}`}
                      href="/quiz"
                    >
                      {quiz.button}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="border-t border-[#414754] pb-8 pt-12 text-center md:text-left">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="space-y-2">
                <h4 className="text-[24px] font-semibold text-[#adc7ff]">LearnSphere</h4>
                <p className="text-[12px] text-[#8b90a0]">© 2024 LearnSphere. Nền tảng học tập thông minh.</p>
              </div>
              <div className="flex gap-8 text-[14px] text-[#c1c6d7]">
                <a href="#">Về chúng tôi</a>
                <a href="#">Điều khoản</a>
                <a href="#">Bảo mật</a>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <div className="fixed bottom-28 right-8 z-[60] flex max-w-xs flex-col items-end gap-3">
        <div className="ai-pulse rounded-2xl border border-[#adc7ff]/20 bg-[#2f3542] p-4 shadow-lg max-w-xs">
          <p className="mb-1 text-[12px] font-bold text-[#adc7ff]">Gợi ý từ Sphere AI</p>
          <p className="text-[14px] text-[#dde2f4]">Sẵn sàng cho bài quiz Backpropagation chưa? Mình có thể giúp bạn ôn các ý chính trong 5 phút.</p>
        </div>
      </div>
      <SphereAIButton />
    </div>
  );
}
