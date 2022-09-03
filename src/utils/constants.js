import { AiOutlineSchedule } from 'react-icons/ai'
import { BiCodeBlock, BiBook, BiReceipt } from "react-icons/bi";
import { SiAdobeacrobatreader } from "react-icons/si"
import { backgroundColor } from './color';

export const sideBarConfig = [
    { name: 'Danh sách đặt khám', icon: <AiOutlineSchedule />, path: '/ds-dat-kham' },

    { name: 'Khám bệnh', icon: <SiAdobeacrobatreader />, path: '/kham-benh' },
    { name: 'Bệnh nhân', icon: <BiBook />, path: '/benh-nhan' },

    { name: 'Hóa đơn', icon: <BiReceipt />, path: '/hoa-don' }
]


// color
export const color = {
    backgroundColor: '#f9fafb',
}

// width
export const width = {
    sidebarWidth: 280
}

// sidebar
/*
    color đường nét đứt #c1ccd8
*/
