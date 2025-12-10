import { BecomeClientForm } from "@/components/become-client-form";
import Image from "next/image";

export const metadata = {
    title: "Become a Client - Invenza"
}

export default function BecomeClientPage() {
    return (
        (<div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 bg-foreground md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full">
                        <BecomeClientForm />
                    </div>
                </div>
            </div>
            <div className="bg-background relative hidden lg:flex items-center justify-center">
                <div className="w-[235px] h-[67px] z-50">
                    <Image src='/logo.png' alt="Invenza logo" width={235} height={67} priority />
                </div>
            </div>
        </div>)
    );
}
