import ContentHeader from "./header/ContentHeader";
import LogoHeader from "./header/LogoHeader";
import UserHeader from "./header/UserHeader";


export default function AppHeader() {
    return (
        <div>
            <h1>This is Header...</h1>
            <LogoHeader></LogoHeader>
            <ContentHeader></ContentHeader>
            <UserHeader></UserHeader>
        </div>
    )
} 