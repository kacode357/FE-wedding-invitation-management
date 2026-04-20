import { useEffect, useState } from 'react';

const PRIMARY = '#800020';
const ADDRESS = 'HHW5+29J Cần Đước, Long An, Vietnam';
const MAPS_LINK = 'https://maps.app.goo.gl/zeZhd2H683iTon7r9';

export default function LocationPage() {
    const [copied, setCopied] = useState(false);

    // Tự động copy địa chỉ khi vào trang
    useEffect(() => {
        navigator.clipboard.writeText(ADDRESS).then(() => {
            setCopied(true);

            // Tự động ẩn thông báo sau 3 giây
            setTimeout(() => {
                setCopied(false);
            }, 3000);
        });
    }, []);

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center px-6"
            style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                background: '#fdf8f8'
            }}
        >
            <div className="max-w-md w-full text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke={PRIMARY} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">Địa điểm tổ chức</h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Địa chỉ đã được tự động copy vào bộ nhớ tạm
                </p>

                {/* Thông báo đã copy */}
                {copied && (
                    <div className="mb-8 inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2.5 rounded-2xl text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Đã copy địa chỉ thành công!
                    </div>
                )}

                {/* Nút mở Google Maps */}
                <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 rounded-2xl text-white font-semibold text-base shadow-sm transition-all active:scale-95"
                    style={{
                        background: `linear-gradient(135deg, ${PRIMARY}, #c0003a)`
                    }}
                >
                    Mở Google Maps
                </a>

                <p className="mt-6 text-xs text-gray-500">
                    HHW5+29J Cần Đước, Long An, Vietnam
                </p>
            </div>
        </div>
    );
}