import { AiOutlineSchedule } from 'react-icons/ai'
import { BiCodeBlock, BiBook, BiReceipt } from "react-icons/bi";
import { SiAdobeacrobatreader } from "react-icons/si"
import { backgroundColor } from './color';

export const sideBarStaffConfig = [
    { name: 'Danh sách đặt khám', icon: <AiOutlineSchedule />, path: '/staff/ds-dat-kham' },

    { name: 'Khám bệnh', icon: <SiAdobeacrobatreader />, path: '/staff/kham-benh' },
    { name: 'Bệnh nhân', icon: <BiBook />, path: '/staff/benh-nhan' },

    { name: 'Hóa đơn', icon: <BiReceipt />, path: '/staff/hoa-don' }
]
export const sideBarDentistConfig = [
    { name: 'Khám bệnh', icon: <SiAdobeacrobatreader />, path: '/dentist/kham-benh' },
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
