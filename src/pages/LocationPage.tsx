import { useEffect } from 'react';

const MAPS_LINK = 'https://maps.app.goo.gl/zeZhd2H683iTon7r9';

export default function LocationPage() {
    useEffect(() => {
        // Tự động chuyển hướng ngay lập tức
        window.location.href = MAPS_LINK;
    }, []);

    // Không render gì cả (trắng trơn)
    return null;
}