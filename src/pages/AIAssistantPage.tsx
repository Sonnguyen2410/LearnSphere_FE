import { useState, type FormEvent } from 'react';
import { UserAvatarMenu } from '../components/UserAvatarMenu';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD3CAHLhxx8msEYYRpTMyyPTzFwpCWL5PbXXUGXiPfT3Bzzn0F2yP_WVSD3QV6axYjYiZFkCxTihFF6TuGD8rl4G8VTjcjoUy_mFiE-e6KQNkyRh5b5U8QjwZM0MXS43z0NxYLY9_pG5I8OQZtEQ2YIcdH2dxUijazGLgEuoivh59ouVsurBcIsf_PB29Vg4sbF054jvWCTxN3vjxQsOtKDg5CD2l_T6Y3PIbDPRt8CAnVJB_2ZUsIUaQ';

const chats = ['Bedrock vs SageMaker', 'RAG Implementation', 'Python CDK Hooks'];
const topics = ['Generative AI Basics', 'AWS Bedrock Config', 'Fine-tuning LLMs'];
const suggestions = ['Cách bắt đầu lab Bedrock?', 'Giải thích RAG đơn giản', 'Token limit là gì?', 'Model tốt nhất cho coding'];

export function AIAssistantPage() {
  const [message, setMessage] = useState('');
  const [sentMessages, setSentMessages] = useState<string[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) {
      return;
    }
    setSentMessages((current) => [...current, trimmed]);
    setMessage('');
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#0d131f] text-[#dde2f4]">
      <header className="z-50 flex h-16 w-full items-center justify-between border-b border-[#414754] bg-[#1a202c] px-4 md:px-8">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[32px] text-[#adc7ff]">school</span>
          <h1 className="text-[24px] font-bold text-[#adc7ff]">Hỏi Sphere AI</h1>
        </div>
        <nav className="hidden gap-8 md:flex">
          <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="/dashboard">Bảng điều khiển</a>
          <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="/courses">Khóa học</a>
          <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" href="#">Tài nguyên</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" type="button" aria-label="Thông báo">
            notifications
          </button>
          <button className="material-symbols-outlined text-[#c1c6d7] transition-colors hover:text-[#adc7ff]" type="button" aria-label="Cài đặt">
            settings
          </button>
          <UserAvatarMenu name="Alex Rivera" role="Học viên" avatarSrc={avatarSrc} />
        </div>
      </header>

      <div className="relative flex flex-1 overflow-hidden">
        <aside className="hidden h-full w-72 shrink-0 flex-col gap-6 border-r border-[#414754] bg-[#161c28] p-4 md:flex">
          <div className="rounded-xl border border-transparent bg-gradient-to-r from-[#adc7ff] to-[#24dfba] p-[1px]">
            <div className="flex items-center gap-3 rounded-xl bg-[#161c28] p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4a8eff]/20">
                <span className="material-symbols-outlined text-[#adc7ff]">smart_toy</span>
              </div>
              <div>
                <h2 className="font-mono text-[14px] font-medium text-[#adc7ff]">Hướng dẫn học tập AI</h2>
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#8b90a0]">Powered by LearnSphere</p>
              </div>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#adc7ff] px-4 py-3 font-bold text-[#002e68] transition-all active:scale-95" type="button">
            <span className="material-symbols-outlined">add</span>
            Phiên mới
          </button>

          <div className="flex flex-1 flex-col gap-6 overflow-y-auto">
            <SidebarSection title="Lịch sử" items={chats} activeFirst icon="chat" />
            <SidebarSection title="Chủ đề" items={topics} icon="topic" accent />
            <section>
              <h3 className="mb-3 px-2 text-[12px] font-bold uppercase tracking-widest text-[#8b90a0]">Đã lưu</h3>
              <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 text-[#c1c6d7] transition-colors hover:bg-[#2f3542]/50">
                <span className="material-symbols-outlined">bookmark</span>
                <span className="truncate">Prompt Engineering Lab</span>
              </div>
            </section>
          </div>
        </aside>

        <main className="relative flex flex-1 flex-col overflow-hidden bg-[#0d131f]">
          <div className="z-10 flex-1 space-y-6 overflow-y-auto p-4 md:p-6">
            <UserBubble>Can you explain Retrieval-Augmented Generation (RAG) and why I'd use it with AWS Bedrock?</UserBubble>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 animate-pulse items-center justify-center rounded-full bg-[#4a8eff]">
                <span className="material-symbols-outlined text-[#00285b]">bolt</span>
              </div>
              <div className="max-w-[85%] space-y-4">
                <div className="rounded-2xl rounded-tl-none border border-[#adc7ff]/20 bg-[#161c28]/80 p-5 backdrop-blur">
                  <h2 className="mb-2 flex items-center gap-2 font-bold text-[#adc7ff]">
                    <span className="material-symbols-outlined text-[18px]">info</span>
                    Hiểu về RAG trên LearnSphere
                  </h2>
                  <p className="mb-4 leading-7 text-[#dde2f4]">
                    Retrieval-Augmented Generation (RAG) là kỹ thuật kết hợp sức mạnh tạo sinh của LLM với độ chính xác từ dữ liệu riêng của bạn.
                  </p>
                  <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <InfoCard icon="database" title="Truy xuất" text="Hệ thống tìm tài liệu liên quan trong knowledge base như S3 hoặc OpenSearch." tone="text-[#24dfba]" />
                    <InfoCard icon="auto_awesome" title="Tăng cường" text="LearnSphere dùng ngữ cảnh này để tạo câu trả lời có căn cứ hơn." tone="text-[#ffc080]" />
                  </div>
                  <p className="rounded-r-lg border-l-2 border-[#adc7ff]/40 bg-[#adc7ff]/5 py-2 pl-4 italic leading-7 text-[#dde2f4]">
                    Dùng RAG khi bạn muốn AI cập nhật theo tài liệu nội bộ hoặc lĩnh vực chuyên biệt mà không cần re-training tốn kém.
                  </p>
                </div>
                <div className="flex gap-2">
                  {['thumb_up', 'thumb_down', 'content_copy'].map((icon) => (
                    <button key={icon} className="p-2 text-[#8b90a0] transition-colors hover:text-[#adc7ff]" type="button">
                      <span className="material-symbols-outlined text-[18px]">{icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <UserBubble>That makes sense. How do I start the Bedrock lab to test this?</UserBubble>

            {sentMessages.map((item) => (
              <UserBubble key={item}>{item}</UserBubble>
            ))}

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#414754] bg-[#242a37]">
                <span className="material-symbols-outlined animate-spin text-[#adc7ff]">progress_activity</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#adc7ff]/50 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#adc7ff]/50 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#adc7ff]/50" />
              </div>
            </div>
          </div>

          <div className="z-20 space-y-4 bg-gradient-to-t from-[#0d131f] via-[#0d131f] to-transparent p-4 md:px-6 md:pb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="whitespace-nowrap rounded-full border border-[#414754] bg-[#161c28] px-4 py-2 text-[14px] text-[#c1c6d7] transition-all hover:border-[#adc7ff] hover:text-[#adc7ff]"
                  type="button"
                  onClick={() => setMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form className="group relative" onSubmit={handleSubmit}>
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#adc7ff] to-[#24dfba] opacity-20 blur transition duration-300 group-focus-within:opacity-40" />
              <div className="relative flex items-center rounded-2xl border border-[#414754] bg-[#242a37] p-2">
                <button className="p-3 text-[#8b90a0] transition-colors hover:text-[#adc7ff]" type="button" aria-label="Đính kèm">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <input
                  className="flex-1 border-none bg-transparent px-2 text-[#dde2f4] placeholder:text-[#8b90a0] focus:ring-0"
                  placeholder="Hỏi AI..."
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <div className="mr-2 flex items-center gap-2">
                  <button className="p-3 text-[#8b90a0] transition-colors hover:text-[#ffc080]" type="button" aria-label="Ghi âm">
                    <span className="material-symbols-outlined">mic</span>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#adc7ff] text-[#00285b] transition-transform active:scale-90 hover:shadow-lg" type="submit" aria-label="Gửi">
                    <span className="material-symbols-outlined font-bold">send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>

      <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl bg-[#242a37] px-4 py-2 shadow-md md:hidden">
        {[
          { icon: 'chat', label: 'Chat', active: true },
          { icon: 'history', label: 'Lịch sử' },
          { icon: 'menu_book', label: 'Chủ đề' },
          { icon: 'person', label: 'Hồ sơ' },
        ].map((item) => (
          <div key={item.label} className={`flex flex-col items-center justify-center rounded-xl p-2 ${item.active ? 'bg-[#4a8eff] text-[#00285b]' : 'text-[#c1c6d7]'}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-mono text-[10px]">{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

function SidebarSection({ title, items, icon, activeFirst, accent }: { title: string; items: string[]; icon: string; activeFirst?: boolean; accent?: boolean }) {
  return (
    <section>
      <h3 className="mb-3 px-2 text-[12px] font-bold uppercase tracking-widest text-[#8b90a0]">{title}</h3>
      <div className="space-y-1">
        {items.map((item, index) => (
          <div
            key={item}
            className={`flex cursor-pointer items-center gap-3 rounded-lg p-3 transition-colors ${
              activeFirst && index === 0 ? 'bg-[#4a8eff]/10 font-bold text-[#adc7ff]' : 'text-[#c1c6d7] hover:bg-[#2f3542]/50'
            }`}
          >
            <span className={`material-symbols-outlined ${accent ? 'text-[#24dfba]' : ''}`}>{activeFirst && index === 0 ? icon : activeFirst ? 'history' : icon}</span>
            <span className="truncate">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function UserBubble({ children }: { children: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-tr-none border border-[#414754] bg-[#2f3542] p-4">
        <p className="text-[#dde2f4]">{children}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, text, tone }: { icon: string; title: string; text: string; tone: string }) {
  return (
    <div className="rounded-xl border border-[#414754]/30 bg-[#0d131f] p-3">
      <div className={`mb-1 flex items-center gap-2 ${tone}`}>
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
        <span className="text-[12px] font-bold uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-[14px] text-[#c1c6d7]">{text}</p>
    </div>
  );
}
