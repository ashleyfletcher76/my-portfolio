'use client';

import { useTranslations } from "next-intl";

export function NavLinks({ onItemClick }: { onItemClick?: () => void }) {
	const t = useTranslations("Navigation");
	const item = (href: string, label: string) => (
		<a
			key={href}
			href={href}
			className="px-4 py-3 rounded-lg hover:bg-accent"
			onClick={onItemClick}
		>
			{label}
		</a>
	);

	return (
		<>
			{item('/', t("home"))}
			{item('/about', t("about"))}
			{item('/education', t("education"))}
			{item('/projects', t("projects"))}
			{item('/contact', t("contact"))}
		</>
	);
}
