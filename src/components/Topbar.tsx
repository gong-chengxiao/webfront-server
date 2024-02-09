//
// 全局顶部导航栏
//

import DropdownMenu from "./DropdownMenu";

interface TopbarProps {
    children?: React.ReactNode;
    className?: string;
}

const Topbar: React.FC<TopbarProps> = ({
    children,
    className,
}) => {

    const routes = [
        { name: '搜索', href: `/search`},
        { name: '关于', href: `/about`},
        { name: '话题', href: `/`},
    ];

    return (
        <div>
            <div className="bg-black/80 h-12"/>
            <div className="flex justify-between mx-auto w-full max-w-[980px] p-6">
                <h1 className="text-xl font-bold">Chengo</h1>
                <div className="flex space-x-16">
                    {routes.map(route => (
                        <a key={route.href} href={route.href} className="text-gray-700 hover:text-blue-600">{route.name}</a>
                    ))}
                </div>
            </div>
            {children}
        </div>
    )
}

export default Topbar;