import { useTranslations } from 'next-intl';

export default function ImprintPage() {
  const t = useTranslations('Footer');
  return (
    <main className="max-w-5xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{t('imprint')}</h1>

      <section className="mt-6">
        <h2 className="text-2xl font-medium">{t('imageCredits')}</h2>
        <p className="text-muted-foreground mt-2 text-lg">{t('attributionStatement')}</p>

        {/* About page */}
        <h3 className="mt-4 text-lg font-medium">{t('aboutStatement')}</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/agriculture-healthy-food_416727255.htm#fromView=search&page=1&position=7&uuid=b91928cb-9bef-4516-9c9c-eff374e6ac09&query=farming"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Agriculture healthy food” — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-vector/male-photographer-with-camera-hand-drawn-sketch-vector_29826213.htm#fromView=search&page=1&position=1&uuid=9624d93c-d244-4d12-9d06-5137243427f9&query=photography"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Male photographer with camera hand drawn sketch vector” — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_40166652.htm#fromView=search&page=1&position=46&uuid=21d01618-dda9-4422-806d-534aa9156cd1&query=computer"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “View messy office workspace with personal computer — Image by Freepik
            </a>
          </li>
        </ul>

        {/* Education page */}
        <h3 className="mt-4 text-lg font-medium">{t('educationStatement')}</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/view-3d-young-school-student_133758593.htm#fromView=search&page=1&position=37&uuid=e3eb80b6-faf3-4a52-8841-756ec01d5f79&query=school+animation"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “3D young school student” — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/portrait-3d-male-doctor_133759332.htm#fromView=search&page=1&position=5&uuid=f24221b7-8265-41bd-b411-9797e1814cff&query=male+studying+animation?log-in=google"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Portait 3D male doctor” — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/digital-art-style-illustration-graphic-designer_204396331.htm#fromView=search&page=1&position=27&uuid=e19bad42-4687-4d83-893d-9a51b0325086&query=software+animation"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Digital art style illustration graphic designer — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/digital-art-style-illustration-graphic-designer_204396237.htm#fromView=search&page=3&position=16&uuid=e19bad42-4687-4d83-893d-9a51b0325086&query=software+animation"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Digital art style illustration graphic designer — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/person-playing-3d-video-games-device_94950229.htm#fromView=search&page=1&position=0&uuid=fc4d7564-6d54-4ede-82d7-e37c0d06a15f&query=programming+animation"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Person playing 3d video games device — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/work-team-digital-art_196611899.htm#fromView=search&page=1&position=2&uuid=3aa180bd-1922-4ccd-8dd7-c55a8f638bd9&query=internship+animation"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Work team digital art — Image by Freepik
            </a>
          </li>
          <li>
            <a
              href="https://www.freepik.com/free-ai-image/cozy-room-with-sunset-student_420643121.htm#fromView=search&page=2&position=12&uuid=6deee2e7-96b0-4dcf-aa42-eca69332d4e3&query=work+from+home+animation"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Cozy room with sunset — Image by Freepik
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

// school --
{
  /* <a href="https://www.freepik.com/free-ai-image/view-3d-young-school-student_133758593.htm#fromView=search&page=1&position=37&uuid=e3eb80b6-faf3-4a52-8841-756ec01d5f79&query=school+animation">Image by freepik</a> */
}

// college --
{
  /* <a href="https://www.freepik.com/free-ai-image/portrait-3d-male-doctor_133759332.htm#fromView=search&page=1&position=5&uuid=f24221b7-8265-41bd-b411-9797e1814cff&query=male+studying+animation?log-in=google">Image by freepik</a> */
}

// psicine --
{
  /* <a href="https://www.freepik.com/free-ai-image/digital-art-style-illustration-graphic-designer_204396331.htm#fromView=search&page=1&position=27&uuid=e19bad42-4687-4d83-893d-9a51b0325086&query=software+animation">Image by freepik</a> */
}

// learning --
{
  /* <a href="https://www.freepik.com/free-ai-image/digital-art-style-illustration-graphic-designer_204396237.htm#fromView=search&page=3&position=16&uuid=e19bad42-4687-4d83-893d-9a51b0325086&query=software+animation">Image by freepik</a> */
}

// 42 --
{
  /* <a href="https://www.freepik.com/free-ai-image/person-playing-3d-video-games-device_94950229.htm#fromView=search&page=1&position=0&uuid=fc4d7564-6d54-4ede-82d7-e37c0d06a15f&query=programming+animation">Image by freepik</a> */
}

// internship --
{
  /* <a href="https://www.freepik.com/free-ai-image/work-team-digital-art_196611899.htm#fromView=search&page=1&position=2&uuid=3aa180bd-1922-4ccd-8dd7-c55a8f638bd9&query=internship+animation">Image by freepik</a> */
}

// workHome --
{
  /* <a href="https://www.freepik.com/free-ai-image/cozy-room-with-sunset-student_420643121.htm#fromView=search&page=2&position=12&uuid=6deee2e7-96b0-4dcf-aa42-eca69332d4e3&query=work+from+home+animation">Image by freepik</a> */
}

// farming --
{
  /* <a href="https://www.freepik.com/free-ai-image/agriculture-healthy-food_416727255.htm#fromView=search&page=1&position=7&uuid=b91928cb-9bef-4516-9c9c-eff374e6ac09&query=farming">Image by freepik</a> */
}

// photography --
{
  /* <a href="https://www.freepik.com/free-vector/male-photographer-with-camera-hand-drawn-sketch-vector_29826213.htm#fromView=search&page=1&position=1&uuid=9624d93c-d244-4d12-9d06-5137243427f9&query=photography">Image by Rochak Shukla on Freepik</a> */
}

// computer
{
  /* <a href="https://www.freepik.com/free-photo/view-messy-office-workspace-with-personal-computer_40166652.htm#fromView=search&page=1&position=46&uuid=21d01618-dda9-4422-806d-534aa9156cd1&query=computer">Image by freepik</a> */
}

// <li>
//   <a
//     href="https://www.freepik.com/free-photo/young-man-writing-notebook-study-session_22892350.htm#fromView=search&page=1&position=0&uuid=0c59779a-aff4-4bfc-bba2-6f997c6f25d8&query=learning"
//     className="underline"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     “Young man writing in notebook” — Image by Freepik
//   </a>
// </li>
