import Sidebar from "@/Layouts/Authenticated/Sidebar";
import TopBar from "@/Layouts/Authenticated/TopBar";

export default function Authenticated({children}){ // children parameter is anything dom inside thisa tag when the function is called
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/*START:sidebar*/}
                    <Sidebar/>
                {/*End:sidebar*/}
                {/*Start:content*/}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/*Start:TopBar*/}
                        <TopBar/>
                        {/*End:TopBar*/}
                        <main>{children}</main>
                    </div>
                </div>


                {/*End:Content*/}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">

            </div>
        </>

    )
}
