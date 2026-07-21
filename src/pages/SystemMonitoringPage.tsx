import { UserAvatarMenu } from '../components/UserAvatarMenu';
import { SphereAIButton } from '../components/SphereAIButton';

const avatarSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCJoFDj_0QC113oXEglqawaRx_p6aj65L4yuLN_52cJ7ZIsSBwJOLuDBdEOjZO4FGAYbIdjFRiTlh8P2s0viUatzxsXtdGT_HsugoXIhqhwVN_Dw3tV9dDK8jwLYtcCNANCSZMe4LpwBeZ_9u6z_nbGgFvzsUsVhmefvWWra3Gr3YxrVvyeFBabLR6ZaLPdihuammwZ1Kx-7DMoW1tlYifLN7bf0t5jAQwLgAkqx_v0jfzWhkcx2DbATA';

const sidebarGroups = [
  {
    title: 'Giám sát',
    items: [
      { icon: 'dashboard', label: 'Bảng điều khiển', active: true },
      { icon: 'analytics', label: 'Chỉ số', active: false },
      { icon: 'receipt_long', label: 'Nhật ký', active: false },
      { icon: 'notifications_active', label: 'Cảnh báo', active: false, badge: '2' },
    ],
  },
  {
    title: 'Hạ tầng',
    items: [
      { icon: 'dns', label: 'Máy chủ', active: false },
      { icon: 'database', label: 'Cơ sở dữ liệu', active: false },
      { icon: 'storage', label: 'Buckets', active: false },
    ],
  },
];

const healthItems = [
  { service: 'Lambda', status: 'Hoạt động', color: 'bg-[#24dfba]' },
  { service: 'DynamoDB', status: 'Hoạt động', color: 'bg-[#24dfba]' },
  { service: 'S3 Storage', status: 'Suy giảm', color: 'bg-[#ffc080]' },
  { service: 'API Gateway', status: 'Hoạt động', color: 'bg-[#24dfba]' },
];

const logRows = [
  { time: '2026-07-21 14:23:41', source: 'Lambda/AuthService', message: "User session established for token 'auth_28x...'", level: 'INFO', tone: 'text-[#24dfba] bg-[#24dfba]/10' },
  { time: '2026-07-21 14:22:15', source: 'EC2/Crawler-Node-1', message: 'Low disk space warning on /dev/xvda1', level: 'WARN', tone: 'text-[#ffc080] bg-[#ffc080]/10' },
  { time: '2026-07-21 14:19:08', source: 'RDS/MainDB', message: 'Maximum connection limit reached (ID: rds-99)', level: 'ERROR', tone: 'text-[#ffb4ab] bg-[#ffb4ab]/10' },
];

const bars = [40, 55, 30, 45, 70, 85, 60, 75, 90, 80];
const storageBars = [20, 35, 50, 65, 80];

export function SystemMonitoringPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d131f] text-[#dde2f4]">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#161c28] shadow-sm">
        <div className="flex h-16 w-full items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-8">
            <a className="text-[24px] font-bold text-[#adc7ff]" href="/dashboard">
              LearnSphere
            </a>
            <nav className="hidden items-center gap-6 text-[16px] md:flex">
              <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#dde2f4]" href="/courses">Khóa học</a>
              <a className="font-medium text-[#c1c6d7] transition-colors hover:text-[#dde2f4]" href="#">Chấm điểm</a>
              <a className="border-b-2 border-[#adc7ff] pb-1 font-bold text-[#adc7ff]" href="/system-monitoring">Giám sát hệ thống</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-[#8b90a0]">search</span>
              <input className="w-64 rounded-lg border border-[#414754] bg-[#080e1a] py-1.5 pl-10 pr-4 font-mono text-[14px] text-[#dde2f4] placeholder:text-[#8b90a0] focus:outline-none focus:ring-2 focus:ring-[#adc7ff]/50" placeholder="Tìm chỉ số..." type="text" />
            </div>
            <UserAvatarMenu name="Jane Doe" role="Quản trị viên" avatarSrc={avatarSrc} />
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-64 shrink-0 flex-col border-r border-white/5 bg-[#1a202c] md:flex">
          <div className="p-6">
            {sidebarGroups.map((group) => (
              <div key={group.title} className="mb-8">
                <div className="mb-4 font-mono text-[12px] uppercase tracking-widest text-[#8b90a0]">{group.title}</div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <a className={`flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors ${item.active ? 'bg-[#4a8eff] font-bold text-[#00285b]' : 'text-[#c1c6d7] hover:bg-[#333947]/20 hover:text-[#dde2f4]'}`} href="#">
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span>{item.label}</span>
                        {item.badge && <span className="ml-auto rounded-full bg-[#ffb4ab] px-1.5 py-0.5 text-[10px] font-bold text-[#690005]">{item.badge}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-auto border-t border-white/5 p-6">
            <div className="flex items-center gap-3 rounded-xl bg-[#242a37] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00a487] font-bold text-[#003026]">JD</div>
              <div>
                <div className="font-mono text-[14px] text-[#dde2f4]">Jane Doe</div>
                <div className="font-mono text-[12px] text-[#8b90a0]">Quyền Admin</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto bg-[#0d131f]">
          <div className="px-4 py-6 md:px-8">
            <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h1 className="mb-2 text-[32px] font-semibold leading-10 text-[#dde2f4]">Bảng điều khiển CloudWatch</h1>
                <p className="text-[16px] text-[#c1c6d7]">Sức khỏe hạ tầng thời gian thực cho <span className="font-bold text-[#adc7ff]">learnsphere-prod</span></p>
              </div>
              <div className="flex gap-3">
                <div className="flex rounded-lg border border-[#414754] bg-[#161c28] p-1">
                  {['1h', '6h', '1d', '1w'].map((range, index) => (
                    <button key={range} className={`rounded-md px-4 py-1.5 font-mono text-[14px] ${index === 0 ? 'bg-[#333947] text-[#dde2f4]' : 'text-[#8b90a0] hover:text-[#dde2f4]'}`} type="button">{range}</button>
                  ))}
                </div>
                <button className="flex items-center gap-2 rounded-lg border border-[#414754] bg-[#161c28] px-4 py-2 font-mono text-[14px] text-[#dde2f4] transition-colors hover:bg-[#333947]" type="button">
                  <span className="material-symbols-outlined text-[18px]">refresh</span>
                  Tự động làm mới
                </button>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <section className="col-span-12 overflow-hidden rounded-xl border border-white/5 bg-[#161c28]/70 p-6 backdrop-blur lg:col-span-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h2 className="flex items-center gap-2 text-[24px] font-semibold text-[#dde2f4]">
                      Sử dụng CPU
                      <span className="animate-pulse rounded-full border border-[#24dfba]/20 bg-[#24dfba]/10 px-2 py-0.5 font-mono text-[12px] text-[#24dfba]">Trực tiếp</span>
                    </h2>
                    <p className="mt-1 font-mono text-[12px] text-[#c1c6d7]">Trung bình trên tất cả phiên bản production</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[48px] font-bold leading-none text-[#adc7ff]">42%</div>
                    <div className="mt-1 font-mono text-[12px] text-[#8b90a0]">Tải hiện tại</div>
                  </div>
                </div>
                <div className="relative h-64 w-full">
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 300">
                    <defs>
                      <linearGradient id="cpuGradientReact" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#adc7ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#adc7ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,200 Q50,180 100,190 T200,150 T300,170 T400,120 T500,140 T600,100 T700,130 T800,80 T900,110 T1000,90 L1000,300 L0,300 Z" fill="url(#cpuGradientReact)" />
                    <path d="M0,200 Q50,180 100,190 T200,150 T300,170 T400,120 T500,140 T600,100 T700,130 T800,80 T900,110 T1000,90" fill="none" stroke="#adc7ff" strokeWidth="3" />
                  </svg>
                </div>
              </section>

              <aside className="col-span-12 space-y-6 lg:col-span-4">
                <section className="rounded-xl border border-white/5 border-l-[#ffb4ab] bg-[#161c28]/70 p-6 backdrop-blur">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="flex items-center gap-2 text-[24px] font-semibold"><span className="material-symbols-outlined text-[#ffb4ab]">error</span>Cảnh báo</h2>
                    <span className="rounded-full border border-[#ffb4ab]/20 bg-[#ffb4ab]/10 px-3 py-1 font-mono text-[12px] text-[#ffb4ab]">Đang hoạt động</span>
                  </div>
                  <div className="space-y-4">
                    <Alert icon="priority_high" title="CRITICAL: High Latency" meta="Region: US-EAST-1" text="Latency spikes detected in CloudFront distribution." tone="text-[#ffb4ab]" />
                    <Alert icon="warning" title="WARNING: S3 Near Quota" meta="Bucket: edu-assets-store" text="Currently at 94.2% of total provisioned capacity." tone="text-[#ffc080]" />
                  </div>
                  <button className="mt-6 w-full rounded-lg border border-[#414754] py-2 font-mono text-[14px] text-[#dde2f4] transition-colors hover:bg-[#333947]" type="button">Xem tất cả thông báo</button>
                </section>

                <section className="rounded-xl border border-white/5 bg-[#161c28]/70 p-6 backdrop-blur">
                  <h2 className="mb-4 text-[24px] font-semibold">Sức khỏe dịch vụ</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {healthItems.map((item) => (
                      <div key={item.service} className="rounded-lg border border-white/5 bg-[#080e1a] p-3">
                        <div className="mb-1 flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${item.color}`} />
                          <span className="font-mono text-[12px] text-[#8b90a0]">{item.service}</span>
                        </div>
                        <div className="font-mono text-[14px] text-[#dde2f4]">{item.status}</div>
                      </div>
                    ))}
                  </div>
                </section>
              </aside>

              <MetricCard title="Kết nối RDS" subtitle="Phiên đang hoạt động" value="128" valueColor="text-[#ffc080]">
                <div className="flex h-40 items-end justify-between gap-1">
                  {bars.map((height, index) => (
                    <div key={`${height}-${index}`} className={`flex-1 rounded-t bg-[#ffc080]/10 transition-all hover:bg-[#ffc080]/30 ${index === bars.length - 1 ? 'border-t-2 border-[#ffc080] shadow-[0_-4px_12px_rgba(255,192,128,0.3)]' : ''}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </MetricCard>

              <MetricCard title="Sử dụng S3" subtitle="Dung lượng theo thời gian (GB)" value="842" valueColor="text-[#24dfba]">
                <div className="flex h-40 items-end gap-2">
                  {storageBars.map((height, index) => (
                    <div key={`${height}-${index}`} className={`flex-1 rounded-t-lg bg-[#24dfba]/20 transition-all hover:bg-[#24dfba]/40 ${index === storageBars.length - 1 ? 'border-t-2 border-[#24dfba] shadow-[0_-4px_10px_rgba(36,223,186,0.2)]' : ''}`} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="flex items-center gap-2 font-mono text-[12px] text-[#24dfba]"><span className="material-symbols-outlined text-[18px]">trending_up</span>+12.4% so với tháng trước</span>
                  <span className="font-mono text-[12px] text-[#8b90a0]">Dự báo: 1.2TB</span>
                </div>
              </MetricCard>

              <MetricCard title="Thông lượng mạng" subtitle="Data In / Data Out" value="8.4M" valueColor="text-[#adc7ff]">
                <div className="space-y-6">
                  <NetworkBar label="Data In" value="2.4 Gbps" percent={65} color="bg-[#adc7ff]" textColor="text-[#adc7ff]" />
                  <NetworkBar label="Data Out" value="4.8 Gbps" percent={85} color="bg-[#ffc080]" textColor="text-[#ffc080]" />
                  <div className="border-t border-white/5 pt-4 font-mono text-[12px]">
                    <div className="flex justify-between text-[#8b90a0]"><span>Độ trễ trung bình</span><span className="font-bold text-[#ffb4ab]">142ms</span></div>
                    <div className="mt-2 flex justify-between text-[#8b90a0]"><span>Lưu lượng request</span><span className="text-[#dde2f4]">8.4M / giờ</span></div>
                  </div>
                </div>
              </MetricCard>
            </div>

            <section className="mt-8 overflow-hidden rounded-xl border border-white/5 bg-[#161c28]/70 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
                <h2 className="text-[24px] font-semibold">Sự kiện nhật ký gần đây</h2>
                <button className="flex items-center gap-1 font-mono text-[14px] font-bold text-[#adc7ff]" type="button">Mở Logs Insights <span className="material-symbols-outlined text-[16px]">open_in_new</span></button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#080e1a] font-mono text-[12px] uppercase tracking-wider text-[#8b90a0]">
                    <tr>{['Thời gian', 'Nguồn', 'Thông điệp', 'Mức'].map((head) => <th key={head} className="px-6 py-3">{head}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-mono text-[14px]">
                    {logRows.map((row) => (
                      <tr key={`${row.time}-${row.source}`} className="cursor-pointer transition-colors hover:bg-[#333947]/10">
                        <td className="px-6 py-4 text-[#8b90a0]">{row.time}</td>
                        <td className="px-6 py-4 text-[#dde2f4]">{row.source}</td>
                        <td className="px-6 py-4 text-[#c1c6d7]">{row.message}</td>
                        <td className="px-6 py-4"><span className={`rounded px-2 py-0.5 text-[10px] ${row.tone}`}>{row.level}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </main>
      </div>

      <SphereAIButton />
    </div>
  );
}

function Alert({ icon, title, meta, text, tone }: { icon: string; title: string; meta: string; text: string; tone: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-[#242a37]/50 p-4">
      <div className="flex items-start gap-3">
        <span className={`material-symbols-outlined mt-0.5 text-[20px] ${tone}`}>{icon}</span>
        <div>
          <div className={`font-mono text-[14px] font-bold ${tone}`}>{title}</div>
          <div className="mt-1 font-mono text-[12px] text-[#c1c6d7]">{meta}</div>
          <div className="mt-2 font-mono text-[12px] italic text-[#8b90a0]">{text}</div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, subtitle, value, valueColor, children }: { title: string; subtitle: string; value: string; valueColor: string; children: React.ReactNode }) {
  return (
    <section className="col-span-12 rounded-xl border border-white/5 bg-[#161c28]/70 p-6 backdrop-blur lg:col-span-4">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-[24px] font-semibold text-[#dde2f4]">{title}</h2>
          <p className="font-mono text-[12px] text-[#c1c6d7]">{subtitle}</p>
        </div>
        <div className="text-right">
          <div className={`text-[40px] font-bold leading-none ${valueColor}`}>{value}</div>
          <div className="mt-1 font-mono text-[12px] text-[#8b90a0]">Hiện tại</div>
        </div>
      </div>
      {children}
    </section>
  );
}

function NetworkBar({ label, value, percent, color, textColor }: { label: string; value: string; percent: number; color: string; textColor: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between font-mono text-[14px]">
        <span className="text-[#dde2f4]">{label}</span>
        <span className={textColor}>{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#080e1a]">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
