import { useState } from 'react';

const PRIMARY = '#800020';
const ADDRESS = 'HHW5+29J Cần Đước, Long An, Vietnam';
const MAPS_LINK = 'https://maps.app.goo.gl/zeZhd2H683iTon7r9';

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }}
            className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all active:scale-95"
            style={{
                borderColor: copied ? '#16a34a' : PRIMARY,
                color: copied ? '#16a34a' : PRIMARY,
                background: copied ? '#f0fdf4' : 'transparent',
            }}
        >
            {copied ? (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )}
            <span>{copied ? 'Đã copy' : 'Copy'}</span>
        </button>
    );
}

function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${PRIMARY}, #c0003a)` }} />
            <div className="p-4">{children}</div>
        </div>
    );
}

export default function LocationPage() {
    return (
        <div
            className="min-h-screen flex flex-col"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif", background: '#fdf8f8' }}
        >
            {/* Header đơn giản */}
            <header className="sticky top-0 z-50" style={{ background: `linear-gradient(90deg, ${PRIMARY}, #c0003a)` }}>
                <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C17.87 7 21 10.13 21 14V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V14C3 10.13 6.13 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2Z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-white font-bold text-base">Địa Điểm Tổ Chức</h1>
                    </div>
                </div>
            </header>

            {/* Content - Chỉ giữ Địa chỉ */}
            <main className="flex-1 max-w-lg mx-auto w-full px-4 pt-6 pb-8">
                <Card>
                    <div className="flex items-start gap-3">
                        <div className="flex-1">
                            <p className="text-gray-800 font-semibold text-[15px] leading-relaxed">
                                HHW5+29J Cần Đước, Long An, Vietnam
                            </p>
                        </div>
                        <CopyButton text={ADDRESS} />
                    </div>

                    <a
                        href={MAPS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-semibold text-sm transition-all active:scale-[0.98]"
                        style={{ background: `linear-gradient(135deg, ${PRIMARY}, #c0003a)` }}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Mở Google Maps
                    </a>
                </Card>
            </main>
        </div>
    );
}