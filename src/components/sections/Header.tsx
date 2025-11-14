import { IconBell, IconUserFilled } from "@tabler/icons-react";
import Notifications from "../UI/popups/Notifications";
import { useState } from "react";
import UserOptions from "../UI/popups/UserOptions";

export default function Header() {

    const [notifications, setNotifications] = useState<boolean>(false);
    const [options, setOptions] = useState<boolean>(false);

    const fn = {
        openNoti: () => setNotifications(!notifications),
        openOptions: () => setOptions(!options),
    }

    return (
        <header className="relative flex flex-row justify-between py-3 px-4 bg-gray-400/40 rounded-lg">
            <span></span>
            <nav className="flex items-center flex-row gap-4">
                <button className="bg-white p-1.5 rounded-md" onClick={fn.openNoti}>
                    <IconBell strokeWidth={1.5} />
                </button>
                <button className="bg-white p-1.5 rounded-md" onClick={fn.openOptions}>
                    <IconUserFilled />
                </button>
            </nav>

            {/** popups **/}
            {notifications && <Notifications />}
            {options && <UserOptions />}
        </header>
    );
}