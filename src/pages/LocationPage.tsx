import { useEffect } from 'react';

const MAPS_LINK = 'https://maps.app.goo.gl/zeZhd2H683iTon7r9';

export default function LocationPage() {
    useEffect(() => {
        // Mở trong tab mới để trigger deep link tốt hơn
        const newWindow = window.open(MAPS_LINK, '_blank');

        // Nếu bị chặn popup (hiếm), fallback sang redirect
        if (!newWindow) {
            window.location.href = MAPS_LINK;
        }

        // Đóng trang hiện tại (tùy chọn)
        // window.close();
    }, []);

    return null;   // Không hiển thị gì
}