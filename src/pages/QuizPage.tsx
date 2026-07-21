import { useEffect, useMemo, useState } from 'react';
import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCZTzrqinlRFUY1sswmWehy8W9-29UTDjuk86zxLTpDBEFl9w08RLopb5YVU57I-aa19Wl9VrS0edpsQR8xNt48XxF1X06NouIMiuMjCWVN7cjl4ww1TiG2Pzg010a9XNX4VZzhTP0WiiWisWlLR1VOTkgHhhqDiv0wk-TTOJlMwCEETJlt1QJFPrKE6ZFQUNlNCvSgAloR1vE9Ne5LK0MsLRjk_Gb2QyISPjX-_TGececa2Y5py_eOfw';

const options = [
  { id: 'A', label: 'Attention Mechanism', isCorrect: true },
  { id: 'B', label: 'Backpropagation through Time (BPTT)', isCorrect: false },
  { id: 'C', label: 'Stochastic Gradient Descent', isCorrect: false },
  { id: 'D', label: 'Dimensionality Reduction', isCorrect: false },
];

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function QuizPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12 * 60 + 45);

  const selectedAnswer = useMemo(
    () => options.find((option) => option.id === selectedOption),
    [selectedOption],
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(current - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  function getOptionClass(option: (typeof options)[number]) {
    if (!isSubmitted) {
      return selectedOption === option.id
        ? 'border-[#adc7ff] bg-[#adc7ff]/10'
        : 'border-[#414754]/60 hover:border-[#adc7ff]/40 hover:bg-[#1f2937]';
    }

    if (option.isCorrect) {
      return 'border-[#24dfba] bg-[#24dfba]/5';
    }

    if (selectedOption === option.id) {
      return 'border-[#ffb4ab] bg-[#ffb4ab]/5';
    }

    return 'border-[#414754]/60 opacity-60';
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#0d131f] text-[#dde2f4] selection:bg-[#adc7ff]/30">
      <header className="sticky top-0 z-50 border-b border-[#414754] bg-[#0d131f]/95 shadow-sm backdrop-blur">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <a className="text-[24px] font-bold text-[#adc7ff]" href="/dashboard">
              LearnSphere
            </a>
            <div className="ml-2 hidden items-center gap-6 md:flex">
              <a className="border-b-2 border-[#adc7ff] pb-1 text-[16px] font-bold text-[#adc7ff]" href="/courses">
                Khóa học
              </a>
              <a className="text-[16px] font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="#">
                Chấm điểm
              </a>
              <a className="text-[16px] font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="#">
                Tài nguyên
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" type="button" aria-label="Thông báo">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <UserAvatarMenu name="Alex Rivera" role="Học viên" avatarSrc={avatarSrc} />
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-grow px-4 py-10 md:px-8">
        <section className="mb-10 rounded-xl border border-[#414754]/50 bg-[#1a202c] p-6 shadow-[inset_0_0_20px_rgba(173,199,255,0.1)]">
          <div className="mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="mb-1 text-[24px] font-semibold leading-8 text-[#dde2f4]">Mastering Generative AI</h1>
              <p className="font-mono text-[12px] uppercase tracking-wider text-[#c1c6d7]">Module 4: Transformer Architectures</p>
            </div>
            <div className="flex w-fit items-center gap-3 rounded-lg border border-[#414754]/50 bg-[#242a37] px-6 py-2">
              <span className="material-symbols-outlined animate-pulse text-[#adc7ff]">schedule</span>
              <span className="font-mono text-[14px] font-medium text-[#adc7ff]">{formatTime(timeLeft)} còn lại</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-1 flex items-end justify-between">
              <span className="font-mono text-[14px] font-medium text-[#dde2f4]">Câu hỏi 3/10</span>
              <span className="font-mono text-[12px] text-[#c1c6d7]">Hoàn thành 30%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#2f3542]">
              <div className="h-full w-[30%] rounded-full bg-[#ffc080] transition-all duration-500" />
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="rounded-xl border border-[#414754]/40 bg-[#161c28] p-6 md:p-10">
            <div className="mb-10 flex items-start gap-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#adc7ff]/10 font-bold text-[#adc7ff]">3</span>
              <h2 className="text-[18px] leading-7 text-[#dde2f4]">
                Trong ngữ cảnh Large Language Models (LLMs), cơ chế nào cho phép mô hình gán trọng số khác nhau cho các phần khác nhau của chuỗi đầu vào khi tạo đầu ra?
              </h2>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-3">
              {options.map((option) => {
                const showCorrect = isSubmitted && option.isCorrect;
                const showIncorrect = isSubmitted && selectedOption === option.id && !option.isCorrect;

                return (
                  <button
                    key={option.id}
                    className={`flex w-full items-center gap-6 rounded-xl border p-6 text-left transition-all ${getOptionClass(option)}`}
                    type="button"
                    onClick={() => {
                      if (!isSubmitted) {
                        setSelectedOption(option.id);
                      }
                    }}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[14px] font-bold ${
                        showCorrect
                          ? 'border-[#24dfba] bg-[#24dfba]/10 text-[#24dfba]'
                          : showIncorrect
                            ? 'border-[#ffb4ab] bg-[#ffb4ab]/10 text-[#ffb4ab]'
                            : selectedOption === option.id
                              ? 'border-[#adc7ff] text-[#adc7ff]'
                              : 'border-[#414754] text-[#c1c6d7]'
                      }`}
                    >
                      {showCorrect ? <span className="material-symbols-outlined text-[16px]">check</span> : showIncorrect ? <span className="material-symbols-outlined text-[16px]">close</span> : option.id}
                    </span>
                    <span className="text-[16px] text-[#dde2f4]">{option.label}</span>
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className={`${selectedAnswer?.isCorrect ? 'border-[#24dfba] bg-[#24dfba]/5' : 'border-[#ffb4ab] bg-[#ffb4ab]/5'} rounded-r-xl border-l-4 p-6`}>
                <div className="mb-2 flex items-center gap-2">
                  <span className={`material-symbols-outlined text-[20px] ${selectedAnswer?.isCorrect ? 'text-[#24dfba]' : 'text-[#ffb4ab]'}`} style={{ fontVariationSettings: '"FILL" 1' }}>
                    auto_awesome
                  </span>
                  <h3 className={`font-mono text-[14px] font-bold ${selectedAnswer?.isCorrect ? 'text-[#24dfba]' : 'text-[#ffb4ab]'}`}>
                    GIẢI THÍCH AI
                  </h3>
                </div>
                <p className="text-[16px] leading-7 text-[#c1c6d7]">
                  {selectedAnswer?.isCorrect ? 'Chính xác!' : 'Chưa chính xác.'} <strong className="text-[#dde2f4]">Attention Mechanism</strong>, đặc biệt là Self-Attention trong Transformers, giúp mô hình tập trung vào các token liên quan trong context window bất kể khoảng cách của chúng. Đây là nền tảng giúp LLM duy trì quan hệ ngữ cảnh dài hạn hiệu quả.
                </p>
              </div>
            )}
          </div>
        </section>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <button className="order-2 flex items-center gap-2 font-medium text-[#c1c6d7] transition-colors hover:text-[#dde2f4] md:order-1" type="button">
            <span className="material-symbols-outlined">flag</span>
            <span>Báo lỗi câu hỏi</span>
          </button>
          <div className="order-1 flex w-full gap-6 md:order-2 md:w-auto">
            <button
              className="flex-1 rounded-lg border-2 border-[#adc7ff] px-8 py-3 font-bold text-[#adc7ff] transition-all hover:bg-[#adc7ff]/5 disabled:cursor-not-allowed disabled:opacity-50 md:flex-none"
              type="button"
              disabled={!selectedOption}
              onClick={() => setIsSubmitted(true)}
            >
              Nộp bài kiểm tra
            </button>
            <button
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#adc7ff] px-8 py-3 font-bold text-[#002e68] shadow-lg shadow-[#adc7ff]/20 transition-all active:scale-95 hover:scale-[1.02] md:flex-none"
              type="button"
              onClick={() => {
                setSelectedOption(null);
                setIsSubmitted(false);
              }}
            >
              Câu hỏi tiếp theo
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      <SphereAIButton />

      <footer className="flex w-full flex-col items-center justify-between gap-4 border-t border-[#414754] bg-[#161c28] px-4 py-10 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <span className="text-[24px] font-semibold text-[#dde2f4]">LearnSphere</span>
          <span className="font-mono text-[12px] text-[#c1c6d7]">© 2024 Nền tảng LearnSphere. Vận hành bởi AWS Cloud.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {['Về chúng tôi', 'Chính sách bảo mật', 'Điều khoản dịch vụ', 'Liên hệ hỗ trợ'].map((item) => (
            <a key={item} className="font-mono text-[12px] text-[#c1c6d7] transition-colors hover:text-[#24dfba]" href="#">
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
