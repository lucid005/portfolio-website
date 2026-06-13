import Image from "next/image";

export default function TechStack() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/react.svg" width={48} height={48} alt="React" className="w-12 h-12" />
                    <span>React</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/nextjs.svg" width={48} height={48} alt="Next.js" className="w-12 h-12" />
                    <span>Next.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/typescript.svg" width={48} height={48} alt="TypeScript" className="w-12 h-12" />
                    <span>TypeScript</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/tailwindcss.svg" width={48} height={48} alt="Tailwind CSS" className="w-12 h-12" />
                    <span>Tailwind CSS</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/nodejs.svg" width={48} height={48} alt="Node.js" className="w-12 h-12" />
                    <span>Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/graphql.svg" width={48} height={48} alt="GraphQL" className="w-12 h-12" />
                    <span>GraphQL</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/docker.svg" width={48} height={48} alt="Docker" className="w-12 h-12" />
                    <span>Docker</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image src="/icons/aws.svg" width={48} height={48} alt="AWS" className="w-12 h-12" />
                    <span>AWS</span>
                </div>
            </div>
        </div>
    )
}