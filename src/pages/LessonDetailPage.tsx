import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBoBuRJI1yShmJcMfHY1XLGNg58oqoS5MyV6HQICcczCWG7fu-lzanV_5ir_WBXQB19zta9onD5oKMvRyXiRpCjARwoUGMeyA0WX3cZa4UuBn_ZNEIt7g-llR2NmJcFr5na00oENmk4NouYphWdHgtSlu0awtCw8ILJrkXivX-Hmewe1jmjHEriSYvPNBH8sC6DmExAXo1R96lZUvLplbzlbSMm2cAgWhx9IlcImQS45sYgmsPBdDBehw';

const videoImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD00IwwAaeuspLVaXlaVO6ryksx04N7HT_4i7L-t54R87caSO7tjoOsT4fLFOE7XW5Wk8iTR5SmIwqvCwGXmrWMKNVKPdP_KPbvdRep15he71beZO-rJcQt4GsXdo6k2iJXm4JViPP7NTPgddTpTXjNaCpYcBiDGd94eog5wS2KSnV__nSy_0xxbxsynAcwXd_ISPnFSVHN6FxaNs8_z28nLa2t9wXrm0QyX3XRxR0G-U5RCSw4Wi3SJA';

const modules = [
  { icon: 'dashboard', label: 'Bảng điều khiển', href: '/dashboard', active: false },
  { icon: 'school', label: 'Khóa học của tôi', href: '/courses', active: true },
  { icon: 'auto_stories', label: 'Quản lý bài học', href: '/lesson-management', active: false },
];

const resources = [
  { icon: 'description', label: 'AWS Bedrock Docs.pdf', action: 'download' },
  { icon: 'code', label: 'Lab_Setup_Guide.md', action: 'open_in_new' },
];

const concepts = [
  'Hiểu kiến trúc Transformer trong bối cảnh doanh nghiệp.',
  'Các lưu ý về bảo mật, tuân thủ và data residency trên AWS.',
  'So sánh các Foundation Models có thể sử dụng qua API.',
];

export function LessonDetailPage() {
  return (
    <div className="min-h-screen bg-[#0d131f] text-[#dde2f4] selection:bg-[#adc7ff]/30">
      <header className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#414754] bg-[#1a202c] px-4 md:px-8">
        <div className="flex items-center gap-8">
          <a className="text-[24px] font-bold text-[#adc7ff]" href="/dashboard">
            LearnSphere
          </a>
          <div className="hidden w-96 items-center gap-2 rounded-full border border-[#414754] bg-[#080e1a] px-4 py-1 md:flex">
            <span className="material-symbols-outlined text-[18px] text-[#c1c6d7]">search</span>
            <input
              className="w-full border-none bg-transparent text-[14px] text-[#dde2f4] placeholder:text-[#c1c6d7] focus:ring-0"
              placeholder="Tìm nội dung khóa học..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" type="button" aria-label="Thông báo">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <UserAvatarMenu name="Alex Rivera" role="Học viên" avatarSrc={avatarSrc} />
        </div>
      </header>

      <aside className="fixed bottom-0 left-0 top-16 hidden w-64 flex-col overflow-y-auto border-r border-[#414754] bg-[#161c28] py-6 md:flex">
        <div className="mb-6 px-6">
          <div className="mb-1 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#adc7ff]" style={{ fontVariationSettings: '"FILL" 1' }}>
              auto_awesome
            </span>
            <span className="text-[24px] font-extrabold text-[#adc7ff]">LearnSphere AI</span>
          </div>
          <div className="font-mono text-[14px] text-[#c1c6d7]">Trợ lý học tập</div>
        </div>

        <nav className="flex-1 space-y-1 px-2">
          {modules.map((item) => (
            <a
              key={item.label}
              className={`mx-2 flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                item.active ? 'bg-[#4a8eff] text-[#00285b]' : 'text-[#c1c6d7] hover:bg-[#2f3542] hover:text-[#dde2f4]'
              }`}
              href={item.href}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-mono text-[14px] font-medium">{item.label}</span>
            </a>
          ))}

          <div className="px-6 pb-2 pt-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8b90a0]">Học phần</span>
          </div>

          <div className="space-y-1 px-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 rounded-lg bg-[#2f3542]/50 px-4 py-2 font-bold text-[#adc7ff]">
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
                <span className="truncate text-[14px]">1. Intro to LLMs</span>
              </div>
              <div className="my-1 ml-9 space-y-1 border-l border-[#414754]">
                <a className="block border-l-2 border-transparent px-4 py-2 text-[14px] text-[#c1c6d7] transition-all hover:border-[#adc7ff] hover:text-[#adc7ff]" href="#">
                  Kiến trúc cơ bản
                </a>
                <a className="block border-l-2 border-[#adc7ff] bg-[#adc7ff]/5 px-4 py-2 text-[14px] font-medium text-[#dde2f4]" href="/lesson-detail">
                  LLMs on AWS Bedrock
                </a>
              </div>
            </div>
            {['2. Prompt Engineering', '3. Fine-tuning Models'].map((label) => (
              <a key={label} className="flex items-center gap-3 rounded-lg px-4 py-2 text-[#c1c6d7] transition-all hover:bg-[#2f3542]" href="#">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                <span className="text-[14px]">{label}</span>
              </a>
            ))}
          </div>
        </nav>

      </aside>

      <main className="min-h-screen pb-24 pt-16 md:ml-64">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <nav className="mb-4 flex items-center gap-2 font-mono text-[12px] text-[#c1c6d7]">
            <a className="transition-colors hover:text-[#adc7ff]" href="/dashboard">
              Khóa học
            </a>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <a className="transition-colors hover:text-[#adc7ff]" href="#">
              Mastering Generative AI
            </a>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#dde2f4]">Bài học 1</span>
          </nav>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-8">
              <h1 className="text-[28px] font-semibold leading-9 text-[#dde2f4] md:text-[32px] md:leading-10">
                Giới thiệu về các Mô hình Ngôn ngữ Lớn trên AWS
              </h1>

              <div className="group relative aspect-video overflow-hidden rounded-xl border border-[#414754] bg-[#080e1a] shadow-[0_0_40px_-10px_rgba(74,142,255,0.35)]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${videoImage})` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group/play flex h-20 w-20 items-center justify-center rounded-full border border-[#adc7ff]/40 bg-[#adc7ff]/20 backdrop-blur-md transition-all hover:scale-110 hover:bg-[#adc7ff]/40" type="button" aria-label="Phát bài học">
                    <span className="material-symbols-outlined text-[52px] text-[#adc7ff]" style={{ fontVariationSettings: '"FILL" 1' }}>
                      play_arrow
                    </span>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d131f] to-transparent p-6">
                  <div className="mb-2 flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined cursor-pointer">pause</span>
                      <span className="material-symbols-outlined cursor-pointer">volume_up</span>
                      <span className="font-mono text-[12px]">12:45 / 24:00</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined cursor-pointer">settings</span>
                      <span className="material-symbols-outlined cursor-pointer">fullscreen</span>
                    </div>
                  </div>
                  <div className="h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-[#2f3542]">
                    <div className="relative h-full w-[45%] bg-[#adc7ff]">
                      <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button className="flex items-center gap-2 rounded-lg border border-[#414754] px-4 py-2.5 text-[#dde2f4] transition-all hover:bg-[#2f3542] md:px-6" type="button">
                  <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  <span className="font-mono text-[14px]">Bài học trước</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-[#adc7ff] px-4 py-2.5 font-bold text-[#002e68] transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(173,199,255,0.4)] md:px-6" type="button">
                  <span className="font-mono text-[14px]">Bài học tiếp theo</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>

              <section className="space-y-4 rounded-xl border border-[#414754] bg-[#1a202c] p-6 md:p-8">
                <h2 className="text-[24px] font-semibold text-[#adc7ff]">Khái niệm chính</h2>
                <p className="text-[16px] leading-7 text-[#c1c6d7]">
                  Trong học phần này, bạn sẽ tìm hiểu kiến trúc nền tảng của Large Language Models và cách tích hợp vào hệ sinh thái AWS. Nội dung tập trung vào Amazon Bedrock và SageMaker JumpStart như những hướng triển khai generative AI cấp doanh nghiệp.
                </p>
                <ul className="space-y-3">
                  {concepts.map((concept) => (
                    <li key={concept} className="flex items-start gap-3 text-[#dde2f4]">
                      <span className="material-symbols-outlined mt-1 text-[#24dfba]">check_circle</span>
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-6 pt-4">
                <h2 className="text-[24px] font-semibold text-[#dde2f4]">Thảo luận</h2>
                <div className="space-y-6 rounded-xl border border-[#414754] bg-[#161c28] p-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#adc7ff]/20">
                      <img className="h-full w-full object-cover" src={avatarSrc} alt="Alex Rivera" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <textarea
                        className="min-h-[100px] w-full rounded-xl border border-[#414754] bg-[#0d131f] p-4 text-[16px] text-[#dde2f4] placeholder:text-[#8b90a0] focus:border-[#adc7ff] focus:ring-2 focus:ring-[#adc7ff]"
                        placeholder="Đặt câu hỏi hoặc chia sẻ suy nghĩ của bạn..."
                      />
                      <div className="flex justify-end">
                        <button className="rounded-lg bg-[#2f3542] px-6 py-2 font-mono text-[14px] font-medium text-[#adc7ff] transition-all hover:bg-[#adc7ff] hover:text-[#002e68]" type="button">
                          Gửi câu hỏi
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00a487]">
                      <span className="font-bold text-[#003026]">JD</span>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-mono text-[14px] font-medium text-[#dde2f4]">Jordan Davis</span>
                        <span className="font-mono text-[12px] text-[#8b90a0]">- 2 giờ trước</span>
                      </div>
                      <p className="text-[16px] leading-6 text-[#c1c6d7]">
                        Nếu cần custom fine-tuning trên dữ liệu nội bộ thì nên dùng SageMaker trực tiếp, hay fine-tuning trên Bedrock đã đủ cho hầu hết use case RAG?
                      </p>
                      <div className="mt-2 flex items-center gap-4">
                        <button className="flex items-center gap-1 font-mono text-[12px] text-[#8b90a0] hover:text-[#adc7ff]" type="button">
                          <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                          12
                        </button>
                        <button className="font-mono text-[12px] text-[#8b90a0] hover:text-[#adc7ff]" type="button">
                          Trả lời
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-6 lg:col-span-4">
              <div className="rounded-xl bg-gradient-to-r from-[#adc7ff] to-[#24dfba] p-[1px] shadow-xl">
                <div className="space-y-4 rounded-xl bg-[#161f2e] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-[14px] font-medium uppercase tracking-widest text-[#adc7ff]">Tiến độ bài học</h3>
                    <span className="text-[24px] font-bold text-[#24dfba]">45%</span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-[#2f3542]">
                    <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-[#adc7ff] to-[#24dfba] shadow-[0_0_10px_rgba(36,223,186,0.5)]" />
                  </div>
                  <p className="font-mono text-[12px] text-[#c1c6d7]">Bạn đã hoàn thành 5/12 bài học trong học phần này.</p>
                </div>
              </div>

              <div className="space-y-4 rounded-xl border border-[#414754] bg-[#242a37] p-6 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ffc080]/20 bg-[#ffc080]/10 text-[#ffc080]">
                  <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                    quiz
                  </span>
                </div>
                <h3 className="text-[24px] font-semibold text-[#dde2f4]">Kiểm tra kiến thức</h3>
                <p className="px-4 text-[14px] leading-5 text-[#c1c6d7]">Kiểm tra mức độ hiểu của bạn về kiến trúc LLM và vị trí các dịch vụ AWS.</p>
                <a className="block w-full rounded-xl bg-[#ffc080] py-4 font-bold text-[#4a2800] transition-all active:scale-95 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,192,128,0.3)]" href="/quiz">
                  Làm quiz
                </a>
              </div>

              <div className="rounded-xl border border-[#414754] bg-[#1a202c] p-6">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-[14px] font-medium text-[#c1c6d7]">
                  <span className="material-symbols-outlined text-[18px]">link</span>
                  TÀI NGUYÊN
                </h3>
                <ul className="space-y-4">
                  {resources.map((resource) => (
                    <li key={resource.label} className="group flex cursor-pointer items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[#adc7ff]">{resource.icon}</span>
                        <span className="text-[14px] text-[#dde2f4] transition-colors group-hover:text-[#adc7ff]">{resource.label}</span>
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-[#8b90a0]">{resource.action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-8 right-8 z-50 flex items-center space-x-2 rounded-full border border-[#adc7ff]/10 bg-[#2f3542] p-2 shadow-lg md:hidden">
        {['smart_toy', 'help', 'chat', 'history'].map((icon, index) => (
          <button
            key={icon}
            className={`flex items-center justify-center rounded-full p-3 transition-all ${index === 0 ? 'animate-pulse bg-[#00a487] text-[#003026]' : 'text-[#c1c6d7] hover:bg-[#333947]'}`}
            type="button"
          >
            <span className="material-symbols-outlined">{icon}</span>
          </button>
        ))}
      </nav>

      <SphereAIButton />
    </div>
  );
}
