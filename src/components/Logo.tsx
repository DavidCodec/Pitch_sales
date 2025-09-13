'use client'

import Image from 'next/image'

interface LogoProps {
	className?: string
}

export function Logo({ className = '' }: LogoProps) {
	return (
		<div className={`fixed top-4 left-2 z-20 ${className}`}>
			<div className="rounded-lg">
				<Image src="/images.png" alt="Logo" width={80} height={80} className="object-contain" priority />
			</div>
		</div>
	)
}
