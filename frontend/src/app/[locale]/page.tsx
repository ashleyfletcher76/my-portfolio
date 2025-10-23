import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/routing";

export default async function HomePage() {
    const t = await getTranslations("HomePage");
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1>{t("title")}</h1>
            <Link href='/contact'>{t("contact")}</Link>
        </div>
    )
}
