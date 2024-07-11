import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/app/components/Guest";
import Member from "@/app/components/Member";

const HomePage = async () => {
    const user = await currentUser();
    if (!user) {
        return <Guest />;
    } else {
        return <Member />;
    }
};

export default HomePage;
