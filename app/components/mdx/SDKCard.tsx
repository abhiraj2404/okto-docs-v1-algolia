"use client";

import { Card, Image } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";

interface SDKCardPropTypes {
    icon: ReactNode;
    iconPath: string;
    title: string;
    body: string;
    link: string;
}

export default function SDKCard({ icon, title, body, link }: SDKCardPropTypes) {
    return (
        <Card className="p-3 relative no-underline w-full" style={{
            color: "var(--doc-card-text) !important",
        }} isPressable as={Link} href={link}>
            <div className="absolute bottom-4 right-2">
                <Image src="/images/sdk-arrow-up-right.png" alt="Arrow" width={24} />
            </div>
            <div className="flex items-center gap-8">
                <div className="var(--doc-card-bg) p-1 rounded-xl">
                    {icon}
                </div>
                <div>
                    <span className="text-xl font-semibold">{title}</span>
                    <br />
                    <span className="text-md text-[#707070]">{body}</span>
                </div>
            </div>
        </Card>
    )
}
