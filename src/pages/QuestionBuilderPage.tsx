import { useState } from 'react';
import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKeNBi2jNgbEX4dt6nsH8jJ0KsxzOaxqx2_3cWyMw1EojZOMGx8vJ8ZLFtsLYzqvQb9_dSiLClGrvSO4CC2JllO5YZHuHqUbvV1MSBNYm-i0rDvPn2F8A7NYDrALUHOW7B91ZePrzuoy9OH-pfMu7ItzDyGaJdG859kW0r_EFrTL9AHdLIPJAgzWL8CGrqQxQvMwNXzlmKUYlEHjOyGdInGpJkYNSHYPbXj6hVa42TveS95tPWoVIQhA';

const navItems = [
  { icon: 'dashboard', label: 'Bảng điều khiển', href: '/dashboard', active: false },
  { icon: 'menu_book', label: 'Khóa học của tôi', href: '/courses', active: false },
  { icon: 'quiz', label: 'Tạo bài tập', href: '/question-builder', active: true },
  { icon: 'route', label: 'Lộ trình học', href: '#', active: false },
  { icon: 'settings', label: 'Cài đặt', href: '#', active: false },
];

const multipleChoiceOptions = [
  { value: 'Khả năng mở rộng không máy chủ', checked: true },
  { value: 'Chi phí cố định hằng tháng', checked: false },
  { value: 'Yêu cầu cấu hình phần cứng', checked: false },
  { value: 'Chỉ dành cho lưu trữ tĩnh', checked: false },
];

export function QuestionBuilderPage() {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#0d131f] text-[#dde2f4]">
      <aside className="hidden h-full w-64 shrink-0 flex-col gap-2 border-r border-[#414754]/30 bg-[#161c28] p-4 lg:flex">
        <a className="mb-8 text-[24px] font-black text-[#adc7ff]" href="/dashboard">
          LearnSphere
        </a>
        <nav className="flex flex-grow flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                item.active ? 'bg-[#4a8eff] text-[#00285b]' : 'text-[#c1c6d7] hover:bg-[#2f3542]/50 hover:text-[#dde2f4]'
              }`}
              href={item.href}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-mono text-[14px] font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      <main className="flex flex-grow flex-col overflow-hidden bg-[#0d131f]">
        <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#414754]/30 bg-[#161c28] px-6 shadow-sm">
          <div className="flex items-center gap-6">
            <a className="font-bold text-[#adc7ff] lg:hidden" href="/dashboard">
              LearnSphere
            </a>
            <nav className="hidden items-center gap-6 md:flex">
              <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="/courses">
                Khóa học
              </a>
              <a className="border-b-2 border-[#adc7ff] pb-1 font-bold text-[#adc7ff]" href="/question-builder">
                Tạo bài tập
              </a>
              <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="#">
                Thư viện
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[#8b90a0]">search</span>
              <input
                className="h-10 w-64 rounded-full border-none bg-[#1a202c] pl-10 pr-4 text-[14px] text-[#dde2f4] transition-all placeholder:text-[#8b90a0] focus:ring-2 focus:ring-[#adc7ff]"
                placeholder="Tìm kiếm nội dung..."
                type="text"
              />
            </div>
            <button className="material-symbols-outlined rounded-full p-2 text-[#c1c6d7] transition-transform hover:bg-[#2f3542]/50 active:scale-95" type="button" aria-label="Thông báo">
              notifications
            </button>
            <button className="material-symbols-outlined rounded-full p-2 text-[#ffc080] transition-transform hover:bg-[#ffc080]/10 active:scale-95" type="button" aria-label="Tạo nhanh bằng AI">
              bolt
            </button>
            <UserAvatarMenu name="Alex Rivera" role="Quản trị viên" avatarSrc={avatarSrc} />
          </div>
        </header>

        <div className="flex flex-grow flex-col gap-6 overflow-hidden p-6 md:flex-row">
          <section className="flex w-full shrink-0 flex-col gap-4 overflow-y-auto pr-2 md:w-[380px]">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#adc7ff]">settings_applications</span>
              <h1 className="text-[24px] font-semibold text-[#dde2f4]">Cài đặt bài thi</h1>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-[#161f2e]/80 p-5 backdrop-blur">
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[12px] uppercase tracking-wider text-[#c1c6d7]">Tiêu đề bài kiểm tra</span>
                <input className="rounded-lg border border-[#414754]/60 bg-[#0d131f] px-4 py-3 text-[#dde2f4] placeholder:text-[#8b90a0] focus:border-transparent focus:ring-2 focus:ring-[#adc7ff]" placeholder="Nhập tiêu đề..." type="text" />
              </label>

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[12px] uppercase tracking-wider text-[#c1c6d7]">Khóa học / Bài học liên quan</span>
                <div className="relative">
                  <select className="w-full appearance-none rounded-lg border border-[#414754]/60 bg-[#0d131f] px-4 py-3 text-[#dde2f4] focus:border-transparent focus:ring-2 focus:ring-[#adc7ff]">
                    <option>Lập trình Python cơ bản</option>
                    <option>Machine Learning nâng cao</option>
                    <option>Thiết kế hệ thống AWS</option>
                  </select>
                  <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8b90a0]">expand_more</span>
                </div>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] uppercase tracking-wider text-[#c1c6d7]">Thời lượng (phút)</span>
                  <input className="rounded-lg border border-[#414754]/60 bg-[#0d131f] px-4 py-3 text-[#dde2f4] focus:ring-2 focus:ring-[#adc7ff]" type="number" defaultValue="45" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[12px] uppercase tracking-wider text-[#c1c6d7]">Điểm đạt (%)</span>
                  <input className="rounded-lg border border-[#414754]/60 bg-[#0d131f] px-4 py-3 text-[#dde2f4] focus:ring-2 focus:ring-[#adc7ff]" type="number" defaultValue="80" />
                </label>
              </div>

              <div className="mt-2 flex items-center justify-between rounded-lg border border-[#adc7ff]/10 bg-[#adc7ff]/5 p-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#adc7ff]">auto_awesome</span>
                  <div>
                    <p className="font-mono text-[14px] font-medium text-[#adc7ff]">Chấm điểm tự động AI</p>
                    <p className="text-[10px] text-[#c1c6d7]/70">Phản hồi thông minh theo ngữ cảnh</p>
                  </div>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#4a8eff]" type="button" aria-label="Bật chấm điểm AI">
                  <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition" />
                </button>
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#161f2e]/80 p-5 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffc080]">analytics</span>
                <span className="font-mono text-[14px] font-medium text-[#dde2f4]">Tóm tắt cấu trúc</span>
              </div>
              <div className="space-y-3 text-[14px]">
                <div className="flex justify-between">
                  <span className="text-[#c1c6d7]">Tổng số câu hỏi</span>
                  <span className="font-bold text-[#adc7ff]">05</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#c1c6d7]">Dự kiến hoàn thành</span>
                  <span className="font-bold text-[#adc7ff]">12-15 phút</span>
                </div>
                <div className="h-px w-full bg-[#414754]/40" />
                <div className="flex justify-between">
                  <span className="text-[#c1c6d7]">Độ khó trung bình</span>
                  <span className="font-bold text-[#ffc080]">Trung bình</span>
                </div>
              </div>
            </div>
          </section>

          <section className="relative flex flex-grow flex-col gap-4 overflow-hidden">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#adc7ff]">format_list_bulleted</span>
                <h2 className="text-[24px] font-semibold text-[#dde2f4]">Trình xây dựng câu hỏi</h2>
              </div>
              <button
                className="flex items-center gap-2 rounded-lg bg-[#fe9800] px-5 py-2.5 font-bold text-[#643900] transition-all active:scale-95 hover:brightness-110"
                type="button"
                onClick={() => setIsAiModalOpen(true)}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
                Tạo câu hỏi bằng AI
              </button>
            </div>

            <div className="flex flex-grow flex-col gap-4 overflow-y-auto pb-28 pr-2">
              <QuestionCardOne />
              <QuestionCardTwo />
              <button className="group flex w-full flex-col items-center gap-2 rounded-xl border-2 border-dashed border-[#414754]/60 py-6 text-[#c1c6d7] transition-all hover:border-[#adc7ff] hover:bg-[#adc7ff]/5 hover:text-[#adc7ff]" type="button">
                <span className="material-symbols-outlined text-[32px] transition-transform group-hover:scale-110">add_circle</span>
                <span className="font-mono text-[14px] font-medium">Thêm câu hỏi mới</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-end gap-4 border-t border-[#414754]/30 bg-[#0d131f]/90 p-6 backdrop-blur-md lg:left-64">
        <a className="rounded-lg border border-[#414754] px-6 py-2.5 font-bold text-[#c1c6d7] transition-all hover:bg-[#242a37]" href="/quiz">
          Xem trước
        </a>
        <button className="rounded-lg bg-[#adc7ff] px-10 py-2.5 font-bold text-[#002e68] shadow-lg shadow-[#adc7ff]/20 transition-all active:scale-95 hover:scale-[1.02]" type="button">
          Lưu bài kiểm tra
        </button>
      </div>

      <SphereAIButton />

      {isAiModalOpen && <AiQuestionModal onClose={() => setIsAiModalOpen(false)} />}
    </div>
  );
}

function AiQuestionModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" role="presentation">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-80px] top-1/4 h-64 w-64 rounded-full bg-[#adc7ff]/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-[-80px] h-80 w-80 rounded-full bg-[#fe9800]/10 blur-[120px]" />
      </div>

      <section
        aria-modal="true"
        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#1a202c]/90 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl"
        role="dialog"
        aria-labelledby="ai-question-modal-title"
      >
        <div className="h-1 w-full animate-[shimmer_3s_linear_infinite] bg-gradient-to-r from-[#24dfba]/30 via-[#adc7ff]/40 to-[#24dfba]/30 bg-[length:200%_100%]" />

        <header className="flex items-center justify-between border-b border-white/5 px-6 py-5 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#adc7ff]/20 bg-[#adc7ff]/10">
              <span className="material-symbols-outlined text-[#adc7ff]">psychology</span>
            </div>
            <div>
              <h2 id="ai-question-modal-title" className="text-[24px] font-semibold text-[#dde2f4]">
                Tạo câu hỏi bằng AI
              </h2>
              <p className="font-mono text-[12px] uppercase tracking-wider text-[#c1c6d7]">Vận hành bởi LearnSphere Engine</p>
            </div>
          </div>
          <button
            aria-label="Đóng"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#c1c6d7] transition-colors hover:bg-[#2f3542]/60 hover:text-[#dde2f4]"
            type="button"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        <div className="space-y-6 p-6 md:p-8">
          <label className="block space-y-2" htmlFor="topic-prompt">
            <span className="ml-1 block font-mono text-[14px] font-medium text-[#adc7ff]">Nhập chủ đề hoặc tải lên file bài học PDF</span>
            <div className="group relative">
              <textarea
                className="w-full resize-none rounded-lg border border-[#414754] bg-[#080e1a] p-4 text-[#dde2f4] outline-none transition-all placeholder:text-[#c1c6d7]/40 focus:border-[#adc7ff] focus:ring-1 focus:ring-[#adc7ff]"
                id="topic-prompt"
                placeholder="Ví dụ: Lịch sử Việt Nam triều đại nhà Trần, hoặc dán văn bản bài học tại đây..."
                rows={4}
              />
              <div className="absolute bottom-4 right-4">
                <button className="flex items-center gap-2 rounded-lg border border-white/5 bg-[#2f3542]/40 px-3 py-1.5 transition-all hover:bg-[#2f3542]/70 group-focus-within:border-[#adc7ff]/20" type="button">
                  <span className="material-symbols-outlined text-[#c1c6d7]">upload_file</span>
                  <span className="font-mono text-[12px] text-[#dde2f4]">Upload PDF</span>
                </button>
              </div>
            </div>
          </label>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="block space-y-2" htmlFor="difficulty">
              <span className="ml-1 block font-mono text-[14px] font-medium text-[#c1c6d7]">Mức độ khó</span>
              <div className="relative">
                <select
                  className="w-full cursor-pointer appearance-none rounded-lg border border-[#414754] bg-[#080e1a] px-4 py-3 text-[#dde2f4] transition-all focus:border-[#adc7ff] focus:ring-0"
                  id="difficulty"
                  defaultValue="medium"
                >
                  <option value="easy">Dễ</option>
                  <option value="medium">Trung bình</option>
                  <option value="hard">Khó</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#c1c6d7]">expand_more</span>
              </div>
            </label>

            <label className="block space-y-2" htmlFor="question-count">
              <span className="ml-1 block font-mono text-[14px] font-medium text-[#c1c6d7]">Số lượng câu hỏi</span>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-[#414754] bg-[#080e1a] px-4 py-3 text-[#dde2f4] transition-all focus:border-[#adc7ff] focus:ring-0"
                  id="question-count"
                  max="50"
                  min="1"
                  type="number"
                  defaultValue="10"
                />
                <span className="material-symbols-outlined pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#c1c6d7]">format_list_numbered</span>
              </div>
            </label>
          </div>

          <div className="flex items-start gap-4 rounded-lg border border-[#24dfba]/10 bg-[#24dfba]/5 p-4">
            <span className="material-symbols-outlined mt-0.5 text-[#24dfba]" style={{ fontVariationSettings: '"FILL" 1' }}>
              info
            </span>
            <p className="text-[14px] leading-6 text-[#c1c6d7]">
              Hệ thống sẽ tự động phân tích từ vựng và cấu trúc trong yêu cầu của bạn để tạo bộ câu hỏi trắc nghiệm tối ưu.
            </p>
          </div>
        </div>

        <footer className="flex flex-col items-center justify-end gap-4 border-t border-white/5 bg-[#161c28] px-6 py-5 md:flex-row md:px-8">
          <button
            className="w-full rounded-lg px-6 py-3 font-mono text-[14px] font-medium text-[#c1c6d7] transition-colors hover:text-[#dde2f4] md:w-auto"
            type="button"
            onClick={onClose}
          >
            Hủy bỏ
          </button>
          <button
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#fe9800] px-8 py-3.5 text-[18px] font-semibold text-[#643900] shadow-lg shadow-[#fe9800]/20 transition-all active:scale-[0.98] hover:brightness-110 md:w-auto"
            type="button"
            onClick={onClose}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="material-symbols-outlined relative z-10 text-[24px] transition-transform group-hover:rotate-12 group-hover:scale-110" style={{ fontVariationSettings: '"FILL" 1' }}>
              auto_awesome
            </span>
            <span className="relative z-10">Tạo bài kiểm tra bằng AI</span>
          </button>
        </footer>
      </section>
    </div>
  );
}

function QuestionCardOne() {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-transparent bg-white text-slate-800 shadow-lg transition-all duration-300 hover:border-[#adc7ff]/50">
      <QuestionCardHeader index="01" title="Câu hỏi trắc nghiệm" />
      <div className="flex flex-col gap-4 p-6">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[12px] uppercase text-slate-500">Nội dung câu hỏi</span>
          <textarea className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-800 focus:border-transparent focus:ring-2 focus:ring-[#adc7ff]" placeholder="Ví dụ: Lợi ích chính của việc sử dụng AWS Lambda là gì?" rows={2} />
        </label>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {multipleChoiceOptions.map((option, index) => (
            <label key={option.value} className="group flex items-center gap-3">
              <input className="h-5 w-5 border-slate-300 text-[#ffc080] focus:ring-[#ffc080]" name="q1_correct" type="radio" defaultChecked={option.checked} />
              <div className="flex flex-grow items-center rounded-lg border border-slate-200 bg-slate-50 pr-3 transition-all focus-within:border-[#adc7ff]">
                <input className="w-full border-none bg-transparent px-3 py-2.5 text-[14px] text-slate-700 focus:ring-0" type="text" defaultValue={option.value} aria-label={`Đáp án ${index + 1}`} />
                <span className="material-symbols-outlined text-slate-300 group-hover:text-slate-400">edit</span>
              </div>
            </label>
          ))}
        </div>
        <label className="mt-2 border-t border-slate-100 pt-4">
          <span className="mb-2 flex items-center gap-2 font-mono text-[12px] uppercase text-slate-500">
            <span className="material-symbols-outlined text-[16px]">info</span>
            Giải thích đáp án
          </span>
          <input className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-[14px] text-slate-800 focus:ring-2 focus:ring-[#adc7ff]" placeholder="Ghi chú tại sao đáp án này đúng để hỗ trợ học viên..." type="text" />
        </label>
      </div>
    </article>
  );
}

function QuestionCardTwo() {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-transparent bg-white text-slate-800 opacity-90 shadow-lg transition-all duration-300 hover:border-[#adc7ff]/50 hover:opacity-100">
      <QuestionCardHeader index="02" title="Câu hỏi Đúng/Sai" />
      <div className="flex flex-col gap-4 p-6">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[12px] uppercase text-slate-500">Nội dung câu hỏi</span>
          <textarea className="w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-slate-800 focus:border-transparent focus:ring-2 focus:ring-[#adc7ff]" placeholder="S3 là dịch vụ lưu trữ khối (Block Storage). Đúng hay sai?" rows={1} />
        </label>
        <div className="flex gap-6">
          {['ĐÚNG', 'SAI'].map((label) => (
            <label key={label} className={`flex flex-grow cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all hover:bg-slate-100 ${label === 'SAI' ? 'border-[#ffc080]/30 bg-slate-100' : 'border-slate-200 bg-slate-50'}`}>
              <input className="h-5 w-5 border-slate-300 text-[#ffc080] focus:ring-[#ffc080]" name="q2_correct" type="radio" defaultChecked={label === 'SAI'} />
              <span className="font-bold text-slate-700">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </article>
  );
}

function QuestionCardHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#414754]/20 bg-[#161c28] px-5 py-3">
      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded bg-[#adc7ff]/20 text-[12px] font-bold text-[#adc7ff]">{index}</span>
        <span className="font-mono text-[14px] font-medium text-[#dde2f4]">{title}</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="material-symbols-outlined p-1 text-[#8b90a0] transition-colors hover:text-[#ffb4ab]" type="button" aria-label="Xóa câu hỏi">delete</button>
        <button className="material-symbols-outlined p-1 text-[#8b90a0] transition-colors hover:text-[#adc7ff]" type="button" aria-label="Kéo thả câu hỏi">drag_indicator</button>
      </div>
    </div>
  );
}
